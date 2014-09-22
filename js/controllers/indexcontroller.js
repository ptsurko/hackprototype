angular.module('EpamHistory')
  .controller('IndexController', ['$scope', function($scope) {
    var axises = [
      "English",
      "Overall Evaluation",
      "Title",
      "Time at EPAM",
      "Visa Records",
      "Business Trips",
      "Vacations",
      "Workload",
      "Actual Hours",
      "Confluence posts",
      "SEC/Webinars",
      "Yammer activity",
      "UPSA profile update",
      "Badge",
      "Skills"
    ];

    $scope.value = 1;
    $scope.$watch('value', function(value) {
      $scope.generateSpiderData();
    });

    $scope.generateSpiderData = function() {
      $scope.personParameters = generateParameters();
      $scope.averageParameters = generateParameters();
    };

    $scope.generateData = function() {
      $scope.generateSpiderData();
      $scope.layers = d3.range(axises.length).map(function() { return bumpLayer(200); })
    };
    $scope.generateData();


    function generateParameters() {
      var result = [];
      for(var i = 0; i < axises.length; i++) {
        result.push({
          axis: axises[i],
          value: Math.random()
        });
      }
      return result;
    }

    // Inspired by Lee Byron's test data generator.
    function bumpLayer(n) {
      function bump(a) {
        var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
        for (var i = 0; i < n; i++) {
          var w = (i / n - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }

      var a = [], i;
      for (i = 0; i < n; ++i) a[i] = 0;
      for (i = 0; i < 5; ++i) bump(a);
      return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
    }
  }]);
