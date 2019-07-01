import '/index.scss';
import data from './app/data/colors.data.json';
import $ from "jquery";
import _ from "lodash";

$(() => {
  const colorMaps = data.colors,
        formattedColorNames = [];
  _.each(colorMaps, (colorMap, colorMapName) => {
    $('body').append(`<h1>${_.startCase(colorMapName)}`);
    _.each(colorMap, (color, key) => {
      $('body').append(`<div class="heart color bg-${key}">`);
      formattedColorNames.push(_.startCase(key));
    });
  });


});