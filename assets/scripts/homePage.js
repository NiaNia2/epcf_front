// CAROUSEL
const buttons = document.querySelectorAll(".btns");
const slides = document.querySelectorAll(".slide")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 : -1;
        const slideActive = document.querySelector(".active");

        newIndex = calcNextSlide + [...slides].indexOf(slideActive);

        if (newIndex < 0) newIndex = [...slides].length - 1;
        if (newIndex >= [...slides].length) newIndex = 0;
        slides[newIndex].classList.add("active");

        slideActive.classList.remove("active");
    })
})
// FORMULAIRE
const form = document.querySelector('.form');
const formBtn = document.querySelector('#form-btn');

formBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
        form.reset();

        const message = document.createElement('p');
        message.textContent = "Message envoyé";
        message.style.color = 'black';
        message.style.marginTop = '10px';

        form.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);
    } else {
        form.reportValidity();
    }
});
