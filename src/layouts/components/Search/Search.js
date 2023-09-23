import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import style from './search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ProductItem from '~/components/ProductItems/ProductItem';
import { useState } from 'react';

const cx = classNames.bind(style);

const SEARCH_RESULT = [
    {
        name: 'Táo xanh',
        lowest_price: 100000,
        highest_price: 200000,
    },
    {
        name: 'Nho xanh',
        lowest_price: 150000,
        highest_price: 200000,
    },
    {
        name: 'Dâu tây',
        lowest_price: 100000,
        highest_price: 500000,
    },
];

function Search() {
    const [hide, setHide] = useState(false);

    const handleHideResult = () => {
        setHide(true);
    };
    return (
        <HeadlessTippy
            visible={!hide && SEARCH_RESULT.length > 0}
            trigger="click"
            hideOnClick="false"
            placement="bottom-start"
            interactive="true"
            render={(attrs) => (
                <div className={cx('search-result')} {...attrs}>
                    <PopperWrapper>
                        <label className={cx('search-label')}>
                            <h4>Sản Phẩm</h4>
                        </label>

                        {SEARCH_RESULT.map((item, index) => (
                            <ProductItem data={item} key={index} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('wrapper')}>
                <div className={cx('search')}>
                    <input placeholder="Bạn đang tìm kiếm gì?" spellCheck="false" />

                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <span className={cx('spinner')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </span>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
