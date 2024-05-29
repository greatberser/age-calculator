import s from './AgeCount.module.scss';

const AgeCount = ({ age }) => {
    return (
        <div className={s.ageCountContainer}>
            <p>
                {age.years} 
                <span> years</span>
            </p>
            <p>{age.months}
                <span> months</span>
            </p>
            <p>{age.days}
                <span> days</span>
            </p>
        </div>
    );
};

export default AgeCount;