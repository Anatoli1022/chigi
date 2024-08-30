import classNames from 'classnames/bind';
import styles from './Join.module.scss';
import border from '../../../../assets/border.svg';
import dish from '../../../../assets/cats/cat-dish.webp';
import telegram from '../../../../assets/telegram.svg';
import twitter from '../../../../assets/twitter.svg';
import eagle from '../../../../assets/eagle.svg';

const cx = classNames.bind(styles);
const Join = () => {
  return (
    <section className={cx('join')}>
      <div className={cx('container')}>
        <img
          src={border}
          className={cx('image')}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
        <div className={cx('wrapper')}>
          <div>
            <h2 className={cx('title')}>Join us</h2>
            <p className={cx('text')}>+15 to social credit</p>
            <div className={cx('social')}>
              {/* Добавить ссылки */}
              <a href="">
                <img src={telegram} alt="telegram" loading="lazy" />
              </a>
              <a href="">
                <img src={twitter} alt="twitter" loading="lazy" />
              </a>
              <a href="">
                <img src={eagle} alt="eagle" loading="lazy" />
              </a>
            </div>
          </div>
          <div className={cx('cat-image')}>
            <img src={dish} alt="cat-slavonian" loading="lazy" />
          </div>
        </div>

        <img
          src={border}
          className={cx('image', 'bottom-image')}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Join;
