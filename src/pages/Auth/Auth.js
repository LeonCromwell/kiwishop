import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

import style from './Auth.module.scss';
// import Button from '~/components/Button';
import AuthForm from '~/components/AuthForm';

const cx = classNames.bind(style);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('form')}>
                    <div className={cx('logo')}>
                        <p className={cx('text-logo')}>KIWISTORE</p>
                    </div>

                    <AuthForm />
                </div>
            </div>
        </div>
    );
}

export default Login;
