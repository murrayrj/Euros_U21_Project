function result(homeTeamScore, awayTeamScore) {
  if (homeTeamScore > awayTeamScore ){
    return "win";
  } else if (homeTeamScore < awayTeamScore) {
    return "lose";
  } else {
    return "draw";
  }
}

$(document).ready(function() {
  $("#groupA").on("click", function() {
    var $matches = $('.match');
    var $results = $.map($matches, function(match, index){
      var $homeTeamName  = $(match).find('.home').text();
      var $awayTeamName  = $(match).find('.away').text();
      var $homeTeamScore = $(match).find('select#home').val();
      var $awayTeamScore = $(match).find('select#away').val();
      
      console.log($homeTeamName, $awayTeamName, $homeTeamScore, $awayTeamScore)

      return [{
        name: $homeTeamName,
        score: $homeTeamScore,
        result: result($homeTeamScore, $awayTeamScore)
      },
      {
        name: $awayTeamName,
        score: $awayTeamScore,
        result: result($awayTeamScore, $homeTeamScore)
      }]
    })

    console.log($results);

    $.ajax({
      beforeSend: function(xhr) {
        xhr.setRequestHeader(
            'X-CSRF-Token', 
            $('meta[name="csrf-token"]').attr('content'))},
      url: "/teams/update_teams",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        teams: $results      
      })
    }).done(function(data, response) {
      console.log(data, response)
    });
  });
  $("#groupB").on("click", function() {
    var $matches = $('.match');
    var $results = $.map($matches, function(match, index){
      var $homeTeamName  = $(match).find('.home').text();
      var $awayTeamName  = $(match).find('.away').text();
      var $homeTeamScore = $(match).find('select#home').val();
      var $awayTeamScore = $(match).find('select#away').val();
      
      console.log($homeTeamName, $awayTeamName, $homeTeamScore, $awayTeamScore)

      return [{
        name: $homeTeamName,
        score: $homeTeamScore,
        result: result($homeTeamScore, $awayTeamScore)
      },
      {
        name: $awayTeamName,
        score: $awayTeamScore,
        result: result($awayTeamScore, $homeTeamScore)
      }]
    })

    console.log($results);

    $.ajax({
      beforeSend: function(xhr) {
        xhr.setRequestHeader(
            'X-CSRF-Token', 
            $('meta[name="csrf-token"]').attr('content'))},
      url: "/teams/update_teams",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        teams: $results      
      })
    }).done(function(data, response) {
      console.log(data, response)
    });
  });
});