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
    progressText.textContent = `$${totalRaised}`;
    raisedAmount.textContent = `$${totalRaised}`;
    donorCount.textContent = totalDonors;
}

if (donationForm) {
    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const amount = parseFloat(this.querySelector('input[type="number"]').value);
        if (amount > 0) {
            totalRaised += amount;
            totalDonors++;
            updateProgressBar();
            this.reset();

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'donation-success';
            successMessage.textContent = `Thank you for your donation of $${amount}!`;
            this.parentNode.insertBefore(successMessage, this.nextSibling);

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        }
    });
}

// Initialize progress bar
updateProgressBar();

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
emailjs.send('service_unjb7s8', 'template_s13cq2r', formData);