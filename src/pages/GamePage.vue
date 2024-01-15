<template>
  <div class="game-page">
    <h1 class="game-page__title">
      {{ $t("welcome.hello") }}
      <span class="game-page__title-item">{{ playerName }}</span>
      {{ $t("welcome.hello2") }}
    </h1>
    <div class="game-page__wrapper-buttons">
      <ComponentButton type="primary" @click="backPage"
        ><img
          class="game-page__button-back-svg"
          src="../assets/img/arrow.png"
          alt="backPage"
        />{{ $t("buttons.back") }}</ComponentButton
      >
      <ComponentButton type="start" @click="startGame">{{ $t("buttons.startGame") }}</ComponentButton>
      <ComponentButton type="primary" @click="openRules">{{ $t("buttons.gameRules") }}</ComponentButton>
    </div>
    <ModalWindowRules v-if="showModalRules" @close="closeModalRules" />
  </div>
</template>

<script>
import ComponentButton from "../components/ComponentButton.vue";
import ModalWindowRules from "../components/ModalWindowRules.vue";
export default {
  name: "GamePage",
  components: {
    ComponentButton,
    ModalWindowRules
  },
  data() {
    return {
      showModalRules: false,
    };
  },
  methods: {
    backPage() {
      this.$router.push({ name: "StartPage" });
    },
    startGame() {
      console.log("startGame");
    },
    openRules() {
      this.showModalRules = true;
    },
    closeModalRules() {
      this.showModalRules = false;
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
