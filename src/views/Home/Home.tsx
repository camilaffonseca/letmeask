import Image from 'next/image'
import Link from 'next/link'

import { useTranslate } from 'hooks'

import styles from './Home.module.scss'

const Home = () => {
  const { t, currentLocale } = useTranslate()

  return (
    <>
      <header className={styles.header}>
        {currentLocale === 'pt' ? (
          <Link href='/' locale='en'>
            <a>
              <Image
                width={24}
                height={24}
                src='/images/svg/world.svg'
                alt='Github Logo'
              />
              <p>en</p>
            </a>
          </Link>
        ) : (
          <Link href='/' locale='pt'>
            <a>
              <Image
                width={24}
                height={24}
                src='/images/svg/world.svg'
                alt='Github Logo'
              />
              <p>pt</p>
            </a>
          </Link>
        )}
      </header>
      <main className={styles.container}>
        <h1>{t('home.hello')}</h1>
        <section>
          <h2>{t('home.description')}</h2>
          <footer>
            <p>{t('home.use')}</p>
            <div>
              <Link href='https://github.com/camilaffonseca'>
                <a target='_blank' rel='noreferrer'>
                  <Image
                    width={24}
                    height={24}
                    src='/images/logos/GitHub-Mark-120px-plus.png'
                    alt='Github Logo'
                  />
                </a>
              </Link>
              <Link href='https://github.com/camilaffonseca/letmeask'>
                <a target='_blank' rel='noreferrer'>
                  <Image
                    width={31}
                    height={24}
                    src='/images/logos/logo.svg'
                    alt='Letmeask Logo'
                  />
                </a>
              </Link>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}

export default Home
