import Footer from "../Footer";
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return(
        <>
        {children}
        <Footer/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout