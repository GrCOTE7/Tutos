<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 24/10/16
 * Time: 11:05
 */
try {

  $password = 'Toto';

  if ( 'Emacs' !== $password ) {
    throw new Exception( 'Votre password est incorrect !' );
  }

  echo 'Bonjour Emacs';
}
catch ( Exception $e ) {
  printf ( 'L\'erreur suivante a été générée:<br><b>%s</b>', $e->getMessage () );
}
