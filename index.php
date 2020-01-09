<!DOCTYPE html>
<html lang="UTF-8">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Despesas Mensais</title>
</head>
<link rel="stylesheet" href="css/style.css">
<link rel="icon" href="img/calc.png">
<body>
    <div class="total"> total da dispesa mensal é : <div class="soma"> </div> </div>
    <section class="result">
        <?php 
            include("conexao.php");
            ini_set('display_errors', 0 );
            error_reporting(0);
            $query = "SELECT title,quant,id FROM `user` WHERE 1 order by id desc";
            $result = mysqli_query($conexao, $query);
            if($result){
                for($j=0;$j<mysqli_num_rows($result);$j++){
                    $conteudo=mysqli_fetch_row($result);
                    echo "<div class='resposta'> <div class='idResp'>".$conteudo[2]."</div><div class='titleResp'>".$conteudo[0]."</div> <div class='quantResp'>".$conteudo[1]."</div><div class='excluir'></div> </div>";
                }
            }
        ?>
    </section>
    
    <form  action="login.php" method="POST" class="caixaAdd">
        <input type ="text" class="titleAdd" placeholder="Despesa"  name="title" ></input>
        <label for="quant">R$</label><input type ="number" class="descAdd"  step="0,01" placeholder="VAlor da despesa"  name="quant"></input>
        <button class="btAdd"></button>
    </form>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/actions.js"type="text/javascript"></script>
</html>