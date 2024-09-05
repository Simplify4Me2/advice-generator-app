# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![screenshot](screenshot.png)

### Links

- Solution URL: [https://github.com/Simplify4Me2/advice-generator-app](https://github.com/Simplify4Me2/advice-generator-app)
- Live Site URL: [https://simplify4me2.github.io/advice-generator-app/](https://simplify4me2.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- [SASS](https://sass-lang.com/) - CSS with superpowers
- Flexbox
- Mobile-first workflow
- [Vue](https://vuejs.org/) - Progressive JS Framework

### What I learned

This was my first experience using **Vue JS** to build an app. I learned how to work with _templates_, _scoped styling_, pass props to _components_, and emit events. Fetching data from the API felt quite similar to using a hook in React, though the terminology is different—it's called a composable in Vue, not a hook.

This is how I handle the click event in a custom component:

```html
<button @click="$emit('click')">
  <img src="/images/icon-dice.svg" alt="dice" />
</button>
```

Using separate files for variables and setting font:

```scss
@import './_base.sass' @import './_variables.sass';
```

I've added a reload trigger by updating a ref value. Since the watchEffect will pick up the value change, it will call the same url again:

```js
import { ref, toValue, watchEffect } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref(null)
  const reloadTrigger = ref(0)

  function fetchData() {
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => {
        data.value = json
      })
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    if (reloadTrigger.value >= 0) fetchData()
  })

  function reload() {
    reloadTrigger.value++
  }

  return { data, error, reload }
}

```

### Continued development

This may be the first, but definitely not my last project in Vue JS. I took the baby steps, so now I'm ready for the next step. I'm sure there's much more to discover in Vue JS like routing, forms, state management, Server-Side Rendering, and much more.

Even though I want to learn more about CSS Grid, it was hardly applicable to this project. Flexbox was much more of a fit here. Maybe for my next project I'll find a fit for it.

### Useful resources

- [Vue JS](https://vuejs.org/guide/reusability/composables.html#async-state-example) - This helped me to write the `useFetch` composable. I recognized this pattern from React JS and use it often to extract reusable logic from components.
- [Advice Slip JSON API](https://api.adviceslip.com/) - It's great that there are free API's available without requiring authorization nor limits. It really helps not having to worry about the backend if you want to focus on frontend.

## Author

- Website - [Simon Vereecke](https://simplify4me2.github.io/)
- Frontend Mentor - [@Simplify4Me2](https://www.frontendmentor.io/profile/Simplify4Me2)
- Twitter / X - [@simon_vereecke](https://x.com/simon_vereecke)
- GitHub - [@Simplify4Me2](https://github.com/Simplify4Me2)

## Acknowledgments

Thank you to the Frontend Mentor Community for being so open and welcoming. It's inspiring to see people from all over the world who are learning together.
