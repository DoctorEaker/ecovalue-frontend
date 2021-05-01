import React from 'react';
import styles from './Layout.module.scss';
import Sidebar from '@components/sidebar/Sidebar';

function Layout({ children }) {
    return (
        <main>
            <Sidebar />
            {children}
        </main>
    );
}

export default Layout;