---
layout: post
title: What is Friction?
date: 2025-02-20
description: Friction, a force that resists the relative motion of two objects in contact, is a fundamental phenomenon that affects many engineering systems. However, the interaction of friction with materials and motion can sometimes be far from straightforward.
tags: insight
thumbnail: assets/img/insight.jpg
---

riction, a force that resists the relative motion of two objects in contact, is a fundamental phenomenon that affects many engineering systems. However, the interaction of friction with materials and motion can sometimes be far from straightforward. In particular, friction can exhibit nonlinear characteristics, causing unexpected behaviour in precision systems such as machine tools and semiconductor equipment.

## What Is Friction?

Friction is the force that resists the sliding motion of objects in contact. Historically, the theory of friction has evolved through various models. Early theories, like the *asperity model*, explain friction as the result of microscopic surface roughness that leads to mechanical interlocking. Modern research looks deeper, focusing on molecular interactions and the behaviours that emerge under different conditions.

In simple terms, friction arises from the contact between surfaces and is characterized by the coefficient of friction. This coefficient is influenced by factors like surface roughness, material properties, and lubrication. The fascinating aspect of friction is that it’s not always linear, especially under varying conditions like speed, pressure, and temperature.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250220/Schematic-of-a-typical-friction-coefficient-showing-static-and-kinetic-friction.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Schematic of a typical friction behavior: image source   [Andreas A, Journal of Tribology, 2007](http://dx.doi.org/10.1115/1.2768074)

## What Happens When Friction Becomes Nonlinear?

The term "nonlinear friction" refers to friction forces that do not follow a straightforward, predictable relationship with the motion of the objects in contact. For example, in some mechanical systems, the frictional force may increase suddenly when the relative speed changes or when the pressure at the contact point increases.

This nonlinear behaviour is especially important in high-precision systems components like linear guides or bearings, where even minor variations in friction can cause significant deviations in the system's performance. The friction may behave like a spring (or a nonlinear spring), where it resists movement, but the resistance doesn’t follow a simple linear law.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250220/F3.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Nonlinear Spring behavior, image source: [Yasunori S, Tribology in Materials and Manufacturing - Wear, Friction and Lubrication](https://www.intechopen.com/chapters/73645)

## Why Does Friction Act Like a Spring?

Due to the way surfaces interact at a microscopic level, friction can behave like a spring under certain conditions. When two surfaces slide against each other, they often experience microscopic adhesive forces that can suddenly “snap” as they overcome surface asperities. This can create a kind of "spring-like" effect in the frictional resistance.

This spring-like effect is most noticeable when there is a significant variation in velocity or pressure, and it can be particularly troubling in systems that require precise control. The nonlinear nature of this friction means that standard models, which assume linear resistance, can fail to predict system behaviour accurately.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250220/Typical-wear-modes-of-surface-asperities-under-low-angle-collision-Wear-mode-of-ductile.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Mechanisms of adhesion, elastic/plastic deformation and wear, image source: [Andrey V. Dimaki, et. al., Scientific Reports](https://www.nature.com/articles/s41598-020-57429-5)

## Practical Examples in Precision Systems

In precision engineering, components such as linear guides and bearings often experience nonlinear friction. As these components move at varying speeds or under fluctuating loads, the friction they generate can change unexpectedly. For example, at low speeds, the friction might behave almost like a spring, offering smooth resistance. However, at higher speeds, it may become more irregular, leading to sudden jumps in resistance.

This nonlinearity is problematic for systems requiring high precision, such as robotic arms, CNC machines, or other motion control systems. Small variations in friction can lead to inaccuracies in positioning and even cause oscillations, which can degrade the entire system's performance.

## Nonlinear Friction's Impact on Control Systems

The unpredictable nature of nonlinear friction can introduce major challenges for control systems. For example, in robotics or high-precision manufacturing, controlling motion with high accuracy requires precise knowledge of all forces acting on the system – including friction. When friction behaves unpredictably, it makes it difficult to predict how the system will respond to control inputs, leading to overshooting, oscillations, or even instability.

Engineers/researchers often use friction compensation techniques to mitigate these issues. These methods involve creating mathematical models to predict the friction force based on factors like velocity, pressure, and temperature and then adjusting the control inputs to counteract the friction’s impact.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250220/images_tcsme-2023-0168_f14.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Error in motion trajectory in CNC machine due to nonlinear friction, image source: [Yuheng Zhu et.al., Transaction of the Canadian Society for Mechanical Engineering](https://doi.org/10.1139/tcsme-2023-0168)

## How to Control Nonlinear Friction?

Despite its complexity, researchers have been working on ways to model and control nonlinear friction. Some advanced control systems use real-time data to estimate the frictional forces and adjust accordingly. Machine learning is also being explored as a way to predict friction behaviour more accurately, especially in systems with many variabilities.

For example, friction compensation control methods can significantly improve system performance by continuously adjusting the motor inputs to counteract friction’s effect. Machine learning algorithms can also be used to train models that predict friction behaviour based on data collected during operation.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/20250220/1-s2.0-S0019057821000227-gr13.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Nolinear Friction compensation with estimator (Mathmatical model of friction), image source: [Mohammad J F., et. al., ISA Transactions](https://doi.org/10.1016/j.isatra.2021.01.020)

## Conclusion: Making the Most of Nonlinear Friction

By understanding and leveraging friction's nonlinear nature, engineers can improve the precision and performance of systems that rely on smooth, controlled motion. When carefully managed, nonlinear friction can be used as an advantage—much like a spring. It can provide predictable resistance that enhances system stability and accuracy.

As the field of friction modelling continues to evolve, there are increasing opportunities to refine these techniques and apply them to a wide range of applications, from manufacturing and robotics to consumer electronics. The key is to recognize that friction is not just a resistance force; it can be harnessed and controlled to achieve better performance and reliability in complex systems.