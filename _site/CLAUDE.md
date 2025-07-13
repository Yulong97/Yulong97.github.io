# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal academic website built with Jekyll using the Bay theme. The site showcases research work, publications, and blog posts for Yulong Liu, a Ph.D student focusing on e-textile devices and battery-less sensing.

## Architecture

**Jekyll-based static site** with the following structure:
- **Theme**: Bay Jekyll theme (customized from https://github.com/eliottvincent/bay)
- **Layout system**: Uses Jekyll's templating with `{% include %}` and `layout:` in front matter
- **Content**: Markdown files in `_posts/` for blog content, with pages defined as `.md` files
- **Styling**: Sass-based CSS in `_sass/` directory, compiled to main.css
- **Asset pipeline**: Images, JS, PDFs in `assets/` directory

## Key Files & Directories

- `_config.yml`: Site configuration (title, description, navigation, social links)
- `index.md`: Home page content with profile and news
- `_layouts/`: HTML templates (home, post, default, research, work)
- `_includes/`: Reusable components (header, footer, head, foot)
- `_sass/`: Sass stylesheets for different page types
- `_posts/`: Blog posts in markdown format
- `assets/`: Static assets (images, CSS, JS, PDFs)

## Development Commands

**Local development:**
```bash
bundle install
bundle exec jekyll serve
```

**Build for production:**
```bash
bundle exec jekyll build
```

**Clean build:**
```bash
bundle exec jekyll clean
bundle exec jekyll build
```

## Content Management

**Adding blog posts:**
Create new `.md` files in `_posts/` with format: `YYYY-MM-DD-title.md`
Include front matter:
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [category1, category2]
tags: [tag1, tag2]
---
```

**Updating navigation:**
Modify `_config.yml` under `header:` section

**Adding research/work content:**
Edit `research.md` and `work.md` pages

## Configuration Details

- **Base URL**: Configured for GitHub Pages (`/")
- **Analytics**: Google Analytics ID configured
- **Social links**: Email, WeChat, Twitter, LinkedIn, GitHub in footer
- **Images**: Profile picture sources defined in front matter
- **CV**: Located at `assets/pdf/cv_liuyulong.pdf`

## Dependencies

- Jekyll 4.0.0
- jekyll-feed plugin
- Sass for styling
- Ruby gems managed via Bundler