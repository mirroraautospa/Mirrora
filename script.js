// Mirrora Website
// Version 1.0

document.addEventListener("DOMContentLoaded", () => {

    console.log("Mirrora Website Loaded");

});
const form = document.getElementById("booking-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "mirrora_service",
        "template_vbh0nba",
        this
    )

    .then(function () {

        alert("Thank you! Your appointment request has been sent.");

        form.reset();

    })

    .catch(function (error) {

        alert("Something went wrong. Please try again.");

        console.log(error);

    });

});
