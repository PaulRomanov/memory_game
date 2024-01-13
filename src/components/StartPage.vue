<template>
  <div class="start-page">
    <h1 class="start-page__title">
      <span class="start-page__title-item">Memory</span>
      game
    </h1>
    <p class="start-page__description">Click on the cards to find a match</p>
    <button class="start-page__button">Start game</button>
  </div>
</template>

<script>
export default {
  name: "StartPage",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/variables/colors"
.start-page
  width: 100vw
  height: 100vh
  background-color: $primary-background-color
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  gap: 2rem

  &__title
    font-size: 3rem
    color: $white-color
    &-item
      color: $primary-color

  &__description
    font-size: 1.5rem
    color: $secondary-color

  &__button
    margin-top: 2rem
    padding: 1rem 2rem
    font-size: 1.5rem
    background-color: $primary-color
    border: none
    border-radius: 0.5rem
    cursor: pointer
    transition: all 0.3s ease-in-out

    &:hover
      background-color: $primary-color-hover
</style>
