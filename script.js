

fetch("http://localhost:3000/equipamentos")
    .then((response) => response.json())
    .then(addMarkersFromJSON);



function addMarkersFromJSON(json) {
    const brazilCenter = [-14.2400732, -53.1805017];
    const map = L.map('map').setView(brazilCenter, 3);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '<a href="https://www.openstreetmap.com/copyright">OpenStreetMap</a>' }).addTo(map);
    for (let equipamento of json) {
        if ([1, 2, 3].includes(parseInt(equipamento.id))) {
            L.marker([equipamento.posicaoAtual.latitude, equipamento.posicaoAtual.longitude]).addTo(map).bindPopup(equipamento.estadoAtual.atualState);
        }
    }

}










