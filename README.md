# parallaxify

A zero-dependency, super-lightweight JavaScript snippet to add a subtle parallax effect to background-images

![Demo](demo.gif)

## Usage

### HTML

```html
<script src="parallaxify.js"></script>
```

### JavaScript

```js
document.addEventListener("DOMContentLoaded", (event) => {
  parallaxify(".some-class");
});
```

### CSS

```css
.some-class {
  height: 130px; /* any value smaller than the image height */
  background-image: url("some-image.jpg");
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 0%;
  background-repeat: no-repeat;
}
```
