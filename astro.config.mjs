import { defineConfig } from 'astro/config';

export default defineConfig({
  // URL de ton site final
  site: 'https://fomadev.github.io', 
  
  // Chemin de base (Nom de ton dépôt GitHub)
  // IMPORTANT: Si ton projet est à la racine, mets '/'
  // Si c'est un sous-projet, mets '/fordima-academy'
  base: '/fordima-academy',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'ar'], // Ajoute ici toutes les langues prévues
    routing: {
      prefixDefaultLocale: true // Cela crée des URLs comme /fr/, /en/
    }
  },

  output: 'static' // Indispensable pour GitHub Pages
});