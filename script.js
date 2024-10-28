function calculateTime() {
    const speed = parseFloat(document.getElementById("speed").value);
    const unit = document.getElementById("unit").value;
    const marathonDistance = 42.195;
    
    if (isNaN(speed) || speed <= 0) {
        document.getElementById("result").textContent = "Veuillez entrer une vitesse valide.";
        return;
    }
    
    let totalMinutes;
    if (unit === "min/km") {
        totalMinutes = speed * marathonDistance;
    } else {
        totalMinutes = (marathonDistance / speed) * 60;
    }
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    
    document.getElementById("result").textContent = `Durée estimée : ${hours} h ${minutes} min`;
}