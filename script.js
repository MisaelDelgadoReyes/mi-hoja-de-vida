window.addEventListener('DOMContentLoaded', () => {
    // Función de estilo común
    const estiloCaja = (elemento) => {
        elemento.style.position = 'fixed';
        elemento.style.top = '10px';
        elemento.style.backgroundColor = '#333';
        elemento.style.color = '#fff';
        elemento.style.padding = '10px 20px';
        elemento.style.borderRadius = '8px';
        elemento.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';
        elemento.style.fontFamily = 'Arial, sans-serif';
        elemento.style.fontSize = '16px';
        elemento.style.zIndex = '9999';
        elemento.style.whiteSpace = 'nowrap';
    };

    // 🔵 Saludo (lado izquierdo)
    const saludo = document.createElement('div');
    const horaActual = new Date().getHours();
    let mensaje = '';

    if (horaActual < 12) mensaje = '¡Bienvenido, Buenos días!';
    else if (horaActual < 18) mensaje = '¡Bienvenido, Buenas tardes!';
    else mensaje = '¡Bienvenido, Buenas noches!';

    saludo.textContent = mensaje;
    estiloCaja(saludo);
    saludo.style.left = '10px';

    // 🔵 Reloj (lado derecho)
    const reloj = document.createElement('div');
    estiloCaja(reloj);
    reloj.style.right = '10px';
    reloj.style.textAlign = 'right'; // alinear texto a la derecha

    // Función para actualizar fecha y hora
    const actualizarHora = () => {
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const hora = ahora.toLocaleTimeString('es-ES');

        reloj.innerHTML = `<div>${fecha}</div><div style="font-size: 14px; color: #ccc;">${hora}</div>`;
    };

    actualizarHora();
    setInterval(actualizarHora, 1000); // actualiza cada segundo

    // Añadir elementos al DOM
    document.body.appendChild(saludo);
    document.body.appendChild(reloj);

    // Eliminar después de 60 segundos
    setTimeout(() => {
        saludo.remove();
    }, 4000);
});
