$(document).ready(function(){
    var alumno = 1;

    $('#add').click(function(){
        console.log(alumno);
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var genero = document.getElementById("genero").value;
        var nivel = document.getElementById("nivel").value;
        var tabla = document.getElementById("tableBody");
        var idAlumno = alumno;

        console.log(tabla);

        $("#tableBody").append('<tr id=dato'+alumno+'><th scope="row" id=n'+alumno+'>'
        +alumno+'</th><td>'+nombre+'</td><td>'+apellido+'</td><td>'+genero+'</td><td>'+nivel+'</td><td><button id='+
        alumno+' type="button" class="btn btn-danger btn-sm">X</button></td></tr>');

        alumno++;

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";

        $('#'+idAlumno).click(function(){

            document.getElementById('dato'+idAlumno).innerHTML = "";
    
            console.log('id alumno'+idAlumno);
            console.log(alumno);
            var i = idAlumno+1;
            console.log(i);
            for(; i < alumno; i++){
                console.log("Hola "+i);
                document.getElementById("n"+i).innerHTML = i-1;
            }
        })
    
    })
    
})