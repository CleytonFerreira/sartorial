const Total = ({ itemCount, total, clearCart }) => {
    return (
        <div className="total_container">
            <div className="total">
                <p>Total do itens: {itemCount}</p>
                <p>{`Preço total: ${total} R$`}</p>

            </div>
            <div className="checkout">
                <button>IR PARA O CHECKOUT</button>
                <button onClick={() => clearCart()}>ESVAZIAR CARRINHO</button>
            </div>
        </div>
    )
}

export default Total