/*
http://www.chartjs.org/

===================== */

var dataset1 = "https://shayda.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM pennjobsdatatable20160220 WHERE city1 IN ('New York', 'Philadelphia', 'Washington D.C.', 'Boston', 'Pittsburgh','Baltimore', 'Chicago')";
var dataset2 = 'https://shayda.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM usstates';
var dataset3 = 'https://shayda.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM usstates LIMIT 1';
// var dataset4 =
// var dataset5 =

var myFeatureGroup;


$.ajax(dataset1).done(function(data) {console.log(data);
  myFeatureGroup = L.geoJson(data, {
    // onEachFeature: eachFeature,
    // style: myStyle1
    // filter: myFilter

  });
  myFeatureGroup.addTo(map);
});


//adjust color and styles later
var subLayerOptions = {
  sql: "SELECT * FROM pennjobsdatatable20160220 city1 IN ('New York', 'Philadelphia', 'Washington D.C.', 'Boston', 'Pittsburgh','Baltimore', 'Chicago')",
  cartocss: "#pennjobsdatatable20160220{marker-fill: #109DCD; marker-width: 5; marker-line-color: white; marker-line-width: 0;}"
};
var myStyle2 = function(feature) {
  return feature.properties.pop90_sqmi < 100 ? {fillColor: "red", color: "red", opacity:0}:
  {fillColor: "grey", color: "grey", opacity:0};
};
// var myStyle3 = function(feature) {
//   return feature.properties.pop90_sqmi < 100 ? {fillColor: "red", color: "red", opacity:0}:
//   {fillColor: "grey", color: "grey", opacity:0};
// };
// var myStyle4 = function(feature) {
//   return feature.properties.pop90_sqmi < 100 ? {fillColor: "red", color: "red", opacity:0}:
//   {fillColor: "grey", color: "grey", opacity:0};
// };
// var myStyle5 = function(feature) {
//   return feature.properties.pop90_sqmi < 100 ? {fillColor: "red", color: "red", opacity:0}:
//   {fillColor: "grey", color: "grey", opacity:0};
// };
//
// var eachFeature = function(feature, layer) {
//   layer.on('click', function (e) {
//     switch(feature.properties.COLLDAY) {
//       case "MON":
//       $('span.day-of-week').text('Story1');
//       break;
//       case "TUE":
//       $('span.day-of-week').text('Story2');
//       break;
//       case "WED":
//       $('span.day-of-week').text('Story3');
//       break;
//       case "THU":
//       $('span.day-of-week').text('Story4');
//       break;
//       case "FRI":
//       $('span.day-of-week').text('Story5');
//       break;
//       default:
//       $('span.day-of-week').text('Final');
//       break;
//     }
//
//     /* =====================
//     The following code will run every time a feature on the map is clicked.
//     Check out feature.properties to see some useful data about the feature that
//     you can use in your application.
//     ===================== */
//     showResults();
//     map.fitBounds(this.getBounds());
//
//   });
// };

/* =====================
Filter by what you want to see when you navigate to next slide
===================== */
// var myFilter = function(feature) {
//
//   return true&&(feature.properties.COLLDAY!==" ");
// };
//
// $(document).ready(function() {
//   $.ajax(dataset).done(function(data) {
//     var parsedData = JSON.parse(data);
//     var myFeatureGroup = L.geoJson(parsedData, {
//       // onEachFeature: eachFeature,
//       // style: myStyle,
//       // filter: myFilter
//     }).addTo(map);
//   });
// });
//
var showSlide1 = function() {

  myFeatureGroup.clearLayers();

  $('#content2').hide();
  $('#content1').show();
  $('#content3').hide();
  $('#content4').hide();
  $('#content5').hide();
  $.ajax(dataset1).done(function(data) {console.log(data);
    myFeatureGroup = L.geoJson(data, {
      // onEachFeature: eachFeature,

      // filter: myFilter

    }).addTo(map);
  });
  map.setView([40.303357, -81.540476],5);
};

var showSlide2 = function(){

  myFeatureGroup.clearLayers();
  $('#content1').hide();
  $('#content2').show();
  $('#content3').hide();
  $('#content4').hide();
  $('#content5').hide();
  $.ajax(dataset2).done(function(data) {console.log(data);
      myFeatureGroup = L.geoJson(data, {
        // onEachFeature: eachFeature,
        style: myStyle2,
        // filter: myFilter
      }).addTo(map);
  });
  map.setView([40.000, -75.1090],4);
};

var showSlide3 = function(){
  myFeatureGroup.clearLayers();
  $('#content1').hide();
  $('#content2').hide();
  $('#content3').show();
  $('#content4').hide();
  $('#content5').hide();
  // $.ajax(dataset2).done(function(data) {
  //     var myFeatureGroup = L.geoJson(data, {
  //       // onEachFeature: eachFeature,
  //       style: myStyle,
  //       // filter: myFilter
  //     }).addTo(map);
  // });
  // map.setView([40.000, -75.1090],11);
};

var showSlide4 = function(){
  myFeatureGroup.clearLayers();
  $('#content1').hide();
  $('#content2').hide();
  $('#content3').hide();
  $('#content4').show();
  $('#content5').hide();
  // $.ajax(dataset2).done(function(data) {
  //     var myFeatureGroup = L.geoJson(data, {
  //       // onEachFeature: eachFeature,
  //       style: myStyle,
  //       // filter: myFilter
  //     }).addTo(map);
  // });
  // map.setView([40.000, -75.1090],11);
};

var showSlide5 = function(){
  myFeatureGroup.clearLayers();
  $('#content1').hide();
  $('#content2').hide();
  $('#content3').hide();
  $('#content4').hide();
  $('#content5').show();
  //   $.ajax(dataset2).done(function(data) {
  //       var myFeatureGroup = L.geoJson(data, {
  //         // onEachFeature: eachFeature,
  //         style: myStyle,
  //         // filter: myFilter
  //       }).addTo(map);
  //   });
  //   map.setView([40.000, -75.1090],11);
};


/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.303357, -81.540476],
  zoom: 6
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <State`="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

$(function(){//Chart shit
  var ctx = $("#myChart").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var data = {
    labels: ["New York", "Boston", "Chicago", "Pittsburgh", "Baltimore", "Philadelphia", "Washington D.C."],
    datasets: [
      {
        label: "Annual Average Miles of Bike Lanes Added",
        fillColor: "rgba(220,220,220,0.75)",
        strokeColor: "rgba(220,220,220,0.75)",
        highlightFill: "#16174f",
        highlightStroke: "#16174f",
        data: [34.4, 13.7, 12.3, 8.2, 6.6,6,5.2]
      },
    ]
  };

var options= {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : false,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

  var myBarChart = new Chart(ctx).Bar(data,options);

});
