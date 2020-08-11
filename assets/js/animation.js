const initialAnimations = () => {
  document.getElementById("modal").animate(
    [
      { transform: "translateY(-300px)", opacity: 0 },
      { transform: "translateY(0)", opacity: 1 },
    ],
    { duration: 600, easing: "ease", fill: "forwards" }
  );
};
