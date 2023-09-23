import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';

function Menu({ children }) {
    return <Tippy>{children}</Tippy>;
}

export default Menu;
