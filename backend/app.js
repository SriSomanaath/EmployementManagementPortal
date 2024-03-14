const express = require('express');
const middleware = require('./middleware/middleware');
const controller = require('./controllers/controller');

const app = express();
const PORT = 3000;

// Use middleware
app.use(middleware);

// Use routes from controller
app.use(controller);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
