// Form handling
// Form modal handling
const forms = {
    volunteer: document.getElementById('volunteer-form'),
    donation: document.getElementById('donationForm'),
    partnership: document.getElementById('partnershipForm'),
    mentor: document.getElementById('mentor-form')
};

// Initialize form triggers
const formTriggers = {
    volunteer: document.querySelectorAll('[href="#volunteer"], [href="#volunteer"]'),
    donation: document.querySelectorAll('[href="#donate"], [href="#donate"]'),
    partnership: document.querySelectorAll('[href="#partner"], [href="#partner"]')
};

// Add click handlers for form triggers
formTriggers.volunteer.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openForm('volunteer');
    });
});

formTriggers.donation.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openForm('donation');
    });
});

formTriggers.partnership.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openForm('partnership');
    });
});

// Add click handlers for all Partner With Us buttons
const partnerButtons = document.querySelectorAll('.nav-button, .cta-btn[href="#partner"], .card-btn[href="#partner"], [href="#partner"]');

partnerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openForm('partnership');
    });
});

// Add click handlers for all other buttons
const formButtons = {
    volunteer: document.querySelectorAll('.cta-btn[href="#volunteer"], .card-btn[href="#volunteer"], [href="#volunteer"]'),
    donation: document.querySelectorAll('.cta-btn[href="#donate"], .card-btn[href="#donate"], [href="#donate"]'),
    mentor: document.querySelectorAll('.cta-btn[href="#mentor"], .card-btn[href="#mentor"], [href="#mentor"]')
};

formButtons.volunteer.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openForm('volunteer');
    });
});

formButtons.donation.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openForm('donation');
    });
});

formButtons.mentor.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openForm('mentor');
    });
});

// Add smooth transitions for form openings
function openForm(formType) {
    const form = forms[formType];
    if (form) {
        form.style.display = 'flex';
        form.style.opacity = '0';
        form.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            form.style.opacity = '1';
            form.style.transform = 'scale(1)';
            document.body.style.overflow = 'hidden';
        }, 50);
    }
}

// Add smooth transitions for form closures
function closeForm(formType) {
    const form = forms[formType];
    if (form) {
        form.style.opacity = '0';
        form.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            form.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Close forms when clicking outside
forms.volunteer.addEventListener('click', (e) => {
    if (e.target === forms.volunteer) {
        closeForm('volunteer');
    }
});

forms.donation.addEventListener('click', (e) => {
    if (e.target === forms.donation) {
        closeForm('donation');
    }
});

forms.partnership.addEventListener('click', (e) => {
    if (e.target === forms.partnership) {
        closeForm('partnership');
    }
});

forms.mentor.addEventListener('click', (e) => {
    if (e.target === forms.mentor) {
        closeForm('mentor');
    }
});

// Form submission handling
const formMessages = {
    mentor: {
        success: "Thanks for applying! We'll review your application and get back to you soon.",
        error: "Please fill in all required fields."
    },
    volunteer: {
        success: "Thanks for signing up! We'll reach out soon.",
        error: "Please fill in all required fields."
    },
    donation: {
        success: "Thank you for your generous support. Together, we're building a sustainable future.",
        error: "Please fill in all required fields."
    },
    partnership: {
        success: "Thank you for reaching out! Our team will connect with you shortly to explore next steps.",
        error: "Please fill in all required fields."
    }
};

// Volunteer Form
const volunteerForm = document.getElementById('volunteer-signup');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(volunteerForm);
        if (validateForm(formData)) {
            showFormMessage('volunteer', 'success');
            volunteerForm.reset();
            closeForm('volunteer');
        } else {
            showFormMessage('volunteer', 'error');
        }
    });
}

// Donation Form
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    // Handle amount selection
    const amountBtns = document.querySelectorAll('.amount-btn');
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('custom-amount').value = '';
        });
    });

    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(donationForm);
        if (validateForm(formData)) {
            showFormMessage('donation', 'success');
            donationForm.reset();
            closeForm('donation');
        } else {
            showFormMessage('donation', 'error');
        }
    });
}

// Partnership Form
const partnershipForm = document.getElementById('partnershipForm');
if (partnershipForm) {
    partnershipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(partnershipForm);
        if (validateForm(formData)) {
            showFormMessage('partnership', 'success');
            partnershipForm.reset();
            closeForm('partnership');
        } else {
            showFormMessage('partnership', 'error');
        }
    });
}

// Form validation
function validateForm(formData) {
    for (let pair of formData.entries()) {
        if (pair[1] === '' || pair[1] === null) {
            return false;
        }
    }
    return true;
}

// Show form message
function showFormMessage(formType, type) {
    const message = forms[formType].querySelector('.form-message');
    message.textContent = formMessages[formType][type];
    message.className = `form-message ${type}`;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add smooth scroll to page load if hash present
if (window.location.hash) {
    setTimeout(() => {
        document.querySelector(window.location.hash).scrollIntoView({
            behavior: 'smooth'
        });
    }, 100);
}
// Remove duplicate variable declarations
// These variables are not being used, so we can safely remove them
// const donationForm = document.querySelector('.donation-form');
// const progressBar = document.querySelector('.progress-bar');
// const progressText = document.querySelector('.progress-text');
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