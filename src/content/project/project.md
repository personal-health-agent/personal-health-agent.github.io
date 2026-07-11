---
components:
  - { label: "One wearable, self-report, or behavioral data source" }
  - { label: "A clinical or synthetic clinical record source", optional: true }
  - { label: "One data storage / retrieval component" }
  - { label: "One LLM / RAG / agent component" }
  - { label: "One user-facing interface or interaction flow" }
  - { label: "One safety / privacy / trust consideration" }
  - { label: "One evaluation or testing plan" }
showcase:
  - "A 1-minute lightning pitch"
  - "A poster or visual summary"
  - "A live or recorded demo"
  - "A technical architecture diagram"
  - "A brief evaluation plan (no real study required)"
  - "A safety / privacy statement"
  - "A final technical writeup"
examples:
  - name: "Contextual Medical Scribe"
    blurb: "Reads a patient's wearable data before a clinic visit and drafts a one-page summary with anomalies flagged and links back to the underlying signals."
  - name: "Metabolic Coach"
    blurb: "CGM data plus food-photo logs, answering \"why did my sugar spike after lunch?\" with a clear refusal when the data does not support an answer."
  - name: "Mental Health Companion"
    blurb: "A privacy-first agent that watches passive-sensing signals (sleep, activity, screen time) and offers the right prompt at the right time."
  - name: "Lab Results Translator"
    blurb: "Takes a FHIR Observation bundle and produces a plain-language explanation, refusing to give clinical advice and routing the user to a provider when that is the right call."
---

Each team of 3–4 builds a working Personal Health Assistant. It pulls in data from at least one wearable, self-report, or behavioral source (a synthetic clinical record is optional), stores and retrieves it, reasons over it through an LLM/RAG/agent component, and shows the result through a simple interface a non-technical person could actually use. You will design for safety, privacy, and evaluation as you go, not bolt them on at the end. The term ends with a poster and demo showcase.
