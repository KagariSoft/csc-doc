<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kagaristyle@latest/dist/css/common.min.css" />

# Examples

<div class="example">
    <button>Default</button>
    <button class="kg__btn kg__btn-primary">Primary</button>
    <button class="kg__btn kg__btn-success">Success</button>
    <button class="kg__btn kg__btn-warning">Warning</button>
    <button class="kg__btn kg__btn-danger">Danger</button>
</div>

```html
<button>Default</button>
<button class="kg__btn kg__btn-primary">Primary</button>
<button class="kg__btn kg__btn-success">Success</button>
<button class="kg__btn kg__btn-warning">Warning</button>
<button class="kg__btn kg__btn-danger">Danger</button>
```

## Disabled state

<div class="example">
    <button disabled>Default</button>
    <button class="kg__btn kg__btn-primary" disabled>Primary</button>
</div>

```html
<button button disabled>Default</button>
<button class="kg__btn kg__btn-primary" disabled>Primary</button>
```

## Size state

This adjusts the width in percentages of the button

<div class="example">
    <button>Default</button>
    <button class="kg__btn kg__btn-primary kg__btn-20">Primary</button>
    <button class="kg__btn kg__btn-success kg__btn-30">Success</button>
    <button class="kg__btn kg__btn-warning kg__btn-50">Warning</button>
    <button class="kg__btn kg__btn-danger kg__btn-100">Danger</button>
</div>

```html
<button>Default</button>
<button class="kg__btn kg__btn-primary kg__btn-20">Primary</button>
<button class="kg__btn kg__btn-success kg__btn-30">Success</button>
<button class="kg__btn kg__btn-warning kg__btn-50">Warning</button>
<button class="kg__btn kg__btn-danger kg__btn-100">Danger</button>
```

## Block

By default the buttons are set to `inline-block`.

<div class="example_inblock">
    <button>Default</button>
    <button class="kg__btn kg__btn-primary kg__btn-block">Primary</button>
    <button class="kg__btn kg__btn-success kg__btn-block">Success</button>
    <button class="kg__btn kg__btn-warning kg__btn-block">Warning</button>
    <button class="kg__btn kg__btn-danger kg__btn-block">Danger</button>
</div>

## Laguage (jp)
To set the Japanese language inside a button, you must use the `lang="ja"` attribute inside the button tag.

<div class="example">
    <button class="kg__btn kg__btn-primary" lang="ja">プライマリ</button>
</div>

```html
<button class="kg__btn kg__btn-primary" lang="ja">プライマリ</button>
```