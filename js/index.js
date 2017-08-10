var app = angular.module('my-app', []);

app.controller("contacts-controller", function($scope) {
  $scope.name = "world";
  $scope.records = [
       {
            "Name" : "Harshit Shetty",
            "Phone" : "+91 9768 XXX XXX"
        },{
            "Name" : "Amar Pendhari",
            "Phone" : "+91 9768 XXX XXX"
        },{
            "Name" : "Abhijeet Shetty",
            "Phone" : "+91 9768 XXX XXX"
        },{
            "Name" : "Adit Arora",
            "Phone" : "+91 9768 XXX XXX"
        }
    ]
});