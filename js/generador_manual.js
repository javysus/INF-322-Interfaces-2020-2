$(document).ready(function(){
    var alumno = 1;

    $('#add').click(function(){
        console.log(alumno);
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var genero = document.getElementById("genero").value;
        var nivel = document.getElementById("nivel").value;
        var tabla = document.getElementById("tableBody");

        console.log(tabla);

        $("#tableBody").append('<tr><th scope="row">'
        +alumno+'</th><td>'+nombre+'</td><td>'+apellido+'</td><td>'+genero+'</td><td>'+nivel+'</td></tr>');

        alumno++;

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
    })

})