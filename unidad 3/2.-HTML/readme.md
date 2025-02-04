# Lazy Loading of Images

**Lazy loading of images** is a web performance optimization technique that involves loading images on a webpage only when they are needed, meaning when they are about to be viewed by the user. This technique is especially useful on pages with many images or multimedia content, as it improves initial loading times.

## What is lazy loading?

Instead of loading all the images on a page immediately when the site loads, with lazy loading, only the images that are visible to the user at that moment are loaded. Images off-screen (for example, those further down a long page) are not loaded until the user scrolls and they become visible on the screen. In this way, the browser will load the images as they approach the viewport while the user scrolls. How far from the bottom of the viewport? It depends on each browser and its settings.

### Benefits of lazy loading

1. **Improved initial loading time**: By not loading all the images upfront, the page loads faster, improving the user experience.
2. **Reduced data consumption**: Images that are not seen are not loaded, saving bandwidth, especially on mobile devices.
3. **Better performance on devices with limited resources**: Devices with little memory or processing power benefit from not loading unnecessary images.
4. **SEO optimization**: While Google and other search engines can read content that is loaded lazily, using this technique improves the user experience, which can positively influence rankings.

## How to implement lazy loading of images?

Lazy loading can be easily implemented by using the `loading="lazy"` attribute on images in HTML. This attribute tells the browser not to load the image until it is close to being viewed. Here's a basic example:

```html
<img src="image.jpg" alt="Image description" loading="lazy">
```

# Alternative with JavaScript

The Intersection Observer API allows you to use JavaScript to apply this technique. This API detects when an image enters the user's viewport and loads it at that moment.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('img[data-src]');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Load the image from 'data-src'
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    observer.observe(img);
  });
});
```

In this example, images are only loaded when they are about to be viewed by the user. The image source is stored in the data-src attribute and is only assigned to the src attribute when the image enters the visible area.