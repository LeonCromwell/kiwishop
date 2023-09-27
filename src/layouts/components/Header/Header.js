import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling

import style from './Header.module.scss';
import Search from '../Search';
import { UserIcon, CartIcon } from '~/components/Icons';

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
                        <Tippy content="User" placement="bottom" delay={[200, 200]} animation="fade">
                            <button>
                                <UserIcon className={cx('user-icon')} />
                            </button>
                        </Tippy>
                        <Tippy content="Cart" placement="bottom" delay={[200, 200]} animation="fade">
                            <button>
                                <CartIcon className={cx('cart-icon')} />
                            </button>
                        </Tippy>
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
