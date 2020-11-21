$(".lang").on("click", function (e) {
  e.preventDefault();
  $(".lang").toggleClass("active");
});
$(".lang").on("click", function (e) {
  $(".ru").toggleClass("active");
  $(".en").toggleClass("active");
});

