<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import DiceButton from './components/DiceButton.vue'
import PatternDivider from './components/PatternDivider.vue'
import { useFetch } from './hooks/useFetch'

interface Response {
  slip: Slip
}

interface Slip {
  id: number
  advice: string
}

const { data, error, reload } = useFetch<Response>('https://api.adviceslip.com/advice')

function roll() {
  reload()
}
</script>

<template>
  <main>
    <div class="container">
      <p class="id">ADVICE #{{ data && data.slip.id }}</p>
      <div class="advice">&#8220;{{ data && data.slip.advice }}&#8221;</div>
      <PatternDivider />
    </div>
    <DiceButton @click="roll" />
  </main>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>-->
</template>

<style lang="sass" scoped>
@import './assets/sass/_variables.sass'

main
  display: flex
  flex-direction: column
  align-items: center

header
  line-height: 1.5

.advice
  color: $primary-color
  font-size: 23px
  text-align: center
  line-height: 2.05rem
  margin: 0rem 1.7rem
  letter-spacing: 0px

  @media (min-width: 1024px)
    font-size: $font-size
    line-height: 1.35
    margin: 0rem 2rem

.container
  display: flex
  flex-direction: column
  align-items: center
  background-color: $card-background-color
  margin-top: 6.5rem
  border-radius: 10px
  width: 21.5rem

  @media (min-width: 640px)
    width: 33.75rem

  @media (min-width: 1024px)
    margin-top: 13.75em
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
</style>
