import Layout from '../../components/shared/Layout';
import notFoundStyle from './NotFound.module.css';

const NotFound = () => {
    return (
        <Layout>
            <div className={notFoundStyle.not_found}>
                <h1>Página não encontrada</h1>
            </div>
        </Layout>
    );
}

export default NotFound;