<template>
  <div class="game-page">
    <h1 class="game-page__title">
      Hello
      <span class="game-page__title-item">{{ playerName }}</span>
      , choose a level and let's start the game.
    </h1>
    <div class="game-page__wrapper-buttons">
      <ComponentButton type="primary" @click="backPage"
        ><img
          class="game-page__button-back-svg"
          src="../assets/img/arrow.png"
          alt="backPage"
        />Back</ComponentButton
      >
      <ComponentButton type="start" @click="startGame">Start Game</ComponentButton>
      <ComponentButton type="primary" @click="openRules">Game rules</ComponentButton>
    </div>
  </div>
</template>

<script>
import ComponentButton from "../components/ComponentButton.vue";
export default {
  name: "GamePage",
  components: {
    ComponentButton,
  },
  data() {
    return {};
  },
  methods: {
    backPage() {
      this.$router.push({ name: "StartPage" });
    },
    startGame() {
      console.log("startGame");
    },
    openRules() {
      console.log("open rules");
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

  &__button-back-svg
    width: 2.5rem
    height: 1.5rem
    margin-right: 1.5rem
    transform: rotate(180deg)

</style>
