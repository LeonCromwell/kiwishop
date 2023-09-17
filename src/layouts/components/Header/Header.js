import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    // const [active, setActive] = useState(false);
    // const [hide, setHide] = useState(false);
    // const [open, setOpen] = useState(false);

    // const handlesearch = () => {
    //     setActive(!active);
    // };

    // const handleclose = () => {
    //     setActive(!active);
    //     setHide(!hide);
    // };
    // const handlemenutoggle = () => {
    //     setOpen(!open);
    //     setActive(!active);
    // };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <div className={cx('header-logo')}>
                        <p className={cx('text-logo')}>KIWISTORE</p>
                    </div>
                </Link>

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
                    {/* <div className={cx('search')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon
                                className={cx('search-btn', { active: active })}
                                onClick={handlesearch}
                                icon={faMagnifyingGlass}
                            />
                            <FontAwesomeIcon
                                className={cx('close-btn', { active: active })}
                                onClick={handleclose}
                                icon={faCircleXmark}
                            />
                        </span>
                    </div> */}
                    {/* <FontAwesomeIcon
                        className={cx('menu-toggle', { hide: hide })}
                        onClick={handlemenutoggle}
                        icon={faBars}
                    /> */}
                </div>
                {/* <div className={cx('search-box', { active: active })}>
                    <input type="text" placeholder="Search..." />
                </div> */}
            </div>
        </header>
    );
}

export default Header;
