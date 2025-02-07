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

-----

# Use of external fonts

1. **Select the typeface**: Choose a typeface from the platform of your choice (Google Fonts, Adobe Fonts, Font Squirrel, etc.).

2. **Obtain the font** in one of the following two ways:
    - Use a link to a CDN to include it directly in the HTML.
    - Download the font and serve it from my website

3. **Include the link or import the font:
    - If the service provides a link, you add it inside the `<head>` tag of your HTML document.
    - If you have font files, you upload them to your server and declare them using the `@font-face` rule in your CSS file.

4. **Apply the font in CSS**: Use the `font-family` property to apply the font selected in your CSS file to the desired elements.


Which method to choose?

1. Use a link (CDN)
    - Advantages:
      - Simplicity: You just need to copy and paste a link into your HTML. It is easy to set up and quick to implement.
      - Performance: Many popular fonts (such as Google Fonts) are widely used, so users are likely to already have the font cached in their browsers, improving loading.
      - Maintenance: The service takes care of updating and maintaining the fonts, reducing the workload.
      - Access to high-quality fonts: Services such as Google Fonts and Adobe Fonts offer a wide variety of high-quality fonts that are optimised for web use.

    - Disadvantages:
      - External dependency: If the CDN service goes down or has problems, fonts will not load correctly, which could affect the appearance of your page.
      - Performance: In some cases, relying on an external server can increase load times, especially if the server is far away from the user or if the connection is slow.
      - Privacy: When using an external service, user data may be shared with the service provider (e.g. Google Fonts). This could be an issue if you want to maintain user privacy, especially in regions with strict data protection laws such as GDPR.

2. Using local files with @font-face
    - Advantages:
        - Full control: You have full control over the fonts, as you download and use them from your own server. You are not dependent on an external service.
        - Better performance: If font files are hosted locally, they can load faster, especially if the server is close to the user.
        - Privacy: No information is shared with an external service, which is an advantage from a privacy point of view.

    - Disadvantages:
        - Increased complexity: You need to manage font uploads, make sure the files are available on the server and set up @font-face correctly.
        - File size: Font files can be heavy, especially if you use several variants (e.g. different weights or styles), which could affect page load time.
        - Compatibility: You need to ensure that font formats are compatible with all browsers (e.g. .woff, .woff2, .ttf, etc.).
        - Maintenance: You are responsible for font updates, which may require more work.