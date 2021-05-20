import { appWithTranslation } from 'next-i18next'
import '../styles/core/reset.scss';
import '../styles/core/typography.scss';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(MyApp)