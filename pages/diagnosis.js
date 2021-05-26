import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DiagnosisForm from '@components/diagnosis/diagnosis-form/DiagnosisForm';

function Diagnosis() {
    return (
        <DiagnosisForm />
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['diagnosis']),
    }
});

export default Diagnosis;