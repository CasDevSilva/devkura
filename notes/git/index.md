---
title: Git
layout: base.njk
---

# Git Roadmap

Gestión de código fuente
- Seguimiento de modificaciones en el código.
- Es lo mismo que Versión Control System

Version Control
- Gestion de Version de cambios de todo.

Cómo funciona Git
- Git es un VSC distribuido
- repositorio único centralizado
- cada computadora desarrolladora
- Git captura los datos en instantáneas.
- Cada cambio de archivo confirmado es una versión diferente, Git toma instantáneas completas del Código y cuando se confirma, esta es una versión.

Git aborda 2 áreas
- local(3 zonas)
    - directorio de trabajo: directorio en la computadora cuando trabajas
    - staging area: Área que está esperando cambios comprometidos
    - Repositorio local: copia local del repositorio remoto con diferentes versiones de código
- remoto

Repository
- A directory managed by Git

Commands Configuration
- git config - global user.name ''
- git config - global user.email ''
- git config - list
- git config - list - show-origin
- git config --global core.autocrlf true

Commands
- git init
- git add file.ext
- git add file1.ext file2.ext
- git add directory1/ directory/...
- git add *.ext
- git add (-A | . | *)
- git commit -m 'message'
- git commit -m ''
- git commit - allow-empty-message - no-edit
- git commit -am 'message'
- git branch
- git branch namebranch
- git branch -d namebranch 
- git branch -m newnamebrabch
- git checkout branch
- git checkout -b namebranch
- git merge namebranch 
- git merge - continue
- git merge - abort
- git rebase
- git rebase - abort

Into Commits
- each commit has a hash, it's their ID

Ignore Files
- Create a File .gitignore
- add paths, filenames, etc

Remote Repository 
- Repositorio centralizado remoto, oyente de cambios por diferentes usuarios. Además sirve clonado local para cada uno de los integrantes. Siempre a la espera y actualización de repositorios generales.

Protocolos
- HTTP 
- SSH

## Learn the Basics
## What is a Repository
## Branching Basics
## Github Essentials
## Git Remotes
## Merge Strategies
## Collaboration on Github
## Best Practices
## Documentation
## Working in a Team
## Github Projects
## Git Stash Basics
## History
## Undoing Changes
## Viewing Diffs
## Rewriting History
## Tagging
## Git Books
## Git Patch
## Submodules
## Github CLI
## Github Actions
## Advanced Git Topics
## Github Developer Tools
## More Github Features