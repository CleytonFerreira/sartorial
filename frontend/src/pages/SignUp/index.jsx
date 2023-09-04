import { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase';
import Layout from '../../components/shared/Layout';
import formStyle from './SignUp.module.css';

const validate = values => {
	const errors = {};
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if (!values.firstname) { errors.firstname = 'Required'; }
	if (!values.password) { errors.password = 'Required'; }
	return errors;
};

const SignUp = () => {
	const [error, setError] = useState(null);
	let navigate = useNavigate();

	const initialValues = {
		firstname: '',
		email: '',
		password: ''
	};

	const handleSignUp = async (values, { setSubmitting }) => {
		const { firstname, email, password } = values;

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName: firstname });
			navigate('/loja');
			setSubmitting(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setSubmitting(false);
		}
	};

	return (
		<Layout>
			<div>
				<h1>Cadastre-se</h1>
				<div>
					<Formik
						initialValues={initialValues}
						validate={validate}
						onSubmit={handleSignUp}
					>
						{
							({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
								const { firstname, email, password } = errors;

								return (
									<form onSubmit={handleSubmit}>
										<div>
											<input
												type='text'
												name='firstname'
												onChange={handleChange}
												value={values.firstname}
												placeholder='Nome'
												className={firstname ? formStyle.error : ''}
											/>
										</div>
									<br /><br /><br /><br /><br />
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
										<br /><br /><br /><br /><br />

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
										<br /><br /><br /><br /><br />

										<div>
											<button
												type="submit"
												disabled={isSubmitting}
											>
												Cadastrar
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

export default SignUp;