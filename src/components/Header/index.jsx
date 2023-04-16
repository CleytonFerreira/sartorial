import Link from "next/link";
import './Header.module.css';

const Header = () => {
    return (
        <nav className="nav-menu">
            <div className="logo">
                <Link href='/'>Logo</Link>
            </div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/loja'>Loja</Link></li>
            </ul>
            <Link href='/shop'></Link>
        </nav>
    )
}

export default Header