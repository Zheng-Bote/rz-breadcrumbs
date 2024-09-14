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

bla bla ... everything easy and green with No Code/Low code and without any costs

## Dependencies

bla bla ... with a little help from my friends

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

bla bla ... usage is intuitive and runs mostly automatically with no needs of any knowledge

```HTML
<mark> under construction </mark>
```

<p align="right">(<a href="#top">back to top</a>)</p>

# API Reference

<hr>

![GHA](https://img.shields.io/badge/Github-Action-black?logo=githubactions)

_Inputs/Outputs will be filled automatically by `.github/workflows/repo-actions_docu.yml`_

## Inputs

## Outputs

<hr>

<p align="right">(<a href="#top">back to top</a>)</p>

## Parameters

**Workflow or program**

| Parameter    | Type     | Description                          |
| :----------- | :------- | :----------------------------------- |
| `name`       | `string` | _Optional_ name-of-copyright-holder  |
| `created`    | `string` | _Optional_ <YYYY>                    |
| `version`    | `string` | _Optional_ \<v0.0.0>                 |
| `link_left`  | `string` | _Optional_ link-to-contact-page      |
| `link_right` | `string` | _Optional_ link-to-legal-notice-page |

<p align="right">(<a href="#top">back to top</a>)</p>

# Documentation

see also: <https://linktodocumentation>

## Architecture

### Github

#### Github Repo

```mermaid
block-beta
  columns 4
  Repo:4
  block:group1:1
    columns 1
    id0[".github"]
    block:group2:1
      columns 1
      id1[["workflows"]]
      id2[["actions"]]
    end
  end
  docs dist src
  block:group3:4
    %% columns auto (default)
    A["gh-pages"] B["gh-wiki"]
  end
```

#### Github Actions / Workflows

```mermaid
flowchart TD;
    A[Workflow]-. parameter .->B[[callable Workflow]]
    B-- parameter -->C[Action]
    C-->D(README)

    A[Workflow]-. parameter .->E[[callable Workflow]]
    E-- parameter -->F[Action]
    F-->J(Markdown files)

    A[Workflow]-->K[[Workflow]]
    K-->L[Action]
    L-->M("GH-Pages")

    A[Workflow]-->N[[Workflow]]
    N-->O[Action]
    O-->P("GH-Wiki")
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Application

```mermaid
architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service server0(server)[Webserver] in api
    service disk2(disk)[Storage] in api
    service server(server)[Appserver] in api

    db:L -- R:server
    server0:T -- B:server
    disk2:T -- B:server
```

## DevOps

```mermaid
pie title me
         "ideas" : 90
         "time for realizations" : 7
         "money for realizations" : 3
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Github Page

[![GH-Page](https://img.shields.io/badge/Github-Pages-black?logo=github)](https://www.github.com/Zheng-Bote)

## Github Wiki

[![GH-Wiki](https://img.shields.io/badge/Github-Wiki-black?logo=github)](https://www.github.com/Zheng-Bote)

## Comments

> \[!NOTE]
> Useful information that users should know, even when skimming content.

> \[!TIP]
> Helpful advice for doing things better or more easily.

> \[!IMPORTANT]
> Key information users need to know to achieve their goal.

> \[!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> \[!CAUTION]
> Advises about risks or negative outcomes of certain actions.

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

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
