const generalRadio = document.getElementById("general");
const supportRadio = document.getElementById("support");
const generalFieldset = document.getElementById("generalFieldset");
const supportFieldset = document.getElementById("supportFieldset");

generalRadio.addEventListener("change", function () {
  if (generalRadio.checked) {
    generalFieldset.style.backgroundColor = "var(--LightGreen)";
    supportFieldset.style.backgroundColor = "white";
  } else {
    generalFieldset.style.backgroundColor = "white";
  }
});

supportRadio.addEventListener("change", function () {
  if (supportRadio.checked) {
    supportFieldset.style.backgroundColor = "var(--LightGreen)";
    generalFieldset.style.backgroundColor = "white";
  } else {
    supportFieldset.style.backgroundColor = "white";
  }
});

function checkFields() {
  const requiredInputs = document.querySelectorAll("[required]");
  let isValid = true;

  requiredInputs.forEach((input) => {
    if (input.type === "checkbox" && !input.checked) {
      isValid = false;
    } else if (input.value.trim() === "") {
      isValid = false;
    }
  });

  if (isValid) {
    displaySuccessMessage();
  } else {
    const existingErrorMessage = document.querySelector(".error-message");
    if (!existingErrorMessage) {
      const errorMessage = document.createElement("div");
      errorMessage.textContent = "Please fill out all required fields.";
      errorMessage.style.textAlign = "center";
      errorMessage.style.marginTop = "10px";
      errorMessage.style.color = "red";
      errorMessage.classList.add("error-message");
      // Insert the error message element at the bottom of the form
      document
        .querySelector("form")
        .insertAdjacentElement("beforeend", errorMessage);
    }
  }
}

function displaySuccessMessage() {
  const successMessage = document.querySelector(".messagesent");
  successMessage.style.opacity = "1";
  setTimeout(function () {
    successMessage.style.opacity = "0";
  }, 5000);
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
  checkFields();
});

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const requiredInputs = form.querySelectorAll("[required]");
  let isValid = true;

  requiredInputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
    }
  });

  if (!isValid) {
    event.preventDefault();
    return;
  }

  event.preventDefault();

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        // Display success message or perform any other actions
      } else {
        // Display error message or perform any other actions
      }
    })
    .catch((error) => {
      // Handle any errors
    });
}
