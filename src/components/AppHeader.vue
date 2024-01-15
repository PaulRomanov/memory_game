<template>
  <div class="header">
    <div class="header__wrapper-btns">
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('ru')">Russian</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  props: {},
  beforeMount() {
    if (!this.$i18n || !this.$i18n.global) {
      console.error("$i18n or $i18n.global is not defined yet.");
    }
  },
  methods: {
    changeLanguage(locale) {
      if (this.$i18n && this.$i18n.global) {
        this.$i18n.global.locale = locale;
      } else if (this.$i18n) {
        this.$i18n.locale = locale;
      } else {
        console.error("$i18n or $i18n.global is not defined yet.");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.header
  width: 100%
  background-color: $primary-background-color
</style>
