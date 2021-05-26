import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './LoginForm.module.scss'
import Image from 'next/image';
import { TextField } from '@material-ui/core';
import Button from '@/components/base/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
    const { t } = useTranslation('login');
    return (
        <div className={styles.loginForm}>
            <div className={styles.loginForm__formContainer}>
                <div className={styles.loginForm__logo}>
                    <Image
                        src='/images/logo.png'
                        layout='fixed'
                        height='95'
                        width='95'
                        quality='100'
                        className={styles.loginForm__logo}
                    />
                </div>
                <div className={styles.loginForm__textContainer}>
                    <h1 className={styles.loginForm__title}>
                        {t('title') + ' '}
                        <span className={styles.loginForm__company}>
                            ECOVALUE
                        </span>
                    </h1>
                    <p className={styles.loginForm__subtitle}>
                        {t('subtitle')}
                    </p>
                </div>
                <form className={styles.loginForm__form}>
                    <TextField
                        label={t('place_holder_1')}
                        variant="outlined"
                    />
                    <TextField
                        label={t('place_holder_2')}
                        variant="outlined"
                    />
                    <Button>
                        {t('button')}
                    </Button>
                </form>
                <a className={styles.loginForm__forgotPassword}>
                    {t('forgot_password')}
                </a>
            </div>
            <div className={styles.loginForm__image}>
                <Image
                    src='/images/login-background.png'
                    layout='responsive'
                    height='1200'
                    width='1200'
                />
                <div className={styles.loginForm__imageAlt}>
                    <FontAwesomeIcon color="white" icon={faChartLine} size="4x" />
                    <p className={styles.loginForm__altDescription}>
                        {t('image_alt')}
                    </p>
                    <Button>
                        {t('learn_more')}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;