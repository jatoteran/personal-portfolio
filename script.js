// ==========================
// PROJECTS BUTTON
// ==========================

const projectsButton = document.querySelector("#projects-button");
const projectsSection = document.querySelector("#projects");

if (projectsButton && projectsSection) {
    projectsButton.addEventListener("click", function () {
        projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formStatus = document.querySelector("#form-status");

if (
    contactForm &&
    nameInput &&
    emailInput &&
    messageInput &&
    formStatus
) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        formStatus.classList.remove(
            "form-error",
            "form-success"
        );


        // EMPTY FIELDS

        if (!name || !email || !message) {
            formStatus.textContent =
                "Please complete all fields.";

            formStatus.classList.add("form-error");

            return;
        }


        // EMAIL VALIDATION

        if (!emailInput.validity.valid) {
            formStatus.textContent =
                "Please enter a valid email address.";

            formStatus.classList.add("form-error");

            return;
        }


        // TEMPORARY FRONT-END MESSAGE

        formStatus.textContent =
            "Thanks! Contact form delivery will be connected soon.";

        formStatus.classList.add("form-success");


        setTimeout(function () {
            formStatus.textContent = "";

            formStatus.classList.remove(
                "form-error",
                "form-success"
            );
        }, 5000);
    });
}





