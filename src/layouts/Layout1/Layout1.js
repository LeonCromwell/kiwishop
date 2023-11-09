import classNames from 'classnames/bind';

import Footer from '~/layouts/components/Footer';
import style from './Layout1.module.scss';
import Header from './Header';

const cx = classNames.bind(style);

function Layout1({ children, Title }) {
    return (
        <div className={cx('wrapper')}>
            <Header Title={Title} />
            <div className={cx('container')}>
                <div className={cx('content')}> {children} </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout1;
