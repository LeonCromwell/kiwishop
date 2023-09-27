import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ children, to, href, onClick, className, text, leftIcon, rightIcon, ...passProps }) {
    const _props = {
        onClick,
        ...passProps,
    };
    let Comp = 'button';
    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
