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
            </div>
        </header>
    );
}

export default Header;
