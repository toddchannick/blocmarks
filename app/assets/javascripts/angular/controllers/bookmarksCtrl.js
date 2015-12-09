var app = angular.module("blocmarksApp", ["ngResource"]);

app.bookmarkCtrl = function($scope, $resource) {
  var Bookmark;
  Bookmark = $resource("/api/bookmarks", {
    id: "@id"
  }, {
    update: {
      method: "PUT"
    }
  });
  $scope.bookmarks = Bookmark.query();
  return $scope.createUser = function() {
    var user;
    user = User.save($scope.newUser);
    return $scope.users.push(user);
  };
};
