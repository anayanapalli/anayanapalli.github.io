---
title: "Process Matters"
pubDate: 2026-08-08
---

There is a common instinct in many organizations to treat process as unnecessary.

"Don't create another ticket."

"Let's not add bureaucracy."

"Why do we need another approval?"

"Just talk to the person directly."

"Why document this? Everyone already knows."

Sometimes that instinct is justified. Bad process absolutely exists. A process that costs more than the risk it mitigates is bureaucracy for its own sake.

But there is another possibility that is often overlooked:

**Process is sometimes institutional memory made operational.**

What looks like bureaucracy from the outside can actually be the accumulated wisdom of an organization encoded into how work gets done.

The important question is therefore not whether an organization has process.

The question is:

> **What is the process protecting us from, and is the value of that protection greater than the cost of following it?**

That distinction became much clearer to me after working across different kinds of engineering environments.

---

## A Simple Example

Imagine a team is responsible for upgrading a critical data platform.

In one organization, the manager says:

> "We need to upgrade the platform. Can someone take this?"

An engineer receives a large task, starts investigating, figures out what the dependencies are, talks to the vendor, discovers compatibility issues, determines what needs to be republished, figures out how to test it, and eventually discovers that another engineer has already spent two weeks preparing the environment against a different version.

None of this was necessarily malicious.

Everyone is working.

Everyone is busy.

People are having meetings.

But the work is largely living in people's heads.

There is no clear system of record.

There is no agreed target state.

There is no obvious decomposition of the work.

There may not even be a clear record of why a particular technical decision was made.

So when someone asks:

> "Why are we doing it this way?"

the answer is often:

> "I think that's what we discussed."

Or:

> "Ask Sarah. She knows."

That is an organization running on memory.

Now consider another organization facing the same problem.

The initiative is decomposed into several pieces.

There is a ticket for establishing the current state.

There is a ticket for determining the target version.

There is a compatibility investigation.

There is a record of the vendor's recommendation.

There is a decision about which version will become the team's standard.

There is an owner for each piece.

There are acceptance criteria.

There is a record of what has already been tested.

There is a deployment plan and a rollback strategy.

The engineers still do the same technical work.

But the organization has created something enormously valuable:

**a persistent representation of its reasoning.**

Six months later, someone new joins the team and asks why the organization uses a particular version.

The answer isn't:

> "Ask Sarah."

The answer is:

> "Here's the decision. Here's what we evaluated. Here's what the vendor recommended. Here's why we selected this version."

That is process doing something valuable.

It is converting **individual knowledge into organizational knowledge**.

---

## Process Is Not the Opposite of Speed

One of the strangest misconceptions about process is that process necessarily makes organizations slower.

Sometimes it does.

But the absence of process also creates enormous amounts of hidden work.

You don't see the bill immediately.

Instead, the organization accumulates what might be called **organizational entropy**.

### Team A

Someone asks an engineer to investigate a problem.

The engineer investigates.

They discover something.

They explain it in a meeting.

Someone else remembers part of the conversation.

A few months later, the problem happens again.

A different engineer investigates it from scratch.

The original engineer has to explain the history again.

The team spends another four hours rediscovering the same information.

The organization saved fifteen minutes by not documenting the first investigation.

It then spent several hours paying for that decision repeatedly.

### Team B

The engineer records the investigation, the conclusion, and the relevant evidence.

Three months later, the problem happens again.

The next engineer reads the previous investigation and starts from there.

The organization spent fifteen minutes documenting the first problem.

It saved hours later.

This is one of the hidden functions of process:

> **Good process prevents the organization from repeatedly paying for the same thinking.**

---

## The Cost of Not Having Process

The absence of process often feels efficient because the costs are distributed and delayed.

You don't see the bill immediately.

Instead, the organization accumulates **organizational entropy**.

Work becomes increasingly dependent on:

- memory
- individual relationships
- undocumented decisions
- tribal knowledge
- informal conversations
- spreadsheets
- private messages
- whoever happens to be available

Eventually someone asks:

> "What exactly are we doing?"

And nobody has a clear, complete answer.

This is especially dangerous in operational teams.

A software development team at least leaves behind code, commits, pull requests and deployments.

A support-heavy team can leave behind almost nothing.

An engineer might spend half a day investigating a production problem, talking to another team, testing a hypothesis and finding the root cause.

If none of that is captured, the organization effectively has no memory of the work.

The knowledge exists only inside one person's head.

That creates a fragile organization.

---

## The Real Value of a Ticket

This is why I have come to think differently about tools like Jira.

The value of a ticket isn't that management gets to see another rectangle move across a board.

The value is that the organization gets a **system of record**.

A good ticket can answer:

- What problem are we solving?
- Why are we solving it?
- Who owns it?
- What is in scope?
- What is out of scope?
- What assumptions are we making?
- What decisions have already been made?
- What remains uncertain?
- What does completion mean?

That makes the work legible.

And legibility matters.

If someone asks what a team member worked on last week, there should ideally be somewhere to look.

If a technical decision is questioned six months later, there should be some way to reconstruct the reasoning.

If an engineer leaves the organization, their departure should not erase the organization's understanding of the system.

The goal isn't to document every five-minute conversation.

The goal is to ensure that **important organizational knowledge doesn't disappear into private memory.**

---

## Good Process Is a Compression Algorithm for Experience

This is perhaps the most interesting way to think about it.

A mature organization has encountered thousands of situations:

- production failures
- security incidents
- bad deployments
- vendor problems
- misunderstood requirements
- unclear ownership
- regulatory issues
- customer escalations
- failed migrations
- unexpected dependencies

Over time, an organization learns.

The mature organization doesn't merely remember these experiences individually.

It encodes the lessons into its operating system.

That might become:

- a deployment checklist
- a code review requirement
- a change-management procedure
- an incident process
- a rollback requirement
- an approval threshold
- a security control
- a ticketing workflow
- a documentation standard

At that point, the organization doesn't have to rediscover the lesson every time.

**The process carries the memory forward.**

This is why mature process can contain a kind of wisdom that isn't obvious to someone encountering it for the first time.

The person sees:

> "Why do I have to do all this?"

The organization may actually be saying:

> "Because someone learned an expensive lesson, and we don't want you to have to learn it again."

---

## But Process Can Absolutely Become Bureaucracy

This argument shouldn't become a defense of every process ever created.

Bad process is real.

A process becomes counterproductive when:

- nobody understands its purpose
- it doesn't meaningfully reduce risk
- its cost exceeds its benefit
- multiple layers duplicate the same control
- nobody removes obsolete requirements
- compliance becomes more important than outcomes
- people optimize for satisfying the process rather than solving the problem

There is a simple test:

> **What failure is this process preventing?**

If nobody can answer that question, the process deserves scrutiny.

A five-minute configuration change probably doesn't need the same governance as a production database migration.

A reversible experiment doesn't need the same approval process as an irreversible architectural decision.

A minor bug fix doesn't deserve the same deliberation as a change that affects an entire platform.

Good organizations therefore don't merely have process.

**They calibrate process to risk.**

---

## Reversible and Irreversible Decisions

This is one of the places where good management becomes particularly visible.

Suppose an engineer wants to test a configuration in development.

That is usually reversible.

Experiment.

Learn.

Move on.

Now suppose the team wants to republish hundreds of jobs against a new runtime or toolchain.

That may affect:

- generated artifacts
- compatibility
- deployments
- testing
- rollback
- other engineers' work

The decision deserves more care.

A mature organization doesn't treat these two decisions as equivalent.

It asks:

> How reversible is this?

> How much does it affect the system?

> How much information do we have?

> What is the cost of being wrong?

That is not bureaucracy.

That is **risk-weighted decision making**.

---

## Good Managers Reduce Ambiguity

This is also where the difference between good and poor management becomes very visible.

A poorly structured initiative arrives at an engineer as:

> "Upgrade the platform."

The engineer is then expected to determine:

- what the actual problem is
- how to decompose the work
- what the dependencies are
- what decisions need to be made
- who should own each piece
- how it should be tested
- what the risks are

The manager has effectively transferred ambiguity downstream.

A strong manager does something different.

They take a messy problem and turn it into a structure the team can execute.

Not necessarily by dictating the technical solution, but by clarifying:

**Why.**

**What.**

**Who.**

**When.**

**Constraints.**

**Dependencies.**

**Definition of done.**

That is one of the fundamental purposes of management.

A manager doesn't eliminate complexity.

They **organize complexity so that other people can work with it.**

---

## Good Process Protects Engineering Time

There is another misconception that good organizations eventually learn to overcome:

> "If an engineer isn't closing a ticket, they're not being productive."

Engineering doesn't work that way.

An engineer may spend several hours:

- reading unfamiliar architecture
- understanding a runtime
- tracing a dependency
- investigating why something works
- thinking through a migration
- designing a better approach

None of that necessarily produces an immediately visible artifact.

But it can dramatically increase future productivity.

If an engineer is constantly pushed from ticket to ticket, they may become very good at completing tasks while remaining fundamentally dependent on procedures and other people's knowledge.

The organization gets activity.

It doesn't necessarily get expertise.

Good engineering organizations therefore leave some room for people to **think**.

Because understanding compounds.

---

## Good Organizations Make Knowledge Transferable

One of the clearest differences between strong and weak organizations is what happens when an experienced person leaves.

In a weak organization:

> "Nobody knows how this works anymore."

In a strong organization:

> "We lost an important person, but the system, documentation, decisions, code, and processes still contain much of what we need."

That doesn't mean institutional knowledge can ever be completely documented.

It can't.

People still matter enormously.

But good organizations continuously try to move knowledge from:

**person → team → organization.**

That is one of the most important functions of process.

---

## Age Has Almost Nothing to Do With It

None of this is really about whether an organization is young or old.

There are young companies with exceptional operational discipline.

There are old companies with terrible processes.

There are startups that have learned to document decisions, establish ownership, use strong engineering practices and move quickly without chaos.

There are decades-old organizations that still operate primarily through meetings, spreadsheets, email and institutional memory.

The difference isn't age.

It is whether the organization **learns from its own experience**.

A company can be five years old and have already learned enough painful lessons to develop excellent processes.

Another company can be fifty years old and repeat the same mistakes because it never converted experience into institutional knowledge.

Age provides experience.

It does not automatically produce wisdom.

**Reflection does.**

---

## The Best Organizations Turn Experience Into Infrastructure

Ultimately, I think this is the deepest purpose of organizational process.

A good organization doesn't merely accumulate experience.

It **crystallizes experience into mechanisms that help people make better decisions.**

The organization learns:

> "This kind of change is dangerous."

So it creates a review process.

It learns:

> "People keep forgetting why decisions were made."

So it records architectural decisions.

It learns:

> "Important operational work disappears into conversations."

So it creates a system of record.

It learns:

> "A single person knows too much."

So it creates documentation, pairing and cross-training.

It learns:

> "Large ambiguous initiatives repeatedly go off the rails."

So it improves decomposition and ownership.

This is what good process looks like.

It is not bureaucracy for bureaucracy's sake.

It is **organizational learning made durable**.

---

## The Question We Should Be Asking

The mature question isn't:

> "Can we get rid of this process?"

Nor is it:

> "How can we add more process?"

The better question is:

> **"What is this process buying us?"**

Does it reduce risk?

Does it preserve knowledge?

Does it improve coordination?

Does it make ownership clear?

Does it prevent rework?

Does it make decisions reversible when they should be?

Does it make important work visible?

Does it help the organization learn?

And finally:

> **Is the value worth the cost?**

If the answer is no, remove it.

If the answer is yes, don't dismiss it merely because it feels bureaucratic.

Because sometimes what looks like bureaucracy is actually the accumulated intelligence of everyone who came before you.

And the hallmark of a well-run organization is not that it has no process.

It is that **its process has a reason to exist.**
