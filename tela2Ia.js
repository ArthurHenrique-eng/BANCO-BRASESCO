// --- LÓGICA DE LOGIN ---
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const usernameInput = document.getElementById('username');
const displayUser = document.getElementById('display-user');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = usernameInput.value;
    
    if(username.trim() === '') {
        alert('Digite seu usuário');
        return;
    }

    // Atualiza nome
    displayUser.textContent = username;
    
    // Transição
    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.style.display = 'none';
        dashboardScreen.style.display = 'block';
        // Inicializa gráficos APÓS a tela aparecer
        setTimeout(initCharts, 100); 
    }, 500);
});

// --- NAVEGAÇÃO ---
function showTab(element) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

function logout() {
    dashboardScreen.style.display = 'none';
    loginScreen.style.display = 'flex';
    loginScreen.style.opacity = '1';
    document.getElementById('password').value = '';
}

// --- GRÁFICOS (CHART.JS) ---
function initCharts() {
    // Configuração comum para os gráficos
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { 
            y: { beginAtZero: false, ticks: { color: '#999', font: { size: 10 } }, grid: { color: '#f0f0f0' } }, 
            x: { ticks: { color: '#999', font: { size: 10 } }, grid: { display: false } } 
        }
    };

    // Bitcoin Chart
    const btcCtx = document.getElementById('btcChart').getContext('2d');
    new Chart(btcCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'BTC',
                data: [42000, 45000, 48000, 46000, 50000, 53000],
                borderColor: '#f7931a',
                backgroundColor: 'rgba(247, 147, 26, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 2
            }]
        },
        options: commonOptions
    });

    // Selic Chart
    const selicCtx = document.getElementById('selicChart').getContext('2d');
    new Chart(selicCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Selic',
                data: [13.75, 13.75, 13.75, 13.75, 13.25, 13.25],
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 2
            }]
        },
        options: commonOptions
    });
}