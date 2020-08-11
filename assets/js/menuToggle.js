document
  .getElementById("close-modal")
  .addEventListener("click", function (event) {
    document
      .getElementById("modal")
      .animate(
        { transform: "translateY(-300px)", opacity: 0 },
        { duration: 600, easing: "ease", fill: "forwards" }
      );

    document
      .getElementById("blur")
      .animate(
        { opacity: 0 },
        { duration: 600, easing: "ease", fill: "forwards" }
      );
    setTimeout(() => {
      document.getElementById("blur").classList.toggle("no-visible");
    }, 500);
  });
