<script setup lang="ts">
import type { ApiResponse } from './api.model'
import Advice from './components/Advice.vue'
import DiceButton from './components/DiceButton.vue'
import PatternDivider from './components/PatternDivider.vue'
import { useFetch } from './composables/useFetch'

const { data, reload } = useFetch<ApiResponse>('https://api.adviceslip.com/advice')
</script>

<template>
  <main>
    <div class="container">
      <Advice :id="data?.slip.id" :message="data?.slip.advice" />
      <PatternDivider />
    </div>
    <DiceButton @click="reload" />
  </main>
</template>

<style lang="sass" scoped>
@import './assets/sass/_variables.sass'

main
  display: flex
  flex-direction: column
  align-items: center

.container
  display: flex
  flex-direction: column
  align-items: center
  background-color: $card-background-color
  margin-top: 6.5rem
  border-radius: 10px
  max-width: 21.5rem

  @media (min-width: 640px)
    width: 33.75rem
    max-width: 33.75rem

  @media (min-width: 1024px)
    margin-top: 13.75em
    border-radius: 20px
</style>
