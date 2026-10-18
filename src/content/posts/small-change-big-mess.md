---
title: "Small Change, Big Mess"
pubDate: 2026-08-25
---

Software rarely becomes difficult to change because someone set out to ruin it. More often, a team makes a reasonable choice under a real deadline.

“We just need a small workaround.”

The workaround ships. The tests pass. The feature works. Someone says they will clean it up later.

Usually, later brings another deadline.

## A workaround becomes a pattern

Imagine an order-processing system with clear responsibilities: orders arrive, get validated, are processed, and then go downstream. The business asks the team to support a special order type by Friday. A proper abstraction might take longer, so an engineer adds a conditional:

```text
if order.type == "SPECIAL":
    do_special_thing()
else:
    process_normally()
```

It works, and the team moves on.

A few weeks later, another special order type arrives. A new engineer sees the existing code and extends it:

```text
if order.type == "SPECIAL":
    do_special_thing()
elif order.type == "SPECIAL_2":
    do_another_special_thing()
else:
    process_normally()
```

That works too. Over time, more cases accumulate. Eventually, no one remembers why some of them exist. A warning like “don’t touch this” takes the place of an explanation.

That is how a local decision can turn into a system-wide constraint. The first workaround was understandable. The trouble is that each later change treated it as an established design.

## Working code gets built on

Code that fails is likely to attract attention. Code that works can remain in place long enough for other parts of the system to depend on it.

The original author may leave. The deadline that prompted the workaround may be forgotten. Years later, another engineer sees the code and assumes there must be a strong reason for it. Sometimes there is; sometimes there was only a Friday deadline.

Then comes a request to change how special orders are processed. It sounds small. A search through the repository finds related logic in the API, validation service, database tables, batch jobs, reporting pipeline, notifications, an obscure Excel export, and a configuration file named `legacy_special_order_final_v2.json`.

Somewhere there is a comment:

```text
// DO NOT CHANGE THIS
// See John
```

John left in 2021. The change takes two weeks to investigate before anyone modifies the system.

The cost came from more than one bad decision. Each shortcut became an assumption that later work built on. Eventually, the system was a record of past decisions, many of which no one could explain. Changing it meant doing archaeology.

## Workarounds become organizational knowledge

Teams adapt to systems they cannot easily change. New engineers learn which service calls which database directly, which parts are unsafe to refactor, and whom to ask when the documentation runs out.

“Don’t worry about it.”

“We tried that once.”

“Nobody knows.”

Those answers can keep work moving in the short term. But when they become the main way the team understands its system, tribal knowledge replaces an explicit account of how it works. One long-tenured engineer can become a critical part of the infrastructure simply because they remember enough of its history.

This is not only a code problem. It is also a culture problem. If engineers learn that their job is to close the ticket and avoid asking questions, tactical work becomes the norm. If every attempt to improve the system is postponed because the next feature is due Friday, refactoring starts to look irresponsible.

A company can repair a bad piece of code. It is harder to change a culture that has come to treat unmaintainable code as ordinary.

## More people do not automatically make the work faster

When development slows, hiring more engineers can help. But new people also need to learn the system, its exceptions, and its unwritten rules. They need time from people who already understand it. More people can mean more coordination and more meetings, leaving less time to reduce the complexity that is slowing everyone down.

That does not make hiring a mistake. It means headcount alone cannot solve a system whose main cost is the effort required to understand and change it.

The same environment wears down engineers who want to improve the system. They can handle difficult code. What is exhausting is being asked to work around the same problems indefinitely, with no time to make them less difficult. Some eventually leave. The organization may retain people skilled at operating the existing system, while losing people who were pushing to change it.

## Rewrites inherit what the old system knows

A rewrite can be necessary, but it does not erase the system’s history. A decade-old application may contain customer-specific rules, unusual edge cases, and integrations that no one remembers adding. Some are documented; many are encoded only in the behavior of the software.

The old system may be ugly, but it still embodies business knowledge. A new implementation must recover that knowledge before it can safely replace the old behavior. Otherwise, requirements that nobody thought to write down will surface as missing functionality after the rewrite ships.

## AI lowers the cost of producing code

AI changes how quickly software can be produced. An engineer once had to understand a problem, design a solution, write it, debug it, and test it. Now a model can generate an API in seconds, then add authentication, caching, retries, and integrations on request.

That speed is useful. It also makes it easier to produce more code than a team can carefully review or understand.

The cost of writing code is falling. The cost of understanding it is not. Human attention has not expanded along with the output of language models. A team can generate tens of thousands of lines quickly; it cannot understand those lines in a few minutes.

That gap makes maintainability a more pressing concern. Generated code still becomes part of a system that people must debug, operate, and change. If no one can explain it, the speed of its creation offers little help when it fails or needs to evolve.

## Match the effort to the life of the software

A one-time script to rename files, a prototype, or an internal tool that will be discarded in a few weeks can be treated differently from a system expected to run for years. AI can be especially useful for the former, where speed matters and the cost of future maintenance is limited.

For long-lived software, “Can AI build this?” is not the only useful question. A more important one is whether people will be able to understand and safely change it years from now.

The test is not whether the code was written by a person or generated by a model. It is whether the team can explain what the system does, why it behaves that way, and how to change it without rediscovering its history from scratch.
