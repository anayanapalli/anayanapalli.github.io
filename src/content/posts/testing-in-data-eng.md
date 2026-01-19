---
title: "Testing in Data Engineering"
pubDate: 2026-01-14
---

Testing in data engineering is often discussed as an extension of traditional software testing. This framing is misleading. The two disciplines differ not because of tooling or scale, but because they relate to reality in fundamentally different ways.

In traditional software engineering, the system defines its own reality.

In data engineering, the system observes reality and attempts to preserve it.

This distinction changes what correctness means, what failures look like, and what testing is ultimately responsible for.

Consider a simple example: computing daily revenue.

The software engineering case
A software engineer might implement this requirement as a function:

```python
def daily_revenue(transactions):
    total = 0
    for t in transactions:
        if "amount" not in t:
            raise ValueError("missing amount")
        if t["amount"] < 0:
            raise ValueError("amount must be non-negative")
        total += t["amount"]
    return total

def test_daily_revenue():
    transactions = [
        {"amount": 100},
        {"amount": 50},
        {"amount": 25},
    ]
    assert daily_revenue(transactions) == 175
```

Here, correctness is deterministic. The function defines what inputs are valid and how invalid inputs are handled. If the input violates the contract, the system is correct to fail. The tests prove correctness because **the system owns the definition of correctness.**

Once these tests pass and the code is deployed, the problem is considered solved until the code changes.

**The data engineering case**

Now consider the same requirement implemented as a data pipeline.

Purchase events are ingested from production systems:

```bash
{
  "event_id": "e123",
  "user_id": "u456",
  "amount": 100,
  "currency": "USD",
  "timestamp": "2026-01-10T12:34:56Z"
}
```

A daily aggregation computes revenue:

```sql
SELECT
  DATE(timestamp) AS day,
  SUM(amount) AS daily_revenue
FROM purchase_events
GROUP BY day;
```

Tests encode expectations:

- Amount should be present and non-negative.
- Daily event volume should be within historical bounds.
- Revenue should not drop abruptly without explanation.

For months, these tests pass.

Then a new mobile client version is released. For a small fraction of real purchases, a logging bug causes the amount field to be null. The payments still succeed. Money still moves. Only the data representation is imperfect.

The pipeline does not crash. The aggregation still runs.

At this point, enforcing the contract as software would produce “correct” behavior in the wrong sense:

```sql
SELECT
  DATE(timestamp) AS day,
  SUM(amount) AS daily_revenue
FROM purchase_events
WHERE amount IS NOT NULL
GROUP BY day;
```

Rows with null amounts are dropped. Tests pass. Dashboards look clean.

But the reported revenue is now **lower than reality.** The system **did not fail loudly.** It **silently _drifted_ from the truth.**

The small anomaly is not the problem. The danger comes from **accumulation.** Each new batch with similar anomalies gradually shifts aggregates, distributions, and downstream features. ML models trained on historical data learn incorrect patterns. Dashboards mislead decisions.

And that is why drift is so dangerous.

**A broken pipeline is obvious. A drifting one is confident and wrong.**

Catching drift is only half the battle. Mature data teams handle it in a loop:

- **Detection** – layered tests and observability alerts identify anomalies.
- **Diagnosis** – investigate whether anomalies come from late events, upstream system errors, or schema changes.
- **Upstream resolution** – fix the source of the anomaly (e.g., a client logging bug) to prevent future misalignment.
- **Correction in the pipeline** – backfill missing or corrected records, recompute aggregates, and restore alignment with reality.
- **Continuous monitoring** – maintain alerts and observability to detect future drift immediately.

The philosophy is clear: **never discard evidence of reality.**

This example captures the core asymmetry.

The same rule, “amount must be present and non-negative,” has opposite meanings. In software, it **constrains behavior.** In data systems, it describes **a belief about how the world behaves.**

In data engineering, the system is an observer. It sits downstream of humans, devices, networks, markets, laws, and time zones. **None of those are under your control.** So a “failure” might mean:

- the world changed,
- the observation was delayed,
- the source lied,
- the pipeline broke,
- or your assumptions expired.

Testing here is not about proving correctness. It is about **maintaining alignment with reality.**

That is why data tests look so strange compared to software tests. They are **continuous, statistical, probabilistic, temporal, and layered.** They ask questions like:

- Does this still look like the same world?
- Are we missing parts of reality?
- Did meaning change without notice?
- Are we drifting slowly away from the truth?

Testing in data engineering is complex precisely because the service you are providing is **institutional memory.** You are not just computing answers. You are preserving evidence.

Once you see it this way, a lot of things stop being confusing:

- Why there are so many different tests at various stages
- Why tests are soft instead of binary
- Why backfills are dangerous
- Why immutability matters
- Why lakehouses emerged
- Why trust erodes silently

This complexity is not accidental. It is the cost of honesty in a messy world.

And that, in the end, is what testing in data engineering really about: **making sure systems remember faithfully, even when reality refuses to be clean.**
