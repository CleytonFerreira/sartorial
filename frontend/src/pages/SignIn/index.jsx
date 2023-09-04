import { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import Layout from '../../components/shared/Layout';
import formStyle from '../SignUp/SignUp.module.css';

const SignIn = () => {
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      navigate('/loja');
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setError(error);
    }
  };

  return (
    <Layout>
      <div>
        <h1>Login</h1>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSignIn}
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

                    <div>
											{
												error && <p className={formStyle.error_message}>{error.message}</p>
											}
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