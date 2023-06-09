const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('Hello World 🙂'));

app.listen(port, () => console.log('Servidor executando na porta ' + port));
