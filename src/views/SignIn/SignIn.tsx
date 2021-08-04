import Image from 'next/image'
import Link from 'next/link'

import { useTranslate } from 'hooks'

import Anchor from 'components/atoms/Anchor'
import Button from 'components/atoms/Button'
import Container from 'components/atoms/Container'
import Input from 'components/atoms/Input'
import Paragraph from 'components/atoms/Paragraph'

import Aside from './Aside'

const SignIn = () => {
  const { t, currentLocale } = useTranslate()

  return (
    <Container>
      <Aside>
        <Image
          src='/images/illustration.svg'
          alt={t('sign_in.alt_illustration_image')}
          width={310}
          height={400}
        />
        <Paragraph
          as='h1'
          color='white'
          fontSize='3em'
          mt='6vh'
          fontWeight={700}
          lineHeight={1.2}
          maxWidth={460}
        >
          {t('sign_in.title')}
        </Paragraph>
        <Paragraph
          as='h2'
          color='white'
          fontSize='1.6em'
          mt='2vh'
          lineHeight={1.2}
          maxWidth='460px'
        >
          {t('sign_in.description')}
        </Paragraph>
      </Aside>
      <Container flex={5} flexDirection='column' h='100vh'>
        <Container w={1} justifyContent='flex-end' flex={1}>
          <Link href='/' locale={currentLocale === 'pt' ? 'en' : 'pt'}>
            <Anchor justifyContent='center' alignItems='center' w={70} h={50}>
              <Image
                width={24}
                height={24}
                src='/images/icons/world.svg'
                alt={t('sign_in.alt_world_icon')}
              />
              <Paragraph ml={2}>{currentLocale === 'pt' ? 'en' : 'pt'}</Paragraph>
            </Anchor>
          </Link>
        </Container>
        <Container
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          flex={20}
          mt='-50px'
          gap={6}
          mx='16px'
        >
          <Image
            src='/images/logos/letmeask.svg'
            alt={t('sign_in.alt_logo')}
            width={156}
            height={70}
          />
          <Button variant='danger'>
            <Image src='/images/icons/google.svg' alt='' width='20px' height='20px' />
            {t('sign_in.create_room')}
          </Button>
          <Container alignItems='center' w={320} justifyContent='space-between'>
            <Container flex={1} h='1px' backgroundColor='grayMedium' />
            <Paragraph flex={1.8} color='grayMedium' textAlign='center' mx={2}>
              {t('sign_in.enter_a_room')}
            </Paragraph>
            <Container flex={1} h='1px' backgroundColor='grayMedium' />
          </Container>
          <Input placeholder={t('sign_in.enter_room_code')} />
          <Button>
            <Image src='/images/icons/login.svg' alt='' width='20px' height='20px' />
            {t('sign_in.enter_a_room_button')}
          </Button>
        </Container>
      </Container>
    </Container>
  )
}

export default SignIn
