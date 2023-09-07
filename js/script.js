document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('.section');
  
    const sectionOffsets = Array.from(sections).map(section => ({
      id: section.id,
      offset: section.offsetTop - 100, // Adjust this value to your needs
    }));
  
    function updateActiveMenuItem(scrollPosition) {
      const currentSection = sectionOffsets.find(
        section => scrollPosition >= section.offset
      );
  
      if (currentSection) {
        menuItems.forEach(item => {
          if (item.getAttribute('href') === `#${currentSection.id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    }
  
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      updateActiveMenuItem(scrollPosition);
    });
  
    updateActiveMenuItem(window.scrollY); // Initial update
  });
  