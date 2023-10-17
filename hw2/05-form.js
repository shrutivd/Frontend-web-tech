const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const display_name = document.getElementById("name").value;
  const display_email = document.getElementById("email").value;
  const display_status = document.getElementById("status").value;

  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let display_checkboxes = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent).join(", ");
  const display_other = document.getElementById("textArea").value;

  console.group("=========Form Submission=========");
  console.log("Full Name: ", display_name);
  console.log("Email: ", display_email);
  console.log("Registration Status: ", display_status);
  console.log("Courses taken: ", display_checkboxes);
  console.log("Anything else: ", display_other);
  console.groupEnd();
});