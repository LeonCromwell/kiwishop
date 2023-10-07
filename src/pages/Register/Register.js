import classNames from 'classnames/bind';
import axios from 'axios';
import { useState } from 'react';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [soDienThoai, setSoDienThoai] = useState('');
    const [diaChi, setDiaChi] = useState('');

    async function saveUser(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/home/register/save', {
                email: email,
                password: password,
                hoTen: name,
                soDienThoai: soDienThoai,
                diaChi: diaChi,
                role: 'USER',
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <form>
                <div className={cx('mb-3')}>
                    {/* email */}
                    <label htmlFor="exampleInputEmail1" className={cx('form-label')}>
                        Email address
                    </label>
                    <input
                        type="email"
                        className={cx('form-control')}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <div id="emailHelp" className={cx('form-text')}>
                        We'll never share your email with anyone else.
                    </div>
                </div>
                {/* passwword */}
                <div className={cx('mb-3')}>
                    <label htmlFor="exampleInputPassword1" className={cx('form-label')}>
                        Password
                    </label>
                    <input
                        type="password"
                        className={cx('form-control')}
                        id="exampleInputPassword1"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                {/* hoten */}
                <div className={cx('mb-3')}>
                    <label htmlFor="name" className={cx('form-label')}>
                        Họ Tên
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                {/* sdt */}
                <div className={'mb-3'}>
                    <label htmlFor="phonenumber" className={cx('form-label')}>
                        Số điện thoại
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="phonenumber"
                        name="soDienThoai"
                        onChange={(e) => setSoDienThoai(e.target.value)}
                    ></input>
                </div>
                {/* dia chi */}
                <div className={cx('mb-3')}>
                    <label htmlFor="address" className={cx('form-label')}>
                        Địa chỉ
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="address"
                        name="diaChi"
                        onChange={(e) => setDiaChi(e.target.value)}
                    ></input>
                </div>

                <button type="submit" className={cx('btn btn-primary')} onClick={saveUser}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Register;
