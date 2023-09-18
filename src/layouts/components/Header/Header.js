import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import Search from '../Search';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <div className={cx('header-logo')}>
                        <p className={cx('text-logo')}>KIWISTORE</p>
                    </div>
                </Link>

                <Search />

                <div className={cx('group')}>
                    <ul className={cx('navigation')}>
                        <li>
                            <Link to="/">TRANG CHỦ</Link>
                        </li>
                        <li>
                            <Link to="/store">CỬA HÀNG</Link>
                        </li>
                        <li>
                            <Link to="/contact">LIÊN HỆ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
