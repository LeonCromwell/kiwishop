import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import style from './Header.module.scss';
import Search from '../Search';
import { UserIcon, CartIcon } from '~/components/Icons';
import Button from '~/components/Button';
import * as Actions from '~/store/action';

const cx = classNames.bind(style);

function Header(props) {
    const user = localStorage.getItem('user');
    useEffect(() => {
        props.dispatch(Actions.setCurrentUser(JSON.parse(user)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('middle')}>
                    <Link to="/">
                        <div className={cx('header-logo')}>
                            <p className={cx('text-logo')}>KIWISTORE</p>
                        </div>
                    </Link>

                    <Search />

                    {user ? (
                        <div className={cx('header-icon')}>
                            <Button to="/cart">
                                <CartIcon className={cx('cart-icon')} />
                            </Button>
                            <Button to="/profile">
                                <UserIcon className={cx('user-icon')} />
                            </Button>
                        </div>
                    ) : (
                        <Button to="/auth">
                            <UserIcon className={cx('user-icon')} />
                        </Button>
                    )}
                </div>

                <div className={cx('group')}>
                    <ul className={cx('navigation')}>
                        <li>
                            <Link to="/">Trang Chủ</Link>
                        </li>
                        <li>
                            <Link to="/store">Cửa Hàng</Link>
                        </li>

                        <li>
                            <Link to="/contact">Liên Hệ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps)(Header);
