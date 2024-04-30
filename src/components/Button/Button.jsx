import s from './Button.module.scss';

const Button = () => {
    return (
      <button 
        type='submit'
        className={s.btn}
      >
        <svg width="26" height="26">
          <use href="src/assets/sprite.svg#icon-arrow"></use>
        </svg>
      </button>
    );
  };
  
  export default Button;