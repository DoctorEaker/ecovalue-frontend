import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';

function Home() {

  const { t } = useTranslation('home');

  return (
    <Layout>
      {t('title')}
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['home','sidebar']),
  }
});

export default Home;