const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(['/api','/images','/socket.io'],
    createProxyMiddleware({
      target: "http://localhost:3001/",
      ws: !true,  // change when working with socket.io
      changeOrigin: true,
    })
  );
};