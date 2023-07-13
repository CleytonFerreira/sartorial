import { Link } from 'react-router-dom';
import headerStyle from './Header.module.css';
import CartIcon from '../Cart/CartIcon';

const Header = () => {
    return (
        <nav className={headerStyle.header}>
            <div className="logo">
                <Link to='/'>Logo</Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/loja">Loja</Link></li>
            </ul>
            <CartIcon />
        </nav>
    )
};

export default Header;