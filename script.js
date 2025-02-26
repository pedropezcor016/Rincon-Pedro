let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function descargarPDF() {
    var url = 'CV.pdf';
    var link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Archivo no encontrado');
            }
            return response.blob();
        })
        .then(blob => {
            var urlBlob = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.style.display = 'none';
            a.href = urlBlob;
            a.download = 'CV.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(urlBlob);
        })
        .catch(error => {
            var alerta = document.getElementById("alerta");
            alerta.style.display = "block";
            setTimeout(() => {
                alerta.style.display = "none";
            }, 5000); 
        });
}