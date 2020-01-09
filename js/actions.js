$(document).ready(function () {
    atualizar();
    $('.descAdd').blur(function (e) { 
        $('.descAdd').val(parseFloat( $('.descAdd').val()).toFixed(2));    
    });
});

function atualizar(){
    $(".excluir").width( $(".excluir").height());
    $(".btAdd").width( $(".btAdd").height());
    
    soma();
};
// clicks
$(".btAdd").click(function () { 
    if($(".titleAdd").val().length!=0&&$(".descAdd").val()!=0){
        soma();
    }
    else{
        alert("CAMPOS VAZIOS !");
    }
    
});
$(".resposta .excluir").click(function () { 
    var index = $(".excluir").index($(this));
    var id =$(".idResp").eq(index).text();
    window.location= "excluir.php?id="+id;
});
// fução de add results
function soma(){
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