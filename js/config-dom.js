/*Funciones de navegacion*/
/*Scroll a secciones*/

$('#btn-home').click(function(){
    $('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
        scrollTop: $("#sec-home").offset().top-90
        //1500 · La velocidad que le queremos dar
    }, 1800);
})

$('#btn-about').click(function(){
    $('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
        scrollTop: $("#sec-about").offset().top-90
        //1500 · La velocidad que le queremos dar
    }, 1800);
})
$('#btn-services').click(function(){
    $('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
        scrollTop: $("#sec-services").offset().top-90
        //1500 · La velocidad que le queremos dar
    }, 1800);
})
$('#btn-skills').click(function(){
    $('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
        scrollTop: $("#sec-skills").offset().top
        //1500 · La velocidad que le queremos dar
    }, 1800);
})
$('#btn-contact').click(function(){
    $('html, body').animate({
        // #elemento2 · Será el elemento donde queremos desplazarnos.
        scrollTop: $("#sec-contact").offset().top
        //1500 · La velocidad que le queremos dar
    }, 1800);
})