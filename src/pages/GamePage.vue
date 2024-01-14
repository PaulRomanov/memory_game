<template>
  <div class="game-page">
    <h1 class="game-page__title">
      Hello
      <span class="game-page__title-item">{{ playerName }}</span>
      , choose a level and let's start the game.
    </h1>
    <div class="game-page__wrapper-buttons">
      <button class="game-page__button-back" @click="backPage">
        <img class="game-page__button-back-svg" src="../assets/img/arrow.png" alt="" />Back
      </button>
      <button class="game-page__button-start">Start Game</button>
      <button class="game-page__button-rules">Game rules</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamePage",
  data() {
    return {};
  },
  methods: {
    backPage() {
      this.$router.push({ name: "StartPage" });
    },
  },
  computed: {
    playerName() {
      return this.$store.getters.getPlayerName;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/variables/colors"
.game-page
  width: 100vw
  height: 100vh
  background-color: $primary-background-color
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  gap: 2rem

  &__title
    text-align: center
    font-size: 3rem
    color: $white-color
    &-item
      color: $primary-color

  &__wrapper-buttons
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    gap: 3rem

  &__button-rules, &__button-start, &__button-back
    margin-top: 1rem
    padding: 1rem 2rem
    font-size: 1.5rem
    border: none
    border-radius: 0.5rem
    cursor: pointer
    transition: all 0.3s ease-in-out
  &__button-back-svg
    width: 2.5rem
    height: 1.5rem
    margin-right: 1.5rem
    transform: rotate(180deg)

  &__button-rules, &__button-back
    background-color: $primary-color
    &:hover
      background-color: $primary-color-hover

  &__button-start
    background-color: $green-color
    &:hover
      background-color: $green-color-hover
</style>
