document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('about-highlight');
    const text = paragraph.innerText.trim();
    paragraph.innerText = '';
  
    const words = text.split(' ');
  
    words.forEach((word, idx) => {
      const span = document.createElement('span');
      span.className = 'highlight-scroll';
      span.setAttribute('data-text', word);
      span.innerText = word + '\u00A0'; // keep spacing
      paragraph.appendChild(span);
    });
  
    function animateHighlight() {
      const section = document.getElementById('about');
      const spans = paragraph.querySelectorAll('.highlight-scroll');
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
  
      const revealStart = 0.50;
      const progress = (windowHeight - rect.top) / sectionHeight;
      const percentVisible = Math.min(1, Math.max(0, (progress - revealStart) / (1 - revealStart)));
  
      const total = spans.length;
      const wordsToShow = Math.floor(Math.pow(percentVisible, 1.2) * total);
  
      spans.forEach((span, idx) => {
        span.classList.toggle('reveal', idx < wordsToShow);
      });
    }
  
    window.addEventListener('scroll', animateHighlight);
    window.addEventListener('resize', animateHighlight);
    window.addEventListener('load', animateHighlight);
  });
  