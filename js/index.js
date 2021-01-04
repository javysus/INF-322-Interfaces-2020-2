(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault()
          if (!form.checkValidity()) {
            event.stopPropagation()
          }
          else{
            var myModal = new bootstrap.Modal(document.getElementById('subirArchivo'), {
                keyboard: false
              })
              myModal.toggle()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()