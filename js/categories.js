// side bar here onwards __________________________________________________________________________________________________





// _________________________________________________________________________________________________________________________________________
$('.menu-toggle').on('click', function() {
    $('body').toggleClass('menu-open');
  });



$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});

