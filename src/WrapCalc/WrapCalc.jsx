import Container from '../components/common/Container/Container';
import AgeForm from '../components/AgeForm/AgeForm';
import s from './WrapCalc.module.scss'
import AgeCount from '../components/AgeCount/AgeCount';

const WrapCalc = () => {
    return (
        <Container>
            <div className={s.wrapCalc}>
                <AgeForm />
                <AgeCount />
            </div>

        </Container>
    );
};

export default WrapCalc;