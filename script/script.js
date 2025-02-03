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
  const threshold_ = 50; // Define um limite de 50px

  if (Math.abs(currentScrollTop - lastScrollTop) > threshold_) {
    if (currentScrollTop > lastScrollTop) {
      $('#summary_job').addClass('hide-section').removeClass('show-section');
    } else {
      $('#summary_job').addClass('show-section').removeClass('hide-section');
    }
    lastScrollTop = currentScrollTop;
  }

    const aboutDevSection = $("#about_dev");
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const sectionOffset = aboutDevSection.offset().top;
    const threshold = 100; // Define um limite de 100px

    if (scrollTop + windowHeight > sectionOffset + threshold) {
      aboutDevSection.addClass("visible");
    } else {
      aboutDevSection.removeClass("visible");
    }
  });
});
