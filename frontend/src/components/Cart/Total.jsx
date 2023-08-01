import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Total = ({ itemCount, total, clearCart }) => {
    let navigate = useNavigate();

    return (
        <div className="total_container">
            <div className="total">
                <p>Total do itens: {itemCount}</p>
                <p>{`Preço total: ${total} R$`}</p>

            </div>
            <div className="checkout">
                <button onClick={() => navigate("/pedido")}>IR PARA O CHECKOUT</button>
                <button onClick={() => clearCart()}>ESVAZIAR CARRINHO</button>
            </div>
        </div>
    );
};

Total.propTypes = {
    itemCount: PropTypes.number,
    total: PropTypes.number,
    clearCart: PropTypes.func
};

export default Total;