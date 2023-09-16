import classNames from 'classnames/bind';

import style from './Header.module.scss';
import { Link } from 'react-router-dom';

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

                <div className={cx('header-sidebar')}>
                    <ul className={cx('sidebar')}>
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

                <div>icon</div>
            </div>
        </header>
    );
}

export default Header;
