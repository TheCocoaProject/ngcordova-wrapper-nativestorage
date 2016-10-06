angular.module("ngCordova.plugins.nativeStorage", [])
.factory('$cordovaNativeStorage', ['$window', '$q', '$log', function ($window, $q, $log) {

  var inBrowser = false;
  var initialised = false;

  function isInBrowser() {
    if (!initialised) {
      inBrowser = ($window.cordova && $window.cordova.platformId === 'browser') || !($window.phonegap || $window.cordova);
      if (!inBrowser) {
        $log.log('NativeStorageWrapper: isNotInBrowser'); 
      } else {
        $log.log('NativeStorageWrapper: isInBrowser'); 
      }
      initialised = true;
    }
    return inBrowser;
  };

  function setInLocalStorage (reference, variable, success, error) {
    try {
      var varAsString = JSON.stringify(variable);
      $window.localStorage[reference] = varAsString;
      success(variable);
    } catch (err) {
      error(err);
    }
  };

  function getFromLocalStorage(reference, success, error) {
    try {
      var obj;
      var value = $window.localStorage[reference];
      if (value != undefined) {
        obj = JSON.parse(value);
        success(obj);
      } else {
        throw new Error(reference + ': undefined');
      }
    } catch (err) {
      error(err);
    }
  };

  function removeFromLocalStorage(reference, success, error) {
    try {
      $window.localStorage.removeItem(reference);
      success(null);
    } catch (err) {
      error(err); 
    }
  };

  return {
    remove: function(reference) {
      var q = $q.defer();
      if (isInBrowser()) {
        removeFromLocalStorage(reference, function(result) {q.resolve(result);}, function(error) {q.reject(error);});
      } else {
        NativeStorage.remove(reference, function(result) {q.resolve(result);}, function(error) {q.reject(error);});
      }
      return q.promise;
    },
    setItem: function(reference, s) {
      var q = $q.defer();
      if (isInBrowser()) {
        setInLocalStorage(reference, s, function(result) {q.resolve(result);}, function(error) {q.reject(error);});
      } else {
        NativeStorage.setItem(reference, s, function(result) {q.resolve(result);}, function(error) {q.reject(error);});
      }
      return q.promise;
    },
    getItem: function(reference) {
      var q = $q.defer();
      if (isInBrowser()) {
        getFromLocalStorage(reference, function(result) {q.resolve(result);}, function(error) {q.reject(error);});
      } else {
        NativeStorage.getItem(reference, function(result) {q.resolve(result);}, function(error) {q.reject(error);});
      }
      return q.promise;
    },
     clear: function() {
                var q = $q.defer();
                if (isInBrowser()) {
                    clearFromLocalStorage(function(result) {
                        q.resolve(result);
                    }, function(error) {
                        q.reject(error);
                    });
                } else {
                    NativeStorage.clear(function(result) {
                        q.resolve(result);
                    }, function(error) {
                        q.reject(error);
                    });
                }
                return q.promise;

            }
  };
}])
