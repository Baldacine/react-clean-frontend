import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslation from '../assets/locales/pt/translation.json';
import enTranslation from '../assets/locales/en/translation.json';
import esTranslation from '../assets/locales/es/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt: { translation: ptTranslation },
            en: { translation: enTranslation },
            es: { translation: esTranslation },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['queryString', 'cookie', 'localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;