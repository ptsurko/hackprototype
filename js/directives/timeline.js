angular.module('EpamHistory')
  .directive('timeline', [function() {
    return {
      restrict: 'EA',
      scope: {
        layers: '='
      },
      link: function(scope, element, attrs) {
        // var date = new Date();
        // var year = date.getYear() + 1900;
        // var month = date.getMonth();
        // var day = date.getDate();
        // var scale = d3.time.scale().range([0, 700])
        //   .domain([new Date(year, month-4, day), new Date(year, month + 1, day)]);
        //
        // var timeline = d3.starline.timeline();
        // timeline.scale(scale);
        //
        // d3.select(element[0])
        //   .append('svg')
        //     .attr('height', 80)
        //     .attr('width', 600)
        //   .call(timeline);

        // DOM element where the Timeline will be attached
        var container = element[0];

        // Create a DataSet (allows two way data-binding)
        var items = new vis.DataSet([
          {id: 1, content: 'Promotion to Software Engineer', start: '2014-04-20'},
          {id: 2, content: 'Project A started', start: '2014-04-14'},
          {id: 3, content: 'SEC presentation', start: '2014-04-18'},
          {id: 4, content: 'Socializer badge', start: '2014-04-16', end: '2014-04-19'},
          {id: 5, content: 'Badge', start: '2014-04-25'},
          {id: 6, content: 'Badge', start: '2014-04-27', type: 'point'}
        ]);

        // Configuration for the Timeline
        var options = {};

        // Create a Timeline
        var timeline = new vis.Timeline(container, items, options);
      }
    }
  }]);
