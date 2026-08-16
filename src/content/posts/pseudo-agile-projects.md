---
title: "Psuedo-Agile Projects"
pubDate: 2026-08-16
---

I've seen this in quite a few teams and companies, and I think it's worth calling out because it can be surprisingly difficult to notice when you're actually inside the project.

You join a team and everyone says, "Yeah, we're Agile."

There's Jira. There are two-week sprints. There are daily standups. There's sprint planning, story points, retrospectives, all of it.

But then you look at how the work is actually being done and realize that, underneath all of that, the project is basically waterfall.

For example, imagine you're building a new data platform.

The first few sprints are spent setting up databases.

Then another sprint is spent setting up infrastructure.

Then someone builds the pipelines.

Another team works on security.

Then testing happens.

Then integration happens.

Then UAT happens.

Then, eventually, six months later, the first actual user gets to use the thing.

And every one of those activities has a Jira ticket.

Every sprint has something to show.

Technically, the team is "delivering."

But what has actually been delivered to the user?

Usually, not much.

That's what I mean by pseudo-Agile.

The organization has adopted the mechanics of Agile, but the underlying way of thinking hasn't really changed.

The work is still happening like this:

```
Database
   ↓
Infrastructure
   ↓
Development
   ↓
Testing
   ↓
Integration
   ↓
Deployment
   ↓
User gets value
```

Someone has simply taken that waterfall process and put it into two-week boxes:

```
Sprint 1 → Database
Sprint 2 → Infrastructure
Sprint 3 → Development
Sprint 4 → Testing
Sprint 5 → Integration
Sprint 6 → Deployment
```

That's not really solving the problem.

## What would the same project look like if it were truly Agile?

Let's take the same data platform.

Instead of spending the first four sprints building all the underlying pieces, you could pick one small but representative use case and take it all the way through.

Maybe the goal is to get one important dataset from the source system into the new platform and make it available to one group of users.

So the first sprint might involve:

```
One dataset
    ↓
Ingestion
    ↓
Transformation
    ↓
Security
    ↓
Testing
    ↓
Deployment
    ↓
User can access it
```

It's not the whole platform.

It's one small slice through the platform.

And at the end of the sprint, the user can actually do something they couldn't do before.

Then you take the next dataset.

Maybe the second one exposes a problem with performance.

You fix it.

Then the third one exposes an authentication problem.

You fix that.

Then another one shows that your original architecture doesn't scale the way you expected.

Now you know.

And that's the important part.

You're learning while you're building.

The project might look something like this:

```
Sprint 1
  One dataset → Production → User feedback

Sprint 2
  Second dataset → Production → User feedback

Sprint 3
  Third dataset → Production → User feedback

Sprint 4
  More complex workload → Production → User feedback
```

Now compare that with the pseudo-Agile version.

## Pseudo-Agile

```
Sprints 1–2
  Build infrastructure

Sprints 3–4
  Build pipelines

Sprints 5–6
  Integration and testing

Sprints 7–8
  UAT

Sprint 9+
  Production

```

The user sees almost nothing until the end.

## Real iterative Agile

```
Sprint 1
  Small capability → User

Sprint 2
  Another capability → User

Sprint 3
  Another capability → User

Sprint 4
  Another capability → User
```

The difference is huge.

It's not that the Agile team magically does the same amount of work faster.

The difference is that the feedback loop is dramatically shorter.

And this is why I wouldn't define Agile simply as "working in two-week increments."

I'd define the deeper principle as:

**Shorten the feedback loop between doing the work and discovering whether the work actually created value.**

Scrum is one framework for helping organizations do that. But Scrum ceremonies don't create agility.

You can strictly adhere to every ceremony in Jira and still have a waterfall organization.

**The real signal is flow, feedback, value, and risk reduction with every next sprint.**
