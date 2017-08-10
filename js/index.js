var app = angular.module('my-app', []);

app.controller("contacts-controller", function($scope) {
  $scope.lmao = "world";
  

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
    
    $scope.add = function() {
        $scope.records.push({Name: $scope.input, Phone: $scope.input2});
        $scope.input = '';
        $scope.input2 = '';
    };
});