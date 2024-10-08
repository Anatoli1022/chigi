import classNames from 'classnames/bind';
import styles from './Arts.module.scss';
import line from '../../../../assets/line.svg';
import copy from '../../../../assets/copy.svg';
import CatImage from '../../../shared/image/CatImage';
import { data } from './data';

const cx = classNames.bind(styles);

const Arts = () => {
  const handleCopyClick = () => {
    if (navigator.clipboard) {
      const textToCopy = 'SZEs26Drn...'; // Замените на текст, который нужно скопировать
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          console.log('Текст скопирован в буфер обмена!');
        },
        (err) => {
          console.error('Ошибка при копировании текста: ', err);
        }
      );
    } else {
      console.error('Clipboard API не поддерживается.');
    }
  };

  return (
    <section className={cx('arts')}>
      <div className={cx('container')}>
        <div className={cx('wrapper-title')}>
          <img src={line} alt="" loading="lazy" aria-hidden="true" />
          <h2 className={cx('title')}>Arts</h2>
          <img
            src={line}
            className={cx('right-line')}
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <div>
          <ul className={cx('list')}>
            {data.map((item, i) => (
              <li className={cx('item')} key={i}>
                <CatImage image={item.link} alt={item.alt} />
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('wrapper-button')}>
          <button className={cx('button-red')}>Buy</button>
          <button className={cx('button-black')} onClick={handleCopyClick}>
            <span>SZEs26Drn...</span>{' '}
            <img
              src={copy}
              className={'image-copy'}
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Arts;
