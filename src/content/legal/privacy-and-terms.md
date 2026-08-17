---
title: "Privacy Policy and Terms of Service"
description: "How the Personal Health Agent course website and optional Google Health authorization service handle information, plus the terms for using them."
lastUpdated: "August 16, 2026"
---

This page applies to the public website and to **BINF 4070 Personal Health Data Lab**, the optional Google Health authorization service offered by **BINF 4070 / COMS 4995 W008, Personal Health Agent**. It is intended to remain applicable across future course offerings.

Using personal health data is optional. Every activity that supports live Google Health data also provides a synthetic-data path. Choosing synthetic data does not affect grades, participation, access to instruction, or course support.

## Privacy Policy

### Scope

The public course website provides course information and links to learning materials. It does not require a course-site account and does not use advertising or course-operated analytics.

Some labs may offer an instructor-managed authorization helper that lets a participating student connect their own Google Account to Google Health and analyze their own Fitbit or other compatible data in a private notebook. [Google Health cannot link a Google Workspace account](https://support.google.com/googlehealth/answer/14237024?hl=en), so the live Fitbit path requires a compatible personal Google Account rather than a Columbia, CUMC, or Barnard Workspace account. The student must use the same personal account for Google Health, the helper, and the notebook's live request.

The helper is separate from the public website. If released, it will accept a Google Account only when the server verifies that the token's exact verified email address is already present in the private course roster. Participating students provide that address through an approved private course process before authorization. The course does not ask students to put the address in a public sheet, repository, notebook, or submission, and never asks for a token or health record with it. Possessing a copy of a notebook or helper URL is not sufficient.

This policy covers the course website, any course authorization helper, and the course's handling of information associated with those services. Google, Google Cloud, Google Colab, GitHub Pages, and other linked services operate under their own privacy policies and terms.

### Information We Handle

#### Public website

GitHub Pages hosts the public website and may process ordinary web-request information under the [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). The course does not sell this information, serve advertising, or use website activity to build advertising profiles.

#### Identity and access-control information

If the live-data service is offered, its authorization helper requests the standard `openid` and `email` permissions only to:

- verify Google's signed identity token for the account used during authorization;
- confirm that its verified email address exactly matches the private course roster; and
- bind a course-scoped helper credential to the person who authorized access.

These identity permissions do not provide access to Gmail, Google Drive, contacts, or other Google Account content.

The helper does not decide eligibility from a visible email-address suffix or a value entered in the browser. It validates the signed ID token on the server, uses Google's stable `sub` claim to identify the authorizing account, and requires an exact verified-email roster match. The private roster is used only to control this optional course feature; it is not a source of health records or credentials.

#### Google Health permissions

For the 2026 offering, a student who chooses the live-data path is asked for these nine read-only Google Health categories:

- activity and fitness;
- health metrics and measurements;
- GPS location recorded during exercise;
- nutrition;
- sleep;
- reproductive health;
- logged symptoms;
- Irregular Rhythm Notifications (IRN); and
- ECG.

The corresponding OAuth scopes are:

```text
https://www.googleapis.com/auth/googlehealth.activity_and_fitness.readonly
https://www.googleapis.com/auth/googlehealth.health_metrics_and_measurements.readonly
https://www.googleapis.com/auth/googlehealth.location.readonly
https://www.googleapis.com/auth/googlehealth.nutrition.readonly
https://www.googleapis.com/auth/googlehealth.sleep.readonly
https://www.googleapis.com/auth/googlehealth.reproductive_health.readonly
https://www.googleapis.com/auth/googlehealth.logged_symptoms.readonly
https://www.googleapis.com/auth/googlehealth.irn.readonly
https://www.googleapis.com/auth/googlehealth.ecg.readonly
```

This is one course-wide authorization for approved live-data activities through the configured end of the 2026 offering, not an authorization limited to Week 1. The Week 1 notebook uses only steps, heart rate, and sleep; later approved activities may use other categories listed above. The helper shows the full category list and exact configured course-end timestamp immediately before consent.

The course does not request write, profile, settings, medical-record, or other unlisted Google Health permissions unless this policy and the authorization disclosure are updated before that access is requested. Google describes its generally available permissions in its [Google Health API scope documentation](https://developers.google.com/health/scopes). The authorization helper uses only scopes that the instructor has reviewed and selected in the target project's Google Auth Platform Data Access screen.

### Optional Google Health Authorization

If the live-data path is offered, authorization works as follows:

1. The student signs in with the Google Account connected to the data they want to analyze.
2. Google displays the requested permissions and asks the student to approve or deny them.
3. The course helper verifies Google's signed identity token, requires an exact verified-email match in the private course roster, and requires the complete reviewed course-wide permission set before issuing a credential.
4. After successful authorization, the helper displays once a Google refresh token associated with that student's authorization and a matching course-scoped helper token.
5. The student stores both values in Colab Secrets. They must not be pasted into notebook cells, outputs, assignment submissions, email, chat, or shared documents.
6. When the notebook needs a short-lived access token, the helper processes the refresh token transiently and returns only the access-token information needed for that session.

Course staff do not receive or review student tokens. The automated helper is designed not to retain refresh tokens, Google Health records, authorization headers, or request bodies after completing the relevant request.

A student may decline authorization, stop using live data, or revoke access at any time and continue with synthetic data without penalty.

### How Information Is Used

Identity, private-roster, and token information is used only to provide and secure the optional course feature described above.

Live Google Health data is retrieved by the student's notebook and remains there unless the student deliberately submits an aggregate that an assignment explicitly permits. Course staff do not ask students to submit refresh tokens, access tokens, raw identifiable health records, or notebook outputs that expose those records.

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
- During authorization, the helper evaluates Google's signed identity and verified-email claims against that roster. It then uses the signed course-scoped credential to enforce the same account and access binding during credential refresh.
- Limited operational metadata, such as request time, endpoint, response status, and technical error information, may be retained temporarily for reliability, security, and abuse investigation under the configured Google Cloud and university retention settings.
- Assignment-permitted aggregates are handled under ordinary course submission and records practices, not as authorization-helper data.

No internet service can eliminate every security risk. Students should protect their Google Account, use Colab Secrets as instructed, and report suspected credential exposure promptly.

### Sharing and Service Providers

The course does not sell Google Health information or disclose it for advertising. The optional service relies on:

- **Google Health API** to supply data the student has authorized;
- **Google Cloud** to host the authorization helper, secrets, private-roster control, and limited operational logs;
- **Google Colab** to run student notebooks and provide Colab Secrets; and
- **GitHub Pages** to host the public course website.

Each provider handles information under its own policies and terms. Limited operational information may be disclosed when necessary to investigate security abuse, comply with applicable law, or follow binding university requirements. The course does not hold student Google Health records or tokens for such disclosure.

### Google Health Limited Use

Use of information received from the Google Health API complies with the [Google Health API Developer and User Data Policy](https://developers.google.com/health/policies/health-api-developer-user-data-policy), including its Limited Use requirements.

This commitment applies to raw Google Health data and to data aggregated, de-identified, anonymized, or derived from it.

### Your Choices: Opt Out, Revoke, and Delete

Students control whether to use the live-data path. To stop using it:

1. Switch the notebook to the synthetic-data path.
2. Delete `GOOGLE_HEALTH_REFRESH_TOKEN` and `GOOGLE_HEALTH_HELPER_TOKEN` from Colab Secrets.
3. Remove the course application from the [connections page for your Google Account](https://myaccount.google.com/connections).
4. Delete notebook copies, exported files, or local outputs that you no longer want to retain.

Removing the Google Account connection prevents future access. It does not automatically delete notebook copies or files the student previously created.

The helper's course-end expiry stops it from issuing new access tokens, but it does not by itself remove the course application from the student's Google Account connections. Students should revoke that connection and delete both Colab Secrets when they finish the course or stop using live data.

To ask about or request deletion of course-held information associated with the helper, including a private-roster entry, contact [xx2489@columbia.edu](mailto:xx2489@columbia.edu). Removing an entry disables that account's helper access; it does not revoke the account's Google authorization or delete notebook files. After identity verification, course staff will remove information the course controls when such information exists, subject to limited retention required for security, university records, or applicable law.

## Terms of Service

By using the public course website, you agree to use it for lawful educational purposes. Use of an optional authorization helper also requires compliance with the account, credential, and acceptable-use requirements below.

If you do not want to use the authorization helper or do not agree to its terms, use the synthetic-data path. The synthetic path remains available without academic penalty.

### Access Eligibility

If released, the helper will grant technical access only when Google's signed identity token contains an exact verified email address on the private course roster. For the Google Health/Fitbit path, that email must belong to a compatible personal Google Account already connected to the student's Google Health data. Google Workspace accounts are not compatible with Google Health, so institutional hosted domains are not used as the course access route.

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

Google Health, Google Accounts, Google Cloud, Google Colab, GitHub Pages, linked repositories, and other linked resources are third-party services. Their availability and operation are governed by their own terms.

The course cannot control changes, outages, account restrictions, API limits, or data availability imposed by those providers. Students must follow the providers' terms when using them.

### Course Materials, Devices, and Submissions

These terms do not replace the syllabus or other course policies. Academic integrity, collaboration, assignment, grading, device checkout and return, acceptable computing use, copyright, and intellectual-property rules continue to apply.

Course materials remain subject to their stated licenses and university policies. Access to this website does not grant permission to redistribute protected course materials, student work, credentials, or personal data.

### Educational and Non-Clinical Use

The website, authorization helper, notebooks, demonstrations, and resulting analyses are educational tools. They are not medical devices and do not provide medical advice, diagnosis, monitoring, or treatment.

Health data may be incomplete, delayed, inaccurate, or interpreted incorrectly. Do not use course outputs to make clinical decisions or replace advice from a qualified healthcare professional.

Do not use the course service for an emergency. Contact local emergency services or an appropriate healthcare professional when urgent help is needed.

### Availability and Changes

The course may change, suspend, or discontinue the website, helper, requested permissions, or lab workflow to address security, provider requirements, instructional needs, or technical limitations.

Material changes to this policy will be posted on this page with a revised **Last updated** date. If a change requires new Google Health permissions or a materially different use of information, students will be informed before being asked to authorize it.

## Contact

Questions, privacy requests, security reports, and suspected credential exposure should be sent to:

**Xuhai "Orson" Xu**  
Department of Biomedical Informatics  
Columbia University Irving Medical Center  
[xx2489@columbia.edu](mailto:xx2489@columbia.edu)
