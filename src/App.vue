<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useFetch } from './hooks/useFetch'

interface Response {
  slip: Slip
}

interface Slip {
  id: number
  advice: string
}

const { data, error, reload } = useFetch<Response>('https://api.adviceslip.com/advice/12')

function roll(event: MouseEvent) {
  // console.log('Roll the dice... : ', event)
  reload()
}
</script>

<template>
  <main>
    <div class="container">
      <!-- <p class="id">ADVICE #{{ '117' }}</p> -->
       <!-- 12 / 38 -->
      <p class="id">ADVICE #{{ data && data.slip.id }}</p>
      <!-- <p class="id">{{ JSON.stringify(data) }}</p> -->
      <!-- <div class="advice">
        &#8220;It is easy to sit up and take notice, what's difficult is getting up and taking
        action.&#8221;
      </div> -->
      <div class="advice">&#8220;{{ data && data.slip.advice }}&#8221;</div>
      <img class="pattern-divider-mobile" src="/images/pattern-divider-mobile.svg" />
      <img class="pattern-divider-desktop" src="/images/pattern-divider-desktop.svg" />
    </div>
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

main
  display: flex
  flex-direction: column
  align-items: center

button
  display: inline-block
  background-color: $secondary-color
  padding: 1.25rem
  margin-top: -2rem
  line-height: 0
  border: none
  border-radius: 100%

  &:hover
    cursor: pointer
    box-shadow: 0px 0px 25px $secondary-color

button:active
  box-shadow: inset 0px 0px 15px $card-background-color

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

  @media (min-width: 1024px)
    font-size: $font-size
    line-height: 1.35
    margin: 0rem 2rem
    margin-bottom: 2.4rem

.container
  display: flex
  flex-direction: column
  align-items: center
  background-color: $card-background-color
  margin-top: 6.5rem
  border-radius: 10px
  height: 19.6rem
  max-width: 33.75rem

  @media (min-width: 640px)
    width: 33.75rem

  @media (min-width: 1024px)
    margin-top: 13.75em
    height: 20.75rem
    border-radius: 20px

.id
  color: $secondary-color
  text-align: center
  padding: 2.5rem 2.5rem 1.4rem 2.5rem
  letter-spacing: 3.7px
  font-weight: 600
  font-size: 11px

  @media (min-width: 1024px)
    font-size: 14px
    padding-top: 3rem

.pattern-divider-mobile
  @media (min-width: 640px)
    display: none

.pattern-divider-desktop
  display: none

  @media (min-width: 640px)
    display: block
</style>
