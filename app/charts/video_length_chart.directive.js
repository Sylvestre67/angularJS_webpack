import { debounce } from 'debounce.utils';
import d3 from 'd3';

import './videoLengthChartStyles.less';

export const videoLengthChart = ($timeout, $window) => {
	let directive = {
		link: link,
		restrict: 'E',
		scope: {
			dataset: '<'
		}
	};

	return directive;

	function link(scope, element, attrs) {

		var config = {
			margin: {top: 10, right: 20, bottom: 25, left: 120}
		};

		var drawOnResize;

		scope.$watch('dataset', function (dataset, old_dataaset) {
			if (dataset !== undefined && dataset.length > 0) {
				$timeout(function () {
					drawVideoLengthChart(config, element, attrs, scope.dataset);
					// Resizing listening event.
					$window.addEventListener('resize', drawOnResize);
				});
			}
		});

		// Removing resize eventListener when directive is destroyed.
		element.on('$destroy', function () {
			$window.removeEventListener('resize', drawOnResize);
		});

		// Debounced draw on resize.
		drawOnResize = debounce(function () {
			drawVideoLengthChart(config, element, attrs, scope.dataset);
		}, 250);
	}

	function drawVideoLengthChart(config, element, attrs, data){

		var margin = config.margin,
			full_width = attrs.$$element[0].parentNode.clientWidth,
			width = full_width - margin.left - margin.right,
			full_height = 150,
			height = (full_height - (margin.top + margin.bottom)),
			colors = ["#94bfdc","#2980B9","#1c5981"];

		var y_domain = data.map(function(k,v){ return data[v].category; });

		var svg,axis_x,x_axis_label,axis_y,bars,bars_rect;

		var x = d3.scale.linear()
			.range([0, width])
			.domain([0,d3.max(data.map(function(o){ return o.value; }))]);

		var x_axis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.tickSize(height + 5);

		var y = d3.scale.ordinal()
			.rangeBands([0, height],.5,.5)
			.domain(y_domain);

		var y_axis = d3.svg.axis()
			.scale(y)
			.orient("left");

		(d3.select(element[0]).select('svg')[0][0] !== null)
			? svg = d3.select(element[0]).select('svg')
			: drawSVG();

		function drawSVG(){
			svg = d3.select(element[0])
				.append("svg:svg")
				.attr("class", "video-length-chart")
				.attr("width", full_width)
				.attr("height", full_height)
				.append("svg:g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			axis_x = svg.append("g")
				.attr("class","axis x")
				.attr("transform","translate(0," + 0 + ")");

			x_axis_label = axis_x.append("g")
				.attr("class","label")
				.style("text-anchor","end")
				.attr("transform","translate(" + -10 + "," + (height + 16) + ")")
				.append("text").text("Seconds");

			axis_y = svg.append("g")
				.attr("class","axis y");
		}

		bars = svg.selectAll(".bar").data(data);

		bars.enter().append("rect")
			.attr("class","bar")
			.attr("transform",function(d,i){ return "translate(" + 0 + "," + y(d.category) + ")"});

		bars.style("fill",function(d,i){ return colors[i]; })
			.attr("height",y.rangeBand()+"px");

		bars.exit().remove();

		bars.transition().duration(300)
				.attr("width",function(d,y){ return x(d.value); });

		svg.select('.x.axis').transition().duration(300).call(x_axis);
		svg.select('.y.axis').transition().duration(300).call(y_axis);

	}
}