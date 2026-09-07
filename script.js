console.log("JavaScript is connected!");


// ==========================
// PROJECTS BUTTON
// ==========================

const projectsButton = document.querySelector("#projects-button");
const projectsSection = document.querySelector("#projects");

projectsButton.addEventListener("click", function () {
    projectsSection.scrollIntoView({
        behavior: "smooth"
    });

    projectsButton.textContent = "Projects below ↓";
});


// ==========================
// NAVIGATION
// ==========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {

        formStatus.textContent = "Please complete all fields.";

        formStatus.classList.remove("form-success");
        formStatus.classList.add("form-error");

        return;
    }

    formStatus.textContent = "Message ready to send!";

    formStatus.classList.remove("form-error");
    formStatus.classList.add("form-success");

    contactForm.reset();

    setTimeout(function () {
        formStatus.textContent = "";
    }, 3000);

});





