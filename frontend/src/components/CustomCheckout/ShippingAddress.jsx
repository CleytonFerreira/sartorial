import { Formik } from 'formik';
import PropTypes from 'prop-types';

const validate = (values) => {
    const { name, email, address } = values;
    const errors = {};
    if (!email) { errors.email = 'Preencha este campo'; }
    if (!name) { errors.name = 'Preencha este campo'; }
    if (!address) { errors.address = 'Preencha este campo'; }

    return errors;
};

const ShippingAddress = ({ setShipping }) => {
    const initialValues = {
        email: '',
        name: '',
        address: ''
    };

    return (
        <div>
            <h4>Endereço de envio</h4>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={(values) => {
                    console.log('Valores: ', values);
                    setShipping(values);
                }}
            >
                {
                    ({ values, errors, handleChange, handleSubmit }) => {
                        const { name, email, address } = errors;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type='text'
                                        name='name'
                                        onChange={handleChange}
                                        value={values.name}
                                        className={name ? 'error' : ''}
                                        placeholder='Nome'
                                    />
                                </div>

                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        value={values.email}
                                        className={email ? 'error' : ''}
                                        placeholder='E-mail'
                                    />
                                </div>

                                <div>
                                    <input
                                        type='text'
                                        name='address'
                                        onChange={handleChange}
                                        value={values.address}
                                        className={address ? 'error' : ''}
                                        placeholder='Endereço'
                                    />
                                </div>
                                <div>
                                    <button type='submit'>
                                        CONTINUAR
                                    </button>
                                </div>
                            </form>
                        );
                    }
                }
            </Formik>
        </div>
    );
};

ShippingAddress.propTypes = {
    setShipping: PropTypes.func
};

export default ShippingAddress;