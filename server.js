// -----Server.js ------

const http  = require('http')
const route = require('./route')

http.createServer(route.handleRequest).listen(3000);