# Index

1. [Project structure](#1-project-structure)
2. [Placement of `index.hmtl`](#2--placement-of-indexhtml)
3. [File names](#3--file-names)

----

# 1. Project structure

In web development, the organisation of the project in directories is not only a matter of order, but an **essential practice** that directly impacts the efficiency, maintainability and scalability of the work. A well-defined folder structure allows:

1. **Facilitate collaboration**: When several developers are working on a project, a clear organisation avoids confusion and ensures that everyone can quickly find the files they need.
   
2. **Improve maintenance**: A well-structured project is easier to update and debug. Knowing where each file is saves time and reduces errors.

3. 3. **Scalability**: As the project grows, an organised structure allows new functionality to be added without chaos. Each component, style or script has its defined place.

4. **Workflow optimisation**: Tools such as Vite, Webpack or Parcel work best when files are logically organised, allowing for more efficient compilation and building.

5. **Clarity and professionalism**: A well-organised project reflects professionalism and attention to detail, qualities valued in teams and personal projects alike.

In short, investing time in designing a coherent directory structure is not only good practice, but an **investment in the quality and success of the project**.

The following structure is the one I recommend to work with. Not all the file types and directories in it will appear for some time.

```
project/
├── src/
│   ├── index.html
│   ├── html/
│   │   ├── about.html
│   │   ├── services.html
│   │   └── contact.html
│   ├── styles/
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _variables.scss
│   │   ├── components/
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   └── _forms.scss
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   └── _grid.scss
│   │   ├── pages/
│   │   │   ├── _home.scss
│   │   │   ├── _services.scss
│   │   │   └── _contact.scss
│   │   └── main.scss
│   ├── js/
│   │   ├── main.js
│   │   ├── components/
│   │   │   ├── menu.js
│   │   │   ├── slider.js
│   │   │   └── form.js
│   │   └── pages/
│   │       ├── home.js
│   │       ├── services.js
│   │       └── contact.js
│   └── assets/
│       ├── img/
│       │   ├── logo.png
│       │   ├── banner.jpg
│       │   └── icons/
│       │       ├── facebook.svg
│       │       ├── twitter.svg
│       │       └── instagram.svg
│       └── fonts/
│           ├── font-regular.woff2
│           ├── font-bold.woff2
│           └── font-italic.woff2
├── node_modules/
├── package.json
├── vite.config.js
├── postcss.config.js
└── .browserslistrc
```


----

# 2- Placement of `index.html`

It should be outside the `html` directory

## 2.1. **Standard convention**
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

## 2.2. **Ease of access**
Placing `index.html` outside the `html/` directory and in the root simplifies access. This is especially useful for **user experience** and **SEO** because:
- Shorter URLs are easier to remember.
- It improves the visual presentation of your URL.

For example `https://my-site.com/` is clearer and cleaner than `https://my-site.com/html/index.html`.

## 2.3. **Compatibility with server defaults**
Web servers are configured to look for an `index.html` in each directory as the default file to serve. If `index.html` is in a subdirectory, you would need to explicitly configure the server to redirect or change the document root (which is not always ideal).

## 2.4. **Project organization**
- Keeping `index.html` in the root allows better organization of additional resources (images, scripts, and styles) in subdirectories like `css/`, `js/`, or `assets/`.
- If you place `index.html` in `html/`, it can become confusing when structuring other files, and it breaks the standard convention.


----

# 3- File names

A descriptive name for files in a web project is crucial for keeping the project organized, easy to understand, and maintainable. Below are some recommendations for naming files in a web project:

1. **Use clear and specific names** that clearly reflect the purpose of the file. Some examples are:
  - `header.js` or `footer.js` for scripts related to those sections.
  - `main.css` or `styles.css` for the main stylesheet file.
  - `index.html` for the main or home page.
  - `contact.html` for a contact page.

2. **Avoid confusing abbreviations**. It’s preferable to use full words that accurately describe the file’s function. Some examples:
  - Use `about-us.html` instead of `abt-us.html`.
  - Use `user-profile.js` instead of `usr-prfl.js`.

3. **Use hyphens to separate words** instead of underscores (`_`) or uppercase letters, as hyphens are more readable. Example:
  - `user-profile.css` instead of `user_profile.css` or `UserProfile.css`.

4. **Include the file type in the name**. It’s important that the file name reflects its type, especially in large projects:
  - `app.js` for the main JavaScript file.
  - `styles.css` for the styles.
  - `config.json` for configuration files.

5. **Maintain a consistent format** for all file names to facilitate reading and teamwork. Some options are:
  - CamelCase example: `userSettings.js`, `footerSection.js`.
  - Hyphen example: `user-settings.js`, `footer-section.js`.

6. **Include versions if necessary**. Example: `styles-v1.0.css`, `main-v2.3.js`.

7. **Avoid special characters**. Avoid using special characters (like `&`, `#`, `%`, etc.) in file names. These can be problematic in URLs and might cause errors in some operating systems. Use letters, numbers, and hyphens to maintain compatibility.

8. **Avoid spaces** as they can cause issues in different contexts. Examples:
  - URLs and links: Spaces in file names must be encoded as `%20` in URLs, which can make links harder to read and prone to errors. For example: `./1.-%20Adding%20JS%20to%20a%20webpage/readme.md`
  - Scripts and terminals: In command-line scripts (like Bash), spaces can break commands unless they are properly handled with quotes or escapes. The following command will fail without quotes:
    ```bash
      cp "1. Adding JS to a webpage/readme.md" destination/
    ```
  - Cross-system compatibility: Some older (or poorly designed) systems or tools may not handle file names with spaces correctly.
  - Maintenance and organization: Spaces make file names more complicated to write or manipulate in code. In comparison, names separated by hyphens (-) or underscores (_) are easier to handle.

Therefore, it is recommended to:
  - Replace spaces with hyphens or underscores: Instead of `1. Adding JS to a webpage/readme.md`, use `1-adding-js-to-a-webpage/readme.md`.
  - Keep names in lowercase: For better consistency and to avoid issues with case-sensitive systems.
  - Avoid special characters like `&`, `#`, or `.` (except for the file extension) in file names.
