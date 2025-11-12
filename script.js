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



