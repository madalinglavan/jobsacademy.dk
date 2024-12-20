let currentType = 'jobseekerContent'; // Implicit setat pe JobSeeker

function switchUserType(userType) {
    if (userType === currentType) return;

    const indicator = document.getElementById("activeIndicator");
    const jobseekerBtn = document.querySelectorAll(".toggle-btn")[0];
    const employerBtn = document.querySelectorAll(".toggle-btn")[1];
    const jobseekerContent = document.getElementById("jobseekerContent");
    const employerContent = document.getElementById("employerContent");

    if (userType === "jobseeker") {
        indicator.style.left = "0";
        jobseekerContent.classList.remove("hidden");
        employerContent.classList.add("hidden");
        jobseekerBtn.classList.add("active"); // Adaugă clasa active
        employerBtn.classList.remove("active"); // Elimină clasa active
    } else {
        indicator.style.left = "50%";
        employerContent.classList.remove("hidden");
        jobseekerContent.classList.add("hidden");
        employerBtn.classList.add("active"); // Adaugă clasa active
        jobseekerBtn.classList.remove("active"); // Elimină clasa active
    }

    currentType = userType === "jobseeker" ? 'jobseekerContent' : 'employerContent';
}


// Apelează funcția pentru a seta starea inițială la încărcarea paginii
window.onload = function() {
    switchUserType(currentType);
};

function toggleMobileMenu(burger) {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("open"); // Toggle the open class
    burger.classList.toggle("open", mobileMenu.classList.contains("open"));
}

window.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById("mobileMenu");
    const burger = document.querySelector('.burger-menu');
    if (mobileMenu.classList.contains("open") && !mobileMenu.contains(event.target) && !burger.contains(event.target)) {
        toggleMobileMenu(burger);
    }
});


function navigateTo(event, target) {
    event.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    toggleMobileMenu(document.querySelector('.burger-menu')); // Închide meniul mobil
}



function handleJobSeekerSubmit(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').classList.remove('hidden');
    event.target.reset(); // Resetează formularul
}

function handleJobOfferSubmit(event) {
    event.preventDefault();
    alert("Job offer file submitted!");
    document.getElementById("jobOfferPopup").style.display = "none"; // Close the popup
}
function handleEmployerSubmit(event) {
    event.preventDefault();
    document.getElementById('confirmationMessageEmployer').classList.remove('hidden');
    event.target.reset(); // Resetează formularul
}




document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.division-content p');

    const checkVisibility = () => {
        const windowHeight = window.innerHeight;

        paragraphs.forEach(paragraph => {
            const { top, bottom } = paragraph.getBoundingClientRect();

            // Verifică dacă paragraful este în vizibilitate
            if (top < windowHeight && bottom > 0) {
                paragraph.classList.add('visible'); // Adaugă clasa 'visible' pentru a activa efectul
            } else {
                paragraph.classList.remove('visible'); // Elimină clasa dacă nu este vizibil
            }
        });
    };

    // Verifică vizibilitatea la derulare
    window.addEventListener('scroll', checkVisibility);
    // Verifică vizibilitatea și la încărcarea paginii
    checkVisibility();
});
