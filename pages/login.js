import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LoginForm from '@components/login/LoginForm'

function Login() {
    return (
        <>
            <LoginForm />
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['login']),
    }
  });

export default Login;