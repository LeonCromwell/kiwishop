import classNames from 'classnames/bind';

import style from './Store.module.scss';
import Image from '~/components/Image';
import StoreImage from '~/assets/Image/StoreImage';
import Certify from '~/assets/Image/StoreImage/certify';
import NewProductItem from '~/components/NewProductItem';

const cx = classNames.bind(style);
const NEW_PRODUCT_ITEMS = [
    {
        img: 'https://dalatfarm.net/wp-content/uploads/2020/12/dau-tay-da-lat-300x300.jpg',
        to: '/product',
        title: 'Dâu tây Đà Lạt',
        price: '400.000',
    },
    {
        img: 'https://thucphamsachgiatot.vn/image/cache/catalog/V-CAM-RUOT-DO-MY-700x700.jpg',
        to: '/product',
        title: 'Cam ruột đỏ Mỹ',
        price: '500.000',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M7CT9OJ8XCwl_x9fNCUNbDFfP55w10KHCdiMGTHiPQ&s',
        to: '/product',
        title: 'Nho tím',
        price: '400.000',
    },
    {
        img: 'https://newfreshfoods.com.vn/datafiles/3/2018-02-27/16100978059780_d94nfxGl.jpg',
        to: '/product',
        title: 'Kiwi',
        price: '350.000',
    },
];

const PRODUCT = [
    {
        img: 'https://dalatfarm.net/wp-content/uploads/2020/12/dau-tay-da-lat-300x300.jpg',
        to: '/product',
        title: 'Dâu tây Đà Lạt',
        price: '400.000',
    },
    {
        img: 'https://thucphamsachgiatot.vn/image/cache/catalog/V-CAM-RUOT-DO-MY-700x700.jpg',
        to: '/product',
        title: 'Cam ruột đỏ Mỹ',
        price: '500.000',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M7CT9OJ8XCwl_x9fNCUNbDFfP55w10KHCdiMGTHiPQ&s',
        to: '/product',
        title: 'Nho tím',
        price: '400.000',
    },
    {
        img: 'https://newfreshfoods.com.vn/datafiles/3/2018-02-27/16100978059780_d94nfxGl.jpg',
        to: '/product',
        title: 'Kiwi',
        price: '350.000',
    },
    {
        img: 'https://dalatfarm.net/wp-content/uploads/2020/12/dau-tay-da-lat-300x300.jpg',
        to: '/product',
        title: 'Dâu tây Đà Lạt',
        price: '400.000',
    },
    {
        img: 'https://thucphamsachgiatot.vn/image/cache/catalog/V-CAM-RUOT-DO-MY-700x700.jpg',
        to: '/product',
        title: 'Cam ruột đỏ Mỹ',
        price: '500.000',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M7CT9OJ8XCwl_x9fNCUNbDFfP55w10KHCdiMGTHiPQ&s',
        to: '/product',
        title: 'Nho tím',
        price: '400.000',
    },
    {
        img: 'https://newfreshfoods.com.vn/datafiles/3/2018-02-27/16100978059780_d94nfxGl.jpg',
        to: '/product',
        title: 'Kiwi',
        price: '350.000',
    },
];

const CERTIFY = [
    {
        img: Certify.certify1,
    },
    {
        img: Certify.certify2,
    },
    {
        img: Certify.certify3,
    },
    {
        img: Certify.certify4,
    },
];

function Store() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Image src={StoreImage.StoreHeader} className={cx('inner-header-image')} />
                <div className={cx('new-product')}>
                    <div className={cx('header-title')}>
                        <p className={cx('text')}>SẢN PHẨM MỚI </p>
                    </div>
                    <div className={cx('content')}>
                        {NEW_PRODUCT_ITEMS.map((item, index) => (
                            <NewProductItem key={index} data={item} />
                        ))}
                    </div>
                </div>

                <div className={cx('benefit')}>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.freeship} />
                        <p className={cx('text')}>Freeship</p>
                    </div>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.gift} />
                        <p className={cx('text')}>Phục vụ tận tình</p>
                    </div>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.handheart} />
                        <p className={cx('text')}>Quà tặng hấp dẫn</p>
                    </div>
                    <div className={cx('benefit-item')}>
                        <Image src={StoreImage.like} />
                        <p className={cx('text')}>Đảm bảo chất lượng</p>
                    </div>
                </div>

                <div className={cx('list-product')}>
                    <div className={cx('header-title')}>
                        <p className={cx('text')}>Danh mục sản phẩm </p>
                    </div>

                    <div className={cx('content')}>
                        {PRODUCT.map((item, index) => (
                            <NewProductItem className={cx('item')} key={index} data={item} />
                        ))}
                    </div>
                </div>

                <div className={cx('certify')}>
                    {/* <Image src="../../assets/Image/StoreImage/certify/1.png" className={cx('item')} /> */}
                    {CERTIFY.map((item, index) => (
                        <Image key={index} src={item.img} className={cx('item')} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Store;
