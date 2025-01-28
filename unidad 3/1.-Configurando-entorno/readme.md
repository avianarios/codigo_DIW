# `index.html` should be outside the `html` directory

## 1. **Standard convention**
By convention, **`index.html`** is considered the main file or "home page" of a website. Web servers (like Apache, Nginx, or local servers such as Python HTTP Server) are configured to automatically look for a file named `index.html` or `index.htm` when a user accesses a root directory or any subdirectory.

- If `index.html` is in the **root directory** of the project (outside folders like `html/`), you don’t need to specify the full path. For example:
  ```
  https://my-site.com/
  ```
  Automatically translates to:
  ```
  https://my-site.com/index.html
  ```

If `index.html` were inside a subdirectory like `html/`, you would need to explicitly include it in the URL:
```
https://my-site.com/html/index.html
```

## 2. **Ease of access**
Placing `index.html` outside the `html/` directory and in the root simplifies access. This is especially useful for **user experience** and **SEO** because:
- Shorter URLs are easier to remember.
- It improves the visual presentation of your URL.

For example:
- ✅ `https://my-site.com/` is clearer and cleaner than `https://my-site.com/html/index.html`.

## 3. **Compatibility with server defaults**
Web servers are configured to look for an `index.html` in each directory as the default file to serve. If `index.html` is in a subdirectory, you would need to explicitly configure the server to redirect or change the document root (which is not always ideal).

## 4. **Project organization**
- Keeping `index.html` in the root allows better organization of additional resources (images, scripts, and styles) in subdirectories like `css/`, `js/`, or `assets/`.
- If you place `index.html` in `html/`, it can become confusing when structuring other files, and it breaks the standard convention.

---

**Summary**: keeping `index.html` in the root directory is a **best practice** that simplifies site management and makes it more accessible to users while ensuring compatibility with common server configurations.
