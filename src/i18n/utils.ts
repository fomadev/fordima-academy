import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean); // Enlève les espaces vides

  // On cherche si l'un des segments de l'URL correspond à une langue définie dans ui
  // Sur GitHub : ['fordima-academy', 'fr', 'docs'] -> 'fr' sera trouvé
  // En local : ['fr', 'docs'] -> 'fr' sera trouvé
  const lang = segments.find(segment => segment in ui);

  if (lang) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}