<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 24/10/16
 * Time: 11:39
 */

/**
 * Fonction de rappel appellée automatiquement par l'exception handler
 *
 * @param Exception $e une exception lancée et perdue dans le programme
 *
 * @return void
 */
function traitementExceptionPerdue ( Exception $e ) {

  exit( 'Une exception orpheline a été attrapée:<br>' . $e->getMessage () . "\n" );
}

/**
 * Enregistrement de la fonction de rappel dans l'exception handler de PHP
 */
set_exception_handler ( 'traitementExceptionPerdue' );

// Exemple de génération d'exception perdu
$password = 'Toto';
if ( 'Emacs' !== $password ) {
  throw new Exception( 'Votre password est incorrect !' );
}

// Cette ligne ne sera jamais exécutée
// car une exception est lancée pour interrompre
// l'exécution normale du programme
echo 'Bonjour Emacs';
