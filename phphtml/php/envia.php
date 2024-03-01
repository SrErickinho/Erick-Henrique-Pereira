<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estilo.css">
    <title>php processa</title>
</head>
<body>
    <?php
    $nome= $_GET["nome"];
    $idade= $_GET["idade"];
    $peso= $_GET["peso"];

    echo"<p>Seja bem vindo $nome</p><br>";
    echo"<p>Você tem $idade de idade</p><br>";
    echo"<p>E você pesa $peso kg</p><br>";
    ?>
    
</body>
</html>