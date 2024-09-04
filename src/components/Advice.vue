<script setup lang="ts">
defineProps<{
  id: number | undefined
  message: string | undefined
}>()
</script>

<template>
  <h1 class="id">ADVICE #{{ id }}</h1>
  <p class="advice">&#8220;{{ message }}&#8221;</p>
</template>

<style lang="sass" scoped>
@import '../assets/sass/_variables.sass'

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
</style>
