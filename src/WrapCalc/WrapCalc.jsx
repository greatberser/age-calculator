import { useState } from 'react';
import Container from '../components/common/Container/Container';
import AgeForm from '../components/AgeForm/AgeForm';
import AgeCount from '../components/AgeCount/AgeCount';
import s from './WrapCalc.module.scss';

const WrapCalc = () => {
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    // Функція для оновлення віку в компоненті WrapCalc
    const handleUpdateAge = (newAge) => {
        setAge(newAge);
    };

    return (
        <Container>
            <div className={s.wrapCalc}>
                <AgeForm updateAge={handleUpdateAge} />
                <AgeCount age={age} />
            </div>
        </Container>
    );
};

export default WrapCalc;
