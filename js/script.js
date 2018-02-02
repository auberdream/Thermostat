$(document).ready(function(){
  var thermo = new Thermostat();

  $('#currenttemp').text(thermo.temperature);

  $('#temperatureup').click(function() {
    thermo.up();
    $('#currenttemp').text(thermo.temperature);
  });

  $('#temperaturedown').click(function() {
    thermo.down();
    $('#currenttemp').text(thermo.temperature);
  });

  $('#powersavingstatus').text(thermo.isPowersaving ? "On" : "Off")

  $('#switchmode').click(function() {
    thermo.modeSwitch();
    $('#powersavingstatus').text(thermo.isPowersaving ? "On" : "Off")
  });

  $('#reset').click(function() {
    thermo.reset();
    $('#currenttemp').text(thermo.temperature);
  });

  $('#currentusage').text(thermo.usage());

  $('#usage').click(function() {
    $('#currentusage').text(thermo.usage());
  });

  $('#cityoption').change(function() {
    var city = $('#cityoption').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $("#ajaxresponse").text(`The weather in ${city.charAt(0).toUpperCase() + city.slice(1)} is: ` + data.main.temp + " degrees, " + data.weather[0].main);
    });
  })


});
