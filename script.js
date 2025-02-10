window.onload = function() {
    const targetDate = new Date('2025-02-14T14:00:00');  // Valentinstag um 14:00 Uhr
    const rose = document.getElementById('rose');
    const message = document.getElementById('message');
    
    function checkTime() {
        const now = new Date();
        
        // Wenn die Zeit erreicht ist oder bereits vergangen, öffne die Rose und zeige den Text an
        if (now >= targetDate) {
            rose.classList.add('open');
            message.classList.add('show');
        }
    }
    
    // Überprüfe alle 1000ms (1 Sekunde), ob der Zeitpunkt erreicht wurde
    setInterval(checkTime, 1000);
};