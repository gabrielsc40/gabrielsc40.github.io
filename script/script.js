function setActiveLink(clickedLink) {
  $(".hover_text").removeClass("active");

  $(clickedLink).addClass("active");

  localStorage.setItem("activeLink", clickedLink.href);
}

$(document).ready(function () {
  const activeLinkHref = localStorage.getItem("activeLink");
  if (activeLinkHref) {
    $(`.hover_text[href="${activeLinkHref}"]`).addClass("active");
  }

  let lastScrollTop = 0;

  $(window).scroll(function () {
    const currentScrollTop = $(this).scrollTop();

    clearTimeout($.data(this, "scrollTimer"));
    $.data(
      this,
      "scrollTimer",
      setTimeout(function () {
        if (currentScrollTop > lastScrollTop) {
          $("#summary_job")
            .addClass("hide-section")
            .removeClass("show-section");
        } else {
          $("#summary_job")
            .addClass("show-section")
            .removeClass("hide-section");
        }
        lastScrollTop = currentScrollTop;
      }, 100)
    );
  });
});
