<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main class="container">
    <p>Advice #117<!-- Advice ID goes here --></p>

    "It's easy to sit up and tke notice, what's difficult is getting u^p and taking action."
  </main>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style lang="sass" scoped>
@import './assets/sass/_variables.sass'

header
  line-height: 1.5

.container
  background-color: $card-background-color

.logo
  display: block
  margin: 0 auto 2rem

@media (min-width: 1024px)
  header
    display: flex
    place-items: center
    padding-right: calc(var(--section-gap) / 2)

  .logo
    margin: 0 2rem 0 0

  header .wrapper
    display: flex
    place-items: flex-start
    flex-wrap: wrap
</style>
