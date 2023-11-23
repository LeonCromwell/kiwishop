import classNames from 'classnames/bind';
import { useState } from 'react';

import MyVerticallyCenteredModal from '../MyVerticallyCenteredModal/MyVerticallyCenteredModal';
import styles from './NewProductItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function NewProductItem({ Data, className }) {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <>
            <div className={cx('wrapper', className)} onClick={handleClick}>
                <Image src={Data.images[0].data} className={cx('image')} />

                <div className={cx('content')}>
                    <div className={cx('title')}>{Data.name}</div>
                    <div className={cx('price')}>{Data.price} đ/kg</div>
                </div>
            </div>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default NewProductItem;
