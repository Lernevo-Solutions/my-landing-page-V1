// Handle Signup Redirect
function handleSignup(e) {
  e.preventDefault();
  alert("Signup successful! Redirecting to Home...");
  window.location.href = "index.html";
}

// Mobile Menu Toggle
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector(".navbar").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Select all accordion items across page (works for multiple sections)
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const body = item.querySelector('.accordion-body');

  // Ensure starting collapsed
  body.style.maxHeight = null;
  body.style.padding = '0 24px';
  header.setAttribute('aria-expanded', 'false');

  header.addEventListener('click', () => {

    // Close other items (within same container)
    const parentAccordion = item.parentElement;
    const siblings = parentAccordion.querySelectorAll('.accordion-item');

    siblings.forEach(s => {
      if (s !== item) {
        s.classList.remove('active');
        const sBody = s.querySelector('.accordion-body');
        sBody.style.maxHeight = null;
        sBody.style.padding = '0 24px';
        s.querySelector('.accordion-header').setAttribute('aria-expanded','false');
      }
    });

    // Toggle this item
    const isActive = item.classList.toggle('active');

    if (isActive) {
      // set padding first so scrollHeight includes it
      body.style.padding = '18px 24px';
      header.setAttribute('aria-expanded','true');

      // measure after paint for correct height
      requestAnimationFrame(() => {
        // Give a tiny extra to avoid fractional clipping
        body.style.maxHeight = body.scrollHeight + 'px';
      });

    } else {
      // closing
      body.style.maxHeight = null;
      // remove vertical padding
      body.style.padding = '0 24px';
      header.setAttribute('aria-expanded','false');
    }
  });
});
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const content = item.querySelector(".accordion-content");

        // Close other opened accordions
        document.querySelectorAll(".accordion-item").forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".accordion-content").style.maxHeight = null;
            }
        });

        // Toggle current item
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});
