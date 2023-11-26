import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import style from './Header.module.scss';

import { BellIcon, AdminEmailIcon, HomeIcon } from '~/components/Icons';
import Button from '~/components/Button';
import * as Actions from '~/store/action';
import Image from '~/components/Image';


const cx = classNames.bind(style);

function Header(props) {
    const user = localStorage.getItem('user');
    useEffect(() => {
        props.dispatch(Actions.setCurrentUser(JSON.parse(user)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('middle')}>
                    <Link to="/">
                        <div className={cx('header-logo')}>
                            <p className={cx('text-logo')}>KIWISTORE</p>
                        </div>
                    </Link>

                    <div className={cx('header-icon')}>
                        <Button to="/cart">
                            <HomeIcon className={cx('cart-icon')} />
                        </Button>
                        <Button to="/profile">
                            <AdminEmailIcon className={cx('user-icon')} />
                        </Button>
                        <Button to="/profile">
                            <BellIcon className={cx('user-icon')} />
                        </Button>
                        <Image src="ahsdcvabn" className={cx('avt')} />
                    </div>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps)(Header);
