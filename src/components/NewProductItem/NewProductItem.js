import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './NewProductItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function NewProductItem({ data, className }) {
    return (
        <Link to={data.to}>
            <div className={cx('wrapper', className)}>
                <Image src={data.img} className={cx('image')} />
                <div className={cx('content')}>
                    <div className={cx('title')}>{data.title}</div>
                    <div className={cx('price')}>{data.price} đ/kg</div>
                </div>
            </div>
        </Link>
    );
}

export default NewProductItem;
