import { memo } from 'react'

import { useTranslate } from 'hooks'

import { Identifier } from 'types/locales'

type TranslateType = {
  identifier: Identifier
}

const Translate = ({ identifier }: TranslateType) => {
  const { t } = useTranslate()

  return <>{t(identifier)}</>
}

export default memo(Translate)
