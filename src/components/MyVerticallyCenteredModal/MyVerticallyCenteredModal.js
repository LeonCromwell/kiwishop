// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classNames from 'classnames/bind';

import style from './MyVerticallyCenteredModal.module.scss';
import Image from '../Image';
import Button from '../Button';
import { CartIconbtn } from '~/components/Icons';

const cx = classNames.bind(style);

function MyVerticallyCenteredModal({ Data, ...props }) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton />
            <Modal.Body>
                <div className={cx('wrapper')}>
                    <div className={cx('left')}>
                        {Data.images[0] ? (
                            <Image src={Data.images[0].data} className={cx('image')} />
                        ) : (
                            <Image src="adkjfda" className={cx('image')} />
                        )}
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('title')}>
                            <p>{Data.name}</p>
                            <p>Xuất xứ: {Data.origin} </p>
                            <p>Khối lượng: 250g/1 hộp </p>
                            <p>Giá tiền: {Data.price}đ/1kg </p>
                            <div className={cx('number')}>
                                <p>Số lượng:</p>
                                <div className={cx('action')}>
                                    <Button>-</Button>
                                    <input type="text" />
                                    <Button>+</Button>
                                </div>
                            </div>
                        </div>

                        <Button className={cx('add-cart-btn')} leftIcon={<CartIconbtn />}>
                            Thêm giỏ hàng
                        </Button>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
