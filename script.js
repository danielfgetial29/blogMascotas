// Función para inyectar HTML
async function cargarComponente(idContenedor, archivoHTML) {
  try {
    const respuesta = await fetch(archivoHTML);
    const html = await respuesta.text();
    document.getElementById(idContenedor).innerHTML = html;
  } catch (error) {
    console.error("Error al cargar " + archivoHTML, error);
  }
}

// Integración de toda la página
// cargarComponente("navbar", "navbar.html");
cargarComponente("home", "home.html"); // ¡Aquí entra tu trabajo!
// cargarComponente("footer", "footer.html");
