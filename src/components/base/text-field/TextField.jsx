import React from 'react';
import styles from './TextField.module.scss';

function Input({ label, placeholder = '$0', half = true }) {
    const divSize = half ? styles.textFieldDiagnosisHalf : styles.textFieldDiagnosis
    return (
        <div className={divSize}>
            <label className={styles.textFieldDiagnosis__label}>
                {label}
            </label>
            <input
                className={styles.textFieldDiagnosis__input}
                placeholder={placeholder} />
        </div>
    );
}

export default Input;