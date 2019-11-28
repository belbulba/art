var firstAnimation = function() {
  $('.galleryImage').each(
    function() {
      $(this).delay(500).animate({
        opacity: 1
      }, 2000);
    }
  );
};
