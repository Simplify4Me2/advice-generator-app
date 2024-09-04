<template>
  <img
    class="pattern-divider-mobile"
    src="/images/pattern-divider-mobile.svg"
    alt="pattern divider"
  />
  <img
    class="pattern-divider-desktop"
    src="/images/pattern-divider-desktop.svg"
    alt="pattern divider"
  />
</template>

<style lang="sass" scoped>
.pattern-divider-mobile
  margin-top: 1.5rem
  margin-bottom: 3.95rem

  @media (min-width: 640px)
    display: none

.pattern-divider-desktop
  margin-top: 2.4rem
  margin-bottom: 4.5rem
  display: none

  @media (min-width: 640px)
    display: block
</style>
