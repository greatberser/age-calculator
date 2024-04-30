import { Field, Form, Formik } from "formik";
import Button from "../Button/Button";
import s from './AgeForm.module.scss'

const AgeForm = () => {
    return (
        <Formik>
            <Form className={s.form}>
                <label className={s.label}>
                    <span>
                        day
                    </span>
                    <Field 
                        type="number"
                        name="age"
                        placeholder="dd"
                    />
                </label>

                <label className={s.label}>
                    <span>
                        month
                    </span>
                    <Field 
                        type="number"
                        name="month"
                        placeholder="mm"
                    />
                </label>

                <label className={s.label}>
                    <span>
                        year
                    </span>
                    <Field 
                        type="number"
                        name="year"
                        placeholder="yyyy"
                        min="1990"
                    />
                </label>

                {/* <Button /> */}
            </Form>
        </Formik>
    );
};

export default AgeForm;