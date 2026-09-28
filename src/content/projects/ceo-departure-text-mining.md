---
title: "CEO Departure Narratives: Crisis vs. Normal Period Text Analysis"
description: "Text mining 3,547 CEO departure announcements to test whether corporate narratives shift during the 2008–2009 financial crisis."
date: 2026-01-20
stack: ["R", "Topic Modeling", "BERTopic", "Clustering"]
repoUrl: "https://github.com/jtsalaja/ceo-departure-text-mining"
featured: true
---

## Research question

Do CEO departure narratives fundamentally change during economic crises compared to normal times? I analyzed 3,547 CEO departure announcements from S&P 1500 firms (2003–2014): 544 from the 2008–2009 crisis period, 3,003 from surrounding stable years, using topic modeling, clustering, and keyness analysis in R.

## Methods

- **LDA** for latent topic discovery across all departures (K=6 topics, Gibbs sampling)
- **Keyness analysis** (chi-squared, via `quanteda`) to find vocabulary that statistically distinguishes crisis from normal periods
- **BERTopic** for semantic topic discovery using document embeddings (BAAI/bge-m3 + HDBSCAN)
- **K-Medoids clustering** to test whether vocabulary differences produce genuinely distinct narrative structures
- **Isolation Forest** for anomaly detection on unusual departure narratives

## Findings

Crisis-period disclosures externalized blame to macroeconomic conditions ("recession"), while normal-period disclosures emphasized individual agency ("personal," "elected") to frame exits as internal choices. All 11 BERTopic topics appeared in both periods but with shifted prevalence: crisis-heavy topics centered on external pressure and abrupt leadership transitions. Clustering showed crisis and normal documents largely followed the same underlying templates rather than splitting into separate structures, suggesting crisis shapes vocabulary and emphasis more than it invents new narrative forms.

Read the [full analysis and code on GitHub](https://github.com/jtsalaja/ceo-departure-text-mining).
