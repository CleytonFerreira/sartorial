const stripeAPI = require('../stripe');
const getCustomer = require('../helpers/getCustomer');

async function setupIntent(req, res) {
    const { currentUser } = req;

    const customer = await getCustomer(currentUser.uid);
    let setupIntent;

    try {
        setupIntent = await stripeAPI.setupIntents.create({
            customer: customer.id
        });
        res.status(200).json(setupIntent);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Ocorreu um erro. Não foi possível criar setup intent' });
    }
}

module.exports = setupIntent;