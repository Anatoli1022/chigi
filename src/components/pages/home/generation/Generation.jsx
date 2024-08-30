import classNames from 'classnames/bind';
import styles from './Generation.module.scss';
import CatImage from '../../../shared/image/CatImage';
import cat from '../../../../assets/cats/cat-shaolin.webp';
import line from '../../../../assets/line.svg';
const cx = classNames.bind(styles);
const Generation = () => {
  return (
    <section className={cx('generation')}>
      <div className={cx('container')}>
        <div className={cx('wrapper-title')}>
          <img src={line} alt="" loading="lazy" aria-hidden="true" />
          <h2 className={cx('title')}>CHIGI generator (coming soon)</h2>
          <img
            src={line}
            className={cx('right-line')}
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <div className={cx('wrapper')}>
          <CatImage image={cat} alt="cat-shaolin" />
        </div>
      </div>
    </section>
  );
};

export default Generation;
