import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './UserSidebar.module.scss'


function MainSidebar() {

    const { t } = useTranslation('sidebar');


    return (
        <div className={styles.sidebar}>
        aa
        </div>
    );
}

export default MainSidebar;