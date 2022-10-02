//Footer Tooltips
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

//Seccion Contacto
  $("#enviar").click(function () {
    alert("El correo ha sido enviado!");
});

//Seccion destacados
$(".card-title").click(function () {
    $(".card-text").toggle("slow");
});

//Navbar
$(document).scroll(function () {
    const y = $("html").scrollTop();
  
    y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
  });