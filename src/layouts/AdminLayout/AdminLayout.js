import classNames from 'classnames/bind';

import style from './AdminLayout.module.scss';
import Header from './Header';
import SideBar from './SideBar';

const cx = classNames.bind(style);

function AdminLayout({ children, Title }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {' '}
                    <SideBar /> {children}{' '}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
