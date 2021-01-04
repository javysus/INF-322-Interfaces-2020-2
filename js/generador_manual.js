var alumnos = 1;
var alumno = 1;

function eliminarAlumno(idAlumno){
    //var idAlumno = this.id;
    document.getElementById('dato'+idAlumno).innerHTML = "";
    alumnos--;
    
    var i = idAlumno+1;
    for(; i < alumno; i++){
        document.getElementById("n"+i).innerHTML = parseInt(document.getElementById("n"+i).innerHTML)-1;
    }
}

$(document).ready(function(){

    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
              if(form.checkValidity() && form.id == "addForm"){
                  event.preventDefault();

                  //if(form.id == "addForm"){
                    console.log(alumno);
                    var nombre = document.getElementById("nombre").value;
                    var apellido = document.getElementById("apellido").value;
                    var genero = document.getElementById("genero").value;
                    var nivel = document.getElementById("nivel").value;
                    var tabla = document.getElementById("tableBody");
                    var idAlumno = alumno;
            
                    console.log(tabla);
            
                    $("#tableBody").append('<tr id=dato'+alumno+'><th scope="row" id=n'+alumno+'>'
                    +alumnos+'</th><td>'+nombre+'</td><td>'+apellido+'</td><td>'+genero+'</td><td>'+nivel+'</td><td><button id='+
                    alumno+' type="button" onclick=javascript:eliminarAlumno('+alumno+') class="btn btn-danger btn-sm">X</button></td></tr>');
            
                    alumno++;
                    alumnos++;
            
                    document.getElementById("nombre").value = "";
                    document.getElementById("apellido").value = "";
                    document.getElementById('addForm').classList.remove("was-validated");
                  
              }

              if(form.checkValidity() && form.id == "generar"){
                event.preventDefault()
                var myModal = new bootstrap.Modal(document.getElementById('advertencia'), {
                  keyboard: false
                })
                myModal.toggle()
              }
              
            }, false)
          })
      })()


      

    /*$('#addForm').submit(function(e){
        console.log(alumno);
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var genero = document.getElementById("genero").value;
        var nivel = document.getElementById("nivel").value;
        var tabla = document.getElementById("tableBody");
        var idAlumno = alumno;

        console.log(tabla);

        $("#tableBody").append('<tr id=dato'+alumno+'><th scope="row" id=n'+alumno+'>'
        +alumnos+'</th><td>'+nombre+'</td><td>'+apellido+'</td><td>'+genero+'</td><td>'+nivel+'</td><td><button id='+
        alumno+' type="button" class="btn btn-danger btn-sm">X</button></td></tr>');

        alumno++;
        alumnos++;

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";

        $('#'+idAlumno).click(function(){

            document.getElementById('dato'+idAlumno).innerHTML = "";
            alumnos--;
            
            var i = idAlumno+1;
            for(; i < alumno; i++){
                document.getElementById("n"+i).innerHTML = parseInt(document.getElementById("n"+i).innerHTML)-1;
            }
            
        })
    
    })*/
    
})