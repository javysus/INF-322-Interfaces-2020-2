
$(document).ready(function(){
    
    /*$('.modal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget); //Botón con el que se muestra
        var alumnoId = button.attr('id'); //Id del boton: id del alumno
        var nombreOriginal = document.getElementById("nombre"+alumnoId).textContent;
        console.log("Intercambio a " + alumnoId);
        $('#intercambiar'+alumnoId).on('hidden.bs.modal', function () {
          })
        $('#aceptarCambio'+alumnoId).click(function(){
            var alum = document.getElementById("cambiar"+alumnoId).value; 
            console.log("Por " + alum)
            var nombreAlumno = document.getElementById("nombre"+alum).textContent;
            console.log(nombreAlumno);
            document.getElementById("nombre"+alumnoId).innerHTML = nombreAlumno;
            document.getElementById("nombre"+alum).innerHTML = nombreOriginal;
            /*$(".alert").delay(4000).slideUp(200, function() {
                $(this).alert('close');
            });
        })*/

    
    $('.btn-indigo').click(function(){
        var alumnoId = this.id;
        //var alumnoId = idButton.slice(idButton.length - 1)
        console.log(alumnoId);
        var nombreOriginal = document.getElementById("nombre"+alumnoId).textContent;
        console.log("Intercambiar "+ nombreOriginal);

        var alum = document.getElementById("cambiar"+alumnoId).value;
        var nombreAlumno = document.getElementById("nombre"+alum).textContent;
        console.log("Por " + nombreAlumno);

        document.getElementById("nombre"+alumnoId).innerHTML = nombreAlumno;
        document.getElementById("nombre"+alum).innerHTML = nombreOriginal;

        $("footer").append('<div class="alert alert-success alert-dismissible fade show" role="alert">El intercambio se ha realizado satisfactoriamente.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
        $(".alert").delay(2500).fadeOut(200, function() {
            $(this).alert('close');
        });
    })

    $('#aceptarNombre').click(function(){
        var curso = document.getElementById("newCurso").value;

        document.getElementById('nombreCurso').innerHTML = curso;
    })
}); 