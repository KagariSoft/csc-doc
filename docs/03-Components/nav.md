---
title: NavBar
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kagaristyle@1.1.0-0/dist/css/common.min.css"/>


<div class="example">
    <iframe src="/embed/nav.html" class="iframe" height="50px"></iframe>
</div>

```html
<header>
    <nav class="kg__nav kg-space__between kg-container">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
        </ul>
    </nav>
</header>
```

## Left and Right nav items

```html
<header>
    <nav class="kg__nav kg-space__between">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
        </ul>
    </nav>
</header>
```

## Container style

```html
<header>
    <nav class="kg__nav kg-container">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>
```

### Expanded container
:::info
 To use the expanded container, it is mandatory to use `kg-container`
:::

```html
<header>
    <nav class="kg__nav kg-container kg-expanded">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>
```

## Dark Style

```html
<header class="kg-dark">
    <nav class="kg__nav kg-container">
        <ul>
            <li><a class="kg-dark" href="#">Home</a></li>
            <li><a class="kg-dark" href="#">Products</a></li>
            <li><a class="kg-dark" href="#">Contact</a></li>
            <li><a class="kg-dark" href="#">About</a></li>
        </ul>
    </nav>
</header>
```

## Sticky

```html
<header class="kg-sticky">
    <nav class="kg__nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>
```