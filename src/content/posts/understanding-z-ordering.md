---
title: "Understanding Z-Ordering"
pubDate: 2026-07-26
---

Almost every optimization in analytical data platforms exists to answer one question:

> **How can we avoid reading unnecessary data?**

The less data a query reads from storage, the faster it runs.

---

## Storage vs Data Layout

## Storage

Storage answers:

> **Where do the bytes live?**

Examples:

- Amazon S3
- Azure Data Lake Storage
- Google Cloud Storage
- HDFS
- SSDs

Storage is concerned with:

- durability
- availability
- throughput
- latency
- cost

Storage does not understand SQL queries or business meaning.

It simply stores bytes.

Example:

```
sales/

part-00001.parquet
part-00002.parquet
part-00003.parquet
```

---

## Data Layout

Data layout answers:

> **How are those bytes organized?**

The same storage system can contain different layouts.

The storage is identical, but the organization is different.

## Random Layout

```
File 1

Customer 45
Customer 9000
Customer 12
Customer 700000
```

The file contains a wide range of values.

Metadata:

```
min = 12
max = 700000
```

This is not very useful for skipping.

---

## Optimized Layout

```
File 1

Customer 1-10000


File 2

Customer 10001-20000
```

Metadata:

```
File 1

min = 1
max = 10000


File 2

min = 10001
max = 20000
```

Now the engine can eliminate files quickly.

The storage did not change.

The layout changed.

---

## Why Data Layout Matters

Modern analytical systems use columnar formats such as Parquet.

Every Parquet file contains statistics.

Example:

```
File A

CustomerID

min = 1
max = 10000


File B

CustomerID

min = 10001
max = 20000
```

Query:

```sql
SELECT *
FROM sales
WHERE customer_id = 15000;
```

The engine performs data skipping:

```
File A  -> Skip
File B  -> Read
File C  -> Skip
File D  -> Skip
```

The query becomes faster because unnecessary files are never opened.

---

## Partitioning

Partitioning is a layout strategy that organizes files into directories.

Example:

```
sales/

├── year=2024/
│
│   part-001.parquet
│
└── year=2025/

    part-001.parquet
```

Query:

```sql
SELECT *
FROM sales
WHERE year = 2025;
```

The engine only considers:

```
year=2025/
```

The 2024 data is ignored.

This is called:

> **Partition pruning**

---

## When to Partition

Good partition columns:

- year
- month
- country
- region

Poor partition columns:

- customer_id
- transaction_id
- user_id

Why?

Because high-cardinality columns create too many small partitions.

Example:

```
customer_id=1/
customer_id=2/
customer_id=3/
...
customer_id=500000000/
```

This creates a partition explosion.

---

## Indexes

Traditional databases solve query lookup differently.

They create an additional data structure.

Example:

```
             INDEX

CustomerID

100  -------------> Row 10

101  -------------> Row 22

102  -------------> Row 45


             TABLE

Actual Data
```

The table itself does not change.

The index provides a shortcut.

A B-tree index is like the index at the back of a textbook.

The textbook remains unchanged.

The index tells you where to go.

---

## Why Data Lakes Usually Do Not Use Traditional Indexes

Traditional databases are optimized for:

- many small queries
- frequent updates
- point lookups

Example:

```sql
SELECT *
FROM customers
WHERE customer_id = 12345;
```

Analytical data platforms are different.

They handle:

- billions of rows
- large scans
- batch processing
- mostly immutable data

Maintaining indexes at petabyte scale becomes expensive.

Instead, systems like Delta Lake rely on:

- partition pruning
- Parquet statistics
- predicate pushdown
- data skipping
- optimized file layout

---

## Z-Ordering

Z-ordering comes from the Morton order, a mathematical technique for organizing multidimensional data.

The problem:

Imagine queries filtering on:

```
customer_id

AND

order_date
```

Sorting by one column helps.

Sorting by the other helps a different query.

But normal sorting cannot optimize both dimensions at the same time.

---

## The Idea Behind Z-Ordering

Z-ordering creates an ordering that keeps related values physically close.

Example:

Before:

```
File 1

Customer 100     Jan 1
Customer 9000    Jan 30
Customer 200     Jan 2
Customer 8000    Jan 29
```

After Z-ordering:

```
File 1

Customer 100     Jan 1
Customer 101     Jan 1
Customer 102     Jan 2


File 2

Customer 8900    Jan 29
Customer 8950    Jan 29
Customer 9000    Jan 30
```

Rows with similar values are stored near each other.

---

## What Happens During Z-Ordering?

When you run:

```sql
OPTIMIZE sales
ZORDER BY (customer_id, order_date);
```

Databricks does not simply update metadata.

It performs a physical rewrite.

The process:

```
Existing Files

       |
       v

Read Data

       |
       v

Reorganize Rows

       |
       v

Write New Parquet Files

       |
       v

Update Delta Transaction Log
```

The physical data layout changes.

The metadata improves because the new files have better statistics.

---

## Index vs Z-Ordering

The difference:

## Index

Creates another structure.

```
Index

   |
   v

Existing Table
```

The data stays where it was.

---

## Z-Ordering

Changes the data itself.

```
Original Table

       |
       v

Reorganized Table
```

No separate lookup structure exists.

---

## Library Analogy

## Storage

Where is the library?

```
Building location
```

---

## Layout

How are books arranged?

```
Shelf organization
```

---

## Partitioning

Which floor contains the books?

```
History floor
Science floor
Technology floor
```

---

## Index

A catalog telling you:

```
Machine Learning
    |
    v
Shelf 12, Row 4
```

---

## Z-Ordering

Physically rearranging books so related topics sit together.

---

## Data Engineer's Mental Model

Modern analytical systems are not primarily trying to make computation faster.

They are trying to reduce unnecessary movement of data.

The hierarchy is:

```
Storage

Where are bytes?

        |
        v

Layout

How are bytes organized?

        |
        v

Partitioning

Which large sections can we skip?

        |
        v

Data Skipping

Which files can we ignore?

        |
        v

Z-Ordering

How do we improve locality?

        |
        v

Less I/O

        |
        v

Faster Queries
```

---

## Final Takeaway

The difference between these concepts:

| Concept       | Purpose                               |
| ------------- | ------------------------------------- |
| Storage       | Where bytes live                      |
| Data Layout   | How bytes are organized               |
| Partitioning  | Eliminate large sections of data      |
| Index         | Separate lookup structure             |
| Z-ordering    | Physically organize data for locality |
| Data Skipping | Avoid reading unnecessary files       |

The fundamental goal behind all of them is the same:

> **Read less data, move fewer bytes, and make analytical queries faster.**
