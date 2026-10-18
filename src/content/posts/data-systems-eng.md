---
title: "Data Systems Engineering"
pubDate: 2026-01-10
---

There was a time when the term "data engineering" described the work fairly well. Operational databases held the data, separate systems handled analytics, and engineers built pipelines to extract, transform, and load data into a destination. If the pipeline ran and the tables populated, the system was usually considered healthy. The architecture was relatively simple, the scope was narrow, and the expectations were limited.

That description no longer fits much of the work.

Modern data engineering involves more than moving data at a larger scale. Engineers must understand how components interact, how data changes as it moves through a system, and whether the results remain correct as the system evolves. A pipeline can run successfully while producing incorrect results. Maintaining a reliable data system requires more than ensuring that individual jobs complete.

## When Pipelines Became Part of a Larger System

Early data pipelines were largely linear. A source fed a warehouse, and the warehouse fed dashboards. Failures were often visible: a failed job left reports without fresh data, while incorrect results might be caught by someone familiar with the underlying information. Quality checks were often informal and specific to individual pipelines.

As organizations accumulated more data, the architecture became harder to reason about. Sources multiplied, including SaaS applications, event streams, logs, IoT devices, and external data providers. Each came with its own schema, format, delivery schedule, and reliability characteristics.

The systems processing that data grew more complex as well. Data lakes appeared alongside warehouses. Columnar formats such as Parquet and ORC became common. Batch processing and streaming operated side by side. Compute separated from storage, while lakehouse architectures sought to combine the advantages of lakes and warehouses. Transformation logic that once lived in isolated scripts became shared code on which multiple teams and applications depended.

Additional components emerged to manage these systems:

- **Metadata stores** track schemas, ownership, freshness, and lineage.
- **Crawlers** discover datasets and infer their structure.
- **Master data management (MDM) systems** reconcile identities and maintain canonical records.
- **Data quality frameworks** check whether data satisfies defined rules and invariants.
- **Observability systems** monitor freshness, volume, distribution changes, and anomalies.
- **Access control and governance systems** determine who can access data and how it may be used.

These components address different problems. Metadata helps engineers understand datasets and their dependencies. MDM systems reconcile representations of the same entity across sources. Quality frameworks check whether data meets defined expectations, while observability systems help detect failures that ordinary job-status checks miss. Governance controls how data can be accessed and used.

The pipeline remains an important part of the architecture, but it is no longer sufficient as the main unit of analysis. Engineers must also understand the components around it and how they behave together.

## Data Platform Engineering and DataOps

As the work expanded, the industry introduced new terms to describe different parts of it.

**Data platform engineering** describes the development of shared ingestion frameworks, transformation layers, metadata services, and orchestration infrastructure. These capabilities support multiple teams and data workloads. The term is useful when discussing the infrastructure that makes data work possible, but it does not fully capture problems involving data semantics, contracts, and correctness.

**DataOps** addresses the practices used to develop and operate data systems. Drawing on DevOps, it emphasizes testing, version control, CI/CD, monitoring, and incident response. These practices help teams detect failures, manage changes, and maintain reliable systems. However, they describe how teams build and operate data systems more than the full scope of the systems themselves.

Both terms describe important parts of modern data engineering. Neither necessarily encompasses the architecture, state, dependencies, and long-term correctness of the complete system.

The distinction is one of emphasis. Data platform engineering focuses on shared infrastructure. DataOps focuses on operational practices. A broader engineering discipline must account for both, along with the behavior of the data and the relationships between system components.

## A City Water System as an Analogy

Early data engineering resembled plumbing. You connected a source to a destination, moved the data, and checked that it arrived. When the system was small, its behavior could often be understood by examining a handful of pipelines.

Modern data engineering is closer to designing and operating a city's water system.

<figure class="text-center">
  <img
    src="/images/7.png"
    alt="An illustrated diagram of a city's water system"
    class="rounded-md mx-auto"
  />
  <figcaption>
    An illustrated diagram of a city's water system
  </figcaption>
</figure>

A city's water supply comes from multiple sources, each with different properties and risks. Water must be treated, tested, stored, and distributed. Sensors monitor quality, pressure, and flow. Operators need to detect problems before they affect consumers. A failure upstream can affect an entire network, even when the pipes and equipment downstream are working as designed.

The same principle applies to data systems. A warehouse, transformation job, or serving layer can function correctly in isolation while the overall system produces stale, inconsistent, or misleading results.

Data moves through lakes, warehouses, streaming platforms, transformation layers, semantic models, and serving systems. Each component has its own responsibilities and assumptions. A change in one component can affect many others.

Metadata helps engineers trace dependencies and understand the structure of the system. MDM systems establish consistent identities for entities represented across different sources. Observability helps detect degradation that ordinary job-status checks miss. Governance controls how shared data can be accessed and used.

Checking each component independently cannot establish that the whole system is reliable. Engineers also need to understand the dependencies between components, the assumptions they make about one another, and what happens when those assumptions no longer hold.

That is a systems engineering problem.

## What Data Systems Engineering Covers

A system consists of interacting components with state, interfaces, constraints, and failure modes. Its behavior depends not only on what each component does, but also on how the components interact over time.

Modern data platforms fit this description. Consider the questions engineers must answer:

- **State and state transitions:** What happens when data is reprocessed, corrected, or delivered late? Do storage layers and downstream consumers converge on the same result?
- **Contracts between producers and consumers:** What does a dataset promise to its users? Which changes can be made without breaking those promises?
- **Schema evolution:** Can a source change its schema without causing failures or silently changing the meaning of downstream data?
- **Dependency analysis:** If a dataset changes, which transformations, reports, applications, and business processes might be affected?
- **Correctness over time:** Does a dataset remain consistent as new records arrive, historical data is corrected, and business rules change?
- **Failure detection:** Can the system detect incorrect or incomplete data even when every scheduled job reports success?

These questions concern more than pipeline implementation. They concern a system whose components may evolve independently but must continue to work together.

This broader view also changes how familiar data engineering practices should be understood.

A data quality check can express an invariant that must hold for a dataset to be considered correct. Metadata can support automated decisions about dependencies, compatibility, and ownership rather than serving only as documentation. An observability alert can trigger investigation or remediation before a downstream consumer encounters a visible failure.

Consider a pipeline that finishes without errors but produces duplicate records. The execution succeeded, yet the resulting dataset may violate an assumption about uniqueness. The same problem can occur when an upstream schema change silently alters the meaning of a metric. Neither issue is necessarily detectable through job-status monitoring alone. Detecting it requires a definition of correct behavior and a way to check whether the system still meets that definition.

This is the difference between verifying that a component executed and verifying that the system produced the intended result.

The terminology can be understood in terms of these different responsibilities:

- **Data engineering** emphasizes building and maintaining data pipelines and transformations.
- **Data platform engineering** emphasizes the shared infrastructure and capabilities that support data workloads.
- **DataOps** emphasizes the practices used to develop, deploy, monitor, and maintain data systems.
- **Data systems engineering** emphasizes the design and operation of the complete system, including its components, contracts, dependencies, and behavior over time.

These activities overlap. Data systems engineering is not intended to replace the other terms or suggest that every data engineer performs all these kinds of work. It provides a broader name for the engineering discipline required when the correctness of individual pipelines is no longer enough.

## The Scope of the Work

Data engineering has changed as organizations have become more dependent on the systems that produce and distribute their data.

Data now supports reporting, operational decisions, automation, and regulatory obligations. Many teams and applications consume it, often far removed from the systems that originally produced it. A change that appears harmless at the source can affect an entire chain of downstream dependencies.

Engineers must therefore consider more than whether a pipeline works under current conditions. They need to understand its assumptions, assess how changes might propagate, and establish ways to detect when the system stops behaving as expected.

Not every data engineering task requires this level of reasoning. A small, isolated pipeline may still be little more than a straightforward data transfer. But as data systems become shared infrastructure, the engineering problem increasingly concerns the behavior of the whole rather than the execution of individual parts.

"Data systems engineering" describes this broader scope. The term emphasizes the design, dependencies, correctness, and ongoing operation of data systems, rather than data movement alone.
