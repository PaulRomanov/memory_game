const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/variables/colors"`,
        implementation: require('sass'), 
      },
    },
  },
});
