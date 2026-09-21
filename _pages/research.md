---
layout: page
title: research
description: Reinforcement learning, embodied AI, and robotic manipulation
permalink: /research/
nav: true
nav_order: 1
---

<div class="gc-prose gc-reveal">
  <p style="font-size: 1.08rem; line-height: 1.68; max-width: 42rem">
    My research explores how <strong>learning algorithms can enable robots to
    autonomously acquire complex skills in the real world</strong> — reinforcement
    learning systems that are <strong>data-efficient, robust to uncertainty, and
    deployable on physical robots</strong>.
  </p>
  <p style="max-width: 42rem">
    The long-term goal is to build <strong>embodied AI systems that learn
    continuously from interaction</strong>, bridging the gap between machine
    learning theory and real robotic deployment.
  </p>
</div>

<section class="gc-section">

<h2>research areas</h2>

<div class="gc-grid gc-grid--3">
  <div class="gc-card gc-reveal">
    <div class="gc-card__icon"><i class="fa-solid fa-brain" aria-hidden="true"></i></div>
    <h3 class="gc-card__title">Reinforcement Learning</h3>
    <div class="gc-card__body">
      Algorithms that improve sample efficiency and exploration in environments
      with sparse rewards and partial observability.
    </div>
    <div class="gc-tags">
      <span class="gc-tag">offline RL</span>
      <span class="gc-tag">hybrid offline&ndash;online</span>
      <span class="gc-tag">goal-conditioned</span>
      <span class="gc-tag">curriculum</span>
    </div>
  </div>

  <div class="gc-card gc-reveal">
    <div class="gc-card__icon"><i class="fa-solid fa-eye" aria-hidden="true"></i></div>
    <h3 class="gc-card__title">Embodied AI</h3>
    <div class="gc-card__body">
      Learning systems where perception, control, and reasoning are tightly
      integrated for real-world interaction.
    </div>
    <div class="gc-tags">
      <span class="gc-tag">manipulation policies</span>
      <span class="gc-tag">perception-aware control</span>
      <span class="gc-tag">adaptive policies</span>
    </div>
  </div>

  <div class="gc-card gc-reveal">
    <div class="gc-card__icon"><i class="fa-solid fa-robot" aria-hidden="true"></i></div>
    <h3 class="gc-card__title">Robotic Manipulation</h3>
    <div class="gc-card__body">
      Learning-based control policies that transfer from simulation to physical
      robot platforms.
    </div>
    <div class="gc-tags">
      <span class="gc-tag">Flexiv Rizon-4</span>
      <span class="gc-tag">UR10</span>
      <span class="gc-tag">MuJoCo</span>
      <span class="gc-tag">PyBullet</span>
    </div>
  </div>
</div>

</section>

<section class="gc-section">

<h2>representative work</h2>

<div class="gc-grid gc-grid--2">
  <div class="gc-card gc-card--feature gc-reveal">
    <h3 class="gc-card__title">MOORL &mdash; Hybrid Reinforcement Learning</h3>
    <div class="gc-card__body">
      A meta-policy framework that integrates offline datasets with online
      exploration, improving stability and learning efficiency while addressing
      distributional shift in offline data.
    </div>
    <div class="gc-card__meta"><span class="gc-card__venue">TMLR 2025</span></div>
  </div>

  <div class="gc-card gc-card--feature gc-reveal">
    <h3 class="gc-card__title">ReLOAD &mdash; Reward-Free Imitation Learning</h3>
    <div class="gc-card__body">
      Intrinsic reward generation using Random Network Distillation, enabling
      policy learning from unlabeled trajectories without manually designed
      rewards.
    </div>
    <div class="gc-card__meta"><span class="gc-card__venue">TMLR 2025</span></div>
  </div>

  <div class="gc-card gc-card--feature gc-reveal">
    <h3 class="gc-card__title">TEACH &mdash; Curriculum Learning for RL</h3>
    <div class="gc-card__body">
      A teacher&ndash;student framework where temporal variance in value estimates
      drives goal selection, accelerating learning in sparse-reward tasks.
    </div>
    <div class="gc-card__meta"><span class="gc-card__venue">AAMAS 2026 &middot; Oral</span></div>
  </div>

  <div class="gc-card gc-card--feature gc-reveal">
    <h3 class="gc-card__title">Active Perception</h3>
    <div class="gc-card__body">
      An RL system that learns to reposition cameras to maximize visual signal
      quality, improving perception performance under occlusion and noise.
    </div>
    <div class="gc-card__meta"><span class="gc-card__venue">ICASSP 2023</span></div>
  </div>
</div>

<p style="margin-top: 1.25rem">
  <a class="gc-btn gc-btn--primary" href="{{ '/publications/' | relative_url }}">
    <i class="fa-solid fa-book-open" aria-hidden="true"></i>
    All publications
  </a>
</p>

</section>

<section class="gc-section">

<h2>the pipeline</h2>

<div class="row justify-content-sm-center gc-reveal">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pick_and_place.gif" title="RL training in simulation" class="img-fluid rounded z-depth-1" %}
    <p class="gc-mono" style="margin-top: 0.6rem">01 / simulation training</p>
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/vision.png" title="Visual perception pipeline" class="img-fluid rounded z-depth-1" %}
    <p class="gc-mono" style="margin-top: 0.6rem">02 / perception integration</p>
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/real.png" title="Real robot deployment" class="img-fluid rounded z-depth-1" %}
    <p class="gc-mono" style="margin-top: 0.6rem">03 / real-robot deployment</p>
  </div>
</div>

<div class="caption">
  Algorithm design &rarr; simulation training &rarr; perception integration &rarr;
  real-world robotic deployment.
</div>

</section>

<section class="gc-section">

<h2>current direction</h2>

<div class="gc-grid gc-grid--2">
  <div class="gc-card gc-reveal">
    <div class="gc-card__icon"><i class="fa-solid fa-wave-square" aria-hidden="true"></i></div>
    <h3 class="gc-card__title">Test-time adaptation for diffusion policies</h3>
    <div class="gc-card__body">
      Making robotic manipulation policies robust to real-world uncertainty and
      distribution shift, combining generative policy models, reinforcement
      learning, perception-aware control, and sim-to-real transfer.
    </div>
  </div>

  <div class="gc-card gc-reveal">
    <div class="gc-card__icon"><i class="fa-solid fa-compass" aria-hidden="true"></i></div>
    <h3 class="gc-card__title">Research vision</h3>
    <div class="gc-card__body">
      Future autonomous systems must operate in complex physical environments
      with limited supervision. I want learning algorithms that let robots learn
      from small amounts of interaction data, adapt to new environments and
      tasks, integrate perception with control, and stay reliable in the real
      world.
    </div>
  </div>
</div>

</section>
