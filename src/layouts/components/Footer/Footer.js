import classNames from 'classnames/bind';

import style from './Footer.module.scss';
import { LocationIcon, EmailIcon, PhoneIcon, InstagramIcon, TwitterIcon, FacebookIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-footer')}>
                    <p className={cx('text-logo')}>KIWISTORE</p>
                </div>
                <div className={cx('infor-footer')}>
                    <div className={cx('adress')}>
                        <div className={cx('item')}>
                            <LocationIcon width="32px" height="25px" />
                            <p>75, ngõ 259, P.Yên Hòa, Cầu Giấy, Hà Nội</p>
                        </div>
                        <div className={cx('item')}>
                            <EmailIcon width="32px" height="25px" />
                            <p>kiwishop@gmail.com</p>
                        </div>
                        <div className={cx('item')}>
                            <PhoneIcon width="32px" height="25px" />
                            <p>0819446425</p>
                        </div>
                        <div className={cx('item')}>
                            <InstagramIcon />
                            <TwitterIcon />
                            <FacebookIcon />
                        </div>
                    </div>

                    <div className={cx('form')}>
                        <div className={cx('form-header')}>
                            <p>ĐĂNG KÍ </p>
                            <p>Đăng kí để nhận được thông tin mới nhất từ chúng tôi</p>
                        </div>

                        <div className={cx('input')}>
                            <input type="text" placeholder="Email" />
                            <Button>Đăng kí</Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
