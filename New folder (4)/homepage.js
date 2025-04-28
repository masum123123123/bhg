function showLoader() {
    document.querySelector('.loader').style.display = 'block';
}

function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
}

function handleLogoClick() {
    showLoader();
    setTimeout(() => {
        hideLoader();
    }, 1000);
}

function updateProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
        showLoader();
        const reader = new FileReader();
        reader.onload = function(e) {
            setTimeout(() => {
                hideLoader();
                const userData = JSON.parse(localStorage.getItem('userData'));
                userData.profileImage = e.target.result;
                localStorage.setItem('userData', JSON.stringify(userData));
                document.getElementById('profile-image').src = e.target.result;
            }, 1000);
        }
        reader.readAsDataURL(file);
    }
}

function togglePassword() {
    const passwordSpan = document.getElementById('password');
    const toggleBtn = document.querySelector('.password-toggle');
    
    if (passwordSpan.textContent === '••••••') {
        const userData = JSON.parse(localStorage.getItem('userData'));
        passwordSpan.textContent = userData.password;
        toggleBtn.textContent = '👁️‍🗨️';
    } else {
        passwordSpan.textContent = '••••••';
        toggleBtn.textContent = '👁️';
    }
}

// Update the showProfile function to include password
function showProfile() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            // Update profile information
            document.getElementById('profile-image').src = userData.profileImage || 'default-avatar.png';
            document.getElementById('firstName').textContent = userData.firstName;
            document.getElementById('lastName').textContent = userData.lastName;
            document.getElementById('username').textContent = userData.username;
            document.getElementById('email').textContent = userData.email;
            document.getElementById('dateOfBirth').textContent = userData.dateOfBirth;
            document.getElementById('signupDate').textContent = userData.signupDate;
            document.getElementById('password').textContent = '••••••';
            // Show modal
            document.getElementById('profile-modal').style.display = 'block';
        }
    }, 1000);
}

function closeProfile() {
    document.getElementById('profile-modal').style.display = 'none';
}

function handleLogout() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        window.location.href = 'index.html';
    }, 1000);
}

function showGuild() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        // Add guild functionality here
        alert('Guild feature coming soon!');
    }, 1000);
}
