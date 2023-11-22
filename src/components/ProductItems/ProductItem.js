import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './ProductItem.module.scss';

const cx = classNames.bind(style);

function ProductItem({ data, to }) {
    return (
        <Link to={to} className={cx('wrapper')}>
            <img src="#" alt={data.name} className={cx('product-img')} />
            <div className={cx('infor')}>
                <p className={cx('infor-name')}>
                    <span>{data.name}</span>
                </p>
                <span className={cx('infor-price')}>{data.price}đ</span>
            </div>
        </Link>
    );
}

export default ProductItem;
