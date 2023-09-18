import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './search.module.scss';

const cx = classNames.bind(style);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input placeholder="Search..." spellCheck="false" />

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
    );
}

export default Search;
