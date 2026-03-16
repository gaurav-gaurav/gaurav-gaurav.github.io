---
layout: page
title: research
description: Reinforcement learning, embodied AI, and robotic manipulation
permalink: /research/
nav: true
nav_order: 3
---

<div class="row">
<div class="col-sm-12">

My research explores how **learning algorithms can enable robots to autonomously acquire complex skills in the real world**.  
I focus on reinforcement learning systems that are **data-efficient, robust to uncertainty, and deployable on physical robots**.

The long-term goal is to build **embodied AI systems that can learn continuously from interaction**, bridging the gap between machine learning theory and real robotic deployment.

</div>
</div>

---

## Research Areas

<div class="row">

<div class="col-sm-4">
<h4>Reinforcement Learning</h4>

Designing algorithms that improve **sample efficiency and exploration** in environments with sparse rewards and partial observability.

Key topics:

- Offline RL  
- Hybrid offline–online learning  
- Goal-conditioned RL  
- Curriculum learning

</div>

<div class="col-sm-4">
<h4>Embodied AI</h4>

Developing learning systems where perception, control, and reasoning are tightly integrated for real-world interaction.

Focus areas:

- policy learning for manipulation  
- perception-aware control  
- adaptive policies for dynamic environments

</div>

<div class="col-sm-4">
<h4>Robotic Manipulation</h4>

Building learning-based control policies that transfer from **simulation to physical robot platforms**.

Platforms and simulators include:

- Flexiv Rizon-4  
- UR10  
- MuJoCo  
- PyBullet

</div>

</div>

---

## Representative Research

<div class="row">

<div class="col-sm-6">
<h4>Hybrid Reinforcement Learning</h4>

<strong>MOORL</strong> introduces a meta-policy framework that integrates offline datasets with online exploration.  
The method improves stability and learning efficiency while addressing distributional shift in offline data.
</div>

<div class="col-sm-6">
<h4>Reward-Free Imitation Learning</h4>

<strong>ReLOAD</strong> proposes intrinsic reward generation using Random Network Distillation, enabling policy learning from unlabeled trajectories without manually designed rewards.
</div>

</div>

<div class="row">

<div class="col-sm-6">
<h4>Curriculum Learning for RL</h4>

<strong>TEACH</strong> introduces a teacher–student learning framework where temporal variance in value estimates drives goal selection, accelerating learning in sparse-reward tasks.
</div>

<div class="col-sm-6">
<h4>Active Perception</h4>

An RL-based system that learns to reposition cameras to maximize visual signal quality, improving perception performance under occlusion and noise.
</div>

</div>

---

## Research Pipeline

<div class="row justify-content-center">

<div class="col-sm-10">

{% include figure.liquid path="assets/img/research_pipeline.jpg" title="Research pipeline from algorithm design to robotic deployment" class="img-fluid rounded z-depth-1" %}

</div>

</div>

<div class="caption">
My research spans the full pipeline from algorithm design and simulation experiments to deployment on real robotic platforms.
</div>

---

## Current Research Direction

At **Nanyang Technological University (NTU)** I work on **test-time adaptation for diffusion policy models**, aiming to make robotic manipulation policies more robust to real-world uncertainty and distribution shifts.

This work combines:

- generative policy models  
- reinforcement learning  
- perception-aware control  
- sim-to-real transfer

---

## Research Vision

Future autonomous systems must operate in **complex physical environments with limited supervision**.  
My research aims to develop learning algorithms that enable robots to:

- learn from small amounts of interaction data  
- adapt to new environments and tasks  
- integrate perception and control  
- operate reliably in real-world settings
