<template>
  <div class="start-page">
    <h1 class="start-page__title">
      <span class="start-page__title-item">{{ $t("gameName") }}</span>
      {{ $t("gameName2") }}
    </h1>
    <p class="start-page__description">{{ $t("startTitle") }}</p>
    <input
      class="start-page__input-name"
      type="text"
      :placeholder="$t('placeholder')"
      v-model="playerName"
    />
    <ComponentButton type="primary" @click="createPlayer" :disabled="!playerName"
      >{{ $t("buttons.createPayer") }}</ComponentButton
    >
  </div>
</template>

<script>
import ComponentButton from "../components/ComponentButton.vue";

export default {
  name: "StartPage",
  components: {
    ComponentButton,
  },
  data() {
    return {
      playerName: "",
    };
  },

  methods: {
    createPlayer() {
      this.$store.dispatch("updatePlayerName", this.playerName);
      this.$router.push({ name: "GamePage" });
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/variables/colors"
.start-page
  width: 100%
  height: 100%
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
</style>
