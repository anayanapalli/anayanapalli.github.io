---
title: "Programmatic AdTech"
pubDate: 2026-02-13
---

The programmatic advertising ecosystem is opaque even to many longtime engineers working in the space. They work on a tiny subsystem—perhaps a bidding module, a dashboard, or a data enrichment pipeline and never see the full ecosystem. Yet the system they are part of is a well-engineered, high-stakes, high-performance system with stringent requirements.

This post explains how programmatic adtech works from the ground up, covering all the major players/components.

It is a complex ecosystem (kind of like the equity markets) where there are many players operating/providing services that make the magic happen.

After reading this post, you should have a pretty good idea of what exactly happens under the hood when you run programmatic ad campaigns. This post intended to give you a good high-level overview with enough technical details to understand the ecosystem.

So let me first start out by giving a real life scenario to understand what programmatic adtech really does:

Let's say you put your favourite book in your Amazon shopping cart and didn't checkout for some reason; now you switched tabs and are reading a NYT post. Suddenly you see that same book ad pop up on the NYT's ad space. How did that specific ad show up on the website? How did Amazon know you are on NYT? That is the product of programmatic adversiting.

<figure class="text-center">
  <!-- Light mode image -->
  <img
    src="/images/fig-light.svg"
    alt="Bell vs. Power Law Distribution"
    class="rounded-md mx-auto block dark:hidden"
  />
  <!-- Dark mode image -->
<img
    src="/images/fig-dark.svg"
    alt="Bell vs. Power Law Distribution"
    class="rounded-md mx-auto hidden dark:block"
  />
  <figcaption>Flow chart</figcaption>
</figure>
