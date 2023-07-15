const stripeAPI = require('../stripe');

async function createCheckoutSession(req, res) {
    const domainUrl = process.env.WEB_APP_URL;
    const { line_items, customer_email } = req.body;
    if (!line_items || !customer_email) {
        return res.status(400).json({ Error: 'parâmetros de sessão insuficientes' });
    }
    
    let session;
    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            customer_email,
            success_url: `${domainUrl}/sucess?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainUrl}/canceled`,
            shipping_address_collection: { allowed_countries: ['GB', 'US'] }
        });
        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ Error: 'Ocorreu um erro. Não foi possível criar uma sessão' });
    }
}

module.exports = createCheckoutSession;