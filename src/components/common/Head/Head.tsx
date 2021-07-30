import NextHead from 'next/head'

type HeadProps = {
  title?: string
  faviconPath?: string
}

const Head = ({ title, faviconPath }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>

      <link rel='shortcut icon' href={faviconPath} />
    </NextHead>
  )
}

Head.defaultProps = {
  title: 'Letmeask',
  faviconPath: '/favicon.ico',
}

export default Head
