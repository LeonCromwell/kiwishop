import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './ProductDetail.module.scss';
import Button from '~/components/Button';
import * as ProductServices from '~/Services/ProductService/productService';

const cx = classNames.bind(style);

function ProductDetail() {
    const product = JSON.parse(localStorage.getItem('product'));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSendData = async (data) => {
        try {
            data.id = product.id;
            const res = await ProductServices.updateProduct(data);
            if (res) {
                toast.success('Thay đổi thông tin thành công');
            } else {
                toast.error('Thay đổi thông tin thất bại');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async () => {
        try {
            const res = await ProductServices.deleteProduct(product.id);
            if (res) {
                toast.success('Xóa sản phẩm thành công');
                setTimeout(() => {
                    window.location.href = '/admin/product-manager';
                }, 2000);
            } else {
                toast.error('Xóa sản phẩm thất bại');
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
                    <Link to="/admin">Trang chủ</Link> / <Link to="/admin/product-manager">Sản phẩm</Link> /{' '}
                    {product.name}
                </p>
            </div>

            <Button className={cx('btn-delete')} onClick={handleDelete}>
                Xóa
            </Button>

            <div className={cx('content')}>
                <form onSubmit={handleSubmit(handleSendData)} encType="multipart/form-data" method="post">
                    <div>
                        <div className={cx('input-image')}>
                            <input type="file" />
                        </div>
                        <div className={cx('input')}>
                            <div className={cx('row')}>
                                <p>Tên sản phẩm :</p>
                                <input type="text" {...register('name')} defaultValue={product.name} />
                            </div>
                            <div className={cx('row')}>
                                <p>Ngày nhập :</p>
                                <input type="date" {...register('date')} />
                            </div>
                            <div className={cx('row')}>
                                <p>Khối lượng :</p>
                                <input type="number" {...register('weight')} defaultValue={product.quantity} />
                            </div>
                            <div className={cx('row')}>
                                <p>Xuất xứ :</p>
                                <input type="text" {...register('origin')} defaultValue={product.origin} />
                            </div>
                            <div className={cx('row')}>
                                <p>Giá :</p>
                                <input type="number" {...register('price')} defaultValue={product.price} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx('describe')}>
                            <p>Mô tả :</p>
                            <textarea {...register('describe')} defaultValue={product.description} />
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

export default ProductDetail;
