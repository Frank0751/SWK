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

// Donation Progress Bar
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector('.progress-bar');
    const goal = 10000; // Total goal amount
    const currentAmount = 7000; // Current amount raised
    const percentage = (currentAmount / goal) * 100;

    progressBar.style.width = percentage + '%';
    progressBar.textContent = `$${currentAmount} of $${goal} Goal`;
});

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