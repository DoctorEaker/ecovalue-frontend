import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.module.scss';

function MainSidebar() {
  const { t } = useTranslation('sidebar');
  const items = [
    {
      title: t('item_1'),
      url: '/',
      key: 'home',
      icon: 'home',
    },
    {
      title: t('item_2'),
      url: '/diagnostico',
      key: 'diagnostico',
      icon: 'search',
    },
    {
      title: t('item_3'),
      url: '/recomendaciones',
      key: 'recomendaciones',
      icon: 'lightbulb-fill',
    },
  ];

  const sidebarLinks = items.map((link) => (
    <Link href={link.url} key={link.key}>
      <div className={styles['menu-item']}>
        <Image
          src={`/icons/${link.icon}.svg`}
          height="20"
          width="20"
          quality="100"
        />
        {link.title}
      </div>
    </Link>
  ));

  return (
    <div className={styles.sidebar}>
      <div className={styles['company-container']}>
        <Image
          className={styles['company-logo']}
          alt={t('logo_alt')}
          src="/images/eafit.png"
          height="40"
          width="40"
          quality="100"
        />
        <div className={styles['company-title']}>EAFIT</div>
        <Image
          className={styles['company-handle']}
          src="/icons/handle.svg"
          height="30"
          width="30"
          quality="100"
        />
      </div>
      <div className={styles['menu']}>{sidebarLinks}</div>
    </div>
  );
}

export default MainSidebar;
