<?php

if($_POST) {
    $nome = "";
    $cognome = "";
    $email = "";
    $tel = "";
    $note = "";
    $destinatario = "pietrobontempi01@gmail.com";
    $titolo = "Richiesta Preventivo $cognome";
    $articoli = $_POST['options'];

    if(isset($_POST['nome'])) {
        $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['cognome'])) {
        $cognome = filter_var($_POST['cognome'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['note'])) {
        $note = htmlspecialchars($_POST['note']);
      }

    if(isset($_POST['tel'])){
      $tel = $_POST['tel'];
    }

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";

    $msg = "Nome: $nome \n Cognome: $cognome \n Telefono: $tel \n Articoli: $articoli \n Note: $note"

    if(mail($destinatario, $titolo, $msg, $headers)) {
        echo "<p>Grazie per aver richiesto un preventivo, $visitor_name. Riceverai una email al più presto.</p>";
    } else {
        echo '<p>Siamo spiacenti. La richiesta non è andata a buon termine. Ritenti più tardi.</p>';
    }

} else {
    echo '<p>Siamo spiacenti. La richiesta non è andata a buon termine. Ritenti più tardi.</p>';
}

?>
