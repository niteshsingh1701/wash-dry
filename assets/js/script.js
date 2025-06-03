$(document).ready(function () {
  // Accordion functionality
  $(".accordion-header").click(function () {
    const accordionItem = $(this).parent(".accordion-item");

    // Toggle the clicked item
    if (accordionItem.hasClass("active")) {
      // If already active, remove active class (collapse)
      accordionItem.removeClass("active");
    } else {
      // Close all and open the clicked one
      $(".accordion-item").removeClass("active");
      accordionItem.addClass("active");
    }
  });
});
