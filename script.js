function toggleInputFields() {
    const unit = document.getElementById("unit").value;
    const minPerKmFields = document.getElementById("minPerKmFields");
    const kmHField = document.getElementById("kmHField");
    
    if (unit === "min/km") {
        minPerKmFields.style.display = "block";
        kmHField.style.display = "none";
    } else {
        minPerKmFields.style.display = "none";
        kmHField.style.display = "block";
    }
}

function updateKmH() {
    const minutes = parseFloat(document.getElementById("minutes").value) || 0;
    const seconds = parseFloat(document.getElementById("seconds").value) || 0;
    
    const totalMinutes = minutes + seconds / 60;
    if (totalMinutes > 0) {
        const kmh = 60 / totalMinutes;
        document.getElementById("kmhResult").textContent = `Équivalent en km/h : ${kmh.toFixed(2)} km/h`;
    } else {
        document.getElementById("kmhResult").textContent = "Équivalent en km/h : -- km/h";
    }
}

function updateMinPerKm() {
    const kmh = parseFloat(document.getElementById("kmh").value);
    if (kmh > 0) {
        const totalMinutes = 60 / kmh;
        const minutes = Math.floor(totalMinutes);
        const seconds = Math.round((totalMinutes - minutes) * 60);
        document.getElementById("minPerKmResult").textContent = `Équivalent en min/km : ${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        document.getElementById("minPerKmResult").textContent = "Équivalent en min/km : --:--";
    }
}

function calculateMarathonTime() {
    const marathonDistance = 42.195;
    let totalMinutes;
    
    if (document.getElementById("unit").value === "min/km") {
        const minutes = parseFloat(document.getElementById("minutes").value) || 0;
        const seconds = parseFloat(document.getElementById("seconds").value) || 0;
        totalMinutes = (minutes + seconds / 60) * marathonDistance;
    } else {
        const kmh = parseFloat(document.getElementById("kmh").value);
        if (kmh > 0) {
            totalMinutes = (marathonDistance / kmh) * 60;
        } else {
            document.getElementById("marathonTimeResult").textContent = "Durée estimée pour le marathon : --:--";
            return;
        }
    }
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    
    document.getElementById("marathonTimeResult").textContent = `Durée estimée pour le marathon : ${hours} h ${minutes} min`;
}