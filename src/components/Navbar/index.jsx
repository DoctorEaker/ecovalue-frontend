import React, {useState} from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';
import Hamburger from 'hamburger-react'
import Image from 'next/image';

function Navbar() {
  const { t } = useTranslation('sidebar');

  const [isOpen, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <Image
          alt={t('logo_alt')}
          src="/images/logo.png"
          height="40"
          width="40"
          quality="100"
        />
        <h3 className={styles['brand-name']}>ECOVALUE</h3>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;
