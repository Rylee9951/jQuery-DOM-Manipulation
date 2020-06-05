// $(document).ready(function() {
//   $(".header").on("click", function() {
//     $(".content").removeClass("show")
//     $(this)
//       .find("+ .content")
//       .addClass("show")
//   })
// })

$(document).ready(function() {
  $(".header").on("click", function() {
    if (
      $(this)
        .siblings(".content")
        .is(":hidden")
    ) {
      $(".content").slideUp(800)
      $(this)
        .find("+ .content")
        .slideDown(800)
    } else {
      $(".content").slideUp(800)
    }
  })
})
