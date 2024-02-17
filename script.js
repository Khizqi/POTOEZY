document.addEventListener("DOMContentLoaded", function () {
  var homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.classList.add("active");
  }

  var buttons = document.querySelectorAll(".nav-link");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = button.getAttribute("id").replace("btn-", "");
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        document.querySelectorAll(".section").forEach(function (section) {
          section.classList.remove("active");
        });

        targetSection.classList.add("active");
      }
    });
  });
});
