const stripeAPI = require('../stripe');

const webhookHandlers = {
    'checkout.session.completed': (data) => {
        console.log('Pagamento concluído com sucesso', data);
    },

    'payment_intent.succeeded': (data) => {
        console.log('Pgamento bem sucedido', data);
    },

    'payment_intent.payment_failed': (data) => {
        console.log('Falhan o pagamento', data);
    }
};

function webhook(req, res) {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripeAPI.webhooks.constructEvent(
            req['rawBody'], sig, process.env.WEB_HOOK_SECRET);
        res.status(200).end();
    } catch (error) {
        return res.status(400).send(`Webhook error ${error.message}`);
    }

    if (webhookHandlers[event.type]) {
        webhookHandlers[event.type](event.data.object);
    }
}

module.exports = webhook;