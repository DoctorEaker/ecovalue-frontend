import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './DiagnosisForm.module.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@/components/base/text-field/TextField';
import Button from '@components/base/button/Button';

function DiagnosisForm() {
    const { t } = useTranslation('diagnosis');

    const [selectedValue, setSelectedValue] = React.useState('yearly');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const inputs = [
        {
            label: 'current_asset'
        },
        {
            label: 'current_liability'
        },
        {
            label: 'last_sell'
        },
        {
            label: 'penultime_sell'
        },
        {
            label: 'asset'
        },
        {
            label: 'liability'
        },
        {
            label: 'free_cash_flow'
        },
        {
            label: 'cost_commodity'
        },
        {
            label: 'operational_expenses'
        },
        {
            label: 'net_profit'
        }
        ,
        {
            label: 'pay_day_supplier',
            placeholder: 'days_placeholder'
        },
        {
            label: 'amount_employee',
            placeholder: 'number_placeholder'
        },
        {
            label: 'foundation_year',
            placeholder: '1985'
        }
    ]
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
                    <FormControlLabel
                        color="default"
                        control={<Radio color="primary" />}
                        label={t('monthly')}
                        value="monthly"
                    />
                </RadioGroup>
                <div className={styles.form__inputRow}>
                    {
                        inputs.map((item) => item.hasOwnProperty('placeholder') ? <TextField label={t(item.label)} placeholder={t(item.placeholder)} half={false} />
                            : <TextField label={t(item.label)} />)
                    }
                </div>
                <Button>
                    {t('button')}
                </Button>
            </form>
        </div>
    );
}

export default DiagnosisForm;