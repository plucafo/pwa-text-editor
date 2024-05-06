const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(port, () => console.log(`Now listening on port: ${port}`));
