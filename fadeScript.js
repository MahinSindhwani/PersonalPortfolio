const fadeSections = document.querySelectorAll('.fade-in-section');
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }else {
                entry.target.classList.remove('is-visible'); // <-- key change here
            }
          });
        }, {
          threshold: 0.3
        });
      
        fadeSections.forEach(section => {
          observer.observe(section);
        });