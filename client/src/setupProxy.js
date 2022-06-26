const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(['/api','/images','/socket.io','/socket','/ws'],
    createProxyMiddleware({
      target: "http://localhost:3001/",
      ws: true,  // change to true when working with socket.io
      changeOrigin: true
    })  
  );
};
