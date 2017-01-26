// Generated by CoffeeScript 1.12.3
(function() {
  var ORIGIN, ROUTES, Router, urlParser;

  urlParser = require('url');

  ORIGIN = 'example/public';

  ROUTES = {
    '/': 'example/public/templates/index.html'
  };

  Router = (function() {
    function Router(options) {
      var ref;
      if (options == null) {
        options = {};
      }
      this.handler = options.handler;
      this.routes = (ref = options.routes) != null ? ref : ROUTES;
    }

    Router.prototype.route = function(request, requestData, response) {
      var parsedUrl, ref, requestPath, requestUrl, url;
      url = request.url;
      parsedUrl = urlParser.parse(url);
      requestUrl = parsedUrl.pathname;
      console.log("About to route a request for " + requestUrl);
      requestPath = (ref = this.routes[url]) != null ? ref : "" + ORIGIN + requestUrl;
      return this.handler.handle(requestPath, requestData, response);
    };

    return Router;

  })();

  module.exports = Router;

}).call(this);