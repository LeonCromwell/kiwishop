import classNames from 'classnames/bind';

import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-logo')}>
                    <p className={cx('text-logo')}>KIWISTORE</p>
                </div>

                <div className={cx('header-sidebar')}>
                    <ul className={cx('sidebar')}>
                        <li>TRANG CHỦ</li>
                        <li>CỬA HÀNG</li>
                        <li>LIÊN HỆ</li>
                    </ul>
                </div>

                <div>icon</div>
            </div>
        </header>
    );
}

export default Header;
