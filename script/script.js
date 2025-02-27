function setActiveLink(clickedLink) {
  $(".hover_text").removeClass("active");
  $(clickedLink).addClass("active");
  localStorage.setItem("activeLink", clickedLink.href);
}

$(document).ready(function () {
  // Set active link from localStorage
  const activeLinkHref = localStorage.getItem("activeLink");
  if (activeLinkHref) {
    $(`.hover_text[href="${activeLinkHref}"]`).addClass("active");
  }

  // Handle navbar collapse on mobile when clicking a link
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    $('.hamburger .checkbox').prop('checked', false);
  });

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = $(this.getAttribute('href'));
    if(target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 800);
    }
  });

  // Summary section animation on scroll
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

    // About section animation
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
    
    // Add active class to navbar items based on scroll position
    const scrollPosition = $(document).scrollTop();
    
    $('section div[id]').each(function() {
      const currentSection = $(this);
      const sectionTop = currentSection.offset().top - 100;
      const sectionBottom = sectionTop + currentSection.outerHeight();
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const id = currentSection.attr('id');
        $('a.nav-link').removeClass('active');
        $(`a.nav-link[href="#${id}"]`).addClass('active');
      }
    });
  });

  // Format the tag name with color
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
  
  // Portfolio item hover effect for touch devices
  $('.portfolio-item').on('touchstart', function() {
    $(this).toggleClass('hover');
  });
  
  // Initialize with summary section visible
  $('#summary_job').addClass('show-section');
  
});

// Add animation to skills items when they come into view
$(window).on('scroll', function() {
  $('.skill').each(function() {
    const elementTop = $(this).offset().top;
    const elementVisible = 150;
    const windowHeight = $(window).height();
    const scrollY = $(window).scrollTop();
    
    if (scrollY > (elementTop - windowHeight + elementVisible)) {
      $(this).addClass('animate__animated animate__fadeInUp');
    }
  });
  
  $('.portfolio-item').each(function() {
    const elementTop = $(this).offset().top;
    const elementVisible = 150;
    const windowHeight = $(window).height();
    const scrollY = $(window).scrollTop();
    
    if (scrollY > (elementTop - windowHeight + elementVisible)) {
      $(this).addClass('animate__animated animate__fadeInUp');
    }
  });
});