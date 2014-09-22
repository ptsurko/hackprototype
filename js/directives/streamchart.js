angular.module('EpamHistory')
  .directive('streamchart', [function() {
    return {
      restrict: 'EA',
      scope: {
        layers: '='
      },
      link: function(scope, element, attrs) {
        scope.$watch('layers', function(newLayers, oldLayers) {
          var width = 600,
              height = 300;

          d3.select(element[0]).select("svg").remove();

          var svg = d3.select(element[0]).append("svg")
              .attr("width", width)
              .attr("height", height);

          StreamChart.draw(svg[0][0], scope.layers, {});

          var scanLine = null;
          var eventInfo = null;
          element.mouseover(function(e) {
            if (scanLine) return;
            scanLine = svg.append('svg:g');
              scanLine.append('svg:line')
                .attr('x1', e.offsetX)
                .attr('x2', e.offsetX)
                .attr('y1', 0)
                .attr('y2', height)
                .attr('class', 'scanLine');

            eventInfo = $('<div class="popover"><ul class="popover-content event-info"></ul></div>')
              .css('left', e.clientX + 10)
              .css('top', e.clientY);

            generateEventDetailsHtml($('.event-info', eventInfo));

            $(document.body).append(eventInfo);
          });
          element.mousemove(function(e) {
            scanLine.select('.scanLine')
              .attr('x1', e.offsetX)
              .attr('x2', e.offsetX);

            eventInfo
              .css('left', e.clientX + 10)
              .css('top', e.clientY);

            generateEventDetailsHtml($('.event-info', eventInfo));

          });
          element.mouseout(function(e) {
            // scanLine.remove();
            // eventInfo.remove();
          });
        });

        var axises = [
          "English",
          "Overall Eveluation",
          "Title",
          "Time of working in EPAM",
          "Visa Records",
          "Business Trips",
          "Vacations",
          "Workload",
          "Actual Hours",
          "Confluence posts",
          "SEC/Webinars",
          "Yammer activity",
          "Upsa profile update",
          "Badge",
          "Skills"
        ];

        function generateEventDetailsHtml(eventInfo) {
          eventInfo.html('');
          var color = d3.scale.category10();
          for (var i = 0; i < axises.length; i++) {
            eventInfo.append($('<li style="color:' + color(i) + '">' + axises[i] + ' - ' + Math.random().toFixed(2)  + '</li>'))
          }
        }
      }
    }
  }]);
