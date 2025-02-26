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

  const tag_name = $(".tag_name").text();

  const array_tag_name = tag_name.split(" ");

  const tag_open = array_tag_name[0];
  const first_name = array_tag_name[1];
  const last_name = array_tag_name[2];
  const tag_close = array_tag_name[3];

  const novo_html = `
  <span style="color: #00dad2;">${tag_open}</span>
  ${first_name} ${last_name}
  <span style="color: #00dad2;">${tag_close}</span>
`;

$(".tag_name").html(novo_html);
});
