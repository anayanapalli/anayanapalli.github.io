---
layout: page
title: Bookfolio
---

<!-- Include DataTables CSS and JS files -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>

<script>
    $(document).ready(function () {
        // Initialize DataTable without the "Show [ ] entries" dropdown
        $('#bookTable').DataTable({
            "lengthChange": false
        });
    });
</script>

## 📖 Currently Reading:

[Stuff Matters: Exploring the Marvelous Materials That Shape Our Man-Made World](https://www.amazon.ca/gp/product/0544483944/ref=ox_sc_saved_image_9?smid=A3138YT622QJ7K&psc=1)

## 📚 Books That I Read:

<table id="bookTable">
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th>Review</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Curious: The Desire to Know and Why Your Future Depends On It</td>
            <td>Ian Leslie</td>
            <td>4</td>
            <td>I was looking for a book on the topic and this is the only one that I found. Yeah, it's a good read with some interesting stories and solid research behind it. I would give it a four or 3.5.I was looking for a book on the topic and this is the only one that I found. Yeah, it's a good read with some interesting stories and solid research behind it. I would give it a four or 3.5.I was looking for a book on the topic and this is the only one that I found. Yeah, it's a good read with some interesting stories and solid research behind it. I would give it a four or 3.5.I was looking for a book on the topic and this is the only one that I found. Yeah, it's a good read with some interesting stories and solid research behind it. I would give it a four or 3.5.</td>
        </tr>
        <tr>
            <td>Example Book 2</td>
            <td>Author 2</td>
            <td>3.5</td>
            <td>This is a sample review for the second book. It has some unique content and provides valuable insights. I'd rate it 3.5 out of 5.</td>
        </tr>
        <tr>
            <td>Another Book</td>
            <td>Author 3</td>
            <td>5</td>
            <td>Absolutely loved this book! It's a must-read with a compelling storyline and well-developed characters. Solid 5 out of 5.</td>
        </tr>
        <!-- Add more rows as needed -->
    </tbody>
</table>
