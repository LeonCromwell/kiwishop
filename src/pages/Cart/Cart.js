import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

import * as Actions from '~/store/action';
import style from './Cart.module.scss';
import Image from '~/components/Image';
import { XCircelIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(style);

const NEW_PRODUCT_ITEMS = [
    {
        img: 'https://dalatfarm.net/wp-content/uploads/2020/12/dau-tay-da-lat-300x300.jpg',
        to: '/product',
        title: 'Dâu tây Đà Lạt',
        price: '400.000',
        quantity: 5,
    },
    {
        img: 'https://thucphamsachgiatot.vn/image/cache/catalog/V-CAM-RUOT-DO-MY-700x700.jpg',
        to: '/product',
        title: 'Cam ruột đỏ Mỹ',
        price: '500.000',
        quantity: 2,
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M7CT9OJ8XCwl_x9fNCUNbDFfP55w10KHCdiMGTHiPQ&s',
        to: '/product',
        title: 'Nho tím',
        price: '400.000',
        quantity: 3,
    },
    {
        img: 'https://newfreshfoods.com.vn/datafiles/3/2018-02-27/16100978059780_d94nfxGl.jpg',
        to: '/product',
        title: 'Kiwi',
        price: '350.000',
        quantity: 1,
    },
];
function Cart(props) {
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        props.dispatch(Actions.setVariant('cart'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>
            <Table hover borderless>
                <thead>
                    <tr align="center">
                        <th style={{ width: '100px' }}></th>
                        <th>Sản phẩm</th>
                        <th>Giá(nghìn đồng/kg)</th>
                        <th>Số lượng (kg)</th>
                        <th>Tổng (nghìn đồng)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {NEW_PRODUCT_ITEMS.map((item, index) => {
                        return (
                            <tr key={index} align="center">
                                <td>
                                    <Image src={item.img} style={{ height: '100px' }} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div className={cx('number')}>
                                        <div className={cx('action')}>
                                            <Button>-</Button>
                                            <form>
                                                <input type="text" defaultValue={item.quantity} />
                                            </form>
                                            <Button>+</Button>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.quantity * item.price}</td>
                                <td>
                                    <Button leftIcon={<XCircelIcon />}></Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <div className={cx('total')}>
                <div className={cx('address')}>
                    <p>THÔNG TIN NHẬN HÀNG </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={cx('row')}>
                            <input type="text" placeholder="Họ và tên" {...register('fullName', { required: true })} />
                        </div>
                        <div className={cx('row')}>
                            <input
                                type="text"
                                placeholder="Số điện thoại"
                                {...register('phoneNumber', { required: true })}
                            />
                        </div>
                        <div className={cx('row')}>
                            <input type="text" placeholder="Địa chỉ" {...register('address', { required: true })} />
                        </div>
                    </form>
                </div>
                <div className={cx('bill')}>
                    <p>THANH TOÁN </p>
                    <p>Phương thức: Thanh toán khi nhận hàng </p>
                    <p>
                        Tổng thanh toán: <span style={{ color: 'red' }}> 3.300.000đ</span>
                    </p>

                    <Button className={cx('submit-btn')}>Đặt hàng</Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        variant: state.variant,
        quantity: state.quantity,
    };
};
export default connect(mapStateToProps)(Cart);
