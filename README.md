# Nasa Astronomy Picture Of The Day

This project, created with Sveltekit and Svelte, showcases beautiful pictures and video's from the Nasa Astronomy Picture Of The Day. 

<img width="1871" height="882" alt="image" src="https://github.com/user-attachments/assets/a93db2ab-24e4-4b52-b057-fa339d51d6a1" />



- [Features](#features💻)
- [Tech Stack](#techstack)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## About 📖

I have always been fascinated by the outerspace, stars and planets. Three years ago, while studying Frontend Design & Development at the Amsterdam University of Applied Sciences, I discovered [Nasa has several API's](https://api.nasa.gov/) that we may use for our projects. This inspired me to create a website with the NASA APOD API. Back then, I created the project with EJS. Now I decided it was time to give it a new design and make some much needed changes, for example, I now made the project with Svelte. I invite you to take a look and leave a comment.

## Features 💻

* [x] Display APOD images/videos
* [x] View APOD image/video details
* [x] Responsive design (Mobile, Tablet, Desktop)
* [x] Dark mode support
* [x] Leave comments on APOD images/videos
* [x] Search APOD by date
* [x] Display a random APOD image/video
* [x] Third-party video players are loaded only after user interaction


## Tech stack 🛠️

* [x] HTML
* [x] CSS
* [x] JavaScript
* [x] Sveltekit/Svelte
* [x] Node.js
* [x] npm
* [x] Vite
* [x] Rest API - [NASA APOD](https://api.nasa.gov/)
* [x] GraphQL - Hygraph

## Instalation 🎛️

1. Clone this repository to your code editor.
2. Open the terminal and type the following commands:

```
npm install
```
```
npm install graphql-request
```
```
npm run dev
```


# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.17.0 create --template minimal --no-types --add prettier --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

Install dependencies
* npm install graphql-request

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
