// endpoints.js

Violet.Endpoints = {};

Violet.Endpoints.get = [
  'statuses/mentions_timeline',
  'statuses/user_timeline',
  'statuses/home_timeline',
  'statuses/retweets_of_me',
  'statuses/retweets/:id',
  'statuses/show/:id',
  'statuses/oembed',
  'statuses/retweeters/ids',
  'search/tweets',
  'statuses/sample',
  'statuses/firehose',
  'user',
  'site',
  'direct_messages',
  'direct_messages/sent',
  'direct_messages/show',
  'friendships/no_retweets/ids',
  'friends/ids',
  'followers/ids',
  'friendships/lookup',
  'friendships/incoming',
  'friendships/outgoing',
  'friendships/show',
  'friends/list',
  'followers/list',
  'account/settings',
  'account/verify_credentials',
  'blocks/list',
  'blocks/ids',
  'users/lookup',
  'users/show',
  'users/search',
  'users/contributees',
  'users/contributors',
  'users/profile_banner',
  'users/suggestions/:slug',
  'users/suggestions',
  'users/suggestions/:slug/members',
  'favorites/list',
  'lists/list',
  'lists/statuses',
  'lists/memberships  ',
  'lists/subscribers',
  'lists/subscribers/show',
  'lists/members/show',
  'lists/members',
  'lists/show',
  'lists/subscriptions',
  'lists/ownerships',
  'saved_searches/list',
  'saved_searches/show/:id',
  'geo/id/:place_id',
  'geo/reverse_geocode',
  'geo/searc',
  'geo/similar_places',
  'trends/place',
  'trends/available',
  'trends/closest',
  'oauth/authenticate',
  'oauth/authorize  ',
  'help/configuration',
  'help/languages',
  'help/privacy',
  'help/tos',
  'application/rate_limit_status'
];

Violet.Endpoints.post = [
  'statuses/destroy/:id',
  'statuses/update',
  'statuses/retweet/:id',
  'statuses/update_with_media',
  'statuses/filter',
  'direct_messages/destroy',
  'direct_messages/new',
  'friendships/create',
  'friendships/destroy',
  'friendships/update',
  'account/settings',
  'account/update_delivery_device',
  'account/update_profile_background_image',
  'account/update_profile_colors',
  'account/update_profile_image',
  'blocks/create',
  'blocks/destroy',
  'account/remove_profile_banner',
  'account/update_profile_banner',
  'favorites/destroy',
  'favorites/create',
  'lists/members/destroy',
  'lists/subscribers/create',
  'lists/subscribers/destroy',
  'lists/members/create_all',
  'lists/members/create',
  'lists/destroy',
  'lists/update',
  'lists/create',
  'lists/members/destroy_all',
  'saved_searches/create',
  'saved_searches/destroy/:id',
  'geo/place',
  'users/report_spam',
  'oauth/access_token',
  'oauth/request_token',
  'oauth2/token',
  'oauth2/invalidate_token'
];

Violet.Endpoints.to_replace_id_none = [
  'statuses/show/:id'
];

Violet.Endpoints.to_replace_id = [
  'statuses/retweets/:id',
  'statuses/retweet/:id',
  'statuses/destroy/:id'
];

Violet.Endpoints.to_replace_slug = [
  'users/suggestions/:slug/members',
  'users/suggestions/:slug'
];

Violet.Endpoints.to_replace_place_id = [
  'geo/id/:place_id'
];

Violet.Endpoints.method = function(endpoint){
  var method = null;
  if(Violet.Endpoints.get.indexOf(endpoint) !== -1){
    method =  'GET';
  }else if(Violet.Endpoints.post.indexOf(endpoint) !== -1){
    method =  'POST';
  }
  return method;
};

