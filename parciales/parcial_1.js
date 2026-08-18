function verificarAcceso() {
    const edad = document.getElementById("edad").value;
    const inscrito = document.getElementById("inscrito").checked;
    const resultado = document.getElementById("resultado");

    if (edad >= 18 && edad <= 25 && inscrito) {
        resultado.textContent = `Puede pasar, tienes ${edad} años.`;
    } else {
        resultado.textContent = `No puede pasar, solo tienes ${edad} años.`;
    }
}