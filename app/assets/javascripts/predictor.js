$(document).ready(function() {
  $("#groupA").on("click", function(e) {
    $.ajax({
      url: "/",
      method: "PUT",
      data: data,
    });
  });
  $("#groupB").on("click", function(e) {
    console.log($(this));
    $.ajax({
      type        : 'PUT',
      url         : '/',
      data        :  Data,
      dataType    : 'json',
    })
  });
})