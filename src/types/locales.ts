import getLanguages from 'locales'

const languages = getLanguages()

export type LocaleKeys = keyof typeof languages

export type Identifier = keyof typeof languages[LocaleKeys]
