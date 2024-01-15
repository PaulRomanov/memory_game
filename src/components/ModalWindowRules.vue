<template>
  <div class="modal-window">
    <div class="modal-content">
    <p>{{ $t("rules.rule1") }}</p>
    <p>{{ $t("rules.rule2") }}</p>
    <p>{{ $t("rules.rule3") }}</p>
    <p>{{ $t("rules.rule4") }}</p>
    <p>{{ $t("rules.rule5") }}</p>
    <p>{{ $t("rules.rule6") }}</p>
    <p>{{ $t("rules.rule7") }}</p>
    <p>{{ $t("rules.rule8") }}</p>
    <p>{{ $t("rules.rule9") }}</p>
    <p>{{ $t("rules.rule10") }}</p>
    <p>{{ $t("rules.rule11") }}</p>
    <p>{{ $t("rules.rule12") }}</p>    
    <ComponentButton type="close" @click="closeModal">{{ $t("buttons.close") }}</ComponentButton>
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
