'use strict';

const express = require('express');
const app = express();

require('./src/configure')(app);

app.get('/', (req, res) => res.status(404).json({}));
app.use('/users', require('./src/routes/users')(app));

app.listen(process.env.PORT || 3000);
