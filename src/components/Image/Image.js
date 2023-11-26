import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import style from './Image.module.scss';
import images from '~/assets/Image';

function Image({ src, alt, fallback = images.noimage, className, onError, ...passProps }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(fallback);
    };

    return (
        <LazyLoadImage
            // effect="blur"
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
