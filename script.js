 const navbar = document.getElementById("navbar");
    const firstSection = document.getElementsByClassName("one");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navbar.classList.remove("hidden"); // show on 1st
          } else {
            navbar.classList.add("hidden"); // hide on others
          }
        });
      },
      { threshold: 0.5 } // visible at least 50% in viewport
    );

    observer.observe(firstSection);