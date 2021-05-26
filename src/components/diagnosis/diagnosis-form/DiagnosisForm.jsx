import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './DiagnosisForm.module.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@/components/base/text-field/TextField';

function DiagnosisForm() {
    const { t } = useTranslation('diagnosis');

    const [selectedValue, setSelectedValue] = React.useState('yearly');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className={styles.diagnosis}>
            <h1 className={styles.diagnosis__title}>
                {t('title')}
            </h1>
            <form className={styles.form}>
                <h1 className={styles.form__title}>
                    {t('subtitle')}
                </h1>
                <label className={styles.form__label}>
                    {t('frequency_question')}
                </label>
                <RadioGroup row onChange={handleChange}>
                    <FormControlLabel
                        color="default"
                        control={<Radio color="primary" />}
                        label={t('yearly')}
                        value="yearly"
                    />
                    <FormControlLabel
                        color="default"
                        control={<Radio color="primary" />}
                        label={t('quarterly')}
                        value="quarterly"
                    />
                </RadioGroup>
            </form>
        </div>
    );
}

export default DiagnosisForm;