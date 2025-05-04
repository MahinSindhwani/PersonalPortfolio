document.addEventListener('DOMContentLoaded', function() {
    // Select all spans inside dropping-texts
    const droppingTextSpans = document.querySelectorAll('.dropping-texts span');
    
    // Calculate total animation duration and individual delay
    const individualDelay = 3;
    const totalDuration = individualDelay * droppingTextSpans.length; // Total animation cycle in seconds
    
    // Apply calculated delay to each span
    droppingTextSpans.forEach((span, index) => {
      const delay = index * individualDelay;
      span.style.animationDelay = `${delay}s`;
    });
  });