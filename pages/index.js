import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//import styles from '../styles/Home.module.css'

function Home() {

  const { t } = useTranslation('home');

  return (
    <div>
      <Head>
        <title> {t('head')} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          {t('title')}
        </h1>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['home']),
  }
})

export default Home;