<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 16:24
 */
class Manchot {

  function __call ( $name, $arguments ) { // public par défaut

    echo 'Vous avez appelé la méthode <b>' . $name . '</b> avec les arguments: <b>' . implode ( '</b> & <b>', $arguments ) . '</b>';

  }
}

$georges = new Manchot();
$georges->voler ( 'Afrique', 'en groupe' );
