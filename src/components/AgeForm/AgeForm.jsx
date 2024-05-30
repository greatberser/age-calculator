import { Field, Form, Formik } from 'formik';
import { differenceInYears } from 'date-fns';
import Button from '../Button/Button';
import s from './AgeForm.module.scss';

const AgeForm = ({ updateAge }) => {
    const calculateAge = (day, month, year) => {
        const today = new Date();
        const birthDate = new Date(year, month - 1, day);

        const years = differenceInYears(today, birthDate);
        const months = years * 12;
        const days = year * 365;

        updateAge({ years, months, days });
    };

    return (
        <div className={s.wrapForm}>
            <Formik
                initialValues={{ day: '', month: '', year: '' }}
                onSubmit={(values) => {
                    calculateAge(values.day, values.month, values.year);
                }}
            >
                {({ handleSubmit }) => (
                    <Form className={s.form} onSubmit={handleSubmit}>
                        <label className={s.label}>
                            <span>Day</span>
                            <Field 
                                type="number"
                                name="day"
                                placeholder="dd"
                                min="1"
                                max="31"
                                required
                            />
                        </label>

                        <label className={s.label}>
                            <span>Month</span>
                            <Field 
                                type="number"
                                name="month"
                                placeholder="mm"
                                min="1"
                                max="12"
                                required
                            />
                        </label>

                        <label className={s.label}>
                            <span>Year</span>
                            <Field 
                                type="number"
                                name="year"
                                placeholder="yyyy"
                                min="1900"
                                max={new Date().getFullYear()}
                                required
                            />
                        </label>

                        <Button />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AgeForm;
