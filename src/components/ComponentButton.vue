<template>
  <button :class="type" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ComponentButton",
  props: {
    type: {
      type: String,
      default: "primary", 
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleClick() {
      this.onClick();
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/variables/colors"

button
  margin-top: 1rem
  padding: 1rem 2rem
  font-size: 1.5rem
  border: none
  border-radius: 0.5rem
  cursor: pointer
  transition: all 0.3s ease-in-out
  &:disabled 
    opacity: 0.5
    cursor: not-allowed

.primary
  background-color: $primary-color
  &:hover
    background-color: $primary-color-hover

.start
  background-color: $green-color
  &:hover
    background-color: $green-color-hover

</style>
