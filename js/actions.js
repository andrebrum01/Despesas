// adiciona mascaras
$(document).ready(function () {
    

});

$('.descAdd').blur(function (e) { 
    $('.descAdd').val(parseFloat( $('.descAdd').val()).toFixed(2));

    
});
function atualizar(){
    $(".btAdd").width( $(".btAdd").height());
};

// atualizar as telas
atualizar();
$(window).scroll(function () { 
    atualizar();    
});
$(window).resize(function () { 
    atualizar();
});