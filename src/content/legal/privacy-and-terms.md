---
title: "Privacy Policy and Terms of Service"
description: "How BINF 4070 Personal Health Data Lab and the course website handle information, plus the terms for using them."
lastUpdated: "August 22, 2026"
---

This page applies to the public course website and to **BINF 4070 Personal Health Data Lab**, the course's optional Google Health authorization service. The application's sole purpose is to let eligible students authorize read-only access to a small set of data in their own Google Health accounts, retrieve that data into their own private course notebooks, and learn how personal health data moves through an API. It is not a general-purpose health application, clinical service, or research platform. This policy is intended to remain applicable across future course offerings.

Using personal health data is optional. Every activity that supports live Google Health data also provides a synthetic-data path. Choosing synthetic data does not affect grades, participation, access to instruction, or course support.

## Privacy Policy

### Scope

The public course website provides course information and links to learning materials. It does not require a course-site account and does not use advertising or course-operated analytics.

Some labs may offer a course-managed authorization helper that lets a participating student connect their own Google Account to Google Health and analyze their own Fitbit or other compatible data in a private notebook. [Google Health cannot link a Google Workspace account](https://support.google.com/googlehealth/answer/14237024?hl=en), so the live Fitbit path requires a compatible personal Google Account rather than a Columbia, CUMC, or Barnard Workspace account. The student must use the same personal account for Google Health, the helper, and the notebook's live request.

The helper is separate from the public website. Because Google Workspace accounts are not compatible with Google Health, the released service uses a private roster of compatible personal Google Accounts rather than an institutional-domain rule. Participating students provide that personal account address through an approved private course process before authorization. The course does not ask students to put the address in a public sheet, repository, notebook, or submission, and never asks for a token or health record with it. Possessing a copy of a notebook or helper URL is not sufficient.

This policy covers the course website, any course authorization helper, and the course's handling of information associated with those services. Google, Google Cloud, Google Colab, GitHub Pages, and other linked services operate under their own privacy policies and terms.

### Information We Handle

#### Public website

GitHub Pages hosts the public website and may process ordinary web-request information under the [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). The course does not sell this information, serve advertising, or use website activity to build advertising profiles.

#### Identity and access-control information

If the live-data service is offered, its authorization helper requests the standard `openid` and `email` permissions only to:

- verify Google's signed identity token for the account used during authorization;
- confirm that the verified email address exactly matches the private course roster used for this Google Health flow; and
- bind a course-scoped helper credential to the person who authorized access.

These identity permissions do not provide access to Gmail, Google Drive, contacts, or other Google Account content.

The helper does not decide eligibility from a visible email-address suffix or a value entered in the browser. It validates the signed ID token on the server, uses Google's stable `sub` claim to identify the authorizing account, and requires an exact verified-email roster entry for this Google Health deployment. The access-control configuration contains neither health records nor OAuth credentials.

#### Google Health permissions

A student who chooses the live-data path is asked for read-only access to exactly three Google Health categories:

- **Activity and fitness:** the notebook reads step DataPoints so the student can inspect the API's typed JSON structure and distinguish a returned true zero from a missing observation.
- **Health metrics and measurements:** the notebook reads heart-rate DataPoints so the student can inspect individual samples and missingness for a selected day.
- **Sleep:** the notebook reads sleep-session DataPoints so the student can inspect session intervals, optional summaries, and missingness for a selected day.

The corresponding OAuth scopes are:

```text
https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly
https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly
https://www.googleapis.com/auth/googlehealth.sleep.readonly
```

Google Health exposes these as category-level permissions; it does not provide narrower read-only OAuth scopes limited to steps, heart-rate samples, or sleep-session summaries. **BINF 4070 Personal Health Data Lab** therefore requests the narrowest published read-only scope that covers each implemented feature. Although each grant technically permits read-only API access to its full named category, the current course notebooks call only the step, heart-rate, and sleep data types described above.

The application does **not** currently request or use exercise-location, nutrition, reproductive-health, logged-symptoms, Irregular Rhythm Notifications, or ECG permissions. It also does not request write, profile, settings, medical-record, or other unlisted Google Health permissions. A possible future lesson is not sufficient reason to request a permission now. A new category will be requested only after a student-facing feature that requires it has been implemented, this policy and the immediate pre-consent disclosure have been updated, the Google Cloud configuration and deployed code have been aligned, and the student is asked for fresh affirmative consent. Google describes the available category-level permissions in its [Google Health API scope documentation](https://developers.google.com/health/scopes).

### Optional Google Health Authorization

OAuth is used only for the optional live-data path because Google Health records are private, account-specific data. OAuth lets Google authenticate the student, show the requested permissions, collect the student's decision, and issue a revocable credential limited to those permissions. The student enters their Google password only on Google's page; the course website and helper never receive it.

If the live-data path is offered, authorization works as follows:

1. The student signs in with the Google Account connected to the data they want to analyze.
2. Google displays the requested permissions and asks the student to approve or deny them.
3. The course helper verifies Google's signed identity token, requires an exact verified-email roster entry for this deployment, and accepts any nonempty subset of the three reviewed health scopes. The resulting credential enables only the corresponding live notebook features; synthetic data remains available for every feature.
4. After successful authorization, the helper displays once a Google refresh token associated with that student's authorization and a matching course-scoped helper token.
5. The student stores both values in Colab Secrets. They must not be pasted into notebook cells, outputs, assignment submissions, email, chat, or shared documents.
6. When the notebook needs a short-lived access token, the helper processes the refresh token transiently and returns only the access-token information needed for that session.

Course staff do not receive or review student tokens. The automated helper is designed not to retain refresh tokens, Google Health records, authorization headers, or request bodies after completing the relevant request.

A student may decline authorization, stop using live data, or revoke access at any time and continue with synthetic data without penalty.

### How Information Is Used

Identity, access-control, and token information is used only to provide and secure the optional course feature described above.

Live Google Health data is retrieved and displayed by the student's notebook. The notebook uses step, heart-rate, and sleep records only for the visible instructional features described under **Google Health permissions**. The OAuth helper never retrieves those records or sends them to OpenAI.

OpenAI is the third party used for an optional selected-day summary feature. Google authorization and the OAuth helper send nothing to OpenAI. Only if the student selects the Fitbit data path and explicitly runs the OpenAI summary cell does the learner's notebook send OpenAI the exact displayed selected-day raw steps, heart-rate, and sleep JSON. Raw v4 responses may include precise interval or sample timestamps, DataPoint names, and device or data-source metadata. Google/OAuth credentials are never included. The summary instruction tells the model not to repeat those names, exact timestamps, or metadata; the student reviews the retained summary and removes any echoed detail before submission. The request uses `store=False`, but the notebook calls OpenAI directly from the learner's runtime, outside the OAuth helper; this policy does not represent `store=False` as a zero-retention guarantee. A student may instead select synthetic data and avoid transferring Fitbit data to OpenAI.

The Week 1 submission is the completed notebook only. A student who used live data is instructed to clear the output from every cell that displayed raw live JSON before downloading and submitting the notebook to CourseWorks, while keeping the reviewed summary and written comparison and reflection. The student must first remove any DataPoint name, exact timestamp, or device/data-source detail echoed in that summary. When these instructions are followed, course staff do not intentionally receive raw Google Health records. Output clearing is a student action and is not technically enforced. If Fitbit input was used, the retained AI summary and written comparison/reflection remain derived from Google Health data. Course staff will read those retained materials for grading under the student's explicit pre-consent acknowledgment. Synthetic data is the default and receives equivalent credit for students who do not consent to this staff access. Course staff do not ask students to submit refresh tokens, helper tokens, access tokens, client secrets, account addresses, or another person's health records.

The course website and authorization helper do not use Google Health information or information derived from it for:

- advertising or marketing;
- sale, licensing, or transfer to data brokers;
- credit, insurance, employment, or eligibility decisions;
- human-subjects or medical research;
- medical diagnosis, treatment, or clinical decision-making; or
- development of a regulated medical device.

A future research study involving course participants would require a separate protocol, recruitment process, and consent. Course authorization does not constitute research consent.

### Storage, Security, and Retention

The optional authorization helper is designed to minimize stored information:

- Refresh tokens are processed transiently and are not written to application logs.
- Course-scoped helper tokens are bound to the authorizing Google account, its identity claims, the granted scopes, the matching refresh token, and the configured course end. They are displayed once, stored by the user in Colab Secrets, and cannot be refreshed through the helper after that course-end timestamp.
- Google Health records are not retrieved or stored by the helper.
- Request bodies, authorization headers, authorization codes, tokens, and health records are excluded from course application logging.
- The helper stores a private access roster containing the exact compatible personal Google Account emails of students and pilots approved for the optional live path. It is retained only while needed for the applicable course offering or approved testing.
- During authorization, the helper evaluates Google's signed identity claims against the private roster used for this Google Health deployment. It then uses the signed course-scoped credential to enforce the same account, exact granted-scope subset, and access binding during credential refresh.
- Limited operational metadata, such as request time, endpoint, response status, and technical error information, may be retained temporarily for reliability, security, and abuse investigation under the configured Google Cloud and university retention settings.
- The submitted notebook is handled under ordinary course submission, access, retention, and university-records practices, not as authorization-helper data. It is accessible to the course personnel who ordinarily grade or administer the assignment. Students who used live data are instructed to clear raw-live-JSON outputs first; that instruction is not technically enforced.

The optional OpenAI summary request uses `store=False`. The course website and authorization helper do not store that request or response. OpenAI may process the displayed selected-day raw JSON under the terms and data-handling commitments applicable to the API account used for the course exercise. Students can avoid this processing by selecting synthetic data and not running the Fitbit-based OpenAI request.

No internet service can eliminate every security risk. Students should protect their Google Account, use Colab Secrets as instructed, and report suspected credential exposure promptly.

### Sharing and Service Providers

The course does not sell Google Health information or disclose it for advertising. The optional service relies on:

- **Google Health API** to supply data the student has authorized;
- **Google Cloud** to host the authorization helper, secrets, private-roster control, and limited operational logs;
- **Google Colab** to run student notebooks and provide Colab Secrets;
- **OpenAI API**, only when a student selects Fitbit data and explicitly runs the optional summary cell, to process the displayed selected-day raw steps, heart-rate, and sleep JSON and return that summary; and
- **GitHub Pages** to host the public course website.

Each provider handles information under its own policies and terms. Limited operational information may be disclosed when necessary to investigate security abuse, comply with applicable law, or follow binding university requirements. The helper and course systems do not intentionally collect student Google Health records. Course staff receive and read the retained AI summary and written comparison/reflection for grading; when Fitbit input was used, those materials are derived from Google Health data and are submitted under the student's explicit pre-consent acknowledgment. CourseWorks may nevertheless contain raw live output if a student does not follow the notebook's clearing instruction. The course never requests that tokens be submitted.

### Google Health Limited Use

The use of information received from the Google Health API adheres to the [Google Health API Developer and User Data Policy](https://developers.google.com/health/policies/health-api-developer-user-data-policy), including the Limited Use requirements.

This commitment applies to raw Google Health data and to data aggregated, de-identified, anonymized, or derived from it.

### Your Choices: Opt Out, Revoke, and Delete

Students control whether to use the live-data path. To stop using it:

1. Switch the notebook to the synthetic-data path.
2. Remove the course application from the [connections page for your Google Account](https://myaccount.google.com/connections).
3. Delete `GOOGLE_HEALTH_REFRESH_TOKEN` and `GOOGLE_HEALTH_HELPER_TOKEN` from Colab Secrets.
4. Delete notebook copies, exported files, or local outputs that you no longer want to retain.

Removing the Google Account connection prevents future access. It does not automatically delete notebook copies or files the student previously created.

The helper's course-end expiry stops it from issuing new access tokens, but it does not by itself remove the course application from the student's Google Account connections. Students should revoke that connection and delete both Colab Secrets when they finish the course or stop using live data.

To ask about or request deletion of course-held information, including a private-roster entry or a submitted assignment notebook, contact [xx2489@columbia.edu](mailto:xx2489@columbia.edu). Removing a roster entry disables that account's helper access; it does not revoke the account's Google authorization or delete notebook files. After identity verification, course staff will remove information the course controls when such information exists, subject to retention required for grading, academic records, security, university policy, or applicable law.

## Terms of Service

By using the public course website, you agree to use it for lawful educational purposes. Use of an optional authorization helper also requires compliance with the account, credential, and acceptable-use requirements below.

If you do not want to use the authorization helper or do not agree to its terms, use the synthetic-data path. The synthetic path remains available without academic penalty.

### Access Eligibility

If released for this Google Health/Fitbit path, the helper will grant technical access only when Google's signed identity token proves an exact verified email address on the private course roster. The authorizing account must be a compatible personal Google Account already connected to the student's Google Health data. Google Workspace accounts are not compatible with Google Health, so an institutional hosted-domain match cannot replace adding the personal account's exact address to the private roster.

Technical eligibility is not permission for unrestricted use. Use the helper only while participating in the course, conducting instructor-approved testing, or acting with the instructor's express permission. Do not share the helper URL, notebook code, or setup instructions to facilitate use by people who are not authorized for those purposes.

### Accounts and Credentials

You may authorize only an account and data that you are permitted to use. Do not attempt to access another person's Google Account, health data, course credential, notebook, or device data.

You are responsible for protecting your Google Account, refresh token, course-scoped helper token, Colab Secrets, and any notebook or file containing personal data. Do not share these credentials with classmates, course staff, an AI service, or any other person or service.

If either course credential may have been exposed, first revoke the course app in Google Account connections, then delete both `GOOGLE_HEALTH_REFRESH_TOKEN` and `GOOGLE_HEALTH_HELPER_TOKEN` from Colab Secrets. Reauthorize and store a fresh matching pair; merely overwriting the local Secrets does not invalidate a copied old pair.

### Acceptable Use

Do not use the website or helper to:

- bypass private-roster or other access restrictions;
- test credentials that do not belong to you;
- probe, disrupt, overload, scrape, reverse engineer, or interfere with the service;
- evade Google Health API quotas or course rate limits;
- collect another person's health information;
- use course access for commercial, advertising, surveillance, research, or clinical purposes; or
- violate course, university, Google, Colab, GitHub, device-loan, copyright, intellectual-property, academic-integrity, or computing policies.

Access to the helper may be limited or suspended when reasonably necessary to protect students, credentials, service availability, or provider compliance. A student whose helper access is suspended can continue the instructional activity with synthetic data. Separate academic or university processes may apply to misconduct.

### Third-Party Services

Google Health, Google Accounts, Google Cloud, Google Colab, OpenAI API, GitHub Pages, linked repositories, and other linked resources are third-party services. Their availability and operation are governed by their own terms.

The course cannot control changes, outages, account restrictions, API limits, or data availability imposed by those providers. Students must follow the providers' terms when using them.

### Course Materials, Devices, and Submissions

These terms do not replace the syllabus or other course policies. Academic integrity, collaboration, assignment, grading, device checkout and return, acceptable computing use, copyright, and intellectual-property rules continue to apply.

Course materials remain subject to their stated licenses and university policies. Access to this website does not grant permission to redistribute protected course materials, student work, credentials, or personal data.

### Educational and Non-Clinical Use

The website, authorization helper, notebooks, demonstrations, and resulting analyses are educational tools. They are not medical devices and do not provide medical advice, diagnosis, monitoring, or treatment.

Health data may be incomplete, delayed, inaccurate, or interpreted incorrectly. Do not use course outputs to make clinical decisions or replace advice from a qualified healthcare professional.

Do not use the course service for an emergency. Contact local emergency services or an appropriate healthcare professional when urgent help is needed.

### Availability and Changes

The course may change, suspend, or discontinue the website, helper, or lab workflow to address security, provider requirements, instructional needs, or technical limitations.

Material changes to this policy will be posted on this page with a revised **Last updated** date. The application will not request a new Google Health permission merely for possible future use. If an implemented student-facing feature later requires a new permission or a materially different use of information, the course will first update this policy and the immediate authorization disclosure, align the deployed code with the Google Cloud configuration, and ask affected students for fresh affirmative consent.

## Contact

Questions, privacy requests, security reports, and suspected credential exposure should be sent to:

**Xuhai "Orson" Xu**  
Department of Biomedical Informatics  
Columbia University Irving Medical Center  
[xx2489@columbia.edu](mailto:xx2489@columbia.edu)
