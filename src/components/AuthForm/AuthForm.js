import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './AuthForm.module.scss';
import Button from '../Button';
import * as Action from '~/store/action';
import * as loginService from '~/Services/authService/loginService';
import * as registerService from '~/Services/authService/registerService';

const cx = classNames.bind(style);

function AuthForm(props) {
    const [variant, setVariant] = useState('login');

    //toast
    const notify = () => toast.success('Đăng nhập thành công');

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
        // console.log(props);
        props.dispatch(Action.setVariant(variant));
        // console.log(props.variant);
        sendData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variant]);

    const onSubmit = async (Data) => {
        if (variant === 'login') {
            try {
                const res = await loginService.login(Data.username, Data.password);
                if (res) {
                    notify();
                    localStorage.setItem('user', JSON.stringify(res));
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 5000);
                } else {
                    toast.error('Đăng nhập thất bại');
                }
            } catch (error) {
                console.log(error);
            }
        } else if (variant === 'register') {
            try {
                const res = await registerService.register(Data.email, Data.username, Data.password);
                if (res) {
                    toast.success('Đăng ký thành công');
                    props.dispatch(Action.setCurrentUser(res));
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 5000);
                } else {
                    toast.error('Đăng ký thất bại');
                }
            } catch (error) {
                toast.error('Đăng ký thất bại');
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit(onSubmit)} className={cx({ 'register-variant': variant === 'register' })}>
                {variant === 'login' ? (
                    <>
                        <div className={cx('row')}>
                            <input
                                type="text"
                                placeholder="Tên tài khoản / Email"
                                {...register('username', { required: true })}
                            />
                        </div>
                        <div className={cx('row')}>
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                {...register('password', { required: true })}
                            />
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
                            <input
                                type="email"
                                placeholder="Email address"
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className={cx('row')}>
                            <input type="text" placeholder="Username" {...register('username', { required: true })} />
                        </div>
                        <div className={cx('row')}>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register('password', { required: true })}
                            />
                        </div>

                        <div className={cx('row')}>
                            <input
                                type="text"
                                placeholder="Confirm Password"
                                {...register('confirmpassword', { required: true })}
                            />
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

            <ToastContainer />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        variant: state.variant,
        currentUser: state.currentUser,
    };
};
export default connect(mapStateToProps)(AuthForm);
