---
title: "Modeling the 2009 Influenza A (H1N1) Outbreak at the U.S. Air Force Academy"
description: "Built and compared SIR and SIJR compartmental models against real outbreak data from 1,376 cadets, fitting parameters in Python by minimizing residual sum of squares."
date: 2024-11-15
stack: ["Python", "SciPy", "Compartmental Modeling"]
featured: false
pdfUrl: "/papers/influenza-outbreak-model.pdf"
---

## Overview

In 2009, an H1N1 outbreak swept through 1,376 Basic Cadet Trainees at the U.S. Air Force Academy, producing 167 cases over a 20-day window with a sharp peak on July 6. I built two compartmental models to simulate the outbreak and compared how well each captured what actually happened.

## The models

- **SIR** (Susceptible, Infectious, Removed): the standard three-compartment model.
- **SIJR** (Susceptible, Infectious, Isolated, Removed): a four-compartment extension that accounts for the academy's partial isolation policy, where cadets meeting the case definition were moved to separate dorms but weren't fully isolated from each other.

Parameter ranges for both models (transmission rate, recovery rate, and for SIJR, the isolation-related rates and the leakage parameter δ) were derived from CDC data on influenza's infectious period and from the reported basic reproduction number for influenza. I then fit each model in Python using `scipy.integrate.odeint`, selecting the parameters that minimized residual sum of squares (RSS) against the actual case data.

## Finding

The simpler SIR model fit the observed data better than the more detailed SIJR model (RSS of about 1,529 versus 1,836), despite SIJR being the theoretically more realistic choice given the academy's actual isolation measures. The likely culprit is δ, the SIJR parameter controlling how much isolated individuals still transmit the disease: it isn't well constrained by the available data, since the academy's isolation practices weren't documented precisely enough to estimate it directly. Neither model captures the sharp case spike on July 6, which traces back to a high-contact social event on July 4, a reminder that compartmental models miss discrete behavioral events by design.

This was my first compartmental modeling project, and the approach (build a model, fit it against real data, and interrogate why it does or doesn't match) carried directly into my [senior thesis](/projects/fare-free-transit-thesis/) on fare-free transit ridership.
