import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './CreateProduct.module.scss';
import Button from '~/components/Button';
import * as ProductServices from '~/Services/ProductService/productService';
const cx = classNames.bind(style);

function CreateProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSendData = async (data) => {
        try {
            const res = await ProductServices.createProduct(data);
            if (res) {
                toast.success('Thêm sản phẩm thành công');
            } else {
                toast.error('Thêm sản phẩm thất bại');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>SẢN PHẨM</p>
                <p>
                    <Link to="/admin">Trang chủ</Link> / <Link to="/admin/product-manager">Sản phẩm</Link> / Thêm sản
                    phẩm
                </p>
            </div>

            <div className={cx('content')}>
                <form onSubmit={handleSubmit(handleSendData)} encType="multipart/form-data" method="post">
                    <div>
                        <div className={cx('input-image')}>
                            <input type="file" />
                        </div>
                        <div className={cx('input')}>
                            <div className={cx('row')}>
                                <p>Tên sản phẩm :</p>
                                <input type="text" {...register('name')} />
                            </div>
                            <div className={cx('row')}>
                                <p>Ngày nhập :</p>
                                <input type="date" {...register('date')} />
                            </div>
                            <div className={cx('row')}>
                                <p>Khối lượng :</p>
                                <input type="number" {...register('weight')} />
                            </div>
                            <div className={cx('row')}>
                                <p>Xuất xứ :</p>
                                <input type="text" {...register('origin')} />
                            </div>
                            <div className={cx('row')}>
                                <p>Giá :</p>
                                <input type="number" {...register('price')} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx('describe')}>
                            <p>Mô tả :</p>
                            <textarea {...register('describe')} />
                        </div>

                        <Button type="submit" className={cx('btn-submit')}>
                            Thêm
                        </Button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CreateProduct;
