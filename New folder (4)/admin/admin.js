const ADMIN_CREDENTIALS = {
    username: 'M321321masum',
    password: 'Mo321321',
    pin: '516171'
};

function showLoader() {
    document.querySelector('.loader').style.display = 'block';
}

function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
}

document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showLoader();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const pin = document.getElementById('pin').value;

    setTimeout(() => {
        hideLoader();
        if (username === ADMIN_CREDENTIALS.username && 
            password === ADMIN_CREDENTIALS.password && 
            pin === ADMIN_CREDENTIALS.pin) {
            
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            loadDashboardData();
        } else {
            alert('Invalid admin credentials!');
        }
    }, 1000);
});

function loadDashboardData() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        document.getElementById('totalUsers').textContent = '150';
        document.getElementById('newSignups').textContent = '12';
        document.getElementById('activeUsers').textContent = '45';
    }, 1000);
}

function logout() {
    showLoader();
    setTimeout(() => {
        hideLoader();
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('adminLoginForm').reset();
    }, 1000);
}