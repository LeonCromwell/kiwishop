import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import style from './Header.module.scss';
import Ucword from '~/components/Ucword';

const cx = classNames.bind(style);

function Header({ variant }) {
    const [title, setTitle] = useState('ĐĂNG NHẬP');

    const handleTitle = (title) => {
        return Ucword(title);
    };
    useEffect(() => {
        variant === 'contact'
            ? setTitle('LIÊN HỆ')
            : (function () {
                  variant === 'cart'
                      ? setTitle('GIỎ HÀNG')
                      : (function () {
                            variant === 'login' ? setTitle('ĐĂNG NHẬP') : setTitle('ĐĂNG KÝ');
                        })();
              })();
    }, [variant]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('middle')}>
                    <div className={cx('title')}>{title}</div>
                    <div className={cx('navigation')}>
                        <Link to="/">Trang chủ</Link>
                        <span>/</span>
                        <Link>{handleTitle(title)}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        variant: state.variant,
    };
};

export default connect(mapStateToProps)(Header);
