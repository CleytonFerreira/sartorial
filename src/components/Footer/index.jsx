import './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear()

    return(
        <div className='footer'>
            {year} - Criado por Cleyton Ferreira
        </div>
    )
}

export default Footer;