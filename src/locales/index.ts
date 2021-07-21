// To set a new language, import the language file and put it in the languages
// object. Set available languages and default language in `next.config.js` file.

import en from 'locales/languages/en.json'
import pt from 'locales/languages/pt.json'

const languages = {
  en,
  pt,
}

const getLanguages = () => languages

export default getLanguages
