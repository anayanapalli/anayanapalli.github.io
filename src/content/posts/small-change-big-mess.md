---
title: "Small Change, Big Mess"
pubDate: 2026-08-25
---

Software almost never becomes a mess because someone wakes up one morning and says:

> "Today, I shall destroy the codebase."

No.

It happens much more professionally than that.

It starts with a reasonable project, a reasonable team, and a perfectly reasonable deadline.

Then somebody says:

> "We just need a small workaround."

And that is how the story begins.

## It Was Supposed to Be Temporary

Imagine a team building an order-processing system.

The architecture is actually pretty clean. Orders come in, they get validated, processed, and sent downstream. Responsibilities are reasonably well separated.

Then the business comes along.

> "We need one special type of order supported by Friday."

The architect says:

> "We should probably introduce a proper abstraction for this."

The manager looks at the calendar.

> "Friday is in three days."

So someone does the sensible thing.

They add:

```text
if order.type == "SPECIAL":
    do_special_thing()
else:
    process_normally()
```

Done.

Tests pass.

Demo works.

Everyone goes home.

The architect says:

> "We'll clean this up later."

Narrator:

**They did not clean it up later.**

## The Second Shortcut Is Built on the First

Three weeks later:

> "We need another special order type."

The new engineer opens the codebase.

They see the existing pattern.

They think:

> "Okay, apparently this is how we do special orders."

So now:

```text
if order.type == "SPECIAL":
    do_special_thing()
elif order.type == "SPECIAL_2":
    do_another_special_thing()
else:
    process_normally()
```

Again, it works.

Another ticket closed.

Another sprint completed.

Another tiny piece of complexity quietly enters the building.

Six months later, the code contains seventeen special cases.

Nobody remembers why eleven of them exist.

Three people insist that one of them is related to a customer who left the company two years ago.

One engineer says:

> "Don't touch this."

Nobody knows exactly why.

But everybody respects the warning.

This is how software architecture develops folklore.

## The Most Dangerous Code Is Code That Works

This is the strange thing about technical debt.

Bad code that doesn't work gets fixed.

Bad code that works gets **promoted**.

It becomes infrastructure.

It becomes a dependency.

It becomes something another engineer builds on.

Eventually, the original developer who wrote the workaround has left the company, and someone else is staring at it thinking:

> "There must be a very good reason this works this way."

There may not be.

There was simply a deadline.

But now that workaround is part of the system's constitution.

And nobody wants to amend the constitution.

## Then Someone Requests a "Small Change"

Eventually the business asks:

> "Can we just change how special orders are processed?"

"Just."

That beautiful word.

The engineer looks at the ticket.

It sounds like a two-day change.

Then they search the repository.

The search results look like a census.

The special-order logic appears in:

- the API
- the validation service
- three database tables
- two batch jobs
- the reporting pipeline
- the notification service
- an Excel export nobody knew existed
- a configuration file called `legacy_special_order_final_v2.json`

And somewhere, inevitably, there is a comment:

```text
// DO NOT CHANGE THIS
// See John
```

John left the company in 2021.

Now the two-day change is a two-week investigation.

And nobody has even changed anything yet.

## Complexity Compounds

This is one of the deepest truths about software.

Today's shortcut becomes tomorrow's assumption.

Tomorrow's assumption becomes next year's dependency.

And eventually the dependency becomes an architectural constraint.

The problem isn't that any individual decision was catastrophic.

The problem is that **complexity compounds**.

You don't need one terrible engineering decision to destroy a system.

You need 500 small decisions where nobody asks:

> "What complexity are we introducing by doing this?"

Eventually the system becomes a giant collection of historical decisions.

You aren't really programming anymore.

You're doing archaeology.

## Eventually, Everyone Learns the Workarounds

At some point, the company stops trying to make the system simpler.

Instead, it teaches people how to survive it.

New engineer:

> "Why does this service call that database directly?"

Senior engineer:

> "Don't worry about it."

New engineer:

> "Can we refactor it?"

Senior engineer:

> "We tried that once."

New engineer:

> "What happened?"

Senior engineer:

> "Nobody knows."

And that becomes the architecture.

The system is now held together by tribal knowledge, Slack messages, three undocumented diagrams, and one engineer named Mike who has been there for eight years.

Mike is now mission-critical infrastructure.

## So We Hire More Engineers

The business notices that development is slowing down.

Naturally, the conclusion is:

> "We need more engineers."

So the company hires ten more people.

Now ten more people need to understand the seventeen special cases.

They need meetings.

They need onboarding.

They need documentation.

They need people to explain why the system works this way.

More people create more interfaces.

More interfaces create more coordination.

More coordination creates more meetings.

More meetings create less time to actually fix the architecture.

So the organization responds by hiring more people.

Which creates more complexity.

This is known as the **"throw engineers at it until it gets faster" strategy.**

It has mixed results.

## Then the Good Engineers Start Leaving

Eventually something else happens.

The good engineers get tired.

They don't mind complexity. That's literally part of the job.

What they hate is **unmanaged complexity**.

They can tolerate a difficult system if there is a serious effort to improve it.

What becomes exhausting is being told:

> "Don't refactor it. We need the feature by Friday."

Every week.

Forever.

Eventually, the engineer realizes that they are spending 80% of their time navigating around yesterday's decisions and 20% of their time creating tomorrow's problems.

So they leave.

Then another good engineer leaves.

Then another.

The organization retains people who have become extremely good at operating the existing system.

And slowly, something worse than technical debt develops.

**Cultural debt.**

The organization learns that this is simply how software is built.

## And Now You Have a Culture

This is the really dangerous part.

A company can recover from a bad piece of code.

It is much harder to recover from a culture that believes bad code is normal.

If every engineer learns:

> "Don't think too much. Just get the ticket done."

Then tactical programming becomes the default.

If every engineer learns:

> "We don't have time to refactor."

Then refactoring becomes irresponsible.

If every engineer learns:

> "Nobody understands this system anyway."

Then understanding the system stops being part of the job.

Eventually, good architecture starts looking naive.

Someone proposes a clean design and somebody says:

> "That's great in theory, but we don't have time for that."

And then they spend six months paying for not having time for it.

## Then Comes the Rewrite

Eventually somebody has had enough.

They walk into a meeting and say:

> "We need to rewrite the whole thing."

There is a pause.

Someone says:

> "How long?"

They say:

> "Six months."

Everyone laughs.

Someone says:

> "Make it three."

And thus begins the next chapter.

The rewrite might actually be necessary.

But there is a small problem.

The old system contains ten years of accumulated business knowledge.

Some of it is documented.

Most of it isn't.

There are customer-specific rules.

There are bizarre edge cases.

There are integrations nobody remembers creating.

There are behaviors that nobody considers requirements until they disappear.

The old system is ugly.

But it knows things.

So now the team has to reverse-engineer a decade of business knowledge from a codebase everyone spent the last five years trying not to understand.

Good luck.

## And Then AI Arrives

Now introduce AI.

This changes the economics completely.

Historically, writing software was expensive.

You needed an engineer.

The engineer had to understand the problem.

They had to design the solution.

They had to write the code.

They had to debug it.

They had to test it.

That friction was actually useful.

It forced us to think before producing enormous quantities of software.

Now you can say:

> "Build me an API for this."

And AI says:

> "Sure."

A few seconds later, you have an API.

Then:

> "Add authentication."

Sure.

> "Add caching."

Sure.

> "Add retries."

Sure.

> "Add another integration."

Sure.

> "Make this work with the legacy system."

Absolutely.

Congratulations.

You have just generated a very sophisticated mess.

And the beautiful thing is that **it probably works.**

## AI Has Made Code Cheap

This is perhaps the most important change.

The cost of producing software is falling dramatically.

The cost of **understanding software has not**.

Human cognitive capacity has not suddenly increased because we have an LLM.

We can generate 50,000 lines of code.

We cannot understand 50,000 lines of code in five minutes.

That creates a fascinating asymmetry:

**Code is becoming abundant.  
Comprehension is still scarce.**

And that means architecture becomes even more important.

## Disposable Software Is Different

If you need a script to rename 4,000 files once?

Use AI.

If you want to prototype an idea?

Use AI.

If you need a small internal tool that will live for three weeks?

Go crazy.

AI is phenomenal for disposable software.

But if you're building something that will exist for ten years, the question changes.

You aren't asking:

> "Can AI build this?"

Of course it can.

You need to ask:

> **"Can humans still understand this five years from now?"**

And even more importantly:

> **"Can someone safely change it five years from now without first becoming an archaeologist?"**

That's the real test.

## The New Engineering Skill

In the AI era, I suspect the most valuable engineers will not necessarily be the ones who generate the most code.

They'll be the ones who know when **not** to generate it.

They'll ask:

> "Do we need another service?"

> "Why does this responsibility belong here?"

> "What abstraction are we introducing?"

> "What happens when the next five requirements arrive?"

> "Are we solving the problem or just moving it somewhere else?"

> "What will this decision make harder?"

That is engineering judgment.

And AI doesn't eliminate the need for it.

It makes it more important.

## The Real Scarce Resource

We used to worry about engineers being too slow at writing code.

Soon, we may have the opposite problem.

We will be able to create software faster than organizations can understand, document, operate, and maintain it.

That is a very different bottleneck.

The scarce resource won't be code.

**It will be comprehension.**

So perhaps the defining question of AI-assisted software engineering isn't:

> "How quickly can we build this?"

It is:

> **"What will this become after a thousand people make small changes to it?"**

Because that's how software becomes a mess.

Not through one spectacular failure.

Through thousands of reasonable decisions made under pressure.

One workaround.

One deadline.

One "we'll fix it later."

One exception.

One special case.

One new hire.

One more integration.

One more Friday.

Until one day somebody asks for a two-line change and the senior engineer quietly closes the laptop and says:

> "We should probably rewrite this."

And somewhere in the organization, a manager says:

> "Can we just ship it?"

And the cycle begins again.
