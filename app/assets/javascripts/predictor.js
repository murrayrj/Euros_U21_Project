$(document).ready(function() {
  $("#groupA").on("click", function() {
    var data = {
       1: $("#homeA1").val(),
       2: $("#awayA1").val(),
       3: $("#homeA2").val(),
       4: $("#awayA2").val(), 
       5: $("#homeA3").val(),
       6: $("#awayA3").val(),
       7: $("#homeA4").val(),
       8: $("#awayA4").val(),
       9: $("#homeA5").val(),
       10: $("#awayA5").val(),
       11: $("#homeA6").val(),
       12: $("#awayA6").val()
    };
    $.ajax({
      url: "/group/index",
      method: "GET",
      data: data,
    }).done(function(data) {
      console.log(data)
      conosole.log('hello moto')
    })
  });
  
  $("#groupB").on("click", function() {
    var data = {
       1: $("#homeB1").val(),
       2: $("#awayB1").val(),
       3: $("#homeB2").val(),
       4: $("#awayB2").val(),
       5: $("#homeB3").val(),
       6: $("#awayB3").val(),
       7: $("#homeB4").val(),
       8: $("#awayB4").val(),
       9: $("#homeB5").val(),
       10: $("#awayB5").val(),
       11: $("#homeB6").val(),
       12: $("#awayB6").val()
    };   
    $.ajax({
      url: "/group/index",
      method: "GET",
      data: data,
    }).done(function(data) {
      console.log(data)
    })
  });
})
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('HELLO WORLD');

//   getRegionsButton = $('#get-regions');
//   regionSelect = $('#region-select');
//   countrySelect = $('#country-select');
//   results = $('#results');

//   getRegionsButton.on('click', getRegions);
//   regionSelect.on('change', getCountries);
//   countrySelect.on('change', getCountryData);