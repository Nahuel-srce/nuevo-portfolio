function showService(serviceId) {
    const contents = document.querySelectorAll('.service-content');
    contents.forEach(content => content.classList.remove('active'));

    const activeContent = document.getElementById(serviceId);
    activeContent.classList.add('active');
}
// Obtener elementos
const planoModal = document.getElementById("planoModal");
const planoBtn = document.getElementById("planoBtn");
const closePlano = document.getElementById("closePlano");

// Abrir modal al hacer clic en el botón
planoBtn.onclick = function() {
    planoModal.style.display = "block";
}

// Cerrar modal al hacer clic en la "X"
closePlano.onclick = function() {
    planoModal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == planoModal) {
        planoModal.style.display = "none";
    }
}


// Función para abrir el modal de Fin
function openModal() {
    var modal = document.getElementById("finModal");
    var video = document.getElementById("videoModal");

    // Abrir el modal
    modal.style.display = "block";
    // Pausar cualquier video abierto
    var videoElement = video.querySelector("video");
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; // Volver al inicio
    }
}

// Función para cerrar el modal de Fin
function closeModal() {
    var modal = document.getElementById("finModal");
    var video = document.getElementById("videoModal");

    // Cerrar el modal
    modal.style.display = "none";

    // Detener cualquier video dentro del modal de fin
    var videoElement = video.querySelector("video");
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; // Volver al inicio
    }
}
// Función para abrir el modal de video
function openVideoModal() {
    const videoModal = document.getElementById("videoModal");
    const videoPlayer = videoModal.querySelector(".video-player");
    videoModal.style.display = "block";
    videoPlayer.currentTime = 0; // Reinicia el video al inicio
    videoPlayer.play(); // Inicia el video al abrir el modal
}

// Función para cerrar el modal de video
function closeVideoModal() {
    const videoModal = document.getElementById("videoModal");
    const videoPlayer = videoModal.querySelector(".video-player");
    videoPlayer.pause(); // Pausa el video al cerrar el modal
    videoModal.style.display = "none";
}
// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeVideoModal();
    }
}