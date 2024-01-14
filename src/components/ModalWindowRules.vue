<template>
  <div class="modal-window">
    <div class="modal-content">
    <p> The Memory Game, also known as Match Match, is a classic board game in which players turn around picture cards and try to find pairs.</p>
    <p>Players can choose a difficulty level that determines the number of cards on the field:</p>
    <p>Easy: 4x4 (8 cards)</p>
    <p>Medium: 6x6 (18 cards)</p>
    <p>Difficult: 8x8 (32 cards)</p>
    <p>Players can choose the total time of the game.</p>
    <p>A player gets a certain total time to complete the entire game. Once the timer is counted down, the game ends.</p>
    <p>Each turn a player reveals two cards.</p>
    <p>If the images on the revealed cards match, the player gets points and the right to an additional turn.</p>
    <p>If the images do not match, the cards are returned face down.</p>
    <p>The goal of the game is to find all pairs of cards.</p>
    <p>The game ends when all pairs have been found or time has expired.</p>
    <ComponentButton type="close" @click="closeModal">Close</ComponentButton>
    </div>
  </div>
</template>

<script>
import ComponentButton from "../components/ComponentButton.vue";
export default {
  name: "ModalWindowRules",
  emits: ["close"],
  components: {
    ComponentButton,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/variables/colors"
.modal-window
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: $modal-window-background-color
  display: flex
  justify-content: center
  align-items: center
  z-index: 1000

.modal-content
  background-color: $white-color
  padding: 50px
  border-radius: 8px
  box-shadow: $box-shadow
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  gap: 1rem
</style>
