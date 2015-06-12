function getPlayerInfo(){
  console.log("getPlayerInfo");
  var element = this.value
  var reg = /\((.*?)\)/;
  var id = element.match(reg)[1];
  $.ajax({
    type: 'GET',
    dataType: "json",
    url: '/players',
    success: function(data){
      for (var i = 0; i < data.length; ++i){
        if (data[i].id == id){
          var player = data[i];
          $('#info').empty()
          $('#info').append('<h2>Player Info</h2>')
          $('#info').append('<li> Name:<strong> ' + player.name + '</strong></li>')
          $('#info').append('<li> Club:<strong> ' + player.club + '</strong></li>')
          $('#info').append('<li> Nation:<strong> ' + player.nation + '</strong></li>')
          $('#info').append('<li> Age:<strong> ' + player.age + '</strong></li>')
          $('#info').append('<li> Height:<strong> ' + player.height + 'm </strong></li>')
        }
      }
    }
  })
}
function submitTeam(){
  var reg = /\((.*?)\)/;
  var strings = [
    $('#gk').val().match(reg)[1],
    $('#rb').val().match(reg)[1],
    $('#rcb').val().match(reg)[1],
    $('#lcb').val().match(reg)[1],
    $('#lb').val().match(reg)[1],
    $('#rm').val().match(reg)[1],
    $('#rcm').val().match(reg)[1],
    $('#lcm').val().match(reg)[1],
    $('#lm').val().match(reg)[1],
    $('#rs').val().match(reg)[1],
    $('#ls').val().match(reg)[1]
  ];
  var ids = $.unique(strings.map(Number));
  if(ids.length == 11){
  $.ajax({
    type: 'POST',
    dataType: "json",
    url: '/teams',
    data: {ids},
    success: function(data){
      console.log(data)
      }
    })
  }
  else {
    $('#info').empty()
    $('#info').append("<h2>Please select a different player for each position</h2>")
  }
}

$(function(){
  var $dropdowns = $('#gk, #rb, #rcb, #lcb, #lb, #rm, #rcm, #lcm, #lm, #rs, #ls');
  $dropdowns.on('change', getPlayerInfo);
  $('#teamSubmit').on('click', submitTeam);
})