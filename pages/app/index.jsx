import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';

import styles from '@pages/app/index.module.scss';

function Index() {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>Home | ECOVALUE</title>
        <meta name="description" content="Dashboard home page" />
      </Head>
      <Layout>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['home','sidebar']),
    }
});

export default Index;
