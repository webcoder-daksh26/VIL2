/* ================= MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navigation = document.getElementById("navigation");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}



/* ================= HERO SLIDER ================= */

const slides =
    document.querySelectorAll(".hero-slide");

const dots =
    document.querySelectorAll(".dot");

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        if (!image.src.endsWith("images/image-placeholder.svg")) {

            image.src = "images/image-placeholder.svg";

        }

    });

});

let currentSlide = 0;


function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

}


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


if (slides.length > 0) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}



/* ================= YEAR ================= */

const year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* ================= QUOTATION ================= */

const quotationForm =
    document.getElementById("quotationForm");


if (quotationForm) {

    quotationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const product =
                document.getElementById("product").value;

            const quantity =
                document.getElementById("quantity").value;

            const company =
                document.getElementById("company").value;

            const name =
                document.getElementById("name").value;

            const phone =
                document.getElementById("phone").value;

            const email =
                document.getElementById("email").value;

            const message =
                document.getElementById("message").value;


            const whatsappMessage =

`Hello VINDH TRANSMETAL INDUSTRIES LIMITED,

I want to request a quotation.

Product: ${product}

Quantity: ${quantity}

Company Name: ${company}

Contact Person: ${name}

Phone: ${phone}

Email: ${email}

Requirement:
${message}`;


            const whatsappURL =
                "https://wa.me/918707701271?text="
                + encodeURIComponent(whatsappMessage);


            window.open(
                whatsappURL,
                "_blank"
            );

        }

    );

}



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const formData = new FormData(contactForm);

            const whatsappMessage =

`Hello VINDH TRANSMETAL INDUSTRIES LIMITED,

I want to make an enquiry.

Name: ${formData.get("name")}

Company Name: ${formData.get("company") || "Not provided"}

Phone: ${formData.get("phone")}

Email: ${formData.get("email") || "Not provided"}

Requirement:
${formData.get("requirement")}`;

            const whatsappURL =
                "https://wa.me/918707701271?text="
                + encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank");

        }
    );

}



/* ================= CLOSE MOBILE MENU ================= */

document
    .querySelectorAll("#navigation a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove("open");

            }
        );

    });