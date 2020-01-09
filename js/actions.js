$(document).ready(function () {
    atualizar();

$('.descAdd').blur(function (e) { 
    $('.descAdd').val(parseFloat( $('.descAdd').val()).toFixed(2));

    
});

});

function atualizar(){
    $(".btAdd").width( $(".btAdd").height());
};
// clicks
$(".btAdd").click(function (e) { 
    if($(".titleAdd").val().length!=0&&$(".descAdd").val()!=0){
        add($(".titleAdd").val(),$(".descAdd").val());
        $(".descAdd").val('');
        $(".titleAdd").val('');
    }
    else{
        alert("CAMPOS VAZIOS !");
    }

    
});
// fução de add results
function add(title,quant){
    $(".result").prepend("<div class='resposta'><div class='titleResp'>"+title+"</div> <div class='quantResp'>"+quant+"</div> </div>");
    var soma=0;
    $(".resposta").each(function (i) { 
        soma+= parseFloat($(".quantResp").eq(i).text());
    });
    $(".soma").html("R$ "+soma.toFixed(2));
}
// atualizar as telas

$(window).scroll(function () { 
    atualizar();    
});
$(window).resize(function () { 
    atualizar();
});