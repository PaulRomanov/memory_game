import { createI18n } from 'vue-i18n';

const i18nInstance  = createI18n({
  locale: 'en', 
  messages: {
    en: require('./en.json'), 
    ru: require('./ru.json'), 
  },
});

export default i18nInstance ;