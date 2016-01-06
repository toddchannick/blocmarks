var app = angular.module('blocmarksApp', ['ngResource', 'ui.router', 'angularGrid', 'ngAnimate', 'navApp']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('bookmarks', {
        url: '/bookmarks',
        controller: 'bookmarksCtrl',
        templateUrl: '/templates/bookmarks.html'
      })
      .state('show', {
        url: 'bookmarks/:id',
        templateUrl: '/templates/show.html',
        controller: 'bookmarkCtrl',
        resolve: {
          bookmark: function($http, $stateParams){
            var url = "/api/bookmarks/" + $stateParams.id;
            return $http.get(url).then(function(res){
              console.log(res.data);
              return res.data;
            });
          }
        }
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });


}]);

app.controller('bookmarksCtrl',['$scope', '$location', 'Results', 'angularGridInstance', function($scope, $location, Results, angularGridInstance){
  $scope.topics = [];
  $scope.bookmarks = [];
  $scope.searchText = '';

  Results.results.then(function(results){
    $scope.topics = results[0].data["topics"];
    $scope.bookmarks = results[1].data["bookmarks"];
    $scope.displayed = $scope.bookmarks;
  });

  $scope.goto = function(path){
    $location.path(path);
  }


  $scope.$watch('searchText',function(val, val2){
    if (val !== val2) {
      val = val.toLowerCase();
      $scope.bookmarks = $scope.displayed.filter(function(obj){
          return obj.title.toLowerCase().indexOf(val) != -1;
      });
    }
  });

  $scope.$watchCollection('bookmarks', function(newVal, oldVal){
    catFilter(val)
  });

  function catFilter(val){
      console.log(val);
      $scope.bookmarks = $scope.displayed.filter(function(obj){
        return obj.topic.title.indexOf(val) != -1;
      });
  };


}]);

app.controller('navCtrl', ['$scope', '$rootScope', function ($scope, $rootScope){
  $rootScope.$emit();
}]);

app.controller('bookmarkCtrl', function($scope, bookmark){
  $scope.bookmark = bookmark;
});

app.factory('Results',['$http', '$q', function($http, $q){
  var topics = $http.get("/api/topics", { cache: true });
  var bookmarks = $http.get("/api/bookmarks", { cache: true });
  return {
    results: $q.all([topics,bookmarks])
  }
}]);


app.directive('ngReallyClick', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        var message = attrs.ngReallyMessage;
        if (message && confirm(message)) {
            scope.$apply(attrs.ngReallyClick);
        }
      });
    }
  }
}]);



app.run(($rootScope) => {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});


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
//           scope.$broadcast('ngRepeatFinished');
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
