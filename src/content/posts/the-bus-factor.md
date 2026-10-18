---
title: "The Bus Factor"
pubDate: 2026-08-29
---

The bus factor describes how much a team depends on individual people to keep its systems running. It asks a simple question: how many people could become unavailable before something important stops working?

The name is deliberately provocative. If one person is the only person who knows how to deploy a system, what happens if that person suddenly becomes unavailable?

Deployment stops.

The problem is not necessarily that the person has unique expertise. It is that the organization has no reliable way to perform a critical operation without them.

I find the bus factor useful because it connects several engineering concerns that are often treated separately: dependency concentration, redundancy, documentation, automation, and organizational resilience. They are all related to the same question: what happens when the person who normally performs a critical task cannot do it?

## A team of five with one deployment engineer

Imagine a team with five engineers. On paper, it seems reasonably well staffed. There are five people who can contribute to the system.

Now suppose only one of them knows how production deployments work.

Deploying the application requires knowledge of the pipeline, access to production, familiarity with the configuration, an understanding of the release procedure, and the ability to troubleshoot failures. The other four engineers have never performed a deployment themselves.

Those engineers may know the application inside out. They may build features, write tests, investigate bugs, and design architecture. But none of that means they can deploy the application.

For this particular capability, the team has an effective redundancy of one.

The distinction matters because headcount tells us little about whether a team can continue operating when someone becomes unavailable.

A more useful question is:

> How many people can independently perform each operation the system needs to function?

This shifts the focus from the number of people on a team to the capabilities they can actually provide.

## Bus factor varies by capability

I think saying that a team has a bus factor of two can be misleading. A team does not necessarily have one bus factor that adequately describes all its operational risks.

Different capabilities have different levels of redundancy.

<figure class="text-center">
  <img
    src="/images/8.png"
    alt="Bus Factor Illustration #1"
    class="rounded-md mx-auto dark:hidden"
  />
  <img
    src="/images/8-d.png"
    alt="Bus Factor Illustration #1"
    class="rounded-md mx-auto hidden dark:block"
  />
</figure>

The illustration shows why headcount alone is a poor measure of resilience. A team can have several engineers while still depending on one person for a critical operation.

A ten-person team may be less resilient than a three-person team if the larger team has concentrated its critical knowledge and authority in one or two people.

**Headcount is not redundancy. The ability to perform a task independently is.**

This also means that a team can be well staffed for everyday development but poorly equipped to handle a production incident. Its overall resilience depends partly on how well it distributes the capabilities required at critical points.

## The weakest point on the critical path

Consider another team:

<figure class="text-center">
  <img
    src="/images/9.png"
    alt="Bus Factor Illustration #2"
    class="rounded-md mx-auto dark:hidden"
  />
  <img
    src="/images/9-d.png"
    alt="Bus Factor Illustration #2"
    class="rounded-md mx-auto hidden dark:block"
  />
</figure>

Perhaps five engineers can build the application, four can test it, and three can monitor it. But only one knows how to recover the system after a serious production failure.

The team has redundancy in several areas, yet recovery remains dependent on one person.

This resembles a bottleneck in a technical system. A pipeline might have ample capacity at most stages, but a single constrained stage can limit the throughput of the entire pipeline. Similarly, a team may have enough people to perform most of its work but still be unable to recover from a failure without a particular engineer.

The relevant question is not whether everyone knows everything. It is where a lack of redundancy can prevent the team from continuing to operate.

That gives engineering managers a more practical question to ask:

> Where are the single points of failure along our critical path?

The answer may have little to do with the number of engineers or their general technical ability. It may instead depend on who can restore a service, approve a change, access a production environment, or make a decision during an incident.

## Knowing how something works is not the same as being able to do it

Suppose Engineer A is the deployment expert. Engineer B has watched A deploy several times, read the documentation, and learned how the deployment pipeline works.

Does the team now have two people who can deploy independently?

Not necessarily.

There is a difference between understanding a process and being able to execute it without assistance.

I think of operational capability as depending on four things:

> Knowledge + Practice + Access + Authority = Operational Capability

Someone may understand the deployment procedure but lack production access. Another person may have access but never have performed a deployment. Someone else may know the procedure and have the necessary access but lack the authority to make the change.

Even when all these conditions are met, experience matters. An engineer who has successfully deployed an application once may still be unable to diagnose a failure or recover from a bad release.

This is why distributing documentation is not enough. The objective is to distribute the ability to perform and recover from critical operations.

## Documentation and organizational memory

A runbook is valuable. So are architecture documents, deployment checklists, and well-maintained tickets.

Their value lies partly in their ability to preserve knowledge outside an individual's memory.

Without these records, a team can become dependent on informal arrangements:

> Ask John.

That instruction may work for a while. But it also reveals a dependency. If John is unavailable, the team may not know what to do, where to find the necessary information, or how to proceed safely.

Documentation helps turn individual knowledge into something the organization can retain and reuse. It does not automatically make another engineer capable of performing the task, but it gives that engineer a place to start.

The distinction is between a capability that depends on a particular person and one that the organization can reproduce without them.

The second requires more than written instructions. It requires people who understand the instructions, have the necessary access, and can carry out the work.

## From tribal knowledge to independent execution

Consider how a team might develop redundancy for a production operation.

**Level 1: Tribal knowledge**

> Sarah knows how this works.

The knowledge resides primarily with Sarah. If she becomes unavailable, the team may be unable to perform the operation.

**Level 2: Documentation**

> Sarah has written down how it works.

The instructions now exist outside Sarah's head. Another engineer can consult them, but may not yet be able to use them successfully.

**Level 3: Shadowing**

> John has worked alongside Sarah.

John has seen the process in practice and understands more of its details. He may still need Sarah's help to perform it.

**Level 4: Independent execution**

> John has performed the operation himself.

The team now has another person who can carry out the task without relying on Sarah.

**Level 5: Independent troubleshooting**

> John can perform the operation, diagnose failures, roll back changes, and recover the system.

The team has meaningful operational redundancy, including some ability to handle situations that fall outside the normal procedure.

These levels are not a universal maturity model, and every operation does not need to progress through them in exactly this order. They illustrate the difference between making information available and developing another person who can use it effectively.

Documentation is one mechanism for distributing capability. Training, pairing, rotation, and automation are others.

## Jira as organizational memory

Work-management practices also affect how dependent a team is on individual memory.

Consider a team migrating servers. Someone says:

> We're migrating the servers. John is handling it.

The statement identifies an owner, but it tells the rest of the team very little. They may not know what has been completed, what remains, which dependencies have been resolved, or what needs to happen next.

A more useful representation breaks the migration into explicit tasks:

```text
Server Migration
├── Inventory servers
├── Identify dependencies
├── Obtain credentials
├── Validate configuration
├── Migrate server A
├── Migrate server B
├── Run validation
├── Cut over production
└── Monitor after cutover
```

The work is now represented in a form that other people can inspect and continue.

They can see which tasks are complete, which are blocked, what information is missing, and who is responsible for the next step. If John becomes unavailable, another engineer has a better chance of understanding the state of the migration and taking over.

This is one of the useful functions of tools such as Jira. They do not merely track progress for management. When used well, they preserve enough context for work to continue across changes in ownership.

Of course, breaking work into tickets does not guarantee that someone else can perform it. A ticket may describe a task without explaining how to execute it. Credentials, technical decisions, and operational knowledge may still reside with one person.

Work-management systems are most useful when they make the state of the work visible and connect it to the information needed to continue.

## Engineering processes and dependency reduction

Many established engineering practices help reduce dependence on individual memory and judgment.

Code review gives other engineers exposure to changes they did not write. CI/CD makes build, test, and deployment procedures repeatable. Runbooks record operational instructions. On-call rotations expose more engineers to production behavior. Postmortems preserve what the team learned from incidents.

Access controls and ownership rules also matter. A procedure may be documented and understood by several people, yet remain dependent on one person if only that person has the authority or credentials to execute it.

These practices address different parts of the same problem. Some preserve information. Others develop experience, distribute authority, or make a process reproducible.

They do not eliminate the need for expertise. They make it less likely that the absence of one expert will prevent the organization from functioning.

## The cost of relying on the fastest engineer

Consider an engineer who is exceptionally good at a particular task. They know the system well and can complete the work much faster than anyone else.

The obvious response is to give the task to them. They finish sooner, and the team gets more work done.

Repeatedly making that decision can create a dependency, however. Other engineers get fewer opportunities to learn the task, while the expert becomes increasingly central to its execution.

The arrangement may look like this:

```text
Task
  ↓
Expert
  ↓
Fast completion
```

But if the task cannot be completed without that expert, the same arrangement also creates a single point of failure.

The team has optimized for local efficiency at the expense of resilience.

This does not mean that the fastest engineer should stop doing difficult work or that every task should be distributed regardless of cost. Some work genuinely benefits from specialization, and the cost of training another person may not always be justified.

The tradeoff becomes important when a task is both critical and heavily dependent on one individual.

In that case, it may be worth letting another engineer perform the task more slowly while they learn it. The immediate cost is reduced throughput. The benefit is that the team gains another person who can eventually perform the work independently.

Whether that investment makes sense depends on the importance of the capability and the consequences of losing access to the expert.

## Automation as another form of redundancy

Training more people is one way to reduce dependency on an individual. Another is to remove the need for that person to perform the task manually.

Suppose a deployment requires an engineer to carry out fifteen steps. The team could train five engineers to perform those steps. That would increase human redundancy.

Alternatively, it could automate much of the process:

```text
Code
  ↓
CI
  ↓
Automated Tests
  ↓
Automated Deployment
  ↓
Verification
  ↓
Monitoring
```

The automated workflow reduces the number of steps that require individual knowledge and intervention. Engineers still need to understand the system, maintain the pipeline, investigate failures, and decide when a deployment is safe. Automation does not eliminate those responsibilities.

It does, however, make routine execution less dependent on who happens to be available.

This is one reason automation should be considered a reliability investment as well as a productivity improvement. A well-designed automated process can reduce variation between operators, make procedures reproducible, and allow more people to carry out routine operations safely.

There is an important qualification: automation can itself become a source of dependency. If only one engineer understands the deployment pipeline, can change its configuration, or knows how to recover it when it fails, the organization has moved the dependency rather than eliminated it.

The goal is to make the process reproducible and maintainable, not simply to replace manual steps with code that only one person understands.

## Applying distributed-systems thinking to teams

The analogy between engineering teams and distributed systems is useful because both have to deal with failures, dependencies, and recovery.

In a distributed system, we consider whether a component can fail without bringing down the whole service. We use replication, failover, monitoring, and recovery procedures to reduce the consequences of individual failures.

Similar ideas apply to teams.

Multiple engineers who can independently perform an operation provide a form of redundancy. Cross-training allows work to continue when the usual operator is unavailable. Documentation preserves information between people. Automation reduces the need for manual intervention. On-call rotations distribute operational experience, while postmortems help the team improve after failures.

The analogy has limits. People are not interchangeable components. They have different levels of expertise, learn at different rates, and exercise judgment in ways that cannot always be captured by a procedure.

Still, the underlying concern is similar: a system should not fail simply because one component is unavailable when the failure could reasonably have been anticipated and mitigated.

For a team, that means understanding which dependencies are acceptable and which create an unacceptable risk to its ability to operate.

## How much redundancy is enough?

A high bus factor does not mean everyone should know everything. That would be expensive, and in many cases there would be little benefit.

Specialization is useful. Some capabilities require deep expertise, and not every task is important enough to justify training several people to perform it.

The question is how much redundancy a particular capability needs.

If a rarely used capability has little effect on the team's ability to deliver or operate its systems, having one specialist may be acceptable. If a capability is required to restore production, a single point of failure may be a serious operational risk.

The decision depends on several factors:

- **Criticality:** How much damage would the absence of this capability cause?
- **Likelihood of unavailability:** How likely is it that the person or people responsible will be unavailable when needed?
- **Recovery cost:** How long would it take to restore the capability, and what would that delay cost?

These factors help determine whether the team needs another trained engineer, better documentation, automation, a change in access controls, or some combination of measures.

The appropriate level of redundancy will vary. A team does not need to eliminate every individual dependency. It needs to identify the dependencies that could prevent it from meeting its responsibilities and decide which ones are worth addressing.

## Questions for engineering managers

If I were managing an engineering team, I would periodically ask:

> If this person were unavailable tomorrow, what would stop working?

The hypothetical is useful because it directs attention to the dependencies that routine operations can conceal.

I would then ask how long it would take the team to recover, what another engineer would need to take over, and whether the cost of distributing that capability justified the investment.

The answers may reveal that the problem is not simply a lack of documentation or training. The team might be missing production access, relying on an approval that only one person can provide, or depending on an undocumented decision made months earlier.

These are organizational dependencies, but they have direct operational consequences. A team can have well-written code, comprehensive tests, and good documentation while still being unable to act because the necessary authority or access is concentrated in one person.

Looking at the bus factor in terms of specific capabilities helps make these dependencies visible and gives the team a concrete way to address them.

## Building capability beyond individual expertise

The bus factor is useful because it directs attention to where critical knowledge and operational ability reside.

Documentation preserves knowledge. Training and pairing help other engineers acquire it. Rotation gives them opportunities to use it. Work-management systems preserve the state of ongoing work. Code review spreads understanding of the codebase. Automation makes routine procedures reproducible.

None of these practices is sufficient on its own. Documentation without practice may leave an engineer unable to execute a procedure. Training without the necessary access or authority may not help during an incident. Automation without shared ownership may create a new dependency on the person who maintains it.

Their value depends on whether they allow the organization to continue performing critical work when an individual is unavailable.

This does not make experts less valuable. Teams need specialists, technical leaders, and engineers who understand difficult systems in depth. The aim is to ensure that their expertise strengthens the organization rather than becoming a dependency that only they can satisfy.

When a critical operation depends on one person, the first question should not be how to make that person permanently available. It should be whether the operation can be redesigned so that the team can perform it without them.

That is the same question we ask when designing reliable software: what happens when something fails, and can the system recover?

People are part of the system too.
