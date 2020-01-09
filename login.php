<?php
include("conexao.php");
if(empty($_POST['title'])||empty($_POST['quant'])){
    header('Location: index.php');
    exit();
}
$title = mysqli_real_escape_string($conexao,$_POST['title']);
$quant = mysqli_real_escape_string($conexao,$_POST['quant']);

$query = "insert into user (title,quant) values ('{$title}','{$quant}')";
$result = mysqli_query($conexao, $query);
header('Location: index.php');

?>