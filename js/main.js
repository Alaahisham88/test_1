var typed = new Typed("#element", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 60,
  loop: true,
  backSpeed: 50,
  backDelay: 2500,
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");

  if (window.scrollY > 300) {
    navbar.classList.add("sticky"); // Add a class to change navbar style
  } else {
    navbar.classList.remove("sticky"); // Remove the class
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 50); // delay to allow CSS transitions
  });
});

$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1500,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
