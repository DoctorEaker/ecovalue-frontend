import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './LoginForm.module.scss'
import Image from 'next/image';
import { useForm } from "react-hook-form";

function LoginForm() {
    const { t } = useTranslation('login');
    return (
        <div className={styles.loginForm}>
            <div className={styles.loginForm__form}>
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
                        {t('title')+' '}
                        <span className={styles.loginForm__company}>
                            ECOVALUE
                        </span>
                    </h1>
                    <p className={styles.loginForm__subtitle}>
                        {t('subtitle')}
                    </p>
                </div>
                <form className={styles.loginForm__inputs}>
                    <input>
                    </input>
                    <input>
                    </input>
                </form>
            </div>
            <div className={styles.loginForm__image}>
                <Image
                    src='/images/login-background.png'
                    layout='responsive'
                    height='1200'
                    width='1200'
                />
            </div>
        </div>
    );
}

export default LoginForm;