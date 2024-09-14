<div id="top" align="center">
<h1>rz-breadcrumbs</h1>

<p>A Web Component for automatic Breadcrumbs</p>

[Report Issue](https://github.com/Zheng-Bote/rz-breadcrumbs/issues) [Request Feature](https://github.com/Zheng-Bote/rz-breadcrumbs/pulls)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![GitHub Created At](https://img.shields.io/github/created-at/Zheng-Bote/rz-breadcrumbs)

</div>

<hr>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Description](#description)
  - [Features](#features)
  - [Status](#status)
    - [Repo](#repo)
    - [Readme](#readme)
    - [Markdown files](#markdown-files)
- [Installation](#installation)
  - [Dependencies](#dependencies)
  - [folder structure](#folder-structure)
  - [Usage/Examples](#usageexamples)
- [API Reference](#api-reference)
  - [Inputs](#inputs)
  - [Outputs](#outputs)
  - [Parameters](#parameters)
- [Documentation](#documentation)
  - [Architecture](#architecture)
    - [Github](#github)
      - [Github Repo](#github-repo)
      - [Github Actions / Workflows](#github-actions--workflows)
  - [Application](#application)
  - [DevOps](#devops)
  - [Github Page](#github-page)
  - [Github Wiki](#github-wiki)
  - [Comments](#comments)
  - [Screenshots](#screenshots)
- [Authors and License](#authors-and-license)
  - [License](#license)
    - [MIT License](#mit-license)
    - [Apache License](#apache-license)
  - [Authors](#authors)
    - [Code Contributors](#code-contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<hr>

# Description

A Web Component for automatic Breadcrumbs.

### Features

- \[x] MIT license
- \[x] works as designed
- \[ ] no bugs
- \[x] plain Vanilla
- \[x] some more or less usefull Github Actions

<p align="right">(<a href="#top">back to top</a>)</p>

## Status

### Repo

![Status](https://img.shields.io/badge/Status-works-green)
![GitHub Release Date](https://img.shields.io/github/release-date/Zheng-Bote/rz-breadcrumbs)

![GitHub Issues](https://img.shields.io/github/issues/Zheng-Bote/rz-breadcrumbs)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Zheng-Bote/rz-breadcrumbs)

### Readme

[![Repo - create Repo-Tree in README.md](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-create_tree_readme.yml/badge.svg)](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-create_tree_readme.yml)
[![Repo - add Actions In/Out to README](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-actions_docu.yml/badge.svg)](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-actions_docu.yml)

[![Repo - update Readme](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-call_Readme.yml/badge.svg)](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-call_Readme.yml)

### Markdown files

[![Repo - create TOC of Markdown files](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-create_doctoc_md.yml/badge.svg)](https://github.com/Zheng-Bote/rz-breadcrumbs/actions/workflows/repo-create_doctoc_md.yml)

create ToC in Markdown files in folders

- .github/actions/\*\*
- .github/workflows/\*\*
- dist/\*\*
- docs/\*\*

<p align="right">(<a href="#top">back to top</a>)</p>

# Installation

copy the folder `assets` in your webfolder and make it readable for your webserver

## Dependencies

modern browser with enabled Javascript

## folder structure

<!-- readme-tree start -->

```
.
├── .github
│   ├── actions
│   │   └── doctoc
│   │       ├── README.md
│   │       ├── action.yml
│   │       └── dist
│   │           ├── index.js
│   │           ├── index.js.map
│   │           ├── licenses.txt
│   │           └── sourcemap-register.js
│   └── workflows
│       ├── repo-actions_docu.yml
│       ├── repo-call_Readme.yml
│       ├── repo-create_doctoc.yml_
│       ├── repo-create_doctoc_md.yml
│       └── repo-create_tree_readme.yml
├── LICENSE
├── LICENSE_Apache-2
├── LICENSE_GPL-2
├── LICENSE_GPL-3
├── LICENSE_MIT
├── README.md
└── tree.bak

5 directories, 18 files
```

<!-- readme-tree end -->

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage/Examples

```HTML
<rz-breadcrumbs></rz-breadcrumbs>
```

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=yes"
    />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <title>rz-breadcrumbs</title>
    <link
      href="/assets/css/rz-breadcrumbs.css"
      rel="stylesheet"
      type="text/css"
    />
    <script src="/assets/js/rz-breadcrumbs.js"></script>
  </head>
  <body>
    <header>
      <div class="nav_menu">
        <h1>rz-breadcrumbs</h1>
      </div>
      <rz-breadcrumbs></rz-breadcrumbs>
    </header>
    <article>
      <h1>web component rz-breadcrumbs example</h1>
      <a href="/urltest1/">urltest1</a>
      <br />
      <a href="/urltest1/urltest2/">urltest2</a>
      <br />
      <a href="/urltest1/urltest2/urltest3/">urltest3</a>
    </article>

    <footer>
      <div class="footer_item">&copy; 2024 ZHENG Robert v1.0.0</div>
    </footer>
  </body>
</html>
```

<p align="right">(<a href="#top">back to top</a>)</p>

# API Reference

## Parameters

_currently no parameters_

<p align="right">(<a href="#top">back to top</a>)</p>

# Documentation

see:

- `assets/js/rz-breadcrumbs.js`
- `assets/css/rz-breadcrumbs.css`

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshots

![App Screenshot](https://github.com/Zheng-Bote/rz-breadcrumbs/blob/main/assets/img/screenshot_20240914_rz-breadcrumbs.png)

<p align="right">(<a href="#top">back to top</a>)</p>

# Authors and License

## License

MIT License

Copyright (c) 2024 ZHENG Robert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

        https://choosealicense.com/licenses/mit/

## Authors

- [![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

### Code Contributors

![Contributors](https://img.shields.io/github/contributors/Zheng-Bote/rz-breadcrumbs?color=dark-green)

[![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

<hr>

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
