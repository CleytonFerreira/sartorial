import Layout from '../shared/Layout';
import { Formik } from 'formik';

const SignIn = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    return (
        <Layout>
            <h1>Login</h1>
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {
                        ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                            const { email, password } = errors;

                            return (
                                <form onSubmit={handleSubmit}>
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
                                            Acessar
                                        </button>
                                    </div>
                                </form>
                            );
                        }
                    }
                </Formik>
            </div>
        </Layout>
    );
};

export default SignIn;