document
  .getElementById("confirm_password")
  .addEventListener("input", function () {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm_password")
      .value.trim();

    if (password !== confirmPassword) {
      document.getElementById("confirm_password").style.borderColor = "red";
    } else {
      document.getElementById("confirm_password").style.borderColor = "";
    }
  });

document
  .getElementById("phone_number")
  .addEventListener("input", function (event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  });

document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default button behavior

  // Get form values
  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phone_number").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm_password")
    .value.trim();

  // Validate form values
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !password ||
    !confirmPassword
  ) {
    alert("All fields are required.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Submit the form if all validations pass
  document.getElementById("signup-form").submit();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
