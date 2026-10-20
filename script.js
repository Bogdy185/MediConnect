// Date simulate pentru medici (baza de date locală mock)
const mediciData = [
    { id: 1, nume: "Dr. Popescu Ion", specializare: "Cardiologie", oras: "Bucuresti", pret: 250, clinica: "MedLife Unirii" },
    { id: 2, nume: "Dr. Ionescu Maria", specializare: "Dermatologie", oras: "Cluj-Napoca", pret: 200, clinica: "Clinica Napoca" },
    { id: 3, nume: "Dr. Vasilescu Dan", specializare: "Stomatologie", oras: "Baia Mare", pret: 150, clinica: "Dental Care" },
    { id: 4, nume: "Dr. Georgescu Elena", specializare: "Cardiologie", oras: "Baia Mare", pret: 300, clinica: "Inima Nord" }
];

// Starea utilizatorului curent
let currentUser = {
    isLoggedIn: false,
    role: null // 'customer' sau 'doctor'
};

// La încărcarea paginii, afișăm toți medicii
window.onload = function() {
    afiseazaMedici(mediciData);
};

// Funcție pentru schimbarea ecranelor (View Switching)
function schimbaVizualizarea(viewId) {
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });

    if (viewId === 'home') {
        document.getElementById('view-home').classList.add('active');
    } else if (viewId === 'login') {
        document.getElementById('view-login').classList.add('active');
    } else if (viewId === 'customer-dashboard') {
        document.getElementById('view-customer-dashboard').classList.add('active');
    } else if (viewId === 'doctor-dashboard') {
        document.getElementById('view-doctor-dashboard').classList.add('active');
    }
}

// Randarea listei de medici în HTML
function afiseazaMedici(lista) {
    const container = document.getElementById('doctorList');
    container.innerHTML = '';

    if (lista.length === 0) {
        container.innerHTML = '<p>Nu s-au găsit medici conform căutării.</p>';
        return;
    }

    lista.forEach(medic => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
            <h3>${medic.nume}</h3>
            <p><strong>Specializare:</strong> ${medic.specializare}</p>
            <p><strong>Oraș:</strong> ${medic.oras} (${medic.clinica})</p>
            <div class="price">Preț: ${medic.pret} RON</div>
            <button class="btn-primary" onclick="rezervaSlot(${medic.id})">Programează-te</button>
        `;
        container.appendChild(card);
    });
}

// Căutare simplă după text și oraș
function cautaMedici() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const orasSelectat = document.getElementById('citySelect').value;

    const rezultatefiltrate = mediciData.filter(medic => {
        const matchText = medic.nume.toLowerCase().includes(query) || medic.specializare.toLowerCase().includes(query);
        const matchOras = orasSelectat === "" || medic.oras === orasSelectat;
        return matchText && matchOras;
    });

    afiseazaMedici(rezultatefiltrate);
}

// Simulare Autentificare (Login)
function simulareLogin(rol) {
    currentUser.isLoggedIn = true;
    currentUser.role = rol;

    actualizeazaNavigare();

    if (rol === 'customer') {
        schimbaVizualizarea('customer-dashboard');
    } else if (rol === 'doctor') {
        schimbaVizualizarea('doctor-dashboard');
    }
}

// Deconectare (Logout)
function logout() {
    currentUser.isLoggedIn = false;
    currentUser.role = null;

    actualizeazaNavigare();
    schimbaVizualizarea('home');
}

// Actualizează butoanele din header în funcție de starea de logare
function actualizeazaNavigare() {
    const navContainer = document.getElementById('auth-nav-container');
    if (currentUser.isLoggedIn) {
        const dashboardTarget = currentUser.role === 'customer' ? 'customer-dashboard' : 'doctor-dashboard';
        navContainer.innerHTML = `
            <button class="btn-primary" onclick="schimbaVizualizarea('${dashboardTarget}')">Contul meu (${currentUser.role})</button>
        `;
    } else {
        navContainer.innerHTML = `
            <button class="btn-secondary" onclick="schimbaVizualizarea('login')">Autentificare</button>
        `;
    }
}

// Acțiunea de rezervare
function rezervaSlot(medicId) {
    if (!currentUser.isLoggedIn) {
        alert("Trebuie să fii autentificat ca pacient pentru a face o programare!");
        schimbaVizualizarea('login');
        return;
    }

    if (currentUser.role === 'doctor') {
        alert("Conturile de tip medic nu pot face programări la alți medici din acest mod.");
        return;
    }

    const medicAles = mediciData.find(m => m.id === medicId);
    alert(`Programare reușită la ${medicAles.nume} (${medicAles.clinica}) în orașul ${medicAles.oras}!`);
}