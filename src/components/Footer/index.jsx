import footerStyle from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear()

    return(
        <div className={footerStyle.footer}>
            {year} - Criado por Cleyton Ferreira
        </div>
    )
}

export default Footer;