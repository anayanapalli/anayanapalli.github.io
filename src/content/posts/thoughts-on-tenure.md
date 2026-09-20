---
title: "Thoughts on Tenure"
pubDate: 2026-09-10
---

We have a strange relationship with tenure.

A résumé with frequent job changes can make someone look unreliable. A résumé with long stretches at the same company can make someone look stable, experienced, and trustworthy.

There are countless heuristics around this.

_"They've only stayed two years. That's a red flag."_

_"They've been there for ten years. They must be very experienced."_

_"They've changed companies five times in seven years. They probably won't stay."_

Sometimes these heuristics are useful.

But I increasingly think they are far too simplistic.

The more I think about tenure, the more I believe that the important question isn't simply **how long someone stayed**.

The more interesting question is:

> **How long does it take for someone in this role, in this environment, to receive meaningful feedback on the decisions they make?**

That changes everything.

Because one year as an engineer, one year as a manager, one year as a director, and one year as an executive can represent radically different amounts of experience.

Tenure is measured by the calendar.

Experience is accumulated through **feedback cycles**.

---

## The feedback cycle

Almost every meaningful job has some version of the same loop:

<figure class="text-center">
  <img
    src="/images/12.png"
    alt="Feedback Cycle Illustration #0"
    class="rounded-md mx-auto dark:hidden"
  />

<img
    src="/images/12-d.png"
    alt="Feedback Cycle Illustration #0"
    class="rounded-md mx-auto hidden dark:block"
  />

</figure>

You make a decision.

You act on it.

The system responds.

Eventually, the consequences become visible.

You receive feedback.

You understand what happened.

And, ideally, you change how you operate.

That is experience.

The important variable is therefore not simply the amount of time that has passed.

It is **how many meaningful feedback cycles have been completed**.

And the length of those cycles varies enormously.

## An engineer's feedback cycle

Consider an engineer working on a substantial technical system.

They might:

- understand the problem
- design an architecture
- make trade-offs
- implement it
- deploy it
- operate it
- encounter unexpected behavior
- discover scaling or reliability problems
- learn from those problems
- redesign part of the system

Depending on the project, that entire cycle might happen within months.

For a reasonably sized engineering project, a year or two can provide a tremendous amount of technical feedback.

Of course, this is not universal.

An engineer working on a decade-long infrastructure transformation is operating on a completely different timeline.

But in many software environments, technical feedback cycles are relatively fast.

That is one reason I am not particularly alarmed by a one- or two-year engineering tenure by itself.

If the person has strong technical fundamentals, good references, meaningful ownership, and can clearly explain the systems they built and the trade-offs they made, a short tenure does not necessarily tell me much about their reliability.

It may simply mean they have more optionality.

They may have finished the problem they came to solve.

They may have wanted a harder problem.

They may have learned everything they could from that particular environment.

They may have found that the next stage of growth wasn't available where they were.

Or the company may simply not have been a good fit.

The résumé tells me they left.

It doesn't tell me why.

## The same clock does not apply to management

This becomes much more interesting when we move into management.

An engineer primarily changes a technical system.

A manager changes a **system of people**.

That difference matters because people and organizations often have much longer feedback cycles.

Suppose a manager changes the team's ownership model.

At first, everything might look better.

People have more autonomy.

There are fewer meetings.

Decisions appear to happen faster.

But six months later, cross-team dependencies start accumulating.

Or suppose the manager introduces more process because the team feels chaotic.

Initially, predictability improves.

A year later, engineers may have stopped taking initiative because every decision now requires approval.

Or a manager changes hiring standards.

The immediate effect might not be visible at all.

The people hired today may become critical contributors, mediocre performers, or organizational problems two years later.

Management decisions frequently have **second-order effects**.

You change one part of the system.

The system adapts.

That adaptation changes another part.

Eventually, the consequences return to you.

That can take a long time.

## The manager's real product is the system

This is one of the reasons I think management is frequently misunderstood.

A manager isn't primarily there to perform the work of the people reporting to them.

They are there to create the conditions in which the team can perform well.

That means understanding things like:

- workflow
- ownership
- dependencies
- priorities
- bottlenecks
- sequencing
- decision-making
- communication
- incentives
- staffing
- technical constraints

The manager doesn't need to be the best engineer on the team.

But they cannot delegate **understanding**.

That distinction is particularly important for first-line managers.

## First-line management is different from managing managers

There is a common tendency to think that management simply becomes recursive.

An engineer manages a technical problem.

A manager manages engineers.

A director manages managers.

A VP manages directors.

So perhaps the job is essentially the same at every level, just with a larger abstraction.

There is some truth to that.

Delegation, prioritization, communication, organizational design, and decision-making certainly scale.

But the feedback system changes as you move upward.

A first-line manager is still very close to the production system.

They need to understand how work actually flows through the team.

A director managing managers can operate at a much higher level of abstraction because the managers below them are themselves responsible for understanding the workflow.

That difference creates an interesting failure mode.

## The danger of imitating senior management

A new manager can look at a senior executive and think:

> "They don't get into the details. They delegate everything. That's what good management looks like."

So they start doing the same thing.

An engineer says:

> "We're blocked by another team."

The manager responds:

> "Okay. I'll connect you with them."

They create a Slack channel.

They schedule a meeting.

They add everyone.

And then they disappear.

It looks like delegation.

But often, nothing has actually been coordinated.

The engineer still has to explain the problem.

The other team still has to reconstruct the context.

Someone asks what has already been tried.

Someone asks what exactly is needed.

Someone asks who owns the change.

Another meeting gets scheduled.

The manager has not removed the bottleneck.

They have simply **moved the bottleneck into a meeting**.

## Coordination is not scheduling

Good coordination is fundamentally about **context transfer**.

A manager should understand enough of the problem to transfer the relevant context from one part of the organization to another.

Instead of:

> "Can you guys connect about the API?"

A useful manager might communicate:

> "The ingestion service is currently blocked because the configuration API is returning an incompatible schema. Priya is implementing the ingestion change, while Team B owns the configuration contract. We need to determine whether the API contract can support the required field or whether the ingestion service should adapt to the existing contract. The goal of this discussion is to agree on the contract and identify the owner for the change."

Now the engineers can actually start solving the problem.

The manager didn't solve the technical issue.

They didn't need to.

They removed the **context-transfer bottleneck**.

This is a subtle but important distinction.

> **You can delegate execution without delegating understanding.**

## Good management is often invisible

This is one of the strange things about management.

When it works well, you may barely notice it.

The right people are talking to each other.

The right context arrives at the right time.

Dependencies are resolved before they become blockers.

Priorities are clear.

People know who owns what.

Decisions happen without unnecessary escalation.

Work flows.

Nobody thinks:

> "Wow, management is doing an amazing job."

They simply get their work done.

But when management fails, the machinery becomes visible.

Suddenly there are:

- endless meetings
- unclear ownership
- duplicated work
- unresolved dependencies
- constant escalations
- people waiting for decisions
- teams blaming each other
- engineers spending hours explaining context
- projects accumulating work in progress

This is one reason dysfunctional organizations can be strangely educational.

They expose the things that good management normally prevents.

## The feedback cycle changes with scope

As responsibility expands, the distance between a decision and its consequences generally increases.

<figure class="text-center">
  <img
    src="/images/10.png"
    alt="Feedback Cycle Illustration #1"
    class="rounded-md mx-auto dark:hidden"
  />

<img
    src="/images/10-d.png"
    alt="Feedback Cycle Illustration #1"
    class="rounded-md mx-auto hidden dark:block"
  />

</figure>

These aren't rules.

They are just a way of thinking about **causal distance**.

The larger the system you are responsible for, the longer it can take for your decisions to propagate through that system and return to you as meaningful feedback.

And that makes tenure increasingly important as scope increases.

## This is why short tenure means something different at different levels

Suppose I see an engineer with three jobs over six years.

I don't immediately think:

> "Why can't this person stay anywhere?"

I want to understand what they did.

Perhaps they worked on three increasingly difficult technical problems.

Perhaps each role gave them more ownership.

Perhaps they repeatedly built systems, operated them, encountered failures, and learned from them.

That's potentially a very strong trajectory.

Now suppose I see a VP who has changed companies every eighteen months.

I wouldn't automatically conclude that something is wrong.

But I would have substantially more questions.

What did they actually change?

Did they inherit the strategy or create it?

Did they build the organization?

Did they hire the leadership team?

Did the strategy have time to play out?

Did they observe the consequences?

Did they leave because the transformation was complete?

Was the company acquired?

Was the role eliminated?

Were they asked to leave?

Did they move to a substantially larger role?

The same tenure number carries a different meaning because the **feedback cycle is different**.

## A director can look very experienced on paper

Imagine two résumés.

### Director A

**Director of Engineering — 18 months**

Managed 60 engineers.

Managed six engineering managers.

Led a major organizational transformation.

Presented regularly to the executive team.

Worked at a well-known technology company.

It sounds impressive.

But now imagine that most of the transformation was already designed before they arrived.

They spent six months understanding the organization.

They implemented the restructuring.

The company went through another major strategic change.

Then they left.

They have eighteen months of director-level tenure.

But how many complete director-level feedback cycles did they actually experience?

Maybe not many.

Now consider another person:

### Director B

**Engineering Manager — 4 years**

**Director of Engineering — 4 years**

During those years, they:

- built teams
- hired managers
- made organizational changes
- experienced failed hires
- dealt with performance problems
- reorganized ownership
- handled cross-team dependencies
- made mistakes in prioritization
- saw the consequences
- changed their operating model
- and eventually rebuilt the organization around what they had learned

Their résumé may look less glamorous.

But they may have accumulated considerably more **organizational feedback**.

The title doesn't tell you that.

The tenure doesn't tell you that.

The story does.

## Long tenure can be misleading too

Of course, this argument cuts both ways.

Long tenure isn't automatically good.

Someone who has been at a company for fifteen years might be exceptional.

They may have:

- built multiple systems
- managed several generations of teams
- survived major reorganizations
- developed deep institutional knowledge
- learned from repeated failures
- taken increasing responsibility

That's a lot of feedback.

But another person could spend fifteen years doing essentially the same narrow job.

There is a difference between:

> **15 years of experience**

and:

> **the same year of experience repeated 15 times.**

So I don't want to replace one simplistic heuristic with another.

"Long tenure is good" is too simplistic.

"Short tenure is good because it means optionality" would be equally simplistic.

The actual question remains:

> **What happened during that time?**

## Professional growth can be misleading...

There is another signal that can be just as misleading as tenure: **professional growth within an organization**.

We tend to look at someone who has steadily moved upward and assume that the progression itself is evidence of increasing capability.

Engineer → Senior Engineer → Manager → Senior Manager → Director → VP.

It is certainly evidence that the organization kept giving that person larger responsibilities. But it is not necessarily evidence that their knowledge, judgment, or experience grew at the same rate.

Organizations are complicated systems.

People get promoted for many reasons.

Sometimes they are genuinely excellent and have earned progressively larger scope.

Sometimes the business is growing quickly and needs people to fill new positions.

Sometimes someone has deep institutional knowledge and is the obvious person available.

Sometimes a manager leaves and the next person in line gets promoted.

Sometimes someone is exceptionally good at operating within the organization's existing culture and processes.

Sometimes they are simply in the right place at the right time.

And sometimes a person can keep moving upward because **the organization keeps changing around them faster than the feedback from their previous decisions can arrive**.

That last case is particularly interesting.

Imagine someone who becomes a manager after a year or two as an engineer.

Before they have really experienced the consequences of their management decisions, the organization grows and they become a senior manager.

Then another manager leaves, and they become a director.

A few years later, they are running a large organization.

From the outside, the trajectory looks extraordinary.

But if we trace the actual feedback cycles, something different might emerge.

They may never have stayed in one managerial system long enough to understand its long-term consequences.

They may have inherited organizations rather than built them.

They may have implemented strategies designed by someone else.

They may have moved on before the consequences of difficult decisions became visible.

They may have been promoted precisely when the organization was changing enough that the old problems disappeared before anyone could determine whether their decisions had actually solved them.

In other words, **their organizational seniority may have grown faster than their accumulated judgment**.

This is why I don't think professional progression should be treated as a simple proxy for experience.

A person can be promoted repeatedly without necessarily completing the feedback cycles that would normally develop the judgment required for the next level.

And this can be particularly difficult to see in large organizations.

Large companies have enormous organizational inertia.

Once someone reaches a certain level, they can sometimes operate successfully because the systems around them are strong enough to compensate for weaknesses in their own judgment.

They may have excellent staff.

They may have experienced people underneath them.

They may have established processes.

They may have strong peers.

They may have a powerful brand behind them.

They may have large teams that absorb mistakes.

They may have leaders above them who quietly correct decisions before those decisions become consequential.

The organization can therefore create an environment in which someone appears highly effective without necessarily exposing the full limits of their judgment.

This is another reason I think **scope should match knowledge, experience, and judgment**.

The question is not whether someone has the title.

The question is whether the person's ability to reason about a system has actually caught up with the size of the system they are responsible for.

A senior title creates a larger blast radius.

If someone is responsible for a ten-person team, a bad decision may affect ten people.

If they are responsible for a thousand-person organization, the same quality of judgment can have consequences at an entirely different scale.

This doesn't mean people should never be promoted before they are completely ready. Nobody is completely ready for every larger role.

Growth requires taking on challenges that are somewhat beyond what you have done before.

But there is an important difference between **stretching someone's capability** and **putting someone substantially beyond the depth of their understanding**.

The former creates growth.

The latter can create organizational fragility.

This is also why I am cautious about treating rapid promotion as automatically impressive.

I'd rather ask:

> **Did their judgment grow as quickly as their scope?**

And then:

> **What feedback cycles actually produced that judgment?**

Someone who spent four years managing a team, made mistakes, saw the consequences, rebuilt the team, learned how to hire, learned how to handle performance problems, learned how to structure ownership, and then moved into a director role may have a very different foundation from someone who became a director through a series of rapid promotions without ever seeing the long-term consequences of their earlier decisions.

The titles might look similar.

The underlying experience may be completely different.

Ultimately, I think professional growth should be evaluated in the same way as tenure:

**not by the position someone reached, but by the feedback cycles that prepared them for that position.**

A person's position should be broadly commensurate with their **knowledge, experience, and capacity for judgment**.

The higher the position, the greater the consequences of being wrong.

And therefore the more important it becomes to know whether the person has actually accumulated the judgment required to operate at that level.

Because organizational progression tells you that someone was **given more scope**.

It does not necessarily tell you that they **became more capable of handling it**.

## The pace of the industry matters too

There is another variable that I think is often overlooked.

**Industry velocity.**

Different environments produce feedback at very different speeds.

A technology startup might go from idea to product to customers to scaling problems to organizational restructuring in a few years.

A heavily regulated or conservative industry might take years to move through a comparable cycle.

A major infrastructure project might take a decade.

A pharmaceutical development program can operate on a completely different timeline.

A financial institution may have technology and organizational systems whose consequences emerge over many years.

So tenure has to be interpreted relative to the environment.

Three years is not a universal unit of experience.

## The startup founder is a fascinating example

Consider someone who starts a technology company and runs it for three years.

In those three years, they may have experienced:

- product development
- customer discovery
- pricing
- sales
- hiring
- firing
- fundraising
- cash-flow management
- organizational design
- competition
- product-market fit
- scaling problems
- cultural problems
- strategic mistakes
- and perhaps failure

They might even shut the company down.

That can be an extraordinarily deep feedback cycle.

In fact, there is something interesting about failure.

A founder who starts a company, makes difficult decisions, watches the consequences unfold, eventually realizes the business isn't working, shuts it down, and genuinely reflects on why it failed may come out of that experience with enormous practical knowledge.

I would call that **scar tissue**.

But scar tissue alone isn't enough.

Failure does not automatically produce wisdom.

Reflection is what turns experience into learning.

> **Scar tissue becomes experience when it is accompanied by reflection and changed behavior.**

Someone who has experienced failure but learned nothing from it may repeat the same mistakes.

Someone who understands why the failure happened and changes how they operate afterward has completed a very valuable feedback cycle.

## A three-year founder and a ten-year employee

Imagine two people.

One spent ten years at a stable company.

The other founded a startup and spent three years trying to make it work.

The first person may have enormous institutional knowledge.

The second may have experienced:

> idea → product → customers → hiring → growth → mistakes → strategic change → failure

The second person may have gone through an entire business-building cycle in three years.

That doesn't automatically make them a better leader.

But it demonstrates why **calendar time alone is a poor proxy for experience**.

The founder may have been exposed to far more consequential decisions and much faster feedback.

## But the opposite can also be true

Now imagine someone working in a very slow-moving industry.

They might spend five years on a major transformation.

The first two years involve planning.

The next two involve implementation.

The fifth year is when the organization finally begins seeing the consequences.

In that environment, five years might not be unusually long.

It may simply be what the system requires to produce meaningful feedback.

This is why I wouldn't say:

> "A manager needs three years."

Or:

> "A director needs five years."

Those numbers are too arbitrary.

Instead:

> **The required tenure should be interpreted relative to the feedback cycle of the system.**

## Project scale matters too

Industry velocity isn't the only variable.

Project scale matters.

An engineer working on a small service may be able to design, build, deploy, operate, and improve the system several times within a few years.

An engineer working on a massive infrastructure transformation may not.

The same is true for management.

A manager of a ten-person team in a rapidly changing startup may experience organizational feedback much faster than a manager responsible for a large, heavily regulated operation.

And a founder building a consumer application may experience dramatically faster feedback than someone building a business where every major customer contract takes two years to close.

So I think the model really has several dimensions:

<figure class="text-center">
  <img
    src="/images/11.png"
    alt="Feedback Cycle Illustration #2"
    class="rounded-md mx-auto dark:hidden"
  />

<img
    src="/images/11-d.png"
    alt="Feedback Cycle Illustration #2"
    class="rounded-md mx-auto hidden dark:block"
  />

</figure>

Tenure is therefore not a standalone variable.

It is a variable embedded inside a system.

## This changes how I look at short-tenured engineers

For individual contributors, especially engineers, I think short tenures are often less concerning than people assume.

If someone has good hiring signals, demonstrates strong technical judgment, can explain what they built, and has repeatedly taken meaningful ownership, I don't think a one-, one-and-a-half-, or two-year tenure should automatically be considered a negative signal.

It may simply indicate that they have options.

In technology, people can move between problems relatively quickly.

And sometimes that is exactly how excellent engineers grow.

They encounter a new architecture.

Then a new scale problem.

Then distributed systems.

Then reliability.

Then data infrastructure.

Then a completely different domain.

Each move can represent another feedback cycle.

Of course, there are limits.

Someone who changes jobs every few months may not have stayed long enough to own anything meaningful.

Someone who repeatedly leaves whenever a project becomes difficult may have a different pattern.

Again, the point isn't that short tenure is good.

It is that **short tenure needs context**.

## For managers, I would be more cautious

For managers, I think the same heuristic becomes more useful in the opposite direction.

A short managerial tenure makes me more curious.

Not necessarily suspicious.

Curious.

I want to know:

**What did they actually manage?**

**What decisions did they own?**

**How many hiring cycles did they experience?**

**How many performance cycles?**

**Did they deal with organizational change?**

**Did they make mistakes and see the consequences?**

**Did they have time to change their management system based on what they learned?**

Because management is fundamentally about systems that take time to reveal themselves.

A manager can look excellent for six months.

The team can appear happy.

Delivery can look good.

Everyone can report that things are going well.

And yet the organization may be accumulating problems that only become visible much later.

## The same applies even more strongly to directors and executives

As the scope increases, I care increasingly about whether the person has stayed long enough to see consequences.

A director might reorganize several teams.

An executive might change a business strategy.

A VP might create an entirely new organization.

These decisions can take years to propagate.

Someone who leaves before the feedback arrives may still have done excellent work.

But their résumé gives us less evidence about their ability to learn from the consequences.

That's an important distinction.

It's not:

> **Short tenure means bad leader.**

It's:

> **Short tenure gives us less direct evidence of long-cycle leadership learning, so we need to investigate more carefully.**

That is a much more useful statement.

## The résumé is a map, not the territory

This is ultimately why I think résumés can be deceptive.

A résumé tells you:

**where someone worked**

and

**when they worked there.**

It doesn't tell you:

**what happened.**

Two people can have identical résumés:

```text
Company A — 2 years
Company B — 2 years
Company C — 2 years
```

But one person might have spent those six years:

- building systems
- owning production
- dealing with failures
- leading migrations
- learning from mistakes
- progressively increasing responsibility

while the other might have spent them:

- working on narrow components
- avoiding ownership
- moving before projects completed
- rarely seeing production consequences

The résumé looks the same.

The experience isn't.

This is why the most useful interview questions are often not about chronology.

They're about **causality**.

## Ask about the feedback loop

Instead of asking only:

> "How long were you there?"

ask:

> **"What did you change?"**

Then:

> **"Why did you change it?"**

Then:

> **"What happened?"**

Then:

> **"What surprised you?"**

And finally:

> **"What would you do differently now?"**

That last question is particularly revealing.

Because it tells you whether the person merely accumulated events or actually converted those events into learning.

## Experience is not exposure

This may be the most important distinction in the entire argument.

Someone can have twenty years of exposure without twenty years of learning.

And someone can have three years of extraordinarily concentrated learning.

Time creates the opportunity for experience.

It does not guarantee it.

The person needs to encounter consequences.

They need to understand those consequences.

They need to reflect.

And they need to change.

Without that final step, the feedback loop never really closes.

## Tenure is a proxy for feedback exposure

This is probably the most precise way I can express the idea.

**Tenure is not experience.**

Tenure is a proxy for the amount of time someone had available to accumulate experience.

But the quality of that experience depends on:

- what they were responsible for
- how complex the system was
- how quickly feedback arrived
- whether they actually owned the decisions
- whether they experienced the consequences
- and whether they learned from them

That is why two years can be a lot.

And ten years can be very little.

And sometimes the opposite.

## A better way to evaluate a résumé

When I look at a résumé now, I don't want to ask only:

> "How long did this person stay?"

I want to ask:

### What was the scope?

What system were they responsible for?

### What was the feedback cycle?

How long would it normally take for meaningful consequences to emerge?

### What did they actually own?

Were they making decisions or mostly executing decisions made by someone else?

### Did they stay long enough to observe consequences?

Did they see the outcome of the things they changed?

### Did they reflect?

Can they explain what they got wrong?

### Did their behavior change?

Can you see evidence that the lessons from one environment influenced how they operated in the next?

Those questions tell me much more than a raw tenure number.

## The deeper principle

I think there is a broader principle underneath all of this:

> **The larger the system you are responsible for, the longer it can take for your decisions to propagate through the system and return to you as meaningful feedback.**

That is why experience has to be interpreted relative to role.

An engineer might complete several meaningful technical feedback cycles in a few years.

A first-line manager may need longer to see the consequences of decisions about people and workflow.

A director managing managers operates over a longer organizational horizon.

An executive making business decisions operates over an even longer strategic horizon.

And a founder can spend years discovering whether their assumptions about a product, market, organization, and business model were correct.

But the environment matters just as much.

A fast-moving startup can compress enormous amounts of experience into a few years.

A slow-moving industry can stretch a single feedback cycle across many years.

A massive project can do the same thing.

There is no universal number.

## So, how should we think about tenure?

I don't think the right question is:

> **"Is this tenure long enough?"**

I'd rather ask:

> **"Was this long enough to complete a meaningful feedback cycle for the work this person was responsible for?"**

And then:

> **"What did they learn from it?"**

For an engineer, that might happen in a year or two.

For a manager, it may take several years.

For a director or executive, potentially longer.

For a founder, it may depend enormously on the company, market, and stage.

Sometimes a short tenure contains a complete and profound feedback cycle.

Sometimes a long tenure contains very little learning.

And sometimes the same number of years means something completely different in two different industries.

That's why I have become skeptical of simplistic résumé heuristics.

**Short tenure is not inherently bad.**

**Long tenure is not inherently good.**

Short tenure at the IC level may simply reflect optionality and relatively fast technical feedback cycles.

Short tenure at a senior management level deserves more investigation because the feedback cycle is longer.

Long tenure can demonstrate deep accumulated experience, but only if the person was actually learning and taking on meaningful responsibility.

And a founder who spends three years building a company, experiences the full range of problems that come with it, perhaps even shuts it down, and then deeply reflects on what happened may have accumulated an extraordinary amount of leadership experience in those three years.

The calendar cannot tell you that.

The résumé cannot tell you that.

You have to look for the feedback.

## Tenure measures time. Experience measures feedback.

Perhaps that is the simplest way I can summarize the whole idea.

**Tenure measures elapsed time.**

**Experience measures accumulated feedback.**

And the relationship between the two depends on the system.

A fast-moving environment can generate many feedback cycles in a short period.

A slow-moving environment may require years.

A small technical system can produce rapid feedback.

A massive transformation can take a decade.

An engineer can learn through relatively short technical cycles.

A manager needs longer cycles to understand the consequences of decisions about people and organizations.

A director, executive, or founder may need even longer horizons to see the effects of the systems they create.

So when I look at a résumé, I don't want to count the years first.

I want to understand the loops.

**What did this person decide?**

**What happened?**

**What did they learn?**

**And what did they do differently the next time?**

Because ultimately, that is what experience really is.

> **The résumé tells you where someone has been.**
> **The feedback cycles tell you what they may have learned.**
