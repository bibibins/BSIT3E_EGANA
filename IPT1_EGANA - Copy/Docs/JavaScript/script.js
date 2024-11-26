document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('download-cv');

    downloadButton.addEventListener('click', function() {
        const fileName = 'Vince Egana(CV).docx'; 
        const link = document.createElement('a'); 
        link.href = fileName; 
        link.download = fileName; 
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
    });
});
var loadingScreen = document.querySelector(".loadingScreen");

window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
});