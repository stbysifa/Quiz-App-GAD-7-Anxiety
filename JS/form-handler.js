// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Get input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = document.getElementById("age").value.trim();

    // Basic validation
    if (!firstName || !lastName || !age) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    // Save to sessionStorage
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("age", age);

    // Redirect to the next page (change filename as needed)
    window.location.href = "questionnaire.html";
  });
});
