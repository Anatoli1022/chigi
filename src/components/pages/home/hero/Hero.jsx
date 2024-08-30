import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import hero from '../../../../assets/cats/hero.webp';
import symbols from '../../../../assets/symbols.svg';
import border from '../../../../assets/border.svg';
import telegram from '../../../../assets/telegram.svg';
import twitter from '../../../../assets/twitter.svg';
import eagle from '../../../../assets/eagle.svg';

const cx = classNames.bind(styles);
const Hero = () => {
  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <img
          src={border}
          className={cx('image', 'top-image')}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
        <div className={cx('wrapper')}>
          <img
            src={symbols}
            className={cx('left-symbol')}
            alt=""
            loading="eager"
            aria-hidden="true"
          />
          <div className={cx('container-image')}>
            <div>
              <img
                src={hero}
                className={cx('image')}
                alt=""
                loading="eager"
                aria-hidden="true"
              />
            </div>

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
          <img
            src={symbols}
            className={cx('right-symbol')}
            alt=""
            loading="eager"
            aria-hidden="true"
          />
          <div className={cx('social-mobile')}>
            {/* Добавить ссылки */}
            <a href="">
              <img
                src={telegram}
                className={cx('image-social-mobile')}
                alt="telegram"
                loading="lazy"
              />
            </a>
            <a href="">
              <img
                src={twitter}
                className={cx('image-social-mobile')}
                alt="twitter"
                loading="lazy"
              />
            </a>
            <a href="">
              <img
                src={eagle}
                className={cx('image-social-mobile')}
                alt="eagle"
                loading="lazy"
              />
            </a>
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

export default Hero;
