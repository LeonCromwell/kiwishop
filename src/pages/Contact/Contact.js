import { connect } from 'react-redux';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

import * as Actions from '~/store/action';
import style from './Contact.module.scss';
import ContactImage from '~/assets/Image/Contact';
import { LocationIcon, EmailIcon, PhoneIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Contact(props) {
    useEffect(() => {
        props.dispatch(Actions.setVariant('contact'));
        // console.log(props.variant);
    }, [props]);

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <img src={ContactImage.rectangle} alt="rectangle" />
            </div>
            <div className={cx('right')}>
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
                </div>

                <p>LIÊN HỆ VỚI CHÚNG TÔI</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('row')}>
                        <input type="text" placeholder="Họ và tên" {...register('name', { require: true })} />
                        <input type="text" placeholder="Email" {...register('email', { require: true })} />
                    </div>

                    <div className={cx('row')}>
                        <input type="text" placeholder="Số điện thoại" {...register('phone', { require: true })} />
                        <input type="text" placeholder="Địa chỉ" {...register('adress', { require: true })} />
                    </div>
                    <div className={cx('row')}>
                        <textarea placeholder="Lời nhắn" {...register('note', { require: true })} />
                    </div>
                    <div className={cx('row')}>
                        <Button className={cx('btn-submit')} type="submit">
                            Gửi
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        variant: state.variant,
    };
};
export default connect(mapStateToProps)(Contact);
