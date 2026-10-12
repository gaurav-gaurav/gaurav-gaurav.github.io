---
layout: page
title: Learned Image Correction for Object Detection
description: An RL agent that repairs a degraded image before a frozen detector sees it
importance: 2
img: /assets/img/vision.png
category: work
---

This project was conducted at **IIT Kanpur, India**, under the **Ministry of
Electronics and Information Technology (MeitY), Government of India**.
The goal was to make learning-based perception hold up under the degraded
imaging conditions robots meet in the field.

Object detectors degrade sharply under noise, blur and low light, and the usual
remedy — denoising or enhancing the image so it looks better to a human — does
not reliably help the detector. The corrections a network needs are not always
the ones a person would choose.

This project takes the detector's own performance as the training signal. A PPO
agent applies a correction to the incoming image, a **frozen YOLOv3** detector
runs on the result, and the detection quality becomes the reward. The policy
therefore optimises directly against downstream detection rather than against a
hand-designed image-quality metric.

## Approach

- **Frozen detector.** YOLOv3 stays fixed, so improvements come from the
  correction policy rather than from fine-tuning the perception network.
- **Reward from detection.** Confidence, IoU and NMS thresholds feed the reward,
  tying the policy to the metric that actually matters.
- **Policy variants.** A convolutional policy, a ResNet-backbone variant, and an
  intrinsic-curiosity variant for sparse-reward regimes.
- **Dataset.** PASCAL VOC, with annotations rescaled to the working resolution.

## Code

Released at
[gaurav-gaurav/RL-for-object-detection](https://github.com/gaurav-gaurav/RL-for-object-detection)
— training and evaluation scripts, policy variants and the annotation tooling.

This is distinct from the
[active-perception work](https://github.com/gaurav-gaurav/ICASSP_RL-2023)
published at ICASSP 2023, which moves the camera to find a better viewpoint
rather than correcting the image it already has.
