import clsx from 'clsx';
import s from './Container.module.scss';

// eslint-disable-next-line
const Container = ({ className, children }) => {
  return (
    <div className={clsx(s.container, className && className)}>{children}</div>
  );
};

export default Container;