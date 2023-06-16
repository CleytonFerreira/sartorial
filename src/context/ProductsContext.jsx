import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import SHOP_DATA from '../shop';

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products] = useState(SHOP_DATA)

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
};

ProductsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ProductsContext };
export default ProductsContextProvider;