<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 16:24
 */
class Manchot {

  function __call ( $name, $arguments ) { // public par défaut

    echo 'Vous avez appelé la méthode <b>' . $name . '</b> avec les arguments: <b>' . implode ( '</b> & <b>', $arguments ) . '</b><hr>';

  }
}

$georges = new Manchot();

// Appel d'une méthode non déclarée
$georges->voler ( 'Afrique', 'en groupe' );

// Meth. __call() appelée directement
$georges->__call ( 'voler', [ 'Afrique', 'en groupe' ] );
//$georges->voler ( 'voler', [ 'Afrique', 'en groupe' ] );

/// NB: il existe __callStatic()
