import { getDefaultStaticProps } from 'utils/defaultServerSidePropGetters'

describe('[NEXT_RESERVED_FUNCTIONS_HELPERS]', () => {
  test(
    "Test if 'getNodeEnv' method returns NODE_ENV with" +
      " 'test' value running by 'yarn test' command.",
    () => {
      expect(
        getDefaultStaticProps({
          locale: 'pt',
          defaultLocale: 'pt',
        })
      ).toStrictEqual({
        currentLocale: 'pt',
      })

      expect(
        getDefaultStaticProps({
          locale: 'en',
          defaultLocale: 'pt',
        })
      ).toStrictEqual({
        currentLocale: 'en',
      })

      expect(
        getDefaultStaticProps({
          locale: undefined,
          defaultLocale: 'pt',
        })
      ).toStrictEqual({
        currentLocale: 'pt',
      })

      expect(
        getDefaultStaticProps({
          locale: undefined,
          defaultLocale: undefined,
        })
      ).toStrictEqual({
        currentLocale: 'pt',
      })
    }
  )
})
