// init.js

Violet.init = function Class(args){
  if(!(this instanceof Class)){ return new Class(args); }

  this.base_uri = 'https://api.twitter.com/1.1/';
  this.consumer_key = args.consumer_key;
  this.consumer_secret = args.consumer_secret;
  this.access_token = args.access_token || '';
  this.access_token_secret = args.access_token_secret || '';

  this.initialize();
};

(function(){
var proto = Violet.init.prototype;

proto.initialize = function(){
  this.oauth = Violet.OAuth({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token: access_token,
    access_token_secret: access_token_secret
  });

  this.streaming = Violet.Streaming(this.oauth);

  this.request = Violet.Request.request.bind(this);
};

}());

