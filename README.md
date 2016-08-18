# parallaxify
JavaScript snippet to easily add a subtle parallax effect to background-images. No longer requires jQuery.

## javascript
Just use `parallaxify('.image_container');` to activate the effect. Of course, you can use it on an element with any class.

## css
Use this css for your element:
```
.image_container {
  background-image: url('./images/example.jpg');
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 0%;
  background-repeat: no-repeat;
}
```
