---
layout: post
title: Paper Review - An Investigation on Utilizing Large Language Model for Industrial
date: 2025-02-10
description: Discover how AI and NLP are reshaping CAD systems! From automated design to natural language interfaces, learn about the future of design tools.
tags: review
thumbnail: assets/img/review.jpg
---

Recently, the weather in Suzhou, Taicang, has turned colder. As a result, I’ve been biking to work less often and relying more on public buses for my daily commute.

### Revolutionizing CAD with Natural Language Commands

Imagine designing complex industrial components like gears, shafts, or machinery parts by simply typing instructions in plain natural language like English. This paper explores how **large language models (LLMs) like GPT-4** can automate tedious engineering computations and generate precise 3D CAD models, bridging the gap between human creativity and AI-driven precision.

### Original Paper

Haoxuan Deng, Samir Khan, John Ahmet Erkoyuncu, An Investigation on Utilizing Large Language Model for Industrial Computer-Aided Design Automation, Procedia CIRP, Vol. 128, pp 221-226 (2024), [https://doi.org/10.1016/j.procir.2024.07.049](https://doi.org/10.1016/j.procir.2024.07.049)

All figures and tables in this post are cited from the respective papers.

### **Key Innovations**

1. **From Text to 3D Models**
    - Current generative AI (e.g., text-to-image tools) struggles with industrial CAD due to randomness and lack of control.
    - This research uses **GPT-4** to translate natural language requirements into **parametric calculations** (e.g., gear ratios, dimensions) and **OpenSCAD scripts**, producing editable, production-ready 3D models.
2. **Workflow Automation**
    - **Step 1:** Users input design requirements (e.g., “Design a gear system with a 5:1 ratio”).
    - **Step 2:** GPT-4 computes parameters (module size, teeth count) and generates a structured JSON file.
    - **Step 3:** The model writes code for OpenSCAD, a programmable CAD tool, to render precise 3D geometries.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250210/image.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250210/image1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

3. **Human-AI Collaboration**
    - Engineers review and tweak results at every stage, ensuring alignment with industrial standards.
    - The system supports iterative refinement, reducing errors from AI “hallucinations” while saving time on repetitive tasks.

---

### **Proof of Concept: Gear System Design**

The paper demonstrates the method with a **single-stage reduction gear system**:

- GPT-4 successfully computed parameters (gear module, teeth count, coordinates) from text prompts.
- Generated OpenSCAD scripts and produced accurate 3D models for spur, helical, and herringbone gears (see images in the paper).
- Outputs are fully editable in standard CAD environments, enabling customization without format conversions.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250210/image2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

### Key Contribution

1. **Faster Design Cycles**
    - Automate calculations and model generation, cutting hours of manual work.
2. **Accessible Innovation**
    - Lower the barrier for non-experts to prototype complex designs using natural language.
3. **Scalable Precision**
    - Integrate with existing tools like OpenSCAD or SolidWorks, ensuring compatibility with industrial workflows.

---

### **Future Vision**

The authors outline exciting next steps:

- **Complex Assemblies**: Extend to multi-component systems (bearings, shafts, housings).
- **Multi-Agent Collaboration**: Deploy LLM “agents” to simulate cross-disciplinary teams (e.g., integrating supply chain data).
- **Advanced CAD Techniques**: Support generative design and topology optimization.

---

Imagine a future where anyone can design industrial parts as easily as writing an email. Let’s build the next generation of CAD tools together.

**Ready to revolutionize design?** Stay tuned to my blog, and connect with my X and Linkedin!