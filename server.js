const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', orderRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
