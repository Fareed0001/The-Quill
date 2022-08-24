if (window.matchMedia("(max-width: 768px)").matches) {
  // NAVBAR
  $(".nav-img-column").removeClass("col-1").addClass("col-2");
  $(".nav-link-col").removeClass("col-11").addClass("col-10");
  // NEWS
  $(".btn.breaking-caret").removeClass("btn-lg");
  // HEADLINE TEXT
  var text = $(".carousel-text").text();
  var len = text.length;

  if (len > 40) {
    $(".carousel-text").text($(".carousel-text").text().substr(0, 40) + " ....");
  }
  // CARDS
  $(".col-auto.d-lg-block").removeClass("d-none");
  // FOOTER
  $(".footer-container").removeClass("container");
  // CARDS
  $("col-auto.d-none.d-lg-block").removeClass("d-none");
}


// PHONE
if (window.matchMedia("(max-width: 479px)").matches) {
  $(".phone-nav-button").on("click", function() {
    $(".nav-links-div").css({"width": "70%"});
    $(".trending-bottom-text").css({"visibility": "collapse"});
    $("a.phone-nav-link").css({"width": "80%"});
    $(".World-and-sports").addClass("no-hover");
  });
  $(".inside-nav-button").on("click", function() {
    $(".nav-links-div, .phone-nav-link").css({"width": "0"});
    $(".trending-bottom-text").css({"visibility": "visible"});
  });
  // HEADLINE TEXT
  var text = $(".carousel-text").text();
  var len = text.length;

  if (len > 40) {
    $(".carousel-text").text($(".carousel-text").text().substr(0, 40) + " ....");
  }
  // CARD
  var text = $(".card-text").text();
  var len = text.length;

  if (len > 40) {
    $(".card-text").text($(".card-text").text().substr(0, 40) + " ....");
  }
  // FOOTER
  $(".footer-container").addClass("container");
}
