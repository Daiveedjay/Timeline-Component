document.addEventListener("DOMContentLoaded", () => {
  // Select all timeline items
  const timelineItems = document.querySelectorAll(".Timeline__item");

  // Hide all timeline items initially
  timelineItems.forEach((item) => {
    item.style.opacity = 0;
    item.style.transition = "opacity 0.6s ease-out";
  });

  // Intersection Observer Callback
  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  };

  // Intersection Observer Options
  const options = {
    root: null, // uses the viewport as root
    rootMargin: "0px",
    threshold: 0.1, // 10% of the item should be visible
  };

  // Creating Intersection Observer
  const observer = new IntersectionObserver(fadeInOnScroll, options);

  // Observing each timeline item
  timelineItems.forEach((item) => {
    observer.observe(item);
  });
});
