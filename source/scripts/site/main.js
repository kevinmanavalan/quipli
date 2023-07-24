$(window).on("load", function () {
  //page loading
  $("body").addClass("is-loaded");
  setTimeout(() => {
    AOS.init({
      once: true,
    });
  }, 500);
});

//Browser and OS defined class on body
$("body").addClass($.browser.platform);
$("body").addClass($.browser.name);
if ($.browser.desktop == true) {
  $("body").removeClass("mobile").removeClass("ipad").addClass("desktop");
}
if ($.browser.mobile == true) {
  $("body").removeClass("desktop").removeClass("ipad").addClass("mobile");
}
if ($.browser.ipad == true) {
  $("body").removeClass("mobile").removeClass("desktop").addClass("ipad");
}
if (
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0) ||
  navigator.platform === "iPad"
) {
  $("body").removeClass("mobile").removeClass("desktop").addClass("ipad");
}

$(document).ready(function () {
  function burgermenu() {
    $(".js-burgermenu").click(function () {
      if (!$("body").hasClass("show-menu")) {
        $("body").addClass("show-menu");
      } else {
        setTimeout(() => {
          $("body").removeClass("show-menu");
        }, 200);
        $(".header__content").slideUp();
      }
    });
  }
  function headerAccordion() {
    if (window.innerWidth < 1199) {
      $(".header__content").hide();
      $(".header__accordion").each(function () {
        var $headerAccordion = $(this);
        var $accoridonContent = $headerAccordion.find(".header__content");
        $headerAccordion.click(function () {
          $(".downarrow").removeClass("active");
          $(".header__content").not($accoridonContent).slideUp();
          $headerAccordion.find(".downarrow").addClass("active");
          $accoridonContent.slideToggle();
        });
      });
    }
  }
  function supportBrandsCarousel() {
    $(".supportbrands__carousel").slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true,
      nextArrow: false,
      prevArrow: false,
      swipeToSlide: true,

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }
  function testimonialCarousel() {
    var $carousel = $(".testimonials__wrapper");
    var $prevButton = $(".js-slick-prev");
    var $nextButton = $(".js-slick-next");

    $carousel.slick({
      centerMode: true,
      centerPadding: "235px",
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "22.5px",
            prevArrow:
              '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
          },
        },
      ],
    });
    $prevButton.click(function () {
      $carousel.slick("slickPrev");
      $(this).addClass("hover-click-prev");
      setTimeout(function () {
        $prevButton.removeClass("hover-click-prev");
      }, 1000);
    });

    $nextButton.click(function () {
      $carousel.slick("slickNext");
      $(this).addClass("hover-click-next");
      setTimeout(function () {
        $nextButton.removeClass("hover-click-next");
      }, 1000);
    });
  }
  function tabAnimation() {
    $(".outcomes__tab-nav li:first-child").addClass("active");
    $(".outcomes__tab-nav li:nth-child(2)").addClass("is-next");
    $(".outcomes__tab-content").hide();
    $(".outcomes__tab-content:first").show();

    $(".outcomes__tab-nav li").click(function () {
      $(".outcomes__tab-nav li").removeClass("active is-prev is-next");
      $(this).addClass("active");
      $(this).prev("li").addClass("is-prev");
      $(this).next("li").addClass("is-next");
      $(".outcomes__tab-content").hide();

      var activeTab = $(this).find("a").attr("href");
      console.log(activeTab);
      $(activeTab).fadeIn();
      return false;
    });
  }
  function careerAccordion() {
    $(".career__open-view").hide();
    $(".career__before-heading:not(:first)").hide();
    $(".career__after-heading:not(:first)").hide();

    if (window.innerWidth < 1199) {
      $(".career__item").each(function () {
        var accordionItem = $(this);
        var accordionButton = accordionItem.find(".career__item-wrapper");
        var accordionArrow = accordionItem.find(".career__title");

        accordionButton.click(function () {
          $(".career__title").not(accordionArrow).removeClass("active");
          $(".career__difference")
            .not(accordionItem.find(".career__difference"))
            .slideUp();
          accordionArrow.toggleClass("active");
          accordionItem.find(".career__difference").slideToggle();
        });
      });
    } else {
      $(".career__item").each(function () {
        var accordionItem = $(this);
        var accordionButton = accordionItem.find(".career__item-wrapper");
        var accordionInnerList = accordionItem.find(".career__open-view");
        var accordionInnerListCopy = accordionItem.find(".career__closed-view");
        var accordionArrow = accordionItem.find(".career__title");

        accordionButton.click(function () {
          $(".career__item").not(accordionItem).removeClass("active");
          $(".career__open-view").not(accordionInnerList).removeClass("active");
          $(".career__closed-view")
            .not(accordionInnerListCopy)
            .addClass("active");
          $(".career__title").not(accordionArrow).removeClass("active");

          $(".career__open-view").not(accordionInnerList).slideUp();
          $(".career__closed-view").not(accordionInnerListCopy).slideDown();
          accordionInnerList.toggleClass("active");
          accordionArrow.toggleClass("active");
          accordionItem.find(".career__closed-view").fadeToggle(1);
          accordionItem.find(".career__open-view").slideToggle(200);
        });
      });
    }
    return false;
  }
  function faqAccordion() {
    $(".faq__answers").hide();
    $(".faq__question-wrapper").each(function () {
      var faqAccordionItem = $(this);
      var faqAccordionButton = faqAccordionItem.find(".faq__question");
      var faqAccordionArrow = faqAccordionItem.find(".faq__question-arrow");

      faqAccordionButton.click(function () {
        $(".faq__question-arrow").not(faqAccordionArrow).removeClass("active");
        $(".faq__answers")
          .not(faqAccordionItem.find(".faq__answers"))
          .slideUp();
        faqAccordionArrow.toggleClass("active");
        faqAccordionItem.find(".faq__answers").slideToggle();
      });
    });
    return false;
  }
  function faqListing() {
    var $faqItems = $(".faq__question-wrapper");
    var $showMoreButton = $(".faq__listing-controller");
    var defaultShowCount = 5;
    $faqItems.slice(defaultShowCount).hide();
    $showMoreButton.on("click", function () {
      $faqItems.slice(defaultShowCount).slideToggle(function () {
        $showMoreButton.text(
          $faqItems.slice(defaultShowCount).is(":hidden")
            ? "See all FAQs"
            : "Hide FAQs"
        );
      });
    });
  }
  faqListing();
  faqAccordion();
  careerAccordion();
  tabAnimation();
  testimonialCarousel();
  supportBrandsCarousel();
  headerAccordion();
  burgermenu();
  // aosmodulate();
});

//define a function
function example_function() {
  console.log("function called");
}

//call the function
example_function();
