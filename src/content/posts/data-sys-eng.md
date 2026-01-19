---
title: "Data Systems Engineering"
pubDate: 2026-01-10
---

There was a time when the term "data engineering" accurately described the work. Data lived in a handful of operational databases. Analytics lived elsewhere. The engineer’s job was to extract data, apply transformations, and load it into a destination system. If the pipeline ran and tables populated, the system was considered healthy. Systems were simple, the scope was narrow, and expectations were limited.

That world no longer exists.

What we call data engineering today is not an evolution of the same job. It is a different class of engineering altogether. The change is not just about scale or tooling. It is about responsibility, system boundaries, and the long-term guarantees the engineer is expected to provide.

## When Pipelines Stopped Being the Problem

Early data pipelines were linear. A source fed a warehouse. A warehouse fed dashboards. Failure was visible. If a job failed, reports went blank. If data was wrong, someone noticed quickly. Quality was enforced informally and locally.

As organizations matured, data stopped being a reporting artifact and became shared infrastructure. Sources multiplied. SaaS systems, event streams, logs, IoT devices, external data providers. Each source arrived with different schemas, formats, latencies, and reliability guarantees.

At the same time, the internal architecture thickened. Data lakes appeared alongside warehouses. Columnar formats such as Parquet and ORC replaced row-based storage. Streaming systems coexisted with batch. Compute separated from storage. Lakehouses attempted to unify them. Transformation layers became shared assets rather than isolated scripts.

This is also where new system layers emerged:

- **Metadata stores** to track schemas, ownership, freshness, and lineage
- **Crawlers** to discover datasets and infer structure at scale
- **MDM systems** to reconcile identity, enforce golden records, and manage canonical entities
- **Data quality frameworks** to assert invariants rather than validate outputs
- **Observability layers** to monitor freshness, volume, distribution drift, and anomalies
- **Access control and governance systems** to manage who can see and use what

None of these components exist to move data from A to B. They exist to make the system intelligible, trustworthy, and operable over time.

At this point, the pipeline is no longer the unit of work. The system is.

## Why New Names Started Appearing

As the gap between the name and the reality widened, the industry began inventing new labels.

“Data platform engineering” emerged to describe teams building shared ingestion frameworks, transformation layers, metadata services, and orchestration platforms. It correctly identified that the work had become foundational. But the word platform pulls attention toward infrastructure, and tooling, when much of the real complexity lies in semantics, contracts, and correctness.

“DataOps” emerged from operational pain. Silent data failures, schema drift, broken downstream consumers, and loss of trust forced teams to adopt versioning, testing, CI/CD, monitoring, and incident response. Borrowed from DevOps, DataOps captured the need for operational rigor. But it describes how teams work, not what they are fundamentally building.

These terms exist because something real changed. They are partial answers to a deeper identity problem.

A Better Mental Model: City Water Systems
Early data engineering was plumbing. You built pipes. If water flowed from one place to another, the job was done. The system was small, isolated, and easy to reason about.

Modern data engineering is city-scale water systems engineering.

<figure class="text-center">
  <img
    src="/public/images/7.png"
    alt="An illustrated diagram of a city's water system"
    class="rounded-md mx-auto"
  />
  <figcaption>
    An illustrated diagram of a city's water system
  </figcaption>
</figure>

Water now comes from many sources, each with different properties and risks. It must be treated, tested, stored, routed, and continuously monitored. Quality is not assumed. It is measured. Sensors track purity, pressure, and flow. Governance exists because water is a shared public good. A small upstream issue can contaminate the entire city if it goes undetected.

Citizens never see the system. When it works, nothing happens. When it fails, trust collapses.

Modern data systems behave the same way. Data flows through lakes, warehouses, streaming systems, transformation layers, semantic models, and serving layers. Metadata systems act as the system’s nervous system. MDM defines identity and consistency. Observability detects subtle degradation long before dashboards fail. Governance exists because data is now a strategic asset.

This is not plumbing. It is _systems engineering._

## Why “Data Systems Engineering” Is the Right Name

A system is a collection of components with state, interfaces, invariants, and failure modes, operating over time.

Modern data platforms meet this definition _precisely._

Data engineers today reason about:

- State and state transitions across storage layers
- Contracts between producers and consumers
- Schema evolution and backward compatibility
- Impact analysis through lineage graphs
- Correctness over time, not just at rest
- Failure detection in the absence of explicit errors

Data quality checks are not validations. They are assertions about system invariants. Metadata is not documentation. It is executable knowledge. Alerts are not notifications. They are control signals.

Calling this “data engineering” understates the work by focusing on the material rather than the structure. Calling it “platform engineering” overemphasizes infrastructure. Calling it “DataOps” captures discipline but not scope.

“Data systems engineering” names the field accurately.

## A Discipline That Changed Category

Some fields evolve by improving tools. Others evolve by expanding responsibility. Data engineering did the latter.

The modern data stack is no longer an analytics pipeline. It is core organizational infrastructure. It supports decision-making, automation, compliance, and strategy. Trust in data is now a requirement, not a nicety.

The work has already crossed the boundary into systems engineering. The only thing lagging behind is the name.

“Data systems engineering” captures what the field has become, whether the industry is ready to admit it or not.
