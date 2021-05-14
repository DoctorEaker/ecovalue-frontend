import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Sidebar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Sidebar() {

    const { t } = useTranslation('sidebar');
    const router = useRouter();
    const items = [
        {
            title: t('item_1'),
            url: '/',
            icon: <FontAwesomeIcon color="white" icon={faHome} size="2x" />
        },
        {
            title: t('item_2'),
            url: '/diagnostico',
            icon: <FontAwesomeIcon color="white" icon={faSearch} size="2x" />
        },
        {
            title: t('item_3'),
            url: '/recomendaciones',
            icon: <FontAwesomeIcon color="white" icon={faLightbulb} size="2x" />
        }
    ]

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__logoContainer}>
                <Image
                    alt={t('logo_alt')}
                    src='/images/logo.png'
                    layout="fixed"
                    height='50'
                    width='50'
                    quality='100'
                />
            </div>
            <div className={styles.sidebar__companyContainer}>
            </div>
            <ul className={styles.sidebar__itemContainer}>
                {items.map((item) => {
                    const styleContainer = router.asPath === item.url ? styles.sidebar__currentItem : styles.sidebar__item;
                    return (<li className={styleContainer} id={item.title}>{item.icon} <h1 className={styles.sidebar__itemTitle}>{item.title}</h1> </li>);
                })
                }
            </ul>
            <div className={styles.sidebar__rocketImage}>
                <Image
                    alt={t('rocket_alt')}
                    src='/images/rocket.png'
                    layout="fixed"
                    height='180'
                    width='180'
                    quality='100'

                />
            </div>
        </div>
    );
}

export default Sidebar;