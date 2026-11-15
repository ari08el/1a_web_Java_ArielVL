function cambiarModo() {
    const enlaceOscuro = document.querySelector('link[href="../css/oscuro.css"]');
    enlaceOscuro.disabled = !enlaceOscuro.disabled;
}

function cambiarModoinfierno() {
    const enlaceInfierno = document.querySelector('link[href="../css/infierno.css"]');
    enlaceInfierno.disabled = !enlaceInfierno.disabled;
}
