// Select all counters
const counters = document.querySelectorAll('.counter');

// Function to animate counting
function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const increment = target / 100; // Adjust to control speed
  let currentValue = 0;

  const updateCounter = () => {
    currentValue += increment;

    if (currentValue < target) {
      counter.textContent = Math.ceil(currentValue);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target; // Set final value
    }
  };

  updateCounter();
}

// Use Intersection Observer for triggering animation when in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
});

// Attach observer to each counter
counters.forEach(counter => {
  observer.observe(counter);
});
