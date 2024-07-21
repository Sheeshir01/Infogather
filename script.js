document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message').value;

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Name validation
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        isValid = false;
    }

    // Age validation
    if (age < 18) {
        document.getElementById('ageError').textContent = 'You must be at least 18 years old.';
        isValid = false;
    }

    // Message validation
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to send the data to a server or process it further
        // Example: sendDataToServer({ name, email, age, message });
    }
});

console.log("width:"+screen.availWidth)
console.log("width:"+screen.availHeight)

