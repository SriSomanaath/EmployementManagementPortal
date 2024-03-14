const express = require('express');
const cors = require('cors');

const middleware = express();

// Middleware
middleware.use(cors());
middleware.use(express.json());
middleware.use(express.urlencoded({ extended: true }));

module.exports = middleware;
