import background from '../../../assets/background.svg';
import ellipse from '../../../assets/ellipse.svg';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);
const CatImage = ({ image, alt }) => {
  return (
    <div className={cx('container-image')}>
      <img
        src={background}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className={cx('image')}
      />
      <img
        src={ellipse}
        alt=""
        className={cx('absolute')}
        loading="lazy"
        aria-hidden="true"
      />
      <img
        src={image}
        alt={alt}
        className={cx('absolute', 'cat')}
        loading="lazy"
      />
    </div>
  );
};

export default CatImage;
