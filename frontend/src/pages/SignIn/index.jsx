import Layout from '../../components/shared/Layout';
import { Formik } from 'formik';
import formStyle from '../SignUp/SignUp.module.css';

const SignIn = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <Layout>
      <div>
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
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        placeholder='E-mail'
                        className={email ? formStyle.error : ''}
                      />
                    </div>

                    <div>
                      <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                        placeholder='Senha'
                        className={password ? formStyle.error : ''}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Entrar
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

export default SignIn;