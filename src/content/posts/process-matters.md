---
title: "Process Matters"
pubDate: 2026-08-08
---

There is a common instinct in some organizations and teams to treat process as unnecessary.

“Don’t create another ticket.”

“Let’s not add bureaucracy.”

“Why do we need another approval?”

“Just talk to the person directly.”

Sometimes that instinct is justified. Bad process absolutely exists. A process that costs more than the risk it mitigates is bureaucracy for its own sake.

But there is another possibility that is often overlooked:

**Process is sometimes institutional memory made operational.**

What looks like bureaucracy can actually be the accumulated wisdom of an organization, encoded into how work gets done.

So the important question is not whether an organization has process.

It is:

**What is the process protecting us from, and is that protection worth the cost?**

## Process Creates Organizational Memory

Consider a team upgrading a critical data platform.

In one organization, the manager simply says:

“We need to upgrade the platform. Can someone take this?”

An engineer investigates the dependencies, talks to the vendor, discovers compatibility issues, figures out how to test the upgrade, and makes several decisions along the way.

But most of that knowledge lives in people’s heads.

There is no clear system of record. No obvious target state. No documented reasoning. Perhaps no clear ownership.

Six months later, someone asks:

“Why are we using this version?”

The answer is:

“Ask Sarah. She knows.”

That is an organization running on memory.

A more mature organization might have tickets for the current state, target version, compatibility analysis and testing. It records the vendor recommendation, documents the decision, assigns ownership and defines what completion means.

The engineers still do the same technical work.

The difference is that the organization has created a **persistent representation of its reasoning**.

The answer six months later is no longer “Ask Sarah.”

It is:

“Here’s what we evaluated, here’s what we learned, and here’s why we chose this.”

That is process doing something valuable.

It is converting **individual knowledge into organizational knowledge**.

## Process Is Not the Opposite of Speed

Process is often criticized for making organizations slower.

Sometimes it does.

But the absence of process creates its own hidden cost.

An engineer investigates a production problem. They spend hours tracing dependencies, testing hypotheses and finding the root cause. They explain their findings in a meeting, and then everyone moves on.

Months later, the same problem appears.

A different engineer starts the investigation from scratch.

The organization saved fifteen minutes by not documenting the first investigation and then spent hours paying for that decision again.

Good process prevents organizations from repeatedly paying for the same thinking.

That is one reason documentation, tickets and decision records matter.

Their value is not that management gets to watch rectangles move across a board.

Their value is that they create a **system of record**.

A good record can answer:

- What problem are we solving?
- Why are we solving it?
- Who owns it?
- What is in scope?
- What decisions have already been made?
- What remains uncertain?
- What does completion mean?

The goal is not to document every conversation.

The goal is to make important knowledge durable.

## Good Process Is a Form of Organizational Learning

A mature organization has encountered production failures, bad deployments, security incidents, vendor problems, misunderstood requirements, unclear ownership, failed migrations and unexpected dependencies.

Over time, it learns.

The strongest organizations don't merely remember those lessons individually. They encode them into their operating system.

A painful deployment becomes a deployment checklist.

A security incident becomes a security control.

A failed migration becomes a rollback requirement.

Repeated ambiguity becomes clearer ownership and decomposition.

A history of poor decisions becomes a decision-making framework.

In that sense, **good process is a compression algorithm for experience**.

The organization doesn't have to rediscover the same lesson every time.

The process carries the memory forward.

## But Process Can Become Bureaucracy

This is not an argument for defending every process.

Bad process is real.

A process becomes counterproductive when nobody understands its purpose, it does not meaningfully reduce risk, multiple layers duplicate the same control, or nobody removes obsolete requirements.

The simplest test is:

**What failure is this process preventing?**

If nobody can answer that question, the process deserves scrutiny.

A five-minute configuration change should not necessarily have the same governance as a production database migration.

A reversible experiment does not need the same approval process as an irreversible architectural decision.

Good organizations therefore don't simply have process.

**They calibrate process to risk.**

The more consequential, irreversible or uncertain a decision is, the more deliberate the process should become.

## Good Managers Reduce Ambiguity

This is also where management becomes important.

A poorly structured initiative arrives at an engineer as:

“Upgrade the platform.”

The engineer is then expected to determine the problem, decompose the work, identify dependencies, make decisions, establish ownership, determine testing requirements and figure out what completion means.

The manager has effectively transferred ambiguity downstream.

A strong manager does something different.

They take a messy problem and turn it into a structure the team can execute.

Not necessarily by dictating the technical solution, but by clarifying:

**Why. What. Who. When. Constraints. Dependencies. Definition of done.**

A manager doesn't eliminate complexity.

They organize complexity so other people can work with it.

## Good Process Protects Engineering Time

There is another misconception worth challenging:

“If an engineer isn't closing a ticket, they aren't being productive.”

Engineering doesn't work that way.

An engineer may spend hours understanding an unfamiliar architecture, tracing a dependency, learning a runtime, investigating why something works, or thinking through a migration.

Those activities may not produce an immediately visible artifact.

But understanding compounds.

If engineers are constantly pushed from ticket to ticket, an organization can get plenty of activity without building much expertise.

Good engineering organizations leave room for people to think because the understanding gained today can make everything that follows faster and better.

## The Real Test

One of the clearest differences between strong and weak organizations is what happens when an experienced person leaves.

In a weak organization:

“Nobody knows how this works anymore.”

In a strong organization:

“We lost an important person, but the system, code, documentation, decisions and processes still contain much of what we need.”

Knowledge can never be completely documented. People still matter enormously.

But good organizations continuously try to move knowledge from:

**person → team → organization.**

That is one of the most important functions of process.

And it has almost nothing to do with organizational age. A five-year-old company can have excellent operational discipline, while a fifty-year-old company can still operate primarily through meetings, spreadsheets and tribal knowledge.

Age provides experience.

**Reflection turns experience into wisdom.**

## Experience Becomes Infrastructure

Ultimately, I think this is the deepest purpose of organizational process.

A good organization doesn't merely accumulate experience.

It **crystallizes experience into mechanisms that help people make better decisions.**

It learns:

“This kind of change is dangerous.”

So it creates a review process.

“People keep forgetting why decisions were made.”

So it records architectural decisions.

“Important operational work disappears into conversations.”

So it creates a system of record.

“A single person knows too much.”

So it creates documentation, pairing and cross-training.

“Large ambiguous initiatives repeatedly go off the rails.”

So it improves decomposition and ownership.

That is what good process looks like.

It is not bureaucracy for bureaucracy's sake.

**It is organizational learning made durable.**

So the mature question isn't:

“Can we get rid of this process?”

Nor is it:

“How can we add more process?”

The better question is:

**What is this process buying us?**

Does it reduce risk?

Does it preserve knowledge?

Does it improve coordination?

Does it prevent rework?

Does it clarify ownership?

Does it make important work visible?

Does it help the organization learn?

And finally:

**Is the value worth the cost?**

If the answer is no, remove it.

If the answer is yes, don't dismiss it merely because it feels bureaucratic.

Because sometimes what looks like bureaucracy is actually the accumulated intelligence of everyone who came before you.

And the hallmark of a well-run organization is not that it has no process.

**It is that its process has a reason to exist.**
