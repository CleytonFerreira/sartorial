import { useNavigate } from 'react-router-dom';
import Layout from '../../components/shared/Layout';

const Canceled = () => {
    let navigate = useNavigate();

    return (
        <Layout>
            <div>
                <h1>Falha no pagamento</h1>
                <p>Não foi possível processar o pagamento do seu pedido.</p>
                <div>
                    <button onClick={() => navigate('/loja')}>Continuar comprando</button>
                </div>
            </div>
        </Layout>
    );
};

export default Canceled;