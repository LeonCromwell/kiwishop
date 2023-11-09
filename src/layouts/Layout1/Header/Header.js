import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import Ucword from '~/components/Ucword';

const cx = classNames.bind(style);

function Header({ Title }) {
    const title = Ucword(Title);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('middle')}>
                    <div className={cx('title')}>{Title}</div>
                    <div className={cx('navigation')}>
                        <Link to="/">Trang chủ</Link>
                        <span>/</span>
                        <Link>{title}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
