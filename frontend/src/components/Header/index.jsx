import { useContext } from 'react';
import { Link } from 'react-router-dom';
import headerStyle from './Header.module.css';
import CartIcon from '../Cart/CartIcon';
import { auth } from '../../firebase';
import { UserContext } from '../../context/UserContext';

const Header = () => {
    const { user } = useContext(UserContext);
    console.log('Usuário: ', user);

    return (
        <nav className={headerStyle.header}>
            <div className='logo'>
                <Link to='/'>Logo</Link>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/loja'>Loja</Link></li>
                {
                    !user &&
                    <li>
                        <Link to='/login'>Entrar</Link>
                    </li>
                }
                {
                    user &&
                    <li onClick={() => auth.signOut()}>
                        Sair
                    </li>
                }
                {
                    !user &&
                    <li>
                        <Link to='/cadastro'>Cadastrar</Link>
                    </li>
                }
            </ul>
            <CartIcon />
        </nav>
    );
};

export default Header;