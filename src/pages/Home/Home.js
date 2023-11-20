import classNames from 'classnames/bind';

import style from './Home.module.scss';
import Slide from '~/components/Slide';
import Image from '~/components/Image';
import images from '~/assets/Image';
import WorkTime from '~/assets/Image/WorkTime';
import Target from '~/assets/Image/targetbox';
import Bestseller from '~/assets/Image/Bestseller';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('intro')}>
                    <Slide />
                </div>
                <div className={cx('welcome')}>
                    {/* <WcImage src={Image.welcome} alt="Welcome" /> */}
                    <Image src={images.welcome} alt="Welcome" />
                </div>
                <div className={cx('work-time')}>
                    <div>
                    <Image src={WorkTime.fruits} alt="Work Time" className={cx('wt-img')} />
                    <Image src={WorkTime.bg1} alt="Work Time" className={cx('bg1')} />
                    <Image src={WorkTime.bg2} alt="Work Time" className={cx('bg2')} />
                    <Image src={WorkTime.bg3} alt="Work Time" className={cx('bg3')} />
                    </div>
                    <div className={cx('wt-title')}>
                        <p className={cx('title-header')}>Kiwi Store hân hạnh phục vụ quý khách:</p>
                        <div className={cx('title-item')}>
                            <Image src={WorkTime.open} alt="Open" className={cx('wt-icon')} />
                            <p>
                                7h, thứ hai - thứ sáu<br></br> 9h, chủ nhật
                            </p>
                        </div>
                        <div className={cx('title-item')}>
                            <Image src={WorkTime.close} alt="Close" className={cx(' wt-icon')} />
                            <p>
                                21h, thứ hai - thứ sáu<br></br> 18h, thứ bảy - chủ nhật
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('target-box')}>
                    <p className={cx('target-desc')}>
                        Với mục tiêu hướng tới sức khỏe khách hàng trong nước, Kiwi Store luôn tiên phong trong việc
                        cung cấp trái cây sạch đạt chuẩn GlobalGAP. Hỗ trợ khuyến khích phát triển trái cây sạch trong
                        nước, đem lại nguồn thực phẩm sạch, an toàn, uy tín. Qua đó làm nhịp cầu đưa các sản phẩm trái
                        cây ngoại nhập chất lượng cao, đảm bảo an toàn vệ sinh.
                    </p>

                    <Image src={Target.kiwistore} alt="kiwistore" />
                </div>

                <div className={cx('best-seller')}>
                    <div className={cx('best-seller-header')}>
                        <p>- power of nature - </p>
                        <p>Best Sellers Products</p>{' '}
                        <p>
                            We support environmental awareness, just business practices, and health, and our selections
                            illustrate that.
                        </p>
                    </div>

                    <div className={cx('best-seller-content')}>
                        <div className={cx('col-1')}>
                            <div className={cx('row-1')}>
                                <Image src={Bestseller.luu} alt="luu" />
                                <p>
                                    Lựu Peru chứa rất nhiều vitamin C và Kali, đặc biệt vô cùng giàu Polyphenol (cao gấp
                                    3 đến 4 lần so với rượu vang đỏ) - chất có khả năng chống oxy hóa.
                                </p>
                            </div>
                            <div className={cx('row-2')}>
                                <Image src={Bestseller.cam} alt="cam" />
                                <p>
                                    Cam ruột đỏ Mỹ có hàm lượng vitamin C vượt trội và lớn gấp 150% so với các loại cam
                                    khác, rất tốt cho làn da, giúp chống lão hoá, có tác dụng phục hồi sức khoẻ.{' '}
                                </p>
                            </div>
                        </div>
                        <div className={cx('col-2')}>
                            <div className={cx('row-1')}>
                                <Image src={Bestseller.vietquat} alt="vietquat" />
                                <p>
                                    Quả Việt Quất được mệnh danh là một loại quả để chế thuốc trường sinh, chống lại
                                    bệnh tiểu đường, bệnh tim mạch, giảm cholesterol và nhất là hiện tượng lão hóa của
                                    các tế bào trong cơ thể.{' '}
                                </p>
                            </div>
                            <div className={cx('row-2')}>
                                <Image src={Bestseller.dautay} alt="dautay" />
                                <p>
                                    Dâu tây Hàn Quốc có hàm lượng vitamin C cao gấp 1,5 lần so với quýt, gấp 2 lần so
                                    với chanh và gấp 10 lần so với táo, giúp tăng khả năng miễn dịch, chống oxy hoá,
                                    giúp bảo vệ mắt, đặc biệt là giác mạc và võng mạc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
