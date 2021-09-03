<?php

function returnDB($db, $params) {
    //Prèviament fem les connexions a la base de dades corresponent i li passem l'objecte
    //amb la connexió a la funció. Fem la consulta i retornem el resultat.

    $sql = "select * from productes";

    $result = mysql_query($sql);

    return $result;
}

?>