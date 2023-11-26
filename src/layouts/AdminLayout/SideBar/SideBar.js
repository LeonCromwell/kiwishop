import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './SideBar.module.scss';
import Image from '~/components/Image';
import {
    InformationIcon,
    GuestIcon,
    OrderIcon,
    UserIcon,
    LikeIcon,
    GiftIcon,
    ProductIcon,
    LogoutIcon,
} from '~/components/Icons';
const cx = classNames.bind(style);
function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar-header')}>
                <Image src="ahsdcvabn" className={cx('avt')} />
                <p className={cx('name')}>Mai Ly Hai</p>
            </div>
            <div className={cx('sidebar-body')}>
                <ul className={cx('sidebar-list')}>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin">
                            <InformationIcon />
                            <p className={cx('sidebar-text')}>Thông tin</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin">
                            <GuestIcon />
                            <p className={cx('sidebar-text')}>Khách hàng</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin">
                            <OrderIcon />
                            <p className={cx('sidebar-text')}>Đơn hàng</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin">
                            <UserIcon width="24px" height="24px" />
                            <p className={cx('sidebar-text')}>Người dùng</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin">
                            <LikeIcon />
                            <p className={cx('sidebar-text')}>Đánh giá</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin">
                            <GiftIcon />
                            <p className={cx('sidebar-text')}>Quà tặng</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin/product-manager">
                            <ProductIcon />
                            <p className={cx('sidebar-text')}>Sản phẩm</p>
                        </Link>
                    </li>
                    <li className={cx('sidebar-item')}>
                        <Link to="/admin">
                            <LogoutIcon />
                            <p className={cx('sidebar-text')}>Đăng xuất</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
