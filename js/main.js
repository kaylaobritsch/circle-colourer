var $input = $('#my-color');

$('form').on('change', function() {
  var $color = $input.val();

  $('.ball').css('background-color', $color);
});
