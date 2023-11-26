import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import style from './Store.module.scss';
import Image from '~/components/Image';
import StoreImage from '~/assets/Image/StoreImage';
import Certify from '~/assets/Image/StoreImage/certify';
import NewProductItem from '~/components/NewProductItem';
import * as productService from '~/Services/ProductService/productService';

const cx = classNames.bind(style);

const CERTIFY = [
    {
        img: Certify.certify1,
    },
    {
        img: Certify.certify2,
    },
    {
        img: Certify.certify3,
    },
    {
        img: Certify.certify4,
    },
];

function Store() {
    const [listProduct, setListProduct] = useState([]);
    const [listNewProduct, setListNewProduct] = useState([]);

    useEffect(() => {
        const fetchListProduct = async () => {
            const res = await productService.getListProduct();
            if (res) {
                // console.log(res.data);
                setListProduct(res.data);
            }
        };

        const fetchListNewProduct = async (limitNumber) => {
            const res = await productService.getListNewProduct(limitNumber);
            if (res) {
                console.log(res);
                setListNewProduct(res.data);
            }
        };
        fetchListNewProduct(4);
        fetchListProduct();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Image src={StoreImage.StoreHeader} className={cx('inner-header-image')} />
                <div className={cx('new-product')}>
                    <div className={cx('header-title')}>
                        <p className={cx('text')}>SẢN PHẨM MỚI </p>
                    </div>
                    <div className={cx('content')}>
                        {listNewProduct.map((item, index) => (
                            <NewProductItem key={index} Data={item} />
                        ))}
                    </div>
                </div>

                <div className={cx('benefit')}>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.freeship} />
                        <p className={cx('text')}>Freeship</p>
                    </div>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.gift} />
                        <p className={cx('text')}>Phục vụ tận tình</p>
                    </div>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.handheart} />
                        <p className={cx('text')}>Quà tặng hấp dẫn</p>
                    </div>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.like} />
                        <p className={cx('text')}>Đảm bảo chất lượng</p>
                    </div>
                </div>

                <div className={cx('list-product')}>
                    <div className={cx('header-title')}>
                        <p className={cx('text')}>Danh mục sản phẩm </p>
                    </div>

                    <div className={cx('content')}>
                        {listProduct.map((item, index) => (
                            <NewProductItem className={cx('item')} key={index} Data={item} />
                        ))}
                    </div>
                </div>

                <div className={cx('certify')}>
                    {/* <Image src="../../assets/Image/StoreImage/certify/1.png" className={cx('item')} /> */}
                    {CERTIFY.map((item, index) => (
                        <Image key={index} src={item.img} className={cx('item')} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Store;
