import Layout from '../shared/Layout';
import { Formik } from 'formik';

const SignUp = () => {
    const initialValues = {
        firstname: '',
        email: '',
        password: ''
    };

    return (
        <Layout>
            <div>
                <h1>Cadastre-se</h1>
                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {
                            ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                                const {firstname, email, password} = errors;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <input
                                                type="text"
                                                name="firstname"
                                                onChange={handleChange}
                                                value={values.firstname}
                                                placeholder='Nome'
                                                className={firstname ? "error" : ""}
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={values.email}
                                                placeholder='E-mail'
                                                className={email ? "error" : ""}
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                value={values.password}
                                                placeholder='Senha'
                                                className={password ? "error" : ""}
                                            />
                                        </div>

                                        <div>
                                            <button type='submit'
                                            disabled={isSubmitting}
                                            >
                                                Cadastrar
                                            </button>
                                        </div>
                                    </form>
                                );
                            }
                        }
                    </Formik>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;