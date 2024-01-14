<template>
  <div class="start-page">
    <h1 class="start-page__title">
      <span class="start-page__title-item">Memory</span>
      game
    </h1>
    <p class="start-page__description">Click on the cards to find a match</p>
    <input
      class="start-page__input-name"
      type="text"
      placeholder="Enter your name"
      v-model="playerName"
    />
    <button class="start-page__button-create-payer" @click="createPlayer" :disabled="!playerName">
      Create payer
    </button>
  </div>
</template>

<script>
export default {
  name: "StartPage",
  data() {
    return {
      playerName: "",
    };
  },
  methods: {
    createPlayer() {
      this.$store.dispatch('updatePlayerName', this.playerName);
      this.$router.push({ name: 'GamePage' });
    },
  },
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

  &__input-name
    margin-top: 2rem
    padding: 1rem 2rem
    font-size: 1.5rem
    border: none
    border-radius: 0.5rem
    transition: all 0.3s ease-in-out
    background-color: $secondary-color
    &:focus
      outline: none
      box-shadow: 0 0 0 2px $primary-color-hover

  &__button-create-payer
    margin-top: 2rem
    padding: 1rem 2rem
    font-size: 1.5rem
    background-color: $primary-color
    border: none
    border-radius: 0.5rem
    cursor: pointer
    transition: all 0.3s ease-in-out
    &:not(:disabled):hover
      background-color: $primary-color-hover
  &__button-create-payer:disabled 
    opacity: 0.5
    cursor: not-allowed
</style>
