var app = angular.module('my-app', []);

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

app.controller("contacts-controller", function($scope) {
  $scope.lmao = "world";
  

  $scope.records = [
  {
    "Name" : "Harshit Shetty",
    "Phone" : "+91 9768 XXX XXX"
    "Address" : "Me Kyu batau?"
},{
    "Name" : "Amar Pendhari",
    "Phone" : "+91 9768 XXX XXX"
    "Address" : "Me Kyu batau?"
},{
    "Name" : "Abhijeet Shetty",
    "Phone" : "+91 9768 XXX XXX"
    "Address" : "Me Kyu batau?"
},{
    "Name" : "Adit Arora",
    "Phone" : "+91 9768 XXX XXX"
    "Address" : "Me Kyu batau?"
}
]
    
    $scope.add = function() {
        $scope.records.push({Name: $scope.input, Phone: $scope.input2});
        $scope.input = '';
        $scope.input2 = '';
    };
});