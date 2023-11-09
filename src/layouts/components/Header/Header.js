import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import Search from '../Search';
import { UserIcon, CartIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Header() {
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

                    <div className={cx('header-icon')}>
                        <Button to="/cart">
                            <CartIcon className={cx('cart-icon')} />
                        </Button>

                        <Button to="/auth">
                            <UserIcon className={cx('user-icon')} />
                        </Button>
                    </div>
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
                            <Link to="/newfruits">Trái cây tươi hàng ngày</Link>
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

export default Header;
