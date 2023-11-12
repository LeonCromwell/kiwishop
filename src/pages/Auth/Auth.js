import classNames from 'classnames/bind';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

import style from './Auth.module.scss';
// import Button from '~/components/Button';
import AuthForm from '~/components/AuthForm';

const cx = classNames.bind(style);

function Login() {
    const [variant, setVariant] = useState('login');
    const callback = (chilData) => {
        setVariant(chilData);
    };
    // useEffect(() => {
    //     console.log(variant);
    // }, [variant]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('form', { 'register-variant': variant === 'register' })}>
                    <div className={cx('logo')}>
                        <p className={cx('text-logo')}>KIWISTORE</p>
                    </div>

                    <AuthForm parentCallback={callback} />
                </div>
            </div>
        </div>
    );
}

export default Login;
