---
title: Buttons
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kagaristyle@1.1.5/dist/css/common.min.css"/>


<div class="example">
    <button>Default</button>
    <button class="kg-primary">Primary</button>
    <button class="kg-success">Success</button>
    <button class="kg-warning">Warning</button>
    <button class="kg-danger">Danger</button>
</div>

```html
<button>Default</button>
<button class="kg-primary">Primary</button>
<button class="kg-success">Success</button>
<button class="kg-warning">Warning</button>
<button class="kg-danger">Danger</button>
```

## Link buttons

```html
<a class="kg__button" href="#">Link Button</a>
```

## Disabled state

<div class="example">
    <button disabled>Default</button>
    <button class="kg-primary" disabled>Primary</button>
</div>

```html
<button button disabled>Default</button>
<button class="kg-primary" disabled>Primary</button>
```

## Size state

This adjusts the width in percentages of the button

<div class="example">
    <button>Default</button>
    <button class="kg-primary kg-20">Primary</button>
    <button class="kg-success kg-30">Success</button>
    <button class="kg-warning kg-50">Warning</button>
    <button class="kg-danger kg-100">Danger</button>
</div>

```html
<button>Default</button>
<button class="kg-primary kg-20">Primary</button>
<button class="kg-success kg-30">Success</button>
<button class="kg-warning kg-50">Warning</button>
<button class="kg-danger kg-100">Danger</button>
```

## Block

By default the buttons are set to `inline-block`.

<div class="example_inblock">
    <button class="kg-block">Default</button>
    <button class="kg-primary kg-block">Primary</button>
    <button class="kg-success kg-block">Success</button>
    <button class="kg-warning kg-block">Warning</button>
    <button class="kg-danger kg-block">Danger</button>
</div>

```html
<button class="kg-block">Default</button>
<button class="kg-primary kg-block">Primary</button>
<button class="kg-success kg-block">Success</button>
<button class="kg-warning kg-block">Warning</button>
<button class="kg-danger kg-block">Danger</button>
```

### Ampersand modification list

* `kg-block`: Sets the button to `block`
* `kg-primary`: Sets the button to `primary`
* `kg-success`: Sets the button to `success`
* `kg-warning`: Sets the button to `warning`
* `kg-danger`: Sets the button to `danger`
* `kg-20`: Sets the button to `20%` width
* `kg-30`: Sets the button to `30%` width
* `kg-50`: Sets the button to `50%` width
* `kg-100`: Sets the button to `100%` width


#### Suported tags

* `input(submit)`
* `input(reset)`
* `a`
* `button`