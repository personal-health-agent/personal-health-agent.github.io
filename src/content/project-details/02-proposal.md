---
title: "Project proposal — Week 9 (Nov 6)"
order: 2
---

The proposal is where your project stops being an idea. By proposal day your team should know **what** your assistant does and **for whom**, and be actively working out **how**. The milestone is worth 15% of the course grade, split between the presentation and the written proposal.

### Bring something concrete

A slide of bullet points is not enough to present. Every team is expected to show at least one tangible design artifact:

- a rough prototype, however small,
- a hand-drawn interface,
- a system or architecture sketch,
- or another concrete design artifact: a storyboard, an annotated user flow, a wireframe.

The reason is practical: reviewers can only give feedback as specific as what you show them. A team that presents a sketched screen hears "that confidence label will be misread"; a team that presents a concept hears "sounds interesting." You will leave the Week 8 design studio with a storyboard, a core user flow, and a low-fidelity prototype — bring them, updated with everything you have decided since.

Present live questions, not settled answers. The feedback is the point of the session, and it is most useful on the calls you have not yet made.

### The presentation

Each team presents for **5 minutes**, followed by **3 minutes** of structured peer feedback; presentation order is announced in advance. The slide plan from the Week 9 session:

1. Problem statement and target user (1 min)
2. Data sources and access plan (1 min)
3. Technical architecture and interface concept (1.5 min)
4. Evaluation plan and timeline (1 min)

Show your artifact when you reach architecture and interface, and end with the one or two questions you most want feedback on.

Anything interactive goes into the slides as screenshots or a short recording; you will not debug a live demo in a 5-minute slot. During the feedback round, listen and take notes rather than defending — instructors and TAs use the same protocol and hand you written cards.

### The written proposal

The written proposal follows the five-part structure taught in Week 9:

1. **Problem statement.** What problem, and for whom? A user, a pain point, and a consequence — not a technology pitch. "We will build a RAG system" is not a problem statement.
2. **Data plan.** Which sources, how much data, in what format, with what preprocessing and access constraints. Build on data you can already touch (your own Fitbit data, synthetic records, public datasets); treat real-data access as a stretch goal, never a dependency.
3. **Technical approach.** The pipeline mapped layer by layer — ingestion, storage, retrieval and generation, planned agent behavior — with a box-and-arrow architecture sketch labeled with specific technologies ("ChromaDB", not "a vector database"), and the interface concept your team committed to in the studio.
4. **Evaluation plan.** At least one concrete, measurable success criterion in each of three categories: technical, output quality, and user experience.
5. **Timeline, risks, and ethics.** Deliverables mapped to the remaining sessions, your biggest risks with mitigations, and a safety stance: what happens when the system is wrong?

The proposal takes the form of a notebook, with a template provided in the Week 9 lab. The in-class portion is your team's working contract; the comprehensive take-home draft, which folds in the feedback from your presentation, is due the following **Wednesday (Nov 11), 11:59 PM ET**.
