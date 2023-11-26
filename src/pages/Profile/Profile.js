import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';

import style from './profile.module.scss';
import * as Actions from '~/store/action';
import Image from '~/components/Image';
import ContactImage from '~/assets/Image/Contact';
import Button from '~/components/Button';
import { PencilIcon, EmailIcon, PhoneIcon, UserIcon, KeyIcon } from '~/components/Icons';

const cx = classNames.bind(style);

function Profile(props) {
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        props.dispatch(Actions.setVariant('profile'));
    }, [props]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className={cx('left')}>
                        <Image src={ContactImage.rectangle} className={cx('left-avt')} />
                        <div className={cx('infor')}>
                            <div className={cx('row')}>
                                <div>
                                    <EmailIcon width="32px" height="25px" />
                                    <p>kiwishop@gmail.com</p>
                                </div>
                                <PencilIcon />
                            </div>
                            <div className={cx('row')}>
                                <div>
                                    <PhoneIcon width="32px" height="25px" />
                                    <p>0819446425</p>
                                </div>
                                <PencilIcon />
                            </div>
                            <div className={cx('row')}>
                                <div>
                                    <UserIcon width="32px" height="25px" />
                                    <p>admin</p>
                                </div>
                                <PencilIcon />
                            </div>
                            <div className={cx('row')}>
                                <div>
                                    {' '}
                                    <KeyIcon width="32px" height="25px" />
                                    <p>Đổi mật khẩu</p>
                                </div>
                                <PencilIcon />
                            </div>
                            <div className={cx('row')}>
                                <div>
                                    <Button type="submit" className={cx('btn-save')}>
                                        Lưu thay đổi
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('infor')}>
                            <input type="text" placeholder="Họ" {...register('firstname', { required: true })} />
                            <input type="text" placeholder="Tên đệm" {...register('middlename', { required: true })} />
                            <input type="text" placeholder="Tên" {...register('lastname', { required: true })} />
                        </div>
                        <div className={cx('address')}>
                            <label>Địa chỉ</label>
                            <input type="text" placeholder="Việt Nam" {...register('country', { required: true })} />
                            <input
                                type="text"
                                placeholder="Tỉnh, thành phố"
                                {...register('province', { required: true })}
                            />
                            <input
                                type="text"
                                placeholder="Quận, huyện"
                                {...register('district', { required: true })}
                            />
                            <input type="text" placeholder="Xã, thị trấn" {...register('town', { required: true })} />
                            <textarea placeholder="Số nhà, ngõ" cols="30" rows="5" {...register('detail')}></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        variant: state.variant,
        user: state.user,
    };
};
export default connect(mapStateToProps)(Profile);
