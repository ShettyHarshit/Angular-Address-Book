var app = angular.module('my-app', ["ngRoute"]);

// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "main.htm"
//     })
//     .when("/london", {
//         templateUrl : "london.htm"
//     })
//     .when("/paris", {
//         templateUrl : "paris.htm"
//     });
// });  
app.directive('list', function() {
  return {
    restrict: 'E',
    templateUrl: 'sections/list.html'
}
}),
app.directive('add', function() {
  return {
    restrict: 'E',
    templateUrl: 'sections/add.html'
}
}),
app.directive('sample', function() {
  return {
    restrict: 'E',
    templateUrl: 'sections/search.html'
}
}),
app.directive('foot', function() {
  return {
    restrict: 'E',
    templateUrl: 'sections/footer.html'
}
});

