$('form').on('change', function() {
  var $color = $("input:color").val();

  $('.ball').css('background-color', $color);
});
