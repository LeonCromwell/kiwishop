import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import style from './ProductManager.module.scss';
import Button from '~/components/Button';
import { PlusIcon } from '~/components/Icons';
import Image from '~/components/Image';
import * as productService from '~/Services/ProductService/productService';
const cx = classNames.bind(style);

function ProductManager() {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        const fetchListProduct = async () => {
            const res = await productService.getListProduct();
            if (res) {
                console.log(res.data);
                setListProduct(res.data);
            }
        };
        fetchListProduct();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>SẢN PHẨM</p>
                <p>
                    <Link to="/admin">Trang chủ</Link> / Sản phẩm
                </p>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-header')}>
                    <div className={cx('left')}>
                        <p>Sản phẩm</p>
                        <p>{listProduct.length} sản phẩm</p>
                    </div>
                    <div className={cx('right')}>
                        <Link to="/admin/create-product">
                            <Button type="primary" leftIcon={<PlusIcon />}>
                                Thêm sản phẩm
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={cx('inner')}>
                    <table class="table mt-4" align="center">
                        <thead>
                            <tr align="center">
                                <th scope="col"></th>
                                <th scope="col">Tên</th>
                                <th scope="col">Nguồn gốc</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Tồn kho</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listProduct.map((item, index) => (
                                <tr align="center" key={index}>
                                    <td>
                                        <Image src={item.images[0].data} className={cx('row-image')} />
                                    </td>

                                    <td>
                                        {' '}
                                        <Link
                                            to="/admin/product-detail"
                                            onClick={() => {
                                                localStorage.setItem('product', JSON.stringify(item));
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td>{item.origin}</td>
                                    <td>{item.price} đ</td>
                                    <td>1000 kg</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductManager;
