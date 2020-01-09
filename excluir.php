<?php
include("conexao.php");
$id = mysqli_real_escape_string($conexao,$_GET['id']);

$query = "delete from user where id=".$id;
mysqli_query($conexao, $query);

header('Location: index.php');
?>