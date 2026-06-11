// Respuestas correctas del cuestionario
const respuestasCorrectas = {
    p1:  "a", // Caneca de reciclaje
    p2:  "b", // Apagar luces y dejar limpio
    p3:  "b", // Verde (orgánicos)
    p4:  "b", // Cerrar el grifo
    p5:  "a", // Disminuir residuos
    p6:  "b", // Producen oxígeno
    p7:  "b", // Quemar papeles contamina
    p8:  "b", // Reciclar o reutilizar papeles
    p9:  "c", // 100-400 años
    p10: "b", // Luz natural y apagar luces
    p11: "b", // Convertir residuos en abono
    p12: "c", // Papel aluminio con comida
    p13: "b", // Reportar a mantenimiento
    p14: "b", // Calentamiento global
    p15: "a", // Nuevo uso antes de desechar
    p16: "a", // Ensucian y dañan animales
    p17: "c", // Bicicleta o caminar
    p18: "b", // Usar como borrador
    p19: "c", // Energía solar
    p20: "b"  // Hábitos ecológicos diarios
};

document.getElementById("btnEnviar").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();

    // Validar nombre
    if (!nombre) {
        alert("Por favor escribe tu nombre completo antes de enviar.");
        document.getElementById("nombre").focus();
        return;
    }

    let correctas = 0;
    let sinResponder = [];

    // Evaluar cada pregunta
    for (let i = 1; i <= 20; i++) {
        const clave = "p" + i;
        const seleccion = document.querySelector(`input[name="${clave}"]:checked`);

        if (!seleccion) {
            sinResponder.push(i);
        } else if (seleccion.value === respuestasCorrectas[clave]) {
            correctas++;
        }
    }

    // Verificar que respondió todas
    if (sinResponder.length > 0) {
        alert("Faltan respuestas en las preguntas: " + sinResponder.join(", "));
        return;
    }

    const divResultado = document.getElementById("resultado");

    if (correctas === 20) {
        // Mostrar felicitación y certificado
        divResultado.innerHTML = `✅ ¡Excelente, ${nombre}! Obtuviste <strong>20 de 20</strong>. ¡Aprobaste el curso!`;
        divResultado.style.color = "#1b4332";

        // Rellenar certificado
        document.getElementById("nombreCertificado").textContent = nombre.toUpperCase();
        const hoy = new Date();
        const opciones = { year: "numeric", month: "long", day: "numeric" };
        document.getElementById("fecha").textContent =
            "Pasto, " + hoy.toLocaleDateString("es-CO", opciones);

        // Mostrar sección certificado
        const secCert = document.getElementById("certificado");
        secCert.style.display = "block";
        secCert.scrollIntoView({ behavior: "smooth" });

    } else {
        // No aprobó
        divResultado.innerHTML = `
            ❌ Obtuviste <strong>${correctas} de 20</strong> respuestas correctas.<br>
            Necesitas 20/20 para obtener el certificado.<br>
            Revisa tus respuestas e inténtalo de nuevo.
        `;
        divResultado.style.color = "#a4161a";
        document.getElementById("certificado").style.display = "none";
    }
});

// Botón descargar PDF usando window.print()
document.getElementById("descargarPDF").addEventListener("click", function () {
    window.print();
});
