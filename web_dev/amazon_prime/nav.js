// Using jQuery
$(".fbl-icon").click(function() {
    $(".dropdown-content").toggle();
  });
  
  // Using vanilla JavaScript
  document.querySelector(".fbl-icon").addEventListener("click", function() {
    document.querySelector(".dropdown-content").classList.toggle("show");
  });