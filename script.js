// ============================================================================
// MEDICONNECT - BAZA DE DATE SIMULATĂ & MOTORUL APLICAȚIEI (SPA)
// ============================================================================

const INITIAL_DOCTORS_DATA = [
    {
        id: 101,
        nume: "Dr. Elena Popescu",
        titlu: "Medic Primar Cardiolog",
        specializare: "Cardiologie",
        oras: "București",
        clinica: "MedLife Titan",
        adresa: "Bd. Nicolae Grigorescu nr. 41, București",
        pret: 280,
        rating: 4.9,
        recenziiCount: 142,
        experienta: "16 ani experiență",
        sloturiDisponibile: ["09:00", "10:30", "11:30", "14:00", "15:30", "16:30"],
        sloturiBlocate: ["13:00"],
        descriere: "Specialist în ecocardiografie Doppler, hipertensiune arterială, aritmii și monitorizare Holter EKG.",
        recenzii: [
            { autor: "Mihai R.", nota: 5, text: "Un medic extraordinar, mi-a explicat pe înțelesul meu tot tratamentul." },
            { autor: "Carmen D.", nota: 5, text: "Punctualitate și aparatură foarte modernă în clinică." }
        ]
    },
    {
        id: 102,
        nume: "Dr. Andrei Ionescu",
        titlu: "Medic Specialist Dermatolog",
        specializare: "Dermatologie",
        oras: "Cluj-Napoca",
        clinica: "Clinica Napoca Derma",
        adresa: "Str. Memorandumului nr. 18, Cluj-Napoca",
        pret: 240,
        rating: 4.8,
        recenziiCount: 98,
        experienta: "11 ani experiență",
        sloturiDisponibile: ["09:30", "11:00", "12:30", "15:00", "16:30"],
        sloturiBlocate: [],
        descriere: "Expert în dermatoscopie digitală, screening alunițe, acnee severă și afecțiuni inflamatorii ale pielii.",
        recenzii: [
            { autor: "Ioana V.", nota: 5, text: "Controlul alunițelor a fost foarte amănunțit. Recomand cu încredere!" },
            { autor: "Vlad T.", nota: 4.8, text: "Programarea prin platformă a durat 30 de secunde, fără așteptare la recepție." }
        ]
    },
    {
        id: 103,
        nume: "Dr. Dan Vasilescu",
        titlu: "Medic Primar Stomatolog & Chirurg Dento-Alveolar",
        specializare: "Stomatologie",
        oras: "Baia Mare",
        clinica: "Nord Dental Care",
        adresa: "Bd. Unirii nr. 14, Baia Mare",
        pret: 180,
        rating: 4.9,
        recenziiCount: 115,
        experienta: "14 ani experiență",
        sloturiDisponibile: ["09:00", "10:00", "12:00", "14:30", "16:00"],
        sloturiBlocate: ["11:00"],
        descriere: "Tratamente endodontice la microscop, urgențe stomatologice fără durere, estetică dentară și implantologie.",
        recenzii: [
            { autor: "Anca M.", nota: 5, text: "Am venit cu o durere acută de măsea și s-a rezolvat fără nicio durere!" }
        ]
    },
    {
        id: 104,
        nume: "Dr. Diana Georgescu",
        titlu: "Medic Primar Cardiolog",
        specializare: "Cardiologie",
        oras: "Baia Mare",
        clinica: "Centrul Medical Inima Nord",
        adresa: "Str. Gheorghe Șincai nr. 22, Baia Mare",
        pret: 260,
        rating: 4.9,
        recenziiCount: 87,
        experienta: "18 ani experiență",
        sloturiDisponibile: ["08:30", "10:00", "11:30", "14:00", "15:30"],
        sloturiBlocate: [],
        descriere: "Evaluări cardiovasculare complete, EKG de efort, prevenție și recuperare cardiovasculară.",
        recenzii: [
            { autor: "Vasile P.", nota: 5, text: "Foarte atentă la detalii, mi-a ajustat schema de tensiune și mă simt excelent." }
        ]
    },
    {
        id: 105,
        nume: "Dr. Radu Munteanu",
        titlu: "Medic Primar Neurolog",
        specializare: "Neurologie",
        oras: "București",
        clinica: "Regina Maria Floreasca",
        adresa: "Calea Floreasca nr. 144, București",
        pret: 310,
        rating: 4.8,
        recenziiCount: 76,
        experienta: "15 ani experiență",
        sloturiDisponibile: ["10:00", "11:30", "13:30", "15:00", "17:00"],
        sloturiBlocate: [],
        descriere: "Diagnostic și tratament pentru migrene cronice, vertij, tulburări de somn și afecțiuni ale sistemului nervos.",
        recenzii: [
            { autor: "Elena S.", nota: 5, text: "Singurul medic care mi-a găsit cauza migrenelor după luni de căutări." }
        ]
    },
    {
        id: 106,
        nume: "Dr. Cristina Lazăr",
        titlu: "Medic Specialist Oftalmolog",
        specializare: "Oftalmologie",
        oras: "Cluj-Napoca",
        clinica: "OptiMed Vision Cluj",
        adresa: "Calea Dorobanților nr. 65, Cluj-Napoca",
        pret: 210,
        rating: 4.7,
        recenziiCount: 64,
        experienta: "9 ani experiență",
        sloturiDisponibile: ["09:00", "10:30", "13:00", "14:30", "16:00"],
        sloturiBlocate: [],
        descriere: "Consultații computerizate de dioptrii, examen fund de ochi, tensiune intraoculară și sindromul ochiului uscat.",
        recenzii: [
            { autor: "Tudor C.", nota: 5, text: "Aparatură de ultimă generație, control rapid și precis." }
        ]
    },
    {
        id: 107,
        nume: "Dr. Horia Dumbravă",
        titlu: "Medic Primar Ortopedie-Traumatologie",
        specializare: "Ortopedie",
        oras: "Timișoara",
        clinica: "Medici's Orthopedic Center",
        adresa: "Str. Paciurea nr. 5, Timișoara",
        pret: 270,
        rating: 4.9,
        recenziiCount: 91,
        experienta: "17 ani experiență",
        sloturiDisponibile: ["09:30", "11:00", "14:00", "15:30", "17:00"],
        sloturiBlocate: [],
        descriere: "Traumatologie sportivă, afecțiuni ale genunchiului (menisc, ligamente), infiltrații articulare și recuperare.",
        recenzii: [
            { autor: "Sorin B.", nota: 5, text: "M-a ajutat să evit operația de menisc printr-un plan corect de recuperare." }
        ]
    },
    {
        id: 108,
        nume: "Dr. Laura Stanciu",
        titlu: "Medic Specialist Gastroenterolog",
        specializare: "Gastroenterologie",
        oras: "Iași",
        clinica: "Arcadia Medical Center",
        adresa: "Str. Cicoarei nr. 2, Iași",
        pret: 250,
        rating: 4.8,
        recenziiCount: 53,
        experienta: "10 ani experiență",
        sloturiDisponibile: ["09:00", "10:30", "12:00", "14:30", "16:00"],
        sloturiBlocate: [],
        descriere: "Ecografie abdominală, reflux gastroesofagian, gastrite, sindrom de colon iritabil și nutriție clinică.",
        recenzii: [
            { autor: "Gabriela N.", nota: 5, text: "Calmă, empatică și foarte profesionistă." }
        ]
    }
];

const INITIAL_APPOINTMENTS = [
    {
        id: 5001,
        medicId: 101,
        medicNume: "Dr. Elena Popescu",
        specializare: "Cardiologie",
        clinica: "MedLife Titan",
        oras: "București",
        pret: 280,
        ziua: "Azi",
        ora: "10:30",
        pacientNume: "Alexandru Marin",
        pacientTelefon: "0742 819 304",
        simptomeBrute: "Palpitații ușoare și oboseală la urcatul scărilor în ultima săptămână",
        fisaSintetica: "Pacientul solicită consult cardiologic primar, acuzând palpitații ușoare și oboseală la urcatul scărilor în ultima săptămână. Recomandare pre-consult: măsurare TA, pulsoximetrie și EKG de repaus.",
        status: "Confirmat"
    },
    {
        id: 5002,
        medicId: 101,
        medicNume: "Dr. Elena Popescu",
        specializare: "Cardiologie",
        clinica: "MedLife Titan",
        oras: "București",
        pret: 280,
        ziua: "Azi",
        ora: "14:00",
        pacientNume: "Maria Ionescu",
        pacientTelefon: "0723 511 908",
        simptomeBrute: "Control periodic hipertensiune arterială și reevaluare schemă tratament",
        fisaSintetica: "Pacientul solicită consult cardiologic de monitorizare pentru control periodic hipertensiune arterială și reevaluare schemă tratament. Recomandare pre-consult: verificare jurnal tensiune arterială.",
        status: "Confirmat"
    }
];

// Dicționar inteligent pentru Triajul Simptomelor în limbaj natural
const REGULI_TRIAJ = [
    {
        specializare: "Cardiologie",
        urgenta: "Prioritar",
        cuvinteCheie: ["inima", "inimă", "puls", "tensiune", "palpitatii", "palpitații", "piept", "oboseala", "oboseală", "efort", "sufocare", "aritmie", "cardiac"],
        explicatie: "Simptomele descrise indică o posibilă cauză cardiovasculară. Este recomandat un consult cardiologic complet (inclusiv EKG și măsurarea tensiunii arteriale).",
        recomandareMedic: "evaluare tensiune arterială, pulsoximetrie și EKG de repaus"
    },
    {
        specializare: "Stomatologie",
        urgenta: "Prioritar",
        cuvinteCheie: ["dinte", "masea", "măsea", "gingie", "gingii", "carie", "dureri dentare", "abces", "sangerare gingii", "sângerare", "rece", "dulce", "implant", "detartraj"],
        explicatie: "Afecțiunile dentare sau gingivale necesită evaluare stomatologică pentru calmarea durerii și prevenirea complicațiilor infecțioase.",
        recomandareMedic: "examinare dento-parodontală și radiografie retroalveolară țintită"
    },
    {
        specializare: "Dermatologie",
        urgenta: "Rutină / Preventiv",
        cuvinteCheie: ["piele", "alunita", "aluniță", "acnee", "iritatie", "iritație", "mancarime", "mâncărime", "pete", "eczema", "eczemă", "cosuri", "coșuri", "dermatita", "psoriazis", "unghii", "par"],
        explicatie: "Modificările la nivelul pielii sau alunițelor trebuie examinate dermatoscopic de către un medic dermatolog.",
        recomandareMedic: "examinare clinică cutanată și dermatoscopie digitală"
    },
    {
        specializare: "Neurologie",
        urgenta: "Moderat",
        cuvinteCheie: ["cap", "migrena", "migrenă", "ameteala", "amețeală", "ameteli", "amețeli", "vertij", "amorteli", "amorțeală", "tremur", "somn", "insomnie", "memorie", "echilibru"],
        explicatie: "Cefaleea recurentă, migrenele sau tulburările de echilibru/vertij țin de sfera neurologiei clinice.",
        recomandareMedic: "examen neurologic complet și evaluarea reflexelor/echilibrului"
    },
    {
        specializare: "Oftalmologie",
        urgenta: "Rutină",
        cuvinteCheie: ["ochi", "vedere", "incetosata", "încețoșată", "ochelari", "dioptrii", "usturime ochi", "lacrimare", "vedere dubla", "pleoape"],
        explicatie: "Tulburările de acuitate vizuală sau disconfortul ocular necesită consult oftalmologic și biomicroscopie.",
        recomandareMedic: "autorefractometrie, determinare acuitate vizuală și examen fund de ochi"
    },
    {
        specializare: "Ortopedie",
        urgenta: "Moderat",
        cuvinteCheie: ["genunchi", "articulatii", "articulații", "spate", "coloana", "umăr", "umar", "glezna", "gleznă", "entorsa", "entorsă", "menisc", "ligament", "os", "fractura", "mers"],
        explicatie: "Durerile articulare sau musculo-scheletale la mișcare necesită consult de ortopedie și traumatologie.",
        recomandareMedic: "testare mobilitate articulară și evaluare imagistică ortopedică"
    },
    {
        specializare: "Gastroenterologie",
        urgenta: "Moderat",
        cuvinteCheie: ["stomac", "abdomen", "burta", "burtă", "arsuri", "reflux", "greata", "greață", "balonare", "ficat", "fiere", "digestie", "gastrita", "ulcer"],
        explicatie: "Simptomele digestive persistente (arsuri, balonare, dureri abdominale) sunt evaluate în cadrul cabinetului de gastroenterologie.",
        recomandareMedic: "anamneză digestivă și ecografie abdominală generală"
    }
];

// ============================================================================
// STAREA GLOBALĂ A APLICAȚIEI
// ============================================================================
let mediciData = [];
let programariData = [];

let appState = {
    isLoggedIn: false,
    role: "guest", // 'guest' | 'customer' | 'doctor'
    selectedSpecialty: "",
    selectedDay: "Azi",
    selectedSlotsByCard: {}, // { [medicId]: "14:00" }
    activeDoctorIdDashboard: 101,
    lastTriageResult: null,
    lastSymptomText: "",
    modalBookingContext: {
        medicId: null,
        selectedSlot: null
    }
};

// ============================================================================
// INIȚIALIZARE & PERSISTENȚĂ LOCALSTORAGE
// ============================================================================
window.addEventListener("DOMContentLoaded", () => {
    incarcaDateleDinStorage();
    genereazaPastileSpecializari();
    populeazaSelectorMediciDashboard();
    actualizeazaInterfataRol();
    filtreazaMediciInTimpReal();
    randeazaCliniciPartenere();
});

function incarcaDateleDinStorage() {
    try {
        const savedDocs = localStorage.getItem("mediconnect_doctors_v1");
        const savedApps = localStorage.getItem("mediconnect_appointments_v1");
        if (savedDocs && savedApps) {
            mediciData = JSON.parse(savedDocs);
            programariData = JSON.parse(savedApps);
        } else {
            mediciData = JSON.parse(JSON.stringify(INITIAL_DOCTORS_DATA));
            programariData = JSON.parse(JSON.stringify(INITIAL_APPOINTMENTS));
            salveazaDateleInStorage();
        }
    } catch (e) {
        mediciData = JSON.parse(JSON.stringify(INITIAL_DOCTORS_DATA));
        programariData = JSON.parse(JSON.stringify(INITIAL_APPOINTMENTS));
    }
}

function salveazaDateleInStorage() {
    try {
        localStorage.setItem("mediconnect_doctors_v1", JSON.stringify(mediciData));
        localStorage.setItem("mediconnect_appointments_v1", JSON.stringify(programariData));
    } catch (e) {
        // Ignorăm erorile de stocare în medii restricționate
    }
}

function reseteazaDateleDemo() {
    localStorage.removeItem("mediconnect_doctors_v1");
    localStorage.removeItem("mediconnect_appointments_v1");
    mediciData = JSON.parse(JSON.stringify(INITIAL_DOCTORS_DATA));
    programariData = JSON.parse(JSON.stringify(INITIAL_APPOINTMENTS));
    appState.selectedSlotsByCard = {};
    appState.selectedSpecialty = "";
    appState.lastTriageResult = null;
    appState.lastSymptomText = "";

    document.getElementById("searchInput").value = "";
    document.getElementById("citySelect").value = "";
    document.getElementById("symptomInput").value = "";
    document.getElementById("triageResult").classList.add("hidden");

    genereazaPastileSpecializari();
    filtreazaMediciInTimpReal();
    randeazaDashboardPacient();
    randeazaDashboardMedic();
    afiseazaToast("Datele demonstrației au fost resetate la starea inițială!");
}

// ============================================================================
// NAVIGARE SPA ÎNTRE ECRANE
// ============================================================================
function schimbaVizualizarea(viewId) {
    document.querySelectorAll(".view-section").forEach(section => {
        section.classList.remove("active");
    });

    document.querySelectorAll(".nav-link").forEach(btn => {
        btn.classList.remove("active");
    });

    const targetEl = document.getElementById(`view-${viewId}`);
    if (targetEl) {
        targetEl.classList.add("active");
    }

    if (viewId === "home") {
        document.getElementById("nav-home").classList.add("active");
        filtreazaMediciInTimpReal();
    } else if (viewId === "clinics") {
        document.getElementById("nav-clinics").classList.add("active");
        randeazaCliniciPartenere();
    } else if (viewId === "customer-dashboard") {
        randeazaDashboardPacient();
    } else if (viewId === "doctor-dashboard") {
        randeazaDashboardMedic();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function mergiLaTriaj() {
    schimbaVizualizarea("home");
    setTimeout(() => {
        const triageEl = document.getElementById("triage-section");
        if (triageEl) {
            triageEl.scrollIntoView({ behavior: "smooth", block: "center" });
            document.getElementById("symptomInput").focus();
        }
    }, 100);
}

// ============================================================================
// FILTRARE ÎN TIMP REAL & PASTILE SPECIALIZĂRI
// ============================================================================
function normalizeazaText(str) {
    return (str || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function genereazaPastileSpecializari() {
    const container = document.getElementById("specialtyPills");
    const specializari = ["Toate", ...new Set(mediciData.map(m => m.specializare))];

    container.innerHTML = specializari.map(spec => {
        const val = spec === "Toate" ? "" : spec;
        const isActive = appState.selectedSpecialty === val ? "active" : "";
        return `<button class="spec-pill ${isActive}" onclick="selecteazaFiltruSpecializare('${val}')">${spec}</button>`;
    }).join("");
}

function selecteazaFiltruSpecializare(spec) {
    appState.selectedSpecialty = spec;
    genereazaPastileSpecializari();
    filtreazaMediciInTimpReal();
}

function schimbaZiuaSelectata(ziua, btnEl) {
    appState.selectedDay = ziua;
    appState.selectedSlotsByCard = {};
    document.querySelectorAll(".day-tab").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    filtreazaMediciInTimpReal();
}

function resetareCautareText() {
    document.getElementById("searchInput").value = "";
    filtreazaMediciInTimpReal();
}

function reseteazaToateFiltrele() {
    document.getElementById("searchInput").value = "";
    document.getElementById("citySelect").value = "";
    document.getElementById("sortSelect").value = "recomandat";
    appState.selectedSpecialty = "";
    genereazaPastileSpecializari();
    filtreazaMediciInTimpReal();
}

function filtreazaMediciInTimpReal() {
    const rawQuery = document.getElementById("searchInput").value.trim();
    const query = normalizeazaText(rawQuery);
    const orasSelectat = document.getElementById("citySelect").value;
    const sortMode = document.getElementById("sortSelect").value;

    // Afișare buton X în inputul de căutare
    const clearBtn = document.getElementById("clearSearchBtn");
    if (rawQuery.length > 0) {
        clearBtn.classList.remove("hidden");
    } else {
        clearBtn.classList.add("hidden");
    }

    // Afișare buton reset filtre
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
    if (rawQuery || orasSelectat || appState.selectedSpecialty) {
        resetFiltersBtn.classList.remove("hidden");
    } else {
        resetFiltersBtn.classList.add("hidden");
    }

    let rezultate = mediciData.filter(medic => {
        const textCautabil = normalizeazaText(`${medic.nume} ${medic.specializare} ${medic.clinica} ${medic.oras}`);
        const matchText = !query || textCautabil.includes(query);
        const matchOras = !orasSelectat || normalizeazaText(medic.oras) === normalizeazaText(orasSelectat);
        const matchSpec = !appState.selectedSpecialty || medic.specializare === appState.selectedSpecialty;
        return matchText && matchOras && matchSpec;
    });

    // Sortare rezultate
    if (sortMode === "pret-asc") {
        rezultate.sort((a, b) => a.pret - b.pret);
    } else if (sortMode === "pret-desc") {
        rezultate.sort((a, b) => b.pret - a.pret);
    } else if (sortMode === "rating-desc") {
        rezultate.sort((a, b) => b.rating - a.rating);
    }

    document.getElementById("resultsCounter").textContent = `${rezultate.length} ${rezultate.length === 1 ? "medic găsit" : "medici găsiți"}`;
    afiseazaMedici(rezultate);
}

// ============================================================================
// RANDARE CARDURI MEDICI & SLOTURI ORARE INTERACTIVE
// ============================================================================
function obtineInitialeMedic(numeComplet) {
    const curat = numeComplet.replace(/^Dr\.\s*/i, "").trim();
    const parti = curat.split(" ");
    if (parti.length >= 2) {
        return (parti[0][0] + parti[1][0]).toUpperCase();
    }
    return curat.slice(0, 2).toUpperCase();
}

function esteSlotOcupat(medicId, ziua, ora) {
    const medic = mediciData.find(m => m.id === medicId);
    if (!medic) return false;

    // Verificăm dacă e blocat manual de medic (pentru ziua de Azi)
    if (ziua === "Azi" && medic.sloturiBlocate && medic.sloturiBlocate.includes(ora)) {
        return "blocat";
    }

    // Verificăm dacă există o programare activă
    const existaProgramare = programariData.some(
        p => p.medicId === medicId && p.ziua === ziua && p.ora === ora && p.status !== "Anulat"
    );
    return existaProgramare ? "rezervat" : false;
}

function afiseazaMedici(lista) {
    const container = document.getElementById("doctorList");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `
            <div class="dashboard-panel" style="grid-column: 1 / -1; text-align: center; padding: 2.5rem;">
                <h3 style="margin-bottom: 0.5rem;">Nu am găsit niciun medic pentru criteriile selectate</h3>
                <p class="text-muted" style="margin-bottom: 1rem;">Încearcă să modifici orașul, specializarea sau folosește Asistentul de Triaj de mai sus.</p>
                <button class="btn btn-primary" onclick="reseteazaToateFiltrele()">Afișează toți medicii</button>
            </div>
        `;
        return;
    }

    const ziuaCurenta = appState.selectedDay;

    lista.forEach(medic => {
        const initiale = obtineInitialeMedic(medic.nume);
        const slotSelectatPeCard = appState.selectedSlotsByCard[medic.id] || null;

        let numarSloturiLibere = 0;
        const sloturiHtml = medic.sloturiDisponibile.map(ora => {
            const statusOcupat = esteSlotOcupat(medic.id, ziuaCurenta, ora);
            if (statusOcupat) {
                const eticheta = statusOcupat === "blocat" ? "Indisponibil" : "Rezervat";
                return `<button class="slot-pill booked" disabled title="Acest interval este ${eticheta.toLowerCase()}">${ora} • ${eticheta}</button>`;
            }
            numarSloturiLibere++;
            const isSelected = slotSelectatPeCard === ora ? "selected" : "";
            return `<button class="slot-pill ${isSelected}" onclick="selecteazaSlotPeCard(${medic.id}, '${ora}')">${ora}</button>`;
        }).join("");

        const textButonRezervare = slotSelectatPeCard
            ? `Confirmă ora ${slotSelectatPeCard} (${ziuaCurenta})`
            : `Programează-te (${ziuaCurenta})`;

        const clasaButon = slotSelectatPeCard ? "btn-accent" : "btn-primary";

        const card = document.createElement("div");
        card.className = "doctor-card";
        card.innerHTML = `
            <div>
                <div class="doc-card-top">
                    <div class="doc-avatar">${initiale}</div>
                    <div class="doc-main-info">
                        <div class="doc-spec-row">
                            <span class="spec-badge">${medic.specializare}</span>
                            <span class="rating-pill">★ ${medic.rating.toFixed(1)} (${medic.recenziiCount})</span>
                        </div>
                        <h3>${medic.nume}</h3>
                        <div class="doc-grade">${medic.titlu} • ${medic.experienta}</div>
                    </div>
                </div>

                <div class="doc-meta-list">
                    <div class="doc-meta-row">
                        <span>🏥 <strong>${medic.clinica}</strong></span>
                        <span>📍 ${medic.oras}</span>
                    </div>
                    <div class="doc-meta-row">
                        <span class="text-muted">Tarif consultație:</span>
                        <span class="doc-price-tag">${medic.pret} RON</span>
                    </div>
                </div>

                <div class="slots-section">
                    <div class="slots-header">
                        <span>Intervale orare (${ziuaCurenta}):</span>
                        <span class="slots-avail-badge">${numarSloturiLibere} libere</span>
                    </div>
                    <div class="slots-pills-container">
                        ${sloturiHtml}
                    </div>
                </div>
            </div>

            <div class="doc-card-actions">
                <button class="btn btn-secondary btn-sm" onclick="deschideModalProfil(${medic.id})">
                    Detalii & Recenzii
                </button>
                <button class="btn ${clasaButon} btn-sm btn-book-main" onclick="deschideModalRezervare(${medic.id})">
                    ${textButonRezervare}
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function selecteazaSlotPeCard(medicId, ora) {
    if (appState.selectedSlotsByCard[medicId] === ora) {
        delete appState.selectedSlotsByCard[medicId];
    } else {
        appState.selectedSlotsByCard[medicId] = ora;
    }
    filtreazaMediciInTimpReal();
}

// ============================================================================
// MODULUL SMART TRIAGE & GENERARE SINTEZĂ MEDICALĂ PENTRU MEDIC
// ============================================================================
function completeazaSimptomExemplu(textExemplu) {
    const input = document.getElementById("symptomInput");
    input.value = textExemplu;
    analizeazaSimptome(true);
}

function analizeazaSimptomeLive() {
    const val = document.getElementById("symptomInput").value.trim();
    if (val.length > 4) {
        analizeazaSimptome(false);
    } else if (val.length === 0) {
        document.getElementById("triageResult").classList.add("hidden");
    }
}

function gasestePotrivireTriaj(textSimptome) {
    const textNorm = normalizeazaText(textSimptome);
    let bestMatch = null;
    let maxHits = 0;

    REGULI_TRIAJ.forEach(regula => {
        let hits = 0;
        regula.cuvinteCheie.forEach(cuv => {
            if (textNorm.includes(normalizeazaText(cuv))) {
                hits++;
            }
        });
        if (hits > maxHits) {
            maxHits = hits;
            bestMatch = regula;
        }
    });

    if (!bestMatch) {
        return {
            specializare: "Cardiologie",
            urgenta: "Evaluare Generală",
            explicatie: "Pentru o evaluare clinică de specialitate și investigații de bază, îți recomandăm o consultație primară la unul dintre medicii noștri specialiști.",
            recomandareMedic: "anamneză completă și evaluarea parametrilor vitali"
        };
    }

    return bestMatch;
}

function genereazaFisaSintetica(specializare, simptomeBrute, recomandarePreConsult) {
    const curat = (simptomeBrute || "").trim();
    const specText = specializare ? specializare.toLowerCase() : "medical";
    if (!curat) {
        return `Pacientul solicită consult ${specText} primar pentru control preventiv și evaluare de specialitate.`;
    }
    const rec = recomandarePreConsult || "anamneză țintită și examen clinic de specialitate";
    return `Pacientul solicită consult ${specText} primar, acuzând: „${curat}”. Recomandare pre-consult: ${rec}.`;
}

function analizeazaSimptome(aplicaFiltruAutomat) {
    const rawText = document.getElementById("symptomInput").value.trim();
    const resultBox = document.getElementById("triageResult");

    if (!rawText) {
        afiseazaToast("Introdu mai întâi câteva simptome (sau alege unul dintre exemplele rapide).");
        return;
    }

    const potrivire = gasestePotrivireTriaj(rawText);
    appState.lastTriageResult = potrivire;
    appState.lastSymptomText = rawText;

    const fisaPreview = genereazaFisaSintetica(
        potrivire.specializare,
        rawText,
        potrivire.recomandareMedic
    );

    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
        <div class="triage-result-info">
            <h4>
                ✅ Specializare recomandată: <strong>${potrivire.specializare}</strong>
                <span class="spec-badge" style="margin-left: 0.4rem;">Prioritate: ${potrivire.urgenta}</span>
            </h4>
            <p>${potrivire.explicatie}</p>
            <div class="triage-draft-preview">
                <strong>Fișă pre-generată pentru medic:</strong> <em>${fisaPreview}</em>
            </div>
        </div>
        <div>
            <button class="btn btn-primary" onclick="aplicaRecomandareaTriaj('${potrivire.specializare}')">
                Filtrează medicii din ${potrivire.specializare} →
            </button>
        </div>
    `;

    if (aplicaFiltruAutomat) {
        aplicaRecomandareaTriaj(potrivire.specializare, false);
    }
}

function aplicaRecomandareaTriaj(specializare, scrollLaLista = true) {
    appState.selectedSpecialty = specializare;
    genereazaPastileSpecializari();
    filtreazaMediciInTimpReal();
    afiseazaToast(`Lista a fost filtrată automat pentru specializarea: ${specializare}`);

    if (scrollLaLista) {
        document.getElementById("doctorList").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ============================================================================
// MODAL REZERVARE & FINALIZARE PROGRAMARE
// ============================================================================
function deschideModalRezervare(medicId) {
    if (appState.isLoggedIn && appState.role === "doctor") {
        afiseazaToast("Ești în modul Medic (B2B). Comută pe Vizitator sau Pacient din bara de sus pentru a face o rezervare.");
        return;
    }

    const medic = mediciData.find(m => m.id === medicId);
    if (!medic) return;

    const ziua = appState.selectedDay;
    let slotAles = appState.selectedSlotsByCard[medicId] || null;

    // Dacă utilizatorul nu a selectat deja o pastilă pe card, pre-selectăm primul slot liber
    if (!slotAles || esteSlotOcupat(medicId, ziua, slotAles)) {
        slotAles = medic.sloturiDisponibile.find(ora => !esteSlotOcupat(medicId, ziua, ora)) || null;
    }

    if (!slotAles) {
        afiseazaToast("Toate intervalele pentru această zi sunt ocupate. Încearcă ziua de Mâine sau Poimâine!");
        return;
    }

    appState.modalBookingContext = {
        medicId: medic.id,
        selectedSlot: slotAles
    };

    document.getElementById("modalSelectedDayLabel").textContent = ziua;
    document.getElementById("modalDoctorSummary").innerHTML = `
        <div>
            <span class="spec-badge">${medic.specializare}</span>
            <h4 style="margin-top: 0.25rem; font-size: 1.08rem;">${medic.nume}</h4>
            <p class="text-muted" style="font-size: 0.85rem;">🏥 ${medic.clinica} • 📍 ${medic.oras}</p>
        </div>
        <div style="text-align: right;">
            <span class="text-muted" style="font-size: 0.78rem; display: block;">Cost consultație</span>
            <span class="doc-price-tag">${medic.pret} RON</span>
        </div>
    `;

    randeazaSloturiInModal();

    // Pre-completăm datele pacientului
    const nameInput = document.getElementById("patientNameInput");
    const phoneInput = document.getElementById("patientPhoneInput");
    const symptomsInput = document.getElementById("patientSymptomsInput");

    if (!nameInput.value) nameInput.value = "Alexandru Marin";
    if (!phoneInput.value) phoneInput.value = "0742 819 304";
    if (appState.lastSymptomText && !symptomsInput.value) {
        symptomsInput.value = appState.lastSymptomText;
    }

    actualizeazaFisaSinteticaLive();
    document.getElementById("bookingModal").classList.remove("hidden");
}

function randeazaSloturiInModal() {
    const { medicId, selectedSlot } = appState.modalBookingContext;
    const medic = mediciData.find(m => m.id === medicId);
    const ziua = appState.selectedDay;
    const container = document.getElementById("modalSlotsContainer");

    container.innerHTML = medic.sloturiDisponibile.map(ora => {
        const ocupat = esteSlotOcupat(medicId, ziua, ora);
        if (ocupat) {
            return `<button type="button" class="slot-pill booked" disabled>${ora} (Ocupat)</button>`;
        }
        const activeClass = ora === selectedSlot ? "selected" : "";
        return `<button type="button" class="slot-pill ${activeClass}" onclick="selecteazaSlotInModal('${ora}')">${ora}</button>`;
    }).join("");
}

function selecteazaSlotInModal(ora) {
    appState.modalBookingContext.selectedSlot = ora;
    randeazaSloturiInModal();
}

function actualizeazaFisaSinteticaLive() {
    const { medicId } = appState.modalBookingContext;
    const medic = mediciData.find(m => m.id === medicId);
    if (!medic) return;

    const simptome = document.getElementById("patientSymptomsInput").value;
    const potrivire = simptome.trim() ? gasestePotrivireTriaj(simptome) : null;
    const fisa = genereazaFisaSintetica(
        medic.specializare,
        simptome,
        potrivire ? potrivire.recomandareMedic : null
    );

    document.getElementById("syntheticNoteText").textContent = `„${fisa}”`;
}

function inchideModalRezervare() {
    document.getElementById("bookingModal").classList.add("hidden");
}

function finalizeazaRezervarea() {
    const { medicId, selectedSlot } = appState.modalBookingContext;
    const medic = mediciData.find(m => m.id === medicId);
    if (!medic || !selectedSlot) return;

    const pacientNume = document.getElementById("patientNameInput").value.trim() || "Alexandru Marin";
    const pacientTelefon = document.getElementById("patientPhoneInput").value.trim() || "0742 819 304";
    const simptomeBrute = document.getElementById("patientSymptomsInput").value.trim() || "Consult de specialitate și evaluare clinică";
    const fisaSintetica = document.getElementById("syntheticNoteText").textContent.replace(/^„|”$/g, "");

    const nouaProgramare = {
        id: Date.now(),
        medicId: medic.id,
        medicNume: medic.nume,
        specializare: medic.specializare,
        clinica: medic.clinica,
        oras: medic.oras,
        pret: medic.pret,
        ziua: appState.selectedDay,
        ora: selectedSlot,
        pacientNume,
        pacientTelefon,
        simptomeBrute,
        fisaSintetica,
        status: "Confirmat"
    };

    programariData.unshift(nouaProgramare);
    delete appState.selectedSlotsByCard[medic.id];

    // Setăm medicul rezervat ca medic activ în Dashboard-ul B2B pentru a fi vizibil imediat la demo
    appState.activeDoctorIdDashboard = medic.id;
    const selectDocEl = document.getElementById("activeDoctorSelect");
    if (selectDocEl) selectDocEl.value = String(medic.id);

    // Dacă utilizatorul era Vizitator, îl autentificăm automat ca Pacient pentru a-și vedea programarea
    if (!appState.isLoggedIn) {
        appState.isLoggedIn = true;
        appState.role = "customer";
        actualizeazaInterfataRol();
    }

    salveazaDateleInStorage();
    inchideModalRezervare();
    filtreazaMediciInTimpReal();

    afiseazaToast(`Rezervare confirmată la ${medic.nume} (${appState.selectedDay}, ora ${selectedSlot})! Slotul a fost marcat ca Rezervat.`);
}

// ============================================================================
// MODAL PROFIL MEDIC & RECENZII
// ============================================================================
function deschideModalProfil(medicId) {
    const medic = mediciData.find(m => m.id === medicId);
    if (!medic) return;

    document.getElementById("profileModalTitle").textContent = `${medic.nume} — ${medic.specializare}`;

    const recenziiHtml = (medic.recenzii || []).map(r => `
        <div style="background: var(--bg-color); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                <strong>${r.autor}</strong>
                <span class="rating-pill">★ ${r.nota}</span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-color);">„${r.text}”</p>
        </div>
    `).join("");

    document.getElementById("profileModalBody").innerHTML = `
        <div class="booking-summary-box">
            <div>
                <span class="spec-badge">${medic.specializare}</span>
                <h4 style="margin-top: 0.3rem; font-size: 1.15rem;">${medic.nume}</h4>
                <p class="text-muted">${medic.titlu} • ${medic.experienta}</p>
            </div>
            <div style="text-align: right;">
                <span class="doc-price-tag">${medic.pret} RON</span>
            </div>
        </div>

        <div>
            <h4 style="margin-bottom: 0.35rem; font-size: 0.95rem;">📍 Locație Clinică & Cabinet</h4>
            <p style="font-size: 0.9rem;"><strong>${medic.clinica}</strong> — ${medic.adresa}</p>
        </div>

        <div>
            <h4 style="margin-bottom: 0.35rem; font-size: 0.95rem;">🩺 Competențe și Servicii Medicale</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted);">${medic.descriere}</p>
        </div>

        <div>
            <h4 style="margin-bottom: 0.55rem; font-size: 0.95rem;">💬 Recenzii Verificate de la Pacienți (${medic.recenziiCount})</h4>
            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                ${recenziiHtml}
            </div>
        </div>
    `;

    document.getElementById("profileModal").classList.remove("hidden");
}

function inchideModalProfil() {
    document.getElementById("profileModal").classList.add("hidden");
}

function inchideModalLaClickExterior(event, modalId) {
    if (event.target.id === modalId) {
        document.getElementById(modalId).classList.add("hidden");
    }
}

// ============================================================================
// AUTENTIFICARE, COMUTATOR DEMO & NAVIGARE CONT
// ============================================================================
function simulareLogin(rol) {
    appState.isLoggedIn = true;
    appState.role = rol;
    actualizeazaInterfataRol();

    if (rol === "customer") {
        afiseazaToast("Autentificat cu succes în Contul de Pacient (Alexandru Marin)!");
        schimbaVizualizarea("customer-dashboard");
    } else if (rol === "doctor") {
        afiseazaToast("Autentificat în Panoul de Control Medic / Clinică (B2B)!");
        schimbaVizualizarea("doctor-dashboard");
    }
}

function seteazaRolDemo(rol) {
    if (rol === "guest") {
        appState.isLoggedIn = false;
        appState.role = "guest";
        actualizeazaInterfataRol();
        schimbaVizualizarea("home");
        afiseazaToast("Mod Vizitator activat.");
    } else {
        simulareLogin(rol);
    }
}

function logout() {
    appState.isLoggedIn = false;
    appState.role = "guest";
    actualizeazaInterfataRol();
    schimbaVizualizarea("home");
    afiseazaToast("Te-ai deconectat din cont.");
}

function actualizeazaInterfataRol() {
    // Actualizare pills din switcher-ul Demo
    document.querySelectorAll(".role-pill").forEach(b => b.classList.remove("active"));
    if (!appState.isLoggedIn || appState.role === "guest") {
        document.getElementById("quick-guest").classList.add("active");
    } else if (appState.role === "customer") {
        document.getElementById("quick-customer").classList.add("active");
    } else if (appState.role === "doctor") {
        document.getElementById("quick-doctor").classList.add("active");
    }

    // Actualizare buton Contul Meu în Header
    const navContainer = document.getElementById("auth-nav-container");
    if (appState.isLoggedIn) {
        const isCustomer = appState.role === "customer";
        const targetView = isCustomer ? "customer-dashboard" : "doctor-dashboard";
        const labelRol = isCustomer ? "Contul Meu [Pacient]" : "Panou B2B [Medic]";
        const btnClass = isCustomer ? "btn-primary" : "btn-accent";

        navContainer.innerHTML = `
            <button class="btn ${btnClass} btn-sm" onclick="schimbaVizualizarea('${targetView}')">
                ${labelRol}
            </button>
        `;
    } else {
        navContainer.innerHTML = `
            <button class="btn btn-primary btn-sm" onclick="schimbaVizualizarea('login')">
                Autentificare
            </button>
        `;
    }
}

// ============================================================================
// DASHBOARD PACIENT (ISTORIC, DETALII & ANULARE PROGRAMARE)
// ============================================================================
function randeazaDashboardPacient() {
    const container = document.getElementById("myAppointments");
    const activeApps = programariData.filter(p => p.status !== "Anulat");

    // Actualizare statistici KPI pacient
    document.getElementById("custStatActive").textContent = String(activeApps.length);
    document.getElementById("custStatTriage").textContent = appState.lastTriageResult
        ? appState.lastTriageResult.specializare
        : (activeApps[0] ? activeApps[0].specializare : "General");

    const costTotal = activeApps.reduce((acc, item) => acc + Number(item.pret || 0), 0);
    document.getElementById("custStatCost").textContent = `${costTotal} RON`;

    if (programariData.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <p class="text-muted" style="margin-bottom: 1rem;">Nu ai nicio programare înregistrată momentan.</p>
                <button class="btn btn-primary" onclick="schimbaVizualizarea('home')">Caută un medic și programează-te</button>
            </div>
        `;
        return;
    }

    container.innerHTML = programariData.map(prog => {
        const esteAnulata = prog.status === "Anulat";
        const badgeHtml = esteAnulata
            ? `<span class="badge-blocked" style="background:#ffe3e3; color:#c92a2a;">Anulată</span>`
            : `<span class="badge-confirmed">✓ ${prog.status}</span>`;

        return `
            <div class="appointment-card" style="${esteAnulata ? "opacity: 0.68; border-left-color: #cbd5e1;" : ""}">
                <div class="appointment-card-top">
                    <div>
                        <span class="appointment-time-pill">${prog.ziua} • Ora ${prog.ora}</span>
                        <span class="spec-badge" style="margin-left: 0.4rem;">${prog.specializare}</span>
                        <h4 style="font-size: 1.1rem; margin-top: 0.25rem;">${prog.medicNume}</h4>
                        <p class="text-muted">🏥 ${prog.clinica} (${prog.oras}) • Tarif: <strong>${prog.pret} RON</strong></p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        ${badgeHtml}
                        ${!esteAnulata ? `
                            <button class="btn btn-danger-outline btn-sm" onclick="anuleazaProgramare(${prog.id})">
                                Anulează Programarea
                            </button>
                        ` : ""}
                    </div>
                </div>

                <div class="synthetic-summary-box">
                    <strong>Fișă Sintetică Transmisă Medicului:</strong>
                    ${prog.fisaSintetica}
                </div>
            </div>
        `;
    }).join("");
}

function anuleazaProgramare(programareId) {
    const prog = programariData.find(p => p.id === programareId);
    if (!prog) return;

    prog.status = "Anulat";
    salveazaDateleInStorage();
    randeazaDashboardPacient();
    randeazaDashboardMedic();
    filtreazaMediciInTimpReal();

    afiseazaToast(`Programarea de la ora ${prog.ora} (${prog.medicNume}) a fost anulată. Slotul este din nou liber pe site!`);
}

// ============================================================================
// DASHBOARD MEDIC / CLINICĂ (B2B - AGENDĂ, STATISTICI & BLOCARE SLOTURI)
// ============================================================================
function populeazaSelectorMediciDashboard() {
    const selectEl = document.getElementById("activeDoctorSelect");
    if (!selectEl) return;

    selectEl.innerHTML = mediciData.map(m => `
        <option value="${m.id}" ${m.id === appState.activeDoctorIdDashboard ? "selected" : ""}>
            ${m.nume} — ${m.specializare} (${m.oras})
        </option>
    `).join("");
}

function schimbaMediculActivDashboard(medicIdStr) {
    appState.activeDoctorIdDashboard = Number(medicIdStr);
    randeazaDashboardMedic();
}

function randeazaDashboardMedic() {
    const medic = mediciData.find(m => m.id === appState.activeDoctorIdDashboard) || mediciData[0];
    if (!medic) return;

    // Header medic activ
    document.getElementById("docDashboardAvatar").textContent = obtineInitialeMedic(medic.nume);
    document.getElementById("docDashboardName").textContent = medic.nume;
    document.getElementById("docDashboardMeta").textContent = `${medic.titlu} • ${medic.clinica} (${medic.oras}) • ${medic.pret} RON / consultație`;

    // Programări active pentru acest medic
    const progMedicAzi = programariData.filter(
        p => p.medicId === medic.id && p.ziua === "Azi" && p.status !== "Anulat"
    ).sort((a, b) => a.ora.localeCompare(b.ora));

    const toateProgMedic = programariData.filter(
        p => p.medicId === medic.id && p.status !== "Anulat"
    ).sort((a, b) => a.ora.localeCompare(b.ora));

    const sloturiBlocate = medic.sloturiBlocate || [];
    let sloturiLibereAzi = 0;

    medic.sloturiDisponibile.forEach(ora => {
        if (!esteSlotOcupat(medic.id, "Azi", ora)) {
            sloturiLibereAzi++;
        }
    });

    // Statistici KPI Medic
    document.getElementById("docStatBooked").textContent = String(toateProgMedic.length);
    document.getElementById("docStatAvailable").textContent = String(sloturiLibereAzi);
    document.getElementById("docStatBlocked").textContent = String(sloturiBlocate.length);
    document.getElementById("docStatRevenue").textContent = `${toateProgMedic.length * medic.pret} RON`;

    // Coloana 1: Manager Sloturi Orare (Azi)
    const slotManagerEl = document.getElementById("doctorSlotManager");
    slotManagerEl.innerHTML = medic.sloturiDisponibile.map(ora => {
        const progLaOra = progMedicAzi.find(p => p.ora === ora);
        const esteBlocat = sloturiBlocate.includes(ora);

        if (progLaOra) {
            return `
                <div class="slot-manage-row" style="border-left: 4px solid var(--primary-color); background: var(--primary-light);">
                    <div>
                        <span class="slot-time-badge">${ora}</span>
                        <span style="font-size: 0.85rem; margin-left: 0.5rem;">👤 <strong>${progLaOra.pacientNume}</strong></span>
                    </div>
                    <span class="badge-confirmed">Rezervat</span>
                </div>
            `;
        }

        if (esteBlocat) {
            return `
                <div class="slot-manage-row" style="border-left: 4px solid var(--warning-color);">
                    <div>
                        <span class="slot-time-badge" style="color: var(--text-muted); text-decoration: line-through;">${ora}</span>
                        <span class="badge-blocked" style="margin-left: 0.5rem;">Blocat Manual</span>
                    </div>
                    <button class="btn btn-outline btn-sm" onclick="comutaBlocareSlotMedic(${medic.id}, '${ora}')">
                        Deblochează
                    </button>
                </div>
            `;
        }

        return `
            <div class="slot-manage-row" style="border-left: 4px solid var(--accent-color);">
                <div>
                    <span class="slot-time-badge">${ora}</span>
                    <span class="badge-free" style="margin-left: 0.5rem;">Liber pe site</span>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="comutaBlocareSlotMedic(${medic.id}, '${ora}')">
                    Blochează Slot
                </button>
            </div>
        `;
    }).join("");

    // Coloana 2: Agenda Pacienților & Fișele Sintetice
    const agendaEl = document.getElementById("doctorAppointmentsList");
    if (toateProgMedic.length === 0) {
        agendaEl.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                Nu există pacienți programați pentru acest medic momentan.
            </div>
        `;
        return;
    }

    agendaEl.innerHTML = toateProgMedic.map(prog => `
        <div class="appointment-card">
            <div class="appointment-card-top">
                <div>
                    <span class="appointment-time-pill">${prog.ziua} • Ora ${prog.ora}</span>
                    <h4 style="font-size: 1.05rem; margin-top: 0.25rem;">Pacient: ${prog.pacientNume}</h4>
                    <p class="text-muted">📞 Telefon: ${prog.pacientTelefon} • Tarif: ${prog.pret} RON</p>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <span class="badge-confirmed">✓ ${prog.status}</span>
                    <button class="btn btn-danger-outline btn-sm" onclick="anuleazaProgramare(${prog.id})">
                        Anulează
                    </button>
                </div>
            </div>

            <div class="synthetic-summary-box">
                <strong>✨ Fișă Scurtă Generată Automat (Pre-Consultație):</strong>
                ${prog.fisaSintetica}
            </div>
        </div>
    `).join("");
}

function comutaBlocareSlotMedic(medicId, ora) {
    const medic = mediciData.find(m => m.id === medicId);
    if (!medic) return;

    if (!medic.sloturiBlocate) medic.sloturiBlocate = [];

    const idx = medic.sloturiBlocate.indexOf(ora);
    if (idx > -1) {
        medic.sloturiBlocate.splice(idx, 1);
        afiseazaToast(`Intervalul ${ora} a fost deblocat și este acum disponibil pentru pacienți.`);
    } else {
        medic.sloturiBlocate.push(ora);
        afiseazaToast(`Intervalul ${ora} a fost marcat ca Indisponibil pe pagina publică.`);
    }

    salveazaDateleInStorage();
    randeazaDashboardMedic();
    filtreazaMediciInTimpReal();
}

function adaugaSlotNouMedic() {
    const medic = mediciData.find(m => m.id === appState.activeDoctorIdDashboard);
    const inputEl = document.getElementById("newSlotTimeInput");
    const oraNoua = (inputEl.value || "").trim();

    if (!medic || !oraNoua) return;

    if (medic.sloturiDisponibile.includes(oraNoua)) {
        afiseazaToast(`Intervalul ${oraNoua} există deja în agenda medicului.`);
        return;
    }

    medic.sloturiDisponibile.push(oraNoua);
    medic.sloturiDisponibile.sort((a, b) => a.localeCompare(b));

    salveazaDateleInStorage();
    randeazaDashboardMedic();
    filtreazaMediciInTimpReal();
    afiseazaToast(`Intervalul ${oraNoua} a fost adăugat în agenda ${medic.nume}!`);
}

// ============================================================================
// SECȚIUNEA CLINICI PARTENERE
// ============================================================================
function randeazaCliniciPartenere() {
    const container = document.getElementById("clinicsList");
    if (!container) return;

    const mapClinici = new Map();
    mediciData.forEach(m => {
        if (!mapClinici.has(m.clinica)) {
            mapClinici.set(m.clinica, {
                nume: m.clinica,
                oras: m.oras,
                adresa: m.adresa,
                specializari: new Set([m.specializare]),
                mediciCount: 1
            });
        } else {
            const c = mapClinici.get(m.clinica);
            c.specializari.add(m.specializare);
            c.mediciCount++;
        }
    });

    container.innerHTML = Array.from(mapClinici.values()).map(c => `
        <div class="clinic-card">
            <div class="clinic-card-header">
                <h3>🏥 ${c.nume}</h3>
                <span class="clinic-city-badge">📍 ${c.oras}</span>
            </div>
            <p class="text-muted">${c.adresa}</p>
            <div>
                <strong style="font-size: 0.82rem; color: var(--text-muted);">Specializări listate:</strong>
                <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.35rem;">
                    ${Array.from(c.specializari).map(s => `<span class="spec-badge">${s}</span>`).join("")}
                </div>
            </div>
            <button class="btn btn-outline btn-sm" style="margin-top: auto;" onclick="filtreazaDupaClinica('${c.nume}')">
                Vezi medicii din această clinică →
            </button>
        </div>
    `).join("");
}

function filtreazaDupaClinica(numeClinica) {
    schimbaVizualizarea("home");
    document.getElementById("searchInput").value = numeClinica;
    document.getElementById("citySelect").value = "";
    appState.selectedSpecialty = "";
    genereazaPastileSpecializari();
    filtreazaMediciInTimpReal();
}

// ============================================================================
// SISTEM DE NOTIFICĂRI TOAST
// ============================================================================
function afiseazaToast(mesaj) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast-item";
    toast.textContent = mesaj;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.25s ease";
        setTimeout(() => toast.remove(), 260);
    }, 3600);
}
