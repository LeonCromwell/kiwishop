import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import style from './AuthForm.module.scss';
import Button from '../Button';
const cx = classNames.bind(style);

function AuthForm(props) {
    const [variant, setVariant] = useState('login');
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const sendData = () => {
        props.parentCallback(variant);
    };
    const handleClick = (e) => {
        e.preventDefault();
        setVariant(variant === 'login' ? 'register' : 'login');
    };
    useEffect(() => {
        sendData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variant]);

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cx({ 'register-variant': variant === 'register' })}>
            {variant === 'login' ? (
                <>
                    <div className={cx('row')}>
                        <input
                            type="text"
                            placeholder="Tên tài khoản / Email"
                            {...register('username', { require: true })}
                        />
                    </div>
                    <div className={cx('row')}>
                        <input type="password" placeholder="Mật khẩu" {...register('password', { require: true })} />
                    </div>
                    <div className={cx('row')} id={cx('group')}>
                        <span>
                            <input type="checkbox" />
                            <label>Nhớ mật khẩu</label>
                        </span>
                        <Link to="/forgetpassword">Quên mật khẩu?</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className={cx('row')}>
                        <input type="email" placeholder="Email address" {...register('email', { require: true })} />
                    </div>
                    <div className={cx('row')}>
                        <input type="password" placeholder="Mật khẩu" {...register('password', { require: true })} />
                    </div>
                    <div className={cx('row')}>
                        <input type="text" placeholder="Họ và tên" {...register('fullName', { require: true })} />
                    </div>
                    <div className={cx('row')}>
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            {...register('phoneNumber', { require: true })}
                        />
                    </div>
                    <div className={cx('row')}>
                        <input type="text" placeholder="Địa chỉ" {...register('address', { require: true })} />
                    </div>
                </>
            )}
            <div className={cx('row')}>
                <Button type="submit" className={cx('btn-submit')}>
                    {variant === 'login' ? 'Đăng nhập' : 'Đăng ký'}
                </Button>
            </div>
            <div className={cx('row')}>
                <p className={cx('text-register')}>
                    {variant === 'login' ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
                    <Button className={cx('btn-change-variant')} onClick={handleClick}>
                        {variant === 'login' ? 'Đăng ký' : 'Đăng nhập'}
                    </Button>
                </p>
            </div>
        </form>
    );
}

export default AuthForm;
