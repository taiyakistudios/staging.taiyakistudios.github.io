# Taiyaki Studios Website

## 🚀 Quick Start

Navigate into the site’s directory and start it up.

```shell
# If you haven't already, install the dependencies
npm install

npm run develop
```

The site is now running at http://localhost:8000.

## 🚀 Git Workflow

This is a step-by-step guide on how to utilize the Git Worfklow for this repo. Note that GitHub's online editor may do most of these steps for you.

1. Check out the `staging` branch and `git pull origin`
2. Branch out from the `staging` branch e.g. `git checkout -b adrian/add-new-guide-page`
3. Make and commit the changes, and then push the branch:
   i. `git add -A`
   ii. `git commit -m "<Describe the change here>"`
   iii. `git push origin adrian/add-new-guide-page`
4. Create a pull request to merge the branch into staging e.g. `adrian/add-new-guide-page` > `staging`

Once the pull request has been accepted, the changes will be merged into staging. For these changes to be available in production, another pull request from `staging` to `main` would be required.

## ✍️ Editing Content

The website is powered by two different types of content: YAML (`.yaml`) and Markdown (`.md`). All of the content can be found under the `/src/content` directory.

### YAML

The website's static pages such as the Home and About pages use YAML content. Each of these pages have their own associated YAML file. For example:

- Home page - `index.yaml`
- About page - `about.yaml`

These files can be found under the `/src/content/yaml` directory.

### Markdown

The website can generate pages from Markdown (`.md`) files. Currently these are only generated for guides and careers pages.

To add a new Markdown page for guides or careers:

1. **Create a folder with the page slug as its name**. For example, to create an Unreal Engine guide page, a folder called `unreal-engine` would be added.
2. **Create a Markdown file with the page slug as its name inside the newly created folder**. Continuing our example, for an Unreal Engine guide page, an `unreal-engine.md` file would be created.
3. **Inside the markdown file, set the page metadata.** The page metadata contains things like the page title and description. They are stored inside the "frontmatter" section which is always at the top of the markdown file.

```markdown
// unreal-engine.md

---

// This has to match the folder and markdown file names
slug: 'unreal-engine'

// Currently only 'guide' and 'career' categories are available
category: 'guide'

// This is optional at the moment, but a good practice to set
date: '2022-11-15'

// The title of the page (relevant for SEO)
title: 'Unreal Engine Guide'

// The description of the page (relevant for SEO)
description: 'This is the unreal engine guide'

// If set to 'false', the page will not be generated
published: true

---

Enter the page's markdown content here.
```

4. **Add an image to the folder and reference it by name**. To add an image, first add it to the folder e.g. `unreal-engine` folder. Then, copy paste the name when referencing it in the markdown file e.g. `![Example image](example-image.png)`.

> **Note:** Check out existing markdown folders and pages for reference.

## 🧐 Learn More

### Gatsby

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

### Yaml

- [Quick Guide](https://learnxinyminutes.com/docs/yaml/)
