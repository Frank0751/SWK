// Get modal element
var modal = document.getElementById("donationModal");

// Get open modal button
var donateBtn = document.getElementById("donateBtn");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
donateBtn.onclick = function () {
    modal.style.display = "block";
};

// Listen for close click
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close if outside click
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Get Partner With Us button from hero section
var partnerUsHeroBtn = document.getElementById("partnerUsHeroBtn");

// Listen for Partner With Us button click to open modal
if (partnerUsHeroBtn) { // Check if the button exists on the page
    partnerUsHeroBtn.onclick = function () {
        modal.style.display = "block";
    };
}

document.querySelector("form").addEventListener("submit", function (e) {
    const email = document.querySelector('input[type="email"]').value;
    if (!email) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

document.querySelectorAll('.gallery-item img').forEach(item => {
    item.addEventListener('click', function () {
        // Open modal or larger view of image
    });
});

// Donation Progress
const donationForm = document.querySelector('.donation-form');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const raisedAmount = document.querySelector('.donation-stats .donation-stat:first-child h3');
const donorCount = document.querySelector('.donation-stats .donation-stat:last-child h3');

let totalRaised = 0;
let totalDonors = 0;
const goalAmount = 10000;

function updateProgressBar() {
    const percentage = (totalRaised / goalAmount) * 100;
    progressBar.style.width = `${Math.min(percentage, 100)}%`;
    if (progressText) {
        progressText.textContent = `$${totalRaised.toLocaleString()}`;
    }
    if (raisedAmount) {
        raisedAmount.textContent = `$${totalRaised.toLocaleString()}`;
    }
    if (donorCount) {
        donorCount.textContent = totalDonors;
    }
}

// Function to handle donation medium change and display account details
function handleDonationMediumChange(mediumValue, detailsContainerId, bankDetailsId, momoDetailsId) {
    const accountDetailsContainer = document.getElementById(detailsContainerId);
    const bankDetails = document.getElementById(bankDetailsId);
    const momoDetails = document.getElementById(momoDetailsId);

    if (!accountDetailsContainer || !bankDetails || !momoDetails) return;

    if (mediumValue) {
        accountDetailsContainer.style.display = 'block';
        if (mediumValue === 'bank') {
            bankDetails.style.display = 'block';
            momoDetails.style.display = 'none';
        } else if (mediumValue === 'momo') {
            bankDetails.style.display = 'none';
            momoDetails.style.display = 'block';
        } else {
            bankDetails.style.display = 'none';
            momoDetails.style.display = 'none';
            accountDetailsContainer.style.display = 'none';
        }
    } else {
        accountDetailsContainer.style.display = 'none';
        bankDetails.style.display = 'none';
        momoDetails.style.display = 'none';
    }
}

// Setup for the main donation form (index.html)
const mainDonationForm = document.getElementById('donationForm');
if (mainDonationForm) {
    const donationMediumRadios = mainDonationForm.querySelectorAll('input[name="donationMedium"]');
    donationMediumRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            handleDonationMediumChange(this.value, 'accountDetails', 'bankDetails', 'momoDetails');
        });
    });

    mainDonationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedMedium = mainDonationForm.querySelector('input[name="donationMedium"]:checked');
        const formMessageDiv = document.getElementById('formResponseMessage');
        const amount = parseFloat(this.querySelector('input[name="amount"]').value);

        if (!selectedMedium) {
            formMessageDiv.textContent = 'Please select a donation medium.';
            formMessageDiv.className = 'form-message-modal error';
            formMessageDiv.style.display = 'block';
            return;
        }

        // If amount is valid, update progress bar (optional, if you want to track pledges)
        if (amount > 0) {
            totalRaised += amount;
            totalDonors++;
            updateProgressBar();
        }

        formMessageDiv.textContent = 'Thank you for your pledge! Please proceed with the manual transfer using the details provided.';
        formMessageDiv.className = 'form-message-modal success';
        formMessageDiv.style.display = 'block';
        // Optionally, you can reset parts of the form or hide account details after submission
        // setTimeout(() => { 
        //     formMessageDiv.style.display = 'none'; 
        //     mainDonationForm.reset(); 
        //     handleDonationMediumChange(null, 'accountDetails', 'bankDetails', 'momoDetails');
        // }, 7000);
    });
}

// Setup for the About Us page donation form (about.us.html)
const aboutDonationForm = document.getElementById('donationFormAbout'); // Assuming form ID is donationFormAbout
if (aboutDonationForm) {
    const donationMediumRadiosAbout = aboutDonationForm.querySelectorAll('input[name="donationMediumAbout"]');
    donationMediumRadiosAbout.forEach(radio => {
        radio.addEventListener('change', function () {
            handleDonationMediumChange(this.value, 'accountDetailsAbout', 'bankDetailsAbout', 'momoDetailsAbout');
        });
    });

    aboutDonationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedMediumAbout = aboutDonationForm.querySelector('input[name="donationMediumAbout"]:checked');
        const formMessageDivAbout = document.getElementById('formResponseMessageAbout');
        const amountAbout = parseFloat(this.querySelector('input[name="amount"]').value);

        if (!selectedMediumAbout) {
            formMessageDivAbout.textContent = 'Please select a donation medium.';
            formMessageDivAbout.className = 'form-message-modal error';
            formMessageDivAbout.style.display = 'block';
            return;
        }

        // If amount is valid, update progress bar (optional, if you want to track pledges)
        // Note: This assumes totalRaised, totalDonors, updateProgressBar are globally accessible
        // and you want the about page donations to contribute to the same progress bar.
        // If not, you might need a separate progress tracking for the about page.
        if (amountAbout > 0) {
            totalRaised += amountAbout;
            totalDonors++;
            updateProgressBar();
        }

        formMessageDivAbout.textContent = 'Thank you for your pledge! Please proceed with the manual transfer using the details provided.';
        formMessageDivAbout.className = 'form-message-modal success';
        formMessageDivAbout.style.display = 'block';
    });
}

// Interactive Quiz or Poll
document.querySelector('.quiz form').onsubmit = function (event) {
    event.preventDefault();
    const answer = document.querySelector('input[name="q1"]:checked');
    if (answer) {
        alert(`You selected: ${answer.value}`);
    } else {
        alert("Please select an answer!");
    }
};

// FAQs Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.onclick = function () {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    };
});

// Volunteer Sign-up Form Submission (dummy)
document.querySelector('.volunteer-signup form').onsubmit = function (event) {
    event.preventDefault();
    alert('Thank you for signing up as a volunteer!');
    this.reset(); // Reset form after submission
};

// Quiz Functionality
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.querySelector('.quiz form');
    const feedback = document.createElement('div');
    feedback.classList.add('feedback');
    quizForm.appendChild(feedback); // Append feedback div to the form

    quizForm.onsubmit = function (event) {
        event.preventDefault(); // Prevent form submission

        const answer = document.querySelector('input[name="q1"]:checked');
        if (answer) {
            let message;
            if (answer.value === 'c') {
                message = "Correct! SWK focuses on both educating youth and environmental conservation.";
            } else {
                message = "Incorrect. Please try again!";
            }
            feedback.textContent = message;
        } else {
            feedback.textContent = "Please select an answer!";
        }
    };
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
        navLinks.classList.remove('active');
    }
});

// Initialize EmailJS with your public key
(function () {
    emailjs.init("gpW-YXnkGKu2OffyP");
})();

// Send email using EmailJS
// emailjs.send('service_unjb7s8', 'template_s13cq2r', formData); // This line seems to be a leftover, ensure it's in the correct scope or removed if not used globally.

// Scroll Animation Logic
document.addEventListener("DOMContentLoaded", function () {
    const animatedSections = document.querySelectorAll('.scroll-animate');

    if (animatedSections.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        animatedSections.forEach(section => {
            observer.observe(section);
        });
    }
});

/* Ensure no scroll animation logic (Intersection Observer) exists beyond this point unless it was pre-existing */