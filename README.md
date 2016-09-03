# ngcordova-wrapper-nativestorage

***UPDATE***: The plugin can be found in Ionic 2 (http://ionicframework.com/docs/v2/native/nativestorage/).

REMARK: Support up to v2.0.1 (´clear´ function will be implemented when I've the time -- v2.0.2)

##Install

```sh
bower install git://github.com/TheCocoaProject/ngcordova-wrapper-nativestorage --save-dev
cordova plugin add cordova-plugin-nativestorage
```
## Usage

Include `ngcordova-wrapper-nativestorage.js` after the rest of your Ionic and Angular includes:

```javascript
<script src="lib/ngcordova-wrapper-nativestorage/dist/ngcordova-wrapper-nativestorage.min.js"></script>
```

Add `ngCordova.plugins.nativeStorage` as a module dependency of your app.
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

## Example

`index.html`
```html 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title></title>

    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above
    <link href="css/ionic.app.css" rel="stylesheet">
    -->

    <!-- ionic/angularjs js -->
    <script src="lib/ionic/js/ionic.bundle.js"></script>

    <script src="lib/ngCordova/dist/ng-cordova.min.js"></script>
    <!-- cordova script (this will be a 404 during development) -->
    <script src="cordova.js"></script>

    <!-- your app's js -->
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="lib/ngcordova-wrapper-nativestorage/dist/ngcordova-wrapper-nativestorage.min.js"></script>
  </head>

  <body ng-app="starter">
    <ion-nav-view></ion-nav-view>
    <div ng-app="myApp" ng-controller="myCtrl">
  </body>
</html>
```

`controller.js`
```javascript
var app = angular.module('starter.controllers', ['ngCordova.plugins.nativeStorage'])


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
