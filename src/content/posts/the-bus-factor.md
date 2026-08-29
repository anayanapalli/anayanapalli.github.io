---
title: "The Bus Factor"
pubDate: 2026-08-29
---

There are certain engineering concepts that are deceptively simple.

You hear them once, and they sound almost trivial. But the more you think about them, the more you realize that they describe something fundamental about how systems work.

The **bus factor** is one of those concepts.

The basic idea is simple:

> **How many people can be hit by a bus tomorrow and disappear from a team before something important stops working?**

The name is intentionally provocative. If one person is the only person who knows how to deploy a system, what happens if that person suddenly becomes unavailable?

The obvious answer is: deployment stops.

But I think there is a much deeper idea hiding underneath this simple question.

The bus factor is really a way of thinking about **dependency concentration, redundancy, and organizational resilience**.

And once I started looking at teams through that lens, I realized that it connects surprisingly well with many of the principles we already use to design reliable technical systems.

## The team with five engineers that behaves like a team of one

Imagine a team with five engineers.

At first glance, it seems reasonably well staffed. There are five people who can presumably contribute to the system.

Now imagine that only one of them knows how production deployments work.

The deployment process requires:

- knowledge of the deployment pipeline
- access to production
- familiarity with the configuration
- knowledge of the release procedure
- knowledge of how to troubleshoot deployment failures

The other four engineers have never done it.

So although the team has five engineers, when it comes to deployment, the organization effectively has:

**Deployment capability = 1**

The other four people may be excellent engineers. They may know the application inside out. They may be able to build features, write tests, investigate bugs, and design architecture.

But none of that changes the fact that the deployment capability is concentrated in one person.

That person has become a **single point of failure**.

And this is where the bus factor becomes interesting.

The question isn't really:

> "How many engineers are on the team?"

The better question is:

> **"How many independent people can perform each capability that the system needs in order to function?"**

That is a much more useful way to think about team resilience.

## Bus factor is really about capability concentration

I increasingly think that saying "the team has a bus factor of two" is somewhat imprecise.

A team doesn't necessarily have one single bus factor.

Different **capabilities** have different bus factors.

Imagine a team like this:

<figure class="text-center">
  <img
    src="/images/8.png"
    alt="Bus Factor Illustration"
    class="rounded-md mx-auto dark:hidden"
  />

<img
    src="/images/8-d.png"
    alt="Bus Factor Illustration"
    class="rounded-md mx-auto hidden dark:block"
  />

</figure>

Suddenly, the team's resilience becomes much easier to see.

The team may look large and well staffed, but recover capability is still highly concentrated.

This is an important distinction:

> **Headcount is not redundancy. Capability redundancy is redundancy.**

A ten-person team can have less operational resilience than a three-person team if the ten-person team has concentrated its critical knowledge and authority in one or two people.

## The critical path matters more than the average

This is where the idea connects to something I have found increasingly useful in engineering: **systems thinking**.

Suppose a system looks like this:

```text
Build → Test → Deploy → Monitor → Recover
```

Perhaps five engineers can build.

Four can test.

Three can monitor.

But only one can recover the system after a serious production failure.

It doesn't matter that the other capabilities are highly redundant.

The recovery capability is still a critical bottleneck.

The system's resilience is constrained by that weakest critical capability.

This is similar to how we think about bottlenecks in other systems.

A pipeline can have enormous capacity in four stages, but if one stage has very little capacity, that stage constrains the whole system.

Teams behave similarly.

So rather than asking:

> "Does everyone know everything?"

I think a better question is:

> **"Where are the single points of failure along our critical path?"**

That question is much more actionable.

## Not all knowledge is the same

There is another subtlety here.

Sometimes we say that two people "know" something when only one person actually knows how to perform it independently.

Imagine that Engineer A is the deployment expert.

Engineer B has watched A deploy several times.

Engineer B has read the documentation.

Engineer B understands the architecture.

Do we now have a bus factor of two?

Not necessarily.

There is a difference between:

**Knowing about a capability**

and

**being independently capable of executing it.**

That distinction matters.

I think of capability as requiring several things:

```text
Knowledge
   +
Practice
   +
Access
   +
Authority
   =
Operational Capability
```

Someone may understand the deployment process but lack production access.

Someone may have access but never have performed a deployment.

Someone may know how to do it but lack the authority to make the change.

Someone may have done it once but be unable to troubleshoot when something goes wrong.

So the real goal isn't simply to distribute documentation.

The goal is to distribute **operational capability**.

## Documentation is necessary, but documentation alone isn't redundancy

This is one reason I have come to appreciate good engineering processes more.

A runbook is valuable.

A Jira ticket is valuable.

Architecture documentation is valuable.

A deployment checklist is valuable.

But these things are not valuable because they make an organization look organized.

They are valuable because they **externalize knowledge**.

Without documentation, knowledge often lives inside someone's head.

You end up with:

> "Ask John."

That phrase is an organizational smell.

It means the organization has allowed a capability to become attached to an individual.

A more mature organization tries to turn:

> "John knows how to do this."

into:

> "The organization knows how to do this."

That's a profound difference.

The first is a **person-dependent capability**.

The second is an **organizational capability**.

## From tribal knowledge to organizational knowledge

I think there is a natural progression here.

### Level 1: Tribal knowledge

> "Sarah knows how this works."

Nobody else really knows.

Bus factor: **1**

### Level 2: Documentation

> "Sarah wrote down how it works."

Now the knowledge exists outside Sarah's head.

Better, but someone may still be unable to execute the process.

### Level 3: Shadowing

> "John has worked alongside Sarah."

John understands the process.

Better again.

### Level 4: Independent execution

> "John has performed the operation himself."

Now there is real redundancy.

### Level 5: Independent troubleshooting

> "John can perform the operation, handle failures, roll back, and recover."

Now we have meaningful operational redundancy.

The distinction is important.

> **The goal isn't to distribute information. The goal is to distribute capability.**

Documentation is one mechanism for achieving that.

Training is another.

Pairing is another.

Rotation is another.

Automation is another.

## Jira is more than a project-management tool

This is also why I think good work-management practices are more important than they sometimes appear.

A poorly structured team might have a conversation like:

> "We're migrating the servers. John is handling it."

That statement contains almost no organizational memory.

A better system breaks the work into explicit units:

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

Now the work exists outside of John's head.

Someone else can understand what has happened.

Someone else can pick up the next task.

Dependencies become visible.

Missing information becomes visible.

Blocked work becomes visible.

Ownership becomes visible.

This is one of the less obvious purposes of project-management systems.

They aren't merely there to tell management what everyone is doing.

They are a form of **organizational memory**.

## Mature engineering organizations are deliberately boring

There is something interesting about highly mature engineering organizations.

They often seem almost obsessive about process.

They care about:

- code review
- CI/CD
- automated testing
- runbooks
- incident procedures
- documentation
- ownership
- ticketing
- on-call rotations
- postmortems
- deployment procedures
- access controls

From the outside, this can sometimes look bureaucratic.

But there is a deeper reason for it.

These mechanisms gradually remove the organization from dependence on individual memory.

They transform:

**tacit knowledge → explicit knowledge**

**manual procedure → repeatable process**

**individual expertise → team capability**

**heroic intervention → system behavior**

The mature organization is not necessarily the one with the smartest individual engineers.

It is the one where the organization can continue functioning even when those engineers aren't available.

## The paradox of the highly efficient engineer

This becomes particularly interesting when thinking about high performers.

Suppose there is an engineer who is exceptionally good at a particular task.

The natural management response is:

> "Give it to them. They're the fastest."

And locally, that makes perfect sense.

They complete the work faster.

The team gets more throughput.

Everyone is happy.

But something else is happening.

The organization is increasing its dependency on that individual.

Eventually:

```text
Task
  ↓
Expert
  ↓
Everything gets done quickly
```

looks efficient.

But underneath it is:

```text
Task
  ↓
Single point of failure
```

The organization has optimized **local efficiency** at the expense of **systemic resilience**.

This is one of those engineering tradeoffs that isn't immediately visible.

Sometimes the right decision is deliberately to let another engineer perform a task more slowly.

Not because efficiency doesn't matter.

But because you're purchasing redundancy.

You're investing in the future resilience of the system.

## The bus factor and automation

There is another way to increase the bus factor that I think is even more interesting.

You can train more people.

Or you can eliminate the dependency altogether.

Suppose deployment currently requires an engineer to manually perform fifteen steps.

You could train five engineers to perform those fifteen steps.

That increases human redundancy.

But a better long-term solution might be:

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

Now the organization has reduced its dependence on individual human knowledge.

This is an important insight:

> **Automation is not merely a productivity tool. It is also a mechanism for reducing organizational dependency.**

Every time we automate a fragile manual process, we are effectively moving capability from a person's head into the system.

The organization becomes more resilient.

## Think of people like components in a distributed system

This is perhaps the analogy I find most useful.

When designing distributed systems, we worry about:

- single points of failure
- replication
- failover
- redundancy
- observability
- recovery
- graceful degradation

Why shouldn't we apply similar thinking to engineering organizations?

A person can become a single point of failure.

Multiple engineers can provide replication.

Cross-training provides failover.

Documentation provides persistent state.

Automation reduces human dependency.

On-call rotations distribute operational knowledge.

Postmortems improve the system after failure.

Observability tells us where the dependencies are.

The analogy isn't perfect, of course. People aren't servers.

But the underlying principle is remarkably similar:

> **A robust system should not depend critically on a component simply because that component happens to be present.**

## But we don't want everyone to know everything

There is an important qualification.

A high bus factor does not mean everyone needs to know everything.

That would be incredibly inefficient.

Engineers need specialization.

Specialization is valuable.

The goal is not:

> "Everyone should be able to do every job."

The goal is:

> **"Critical capabilities should have enough redundancy to tolerate reasonable failures."**

If a capability is extremely rare and non-critical, perhaps one person knowing it is acceptable.

If a capability is required to keep production running, having only one person who understands it is a serious risk.

So redundancy should be proportional to:

**criticality × probability of failure × cost of recovery**

This turns bus factor from a slogan into an engineering decision.

## The question I would ask every engineering manager

If I were managing a team, one question I would periodically ask is:

> **"If this person were unavailable tomorrow, what would stop working?"**

Not because I expect anyone to disappear.

The hypothetical is useful because it exposes dependencies.

Then I would ask:

> "How long would it take us to recover?"

And then:

> "What exactly would another engineer need to take over?"

And finally:

> "Why isn't that capability already distributed?"

Those questions reveal an enormous amount about the architecture of a team.

You begin to discover that the real bottlenecks aren't always in the code.

Sometimes they are in:

- knowledge
- access
- decision-making
- approvals
- credentials
- domain expertise
- deployment authority
- undocumented procedures

In other words, the organization's architecture starts to become visible.

## The deeper problem is knowledge trapped inside people

This is ultimately what makes the bus factor such a powerful concept for me.

The real organizational smell isn't:

> "Only one person can deploy."

That's merely the symptom.

The deeper problem is:

> **"A critical organizational capability exists primarily inside one person's head."**

Once you see the problem that way, many engineering practices start to make sense.

Documentation takes knowledge out of someone's head.

Training moves capability between people.

Pairing creates redundancy.

Rotation prevents knowledge from becoming permanently concentrated.

Jira creates organizational memory.

Automation moves procedures into systems.

CI/CD makes processes reproducible.

Runbooks make operational knowledge explicit.

Code review distributes understanding.

Incident response creates shared operational experience.

All of these practices are, in one way or another, mechanisms for reducing dependency concentration.

## From heroes to systems

Perhaps the most important lesson is that great engineering organizations don't eliminate experts.

They make sure the organization doesn't **depend** on a single expert.

You still want people who know a system deeply.

You still want specialists.

You still want technical leaders.

You still want people who can solve extraordinarily difficult problems.

But their expertise should gradually become an asset of the organization rather than a private dependency of the organization.

The progression looks something like this:

```text
Individual expertise
        ↓
Shared knowledge
        ↓
Documented processes
        ↓
Distributed capability
        ↓
Automation
        ↓
Organizational resilience
```

That, to me, is the deeper meaning of the bus factor.

It isn't really about buses.

It is about asking a very fundamental engineering question:

> **"What happens when something fails?"**

We ask that question of databases.

We ask it of servers.

We ask it of networks.

We ask it of distributed systems.

We should ask it of teams too.

Because people are part of the system.

And if the disappearance of one person can bring a critical operation to a halt, then the problem isn't necessarily that the person is indispensable.

The problem is that **the system was designed to depend on them.**

Good engineering is ultimately about designing systems that remain useful when individual components fail.

That principle applies just as much to organizations as it does to software.

**The goal isn't to build teams full of indispensable people.**

**The goal is to build teams where no single person has to be indispensable.**
