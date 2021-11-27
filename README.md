# Simple Workflow with Laravel Mix.

## Install

- `npm i`

## Features

- Copy `src/*.html` to `dist` folder.
- Copy `src/assets/*/` to `dist/assets/*/` folder.
- Compile SASS `src/styles/app.scss` to `dist/styles` folder.
- Bundle and transpile JS `src/scripts/app.js` to `dist/scripts` folder.
- Create sources maps.
- Run a dev web server with browsersync.

## Commands

- `npm start` : build on files changes, launch a dev server with browsersync.
- `npm run build` : clean, lint and build the project, il transforme la sass en css, il optimise les images, html, js, css.
- `npm run clean` : clean the `dist` folder.

## Warning

Not intended to be used in production since minification as been disabled.  
For school project purpose only.

Supprimer node_modules avant de compresser le fichier si jamais on veut réutiliser 

## BrowserSYNC
http://localhost:3001
