var app = angular.module('blocmarksApp', ['ngResource', 'ngRoute','angular-embedly', 'wu.masonry']);

app.config(function(embedlyServiceProvider){
    embedlyServiceProvider.setKey('d3af281a9c844c278d324f78ce32c243');
});

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../views/bookmarks/index.html.erb",
        controller: "bookmarksCtrl"
      });
      // .when("/bookmarks/:id", {
      //   templateUrl: "../views/bookmarks/show.html.erb",
      //   controller: "bookmarksCtrl"
      // });
}]);

app.controller('bookmarksCtrl', function($scope, Results){
  $scope.topics = [];
  $scope.bookmarks = [];

  Results.results.then(function(results){
    $scope.topics = results[0].data["topics"];
    $scope.bookmarks = results[1].data["bookmarks"];
  });

});

app.factory('Results',['$http', '$q', function($http, $q){
  var topics = $http.get("/api/topics", { cache: true });
  var bookmarks = $http.get("/api/bookmarks", { cache: true });
  return {
    results: $q.all([topics,bookmarks])
  }
}]);


//
// app.directive("repeatEnd", function(){
//   return {
//     restrict: "A",
//     link: function (scope, element, attrs) {
//       if (scope.$last) {
//         scope.$eval(attrs.repeatEnd);
//       }
//     }
//   };
// });

// app.directive('renderComplete', ['$timeout', function ($timeout) {
//   return {
//     link: function ($scope, element, attrs) {
//       $scope.$on('dataloaded', function () {
//         $timeout(function () {
          // $('#masonry-container').masonry({
          //   itemSelector: '.box',
          //   columnWidth: 150,
          //   isFitWidth: true,
          //   isAnimated: !Modernizr.csstransitions
          // });
//         }, 0, false);
//       })
//     }
//   };
// }]);

// app.directive('onFinishRender', function ($timeout) {
//   return {
//     restrict: 'A',
//     link: function (scope, element, attr) {
//       if (scope.$last === true) {
//         $timeout(function () {
//           scope.$emit('ngRepeatFinished');
//         });
//       }
//     }
//   }
// });


// app.directive('myEmbedly', function() {
//   return {
//     controller: function ($scope, $rootScope) {
//       $scope.key = 'd3af281a9c844c278d324f78ce32c243';
//       $scope.endpoint = 'oembed';
//     }
//   }
// });

  // angular.module('BookmarkResource', ['ngResource'])
  // .factory('Bookmark', function($resource) {
  //     return $resource('', {}, {
  //       'index': {
  //         method: 'GET',
  //         url: 'api/bookmarks/',
  //         transformResponse: function(data, headers){
  //               data = {};
  //               return data;
  //           }
  //       },
  //       'show':  {
  //         method: 'GET',
  //         url: 'api/bookmarks/:id',
  //         isArray: false,
  //         params: {id: '@id'}
  //       }
  //     });
  // });
