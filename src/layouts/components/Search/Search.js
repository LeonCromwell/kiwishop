import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import style from './search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ProductItem from '~/components/ProductItems/ProductItem';
import { useDebounce } from '~/Hooks';

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
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setSearchResult(SEARCH_RESULT);
            setIsLoading(false);
        }, [1000]);
    }, [debouncedValue]);

    const handleHideResult = () => {
        setHide(true);
    };

    const handleSearch = (e) => setSearchValue(e.target.value);

    return (
        <HeadlessTippy
            visible={!hide && searchResult.length > 0}
            placement="bottom-start"
            interactive="true"
            render={(attrs) => (
                <div className={cx('search-result')} {...attrs}>
                    <PopperWrapper>
                        <label className={cx('search-label')}>
                            <h4>Sản Phẩm</h4>
                        </label>

                        {searchResult.map((item, index) => (
                            <ProductItem data={item} key={index} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('wrapper')}>
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Bạn đang tìm kiếm gì?"
                        spellCheck="false"
                        value={searchValue}
                        onChange={handleSearch}
                        onFocus={() => {
                            setHide(false);
                        }}
                    />

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                    {!!searchValue && !isLoading && (
                        <button
                            className={cx('clear-btn')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {isLoading && (
                        <span className={cx('spinner')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    )}
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
