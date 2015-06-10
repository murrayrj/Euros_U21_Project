function getPlayerInfo(){
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
          $('#info').append('<h2>Player Information</h2>')
          $('#info').append('<li> Name: ' + player.name + '</li>')
          $('#info').append('<li> Club: ' + player.club + '</li>')
          $('#info').append('<li> Nation: ' + player.nation + '</li>')
          $('#info').append('<li> Position: ' + player.position + '</li>')
          $('#info').append('<li> Age: ' + player.age + '</li>')
          $('#info').append('<li> Height: ' + player.height + 'm </li>')
        }
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', function() {
  $('#gk').on('change', getPlayerInfo);
  $('#rb').on('change', getPlayerInfo);
  $('#rcb').on('change', getPlayerInfo);
  $('#lcb').on('change', getPlayerInfo);
  $('#lb').on('change', getPlayerInfo);
  $('#rm').on('change', getPlayerInfo);
  $('#rcm').on('change', getPlayerInfo);
  $('#lcm').on('change', getPlayerInfo);
  $('#lm').on('change', getPlayerInfo);
  $('#rs').on('change', getPlayerInfo);
  $('#ls').on('change', getPlayerInfo);
});