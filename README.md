# ngcordova-wrapper-nativestorage

##Install

```sh
bower install git://github.com/TheCocoaProject/ngcordova-wrapper-nativestorage --save-dev
cordova plugin add cordova-plugin-nativestorage
```
## Usage

Include `ngcordova-wrapper-nativestorage.js` after the rest of your Ionic and Angular includes:

```javascript
<script src="lib/ngcordova-wrapper-nativestorage/dist/ngcordova-wrapper-nativestorage.js"></script>
```

Add `ngCordovaNativeStorage` as a module dependency of your app.
```javascript
app.controller('myCtrl', function ($ionicPlatform, $scope, $cordovaNativeStorage, $log) {
    $ionicPlatform.ready(function () {
        $scope.$apply(function () {
            $cordovaNativeStorage.setItem("ref", "value").then(function (value) {
                $log.log(value);
                $cordovaNativeStorage.getItem("ref").then(function (value) {
                    $log.log(value);
                }, function (error) {
                    $log.log(error);
                });
            }, function (error) {
                $log.log(error);
            });
        });
    });
});
```