<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

function roll(event: MouseEvent) {
  console.log('Roll the dice... : ', event)
}
</script>

<template>
  <main class="container">
    <p class="id">ADVICE #{{ `117` }}</p>

    <div class="advice">
      &#8220;It is easy to sit up and take notice, what's difficult is getting up and taking
      action.&#8221;
    </div>
    <img src="/images/pattern-divider-mobile.svg" />
    <button @click="roll">
      <img src="/images/icon-dice.svg" />
    </button>
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

button
  display: inline-block
  background-color: $secondary-color
  padding: 1.25rem
  margin-top: 2rem
  line-height: 0
  border: none
  border-radius: 100%

header
  line-height: 1.5

.advice
  color: $primary-color
  font-size: 23px
  text-align: center
  line-height: 2.05rem
  margin: 0rem 1.7rem
  letter-spacing: 0px
  margin-bottom: 1.5rem

  // &::before
  //   content: '\275D'
  //   margin-right: 0px

  @media (min-width: 1024px)
    font-size: $font-size

.container
  display: flex
  flex-direction: column
  align-items: center
  background-color: $card-background-color
  margin-top: 6.5rem
  border-radius: 10px
  height: 19.6rem
  max-width: 37.4rem

  @media (min-width: 1024px)
    margin-top: 15.5rem
    height: 23rem

.id
  color: $secondary-color
  text-align: center
  padding: 2.5rem 2.5rem 1.4rem 2.5rem
  letter-spacing: 3.7px
  font-weight: 600
  font-size: 11px

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
