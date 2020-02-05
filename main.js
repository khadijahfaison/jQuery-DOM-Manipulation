$(document).ready(function() {
  $("#tabs").on("click", "a", function() {
    $(".content").removeClass("show")
    $("a").removeClass("active")
    $(this).addClass("active")
    $(this)
      .find("+ .content")
      .addClass("show")
  })
})
