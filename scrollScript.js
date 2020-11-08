$('.collapse').on('shown.bs.collapse', function (e) {
  var $card = $(this).closest('.card');
  $('html,body').animate(
    {
      scrollTop: $card.offset().top,
    },
    500
  );
});

function oldScroll() {
  var card = document.getElementById('mainHeading');
  card.scrollIntoView();
}
