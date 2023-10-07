import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import style from './Image.module.scss';
import { Image as image } from '~/assets/Image';

function Image({ src, alt, fallback = image.noimage, className, ...passProps }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(fallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            ref={ref}
            {...passProps}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
