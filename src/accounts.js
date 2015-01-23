//
// Violet.Accounts
//

(function(Violet) {
  var Accounts = function() {
    this._accounts = {};
    this._primaryId = "";
  };

  Accounts.prototype = {
    requestAuthorizeURI: function() {
    },
    addWithPIN: function(pin) {
    },
    getList: function() {
    },
    get: function(accountId) {
    },
    setPrimary: function(accountId) {
      if (this._accounts[accountId]) {
        this._primaryId = accountId;
      }
    },
    getPrimary: function() {
      return this.get(this._primaryId);
    },
    getOAuthManager: function() {
    },
    remove: function(accountId) {
      delete this._accounts[accountId];
    }
  };

  Violet.Accounts = Accounts;
})(Violet);
