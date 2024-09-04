<template>
  <button @click="$emit('click')">
    <img src="/images/icon-dice.svg" alt="dice" />
  </button>
</template>

<style lang="sass" scoped>
@import '../assets/sass/_variables.sass'

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
</style>
