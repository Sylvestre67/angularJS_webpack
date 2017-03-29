import angular from 'angular';
import { videoLengthChart } from './video_length_chart.directive';

export const chartsModule = angular.module('charts',[ ])
		.directive('videoLengthChart', videoLengthChart)
		.name;