import classNames from 'classnames/bind';

import style from './Home.module.scss';
import Slide from '~/components/Slide';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('intro')}>
                    <Slide />
                </div>
            </div>
        </div>
    );
}

export default Home;
