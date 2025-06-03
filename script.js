document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Optional: simple email format check
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate submission
    form.reset(); // clear form
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  });
});
