import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslation from '../assets/locales/pt/translation.json';
import enTranslation from '../assets/locales/en/translation.json';
import esTranslation from '../assets/locales/es/translation.json';

const initialization = i18n
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

const updateDocumentLanguage = (language: string) => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = language.split('-')[0];
};

i18n.on('languageChanged', updateDocumentLanguage);
void initialization.then(() => {
    updateDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);
});

export default i18n;
