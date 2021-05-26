import React from 'react';
import styles from './Button.module.scss'


function MainButton(props){
    return(
        <button className={styles.mainButton}>
            {props.children}
        </button>
    );
}

export default MainButton;