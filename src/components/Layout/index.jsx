import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import UserSidebar from '@/components/UserSidebar';
import styles from './Layout.module.scss';


function Layout({ children }) {
    return (
        <main  className={styles.container}>
            <Navbar />
            <div className={styles.temporal}>
                <Sidebar />
                <div  className={styles.content}>
                    {children}
                </div>
                <UserSidebar />
            </div>
            
        </main>
    );
}

export default Layout;