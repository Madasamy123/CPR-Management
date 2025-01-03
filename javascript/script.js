// script.js
document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById('signup-form');
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const role = document.querySelector('input[name="role"]:checked').value;
        
        if (name && email) {
            alert(`Thank you for signing up, ${name}! You are a ${role}.`);
            window.location.href = '/pages/dashboard.html';  // Redirect to dashboard page
        } else {
            alert("Please fill out all fields!");
        }
    });
});

// script.js (for dashboard functionality)
function sendMessage(teacherID) {
    alert(`Sending message to Teacher with ID: ${teacherID}`);
    // Redirect to the message page or show a message box
}

function bookSession(teacherID) {
    const date = prompt("Enter preferred session date and time:");
    if (date) {
        alert(`Session booked with Teacher ID: ${teacherID} on ${date}`);
        // Logic to store session booking in database
    }
}

