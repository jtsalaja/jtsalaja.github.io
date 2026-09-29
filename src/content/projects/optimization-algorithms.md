---
title: "Classical Methods in Optimization: An Exploration"
description: "Implemented six classical optimization algorithms in Python and stress-tested them on 2D landscapes with saddle points and multiple minima to see where each one breaks."
date: 2026-09-28
stack: ["Python", "NumPy", "SciPy", "Optimization"]
repoUrl: "https://github.com/jtsalaja/evol-comp"
featured: false
---

## Overview

For DCS340 (Evolutionary Computing), I implemented six classical optimization algorithms in Python and compared how they behave across 1D and 2D test functions.

## Methods

- **Guess and check**, **gradient descent**, **bisection**, and **Newton's method** in 1D.
- **Nelder-Mead**, **gradient descent**, and **Newton's method** in 2D.

## Findings

On a well-behaved bowl-shaped function, all three 2D methods converge to the same minimum regardless of starting point. The differences only show up on harder surfaces: Newton's method converges straight to a saddle point since it just solves for zero gradient, with no way to tell a saddle from a minimum; Himmelblau's function (four separate global minima) shows gradient descent and Nelder-Mead each converging to whichever minimum is closest to their starting point.

What this made clear is that there's no single "best" optimizer: each one trades off how much information it needs (function values vs. gradient vs. curvature) against how fast it converges and how well it handles complicated functions like saddles and multiple minima.

Read the [full analysis and code on GitHub](https://github.com/jtsalaja/evol-comp).
