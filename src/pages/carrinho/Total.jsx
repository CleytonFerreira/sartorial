import Link from "next/link";

const Total = ({ itemCount, total }) => {
    return (
        <div className="total_container">
            <div className="total">
                <p>Total do itens: {itemCount}</p>
                <p>{`Preço total: R$ ${total}`}</p>

            </div>
            <div className="checkout">
                <button>IR PARA O CHECKOUT</button>
                <button>ESVAZIAR CARRINHO</button>
            </div>
        </div>
    )
}

export default Total