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
app.directive('ContactsList', function() {
  return {
    restrict: 'E',
    template: '<div>Hii</div>'
}
})


app.controller("contacts-controller", function($scope) {
  $scope.lmao = "world";
  

//   $scope.records = [
//   {
//     "Name" : "Harshit Shetty",
//     "Age" : "20",
//     "Phone" : "+91 9768 XXX XXX",
//     "Address" : "Me Kyu batau?",
//     "Link" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg/170px-Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg"
// },{
//     "Name" : "Amar Pendhari",
//     "Age" : "20",
//     "Phone" : "+91 9768 XXX XXX",
//     "Address" : "Me Kyu batau?",
//     "Link" : "http://style.anu.edu.au/_anu/4/images/placeholders/person.png"
// },{
//     "Name" : "Abhijeet Shetty",
//     "Age" : "20",
//     "Phone" : "+91 9768 XXX XXX",
//     "Address" : "Me Kyu batau?",
//     "Link" : "http://style.anu.edu.au/_anu/4/images/placeholders/person.png"
// },{
//     "Name" : "Adit Arora",
//     "Age" : "20",
//     "Phone" : "+91 9768 XXX XXX",
//     "Address" : "Me Kyu batau?",
//     "Link" : "http://style.anu.edu.au/_anu/4/images/placeholders/person.png"
// }
// ]

$scope.saved = localStorage.getItem('todos');
$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [
{
    "Name" : "Harshit Shetty",
    "Age" : "20",
    "Phone" : "+91 9768 XXX XXX",
    "Address" : "Me Kyu batau?",
    "Link" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg/170px-Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg"
},{
    "Name" : "Amar Pendhari",
    "Age" : "20",
    "Phone" : "+91 9768 XXX XXX",
    "Address" : "Me Kyu batau?",
    "Link" : "http://style.anu.edu.au/_anu/4/images/placeholders/person.png"
},{
    "Name" : "Abhijeet Shetty",
    "Age" : "20",
    "Phone" : "+91 9768 XXX XXX",
    "Address" : "Me Kyu batau?",
    "Link" : "http://style.anu.edu.au/_anu/4/images/placeholders/person.png"
},{
    "Name" : "Adit Arora",
    "Age" : "20",
    "Phone" : "+91 9768 XXX XXX",
    "Address" : "Me Kyu batau?",
    "Link" : "http://style.anu.edu.au/_anu/4/images/placeholders/person.png"
}
];
localStorage.setItem('todos', JSON.stringify($scope.todos));

$scope.add = function() {
    $scope.todos.push({Name: $scope.input, Phone: $scope.input2, Address: $scope.input3, Age: $scope.input4,  Link: $scope.input5});
    $scope.input = '';
    $scope.input2 = '';
    $scope.input3 = '';
    $scope.input4 = '';
    $scope.input5 = '';
    localStorage.setItem('todos', JSON.stringify($scope.todos));
};
});