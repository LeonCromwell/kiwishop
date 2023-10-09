import classNames from 'classnames/bind';

import style from './Home.module.scss';
import Slide from '~/components/Slide';
import Image from '~/components/Image';
import images from '~/assets/Image';

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
            </div>
        </div>
    );
}

export default Home;
