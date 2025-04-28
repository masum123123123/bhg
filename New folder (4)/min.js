function showLoader() {
    document.querySelector('.loader').style.display = 'block';
}

function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
}

function showLoginForm() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }, 1000);
}

function showSignupForm() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    }, 1000);
}

function handleSignup(event) {
    event.preventDefault();
    const form = event.target;
    const userData = {
        firstName: form.elements[0].value,
        lastName: form.elements[1].value,
        username: form.elements[2].value,
        email: form.elements[3].value,
        dateOfBirth: form.elements[4].value,
        signupDate: new Date().toISOString().split('T')[0],
        password: form.elements[6].value
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful! Please login.');
    showLoginForm();
}

function handleLogin(event) {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    if (userData && (userData.username === username || userData.email === username) && userData.password === password) {
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid credentials!');
    }
}

function handleLogoClick() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        // Hide any open forms
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'none';
    }, 1000);
}

function handleBalanceClick(type) {
    showLoader();
    setTimeout(() => {
        hideLoader();
    }, 1000);
}

