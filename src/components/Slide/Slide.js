import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState, useCallback } from 'react';
import { wrap } from 'popmotion';

import style from './Slide.module.scss';
import { images } from './Images';

const cx = classNames.bind(style);

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

function Slide() {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = useCallback(
        (newDirection) => {
            setPage([page + newDirection, newDirection]);
        },
        [page],
    );

    useEffect(() => {
        //define a timeoutId
        let timeoutId;

        const handle = () => {
            timeoutId = setTimeout(() => {
                console.log('paginate(1);');
                paginate(1);
            }, 5000);
        };
        handle();

        //this will clear Timeout. ClearTimout mong muốn nhận vào id của cái Timeout cần clear chứ không phải là 1 function
        return () => {
            clearTimeout(timeoutId);
        };
    }, [page, paginate]);

    return (
        <>
            <AnimatePresence initial="false" custom={direction}>
                <motion.img
                    // className={cx('inner')}
                    key={images[imageIndex].id}
                    src={images[imageIndex].src}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className={cx('next')} onClick={() => paginate(1)}>
                ‣
            </div>
            <div className={cx('prev')} onClick={() => paginate(-1)}>
                ‣
            </div>
        </>
    );
}

export default Slide;
