<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 24/10/16
 * Time: 11:05
 */

/**
 * Fichier FileNotFoundException.class.php
 */
class FileNotFoundException extends Exception {

  protected $timestamp;

  public function __construct ( $message = NULL, $code = 0 ) {

    parent::__construct ( $message, $code );
    $this->timestamp = time ();
  }

  public function getTimestamp () {

    return $this->timestamp;
  }
}

/**
 * Fichier FileNotWriteableException.class.php
 */
class FileNotWriteableException extends Exception {

  protected $timestamp;

  public function __construct ( $message = NULL, $code = 0 ) {

    parent::__construct ( $message, $code );
    $this->timestamp = time ();
  }

  public function getTimestamp () {

    return $this->timestamp;
  }
}

/**
 * Fichier FileException.class.php
 */
class FileException extends Exception {

  protected $timestamp;

  public function __construct ( $message = NULL, $code = 0 ) {

    parent::__construct ( $message, $code );
    $this->timestamp = time ();
  }

  public function getTimestamp () {

    return $this->timestamp;
  }
}

// Variables
$fichier = 'toto.txt';

try {
  // Le fichier existe-t-il ?
  if ( ! file_exists ( $fichier ) ) {
    throw new FileNotFoundException( 'Le fichier ' . $fichier . ' est inexistant' );
  }

  // Le fichier est-il inscriptible ?
  if ( ! is_writeable ( $fichier ) ) {
    throw new FileNotWriteableException( 'Le fichier ' . $fichier . ' n\'a pas les droits d\'écriture' );
  }

  // A-t-on ouvert le fichier en mode écriture ?
  if ( ! ( $fp = @fopen ( $fichier, 'w' ) ) ) {
    throw new FileException( 'L\'ouverture du fichier ' . $fichier . ' a échoué' );
  }

  // J'écris dans mon fichier
  fwrite ( $fp, "Coucou Emacs\n" );

  // Puis je ferme mon fichier
  fclose ( $fp );
}
catch ( FileNotFoundException $e ) {
  // Je crée le fichier
  echo 'Création du fichier...<br>';
  exit( $e->getMessage () );
}
catch ( FileNotWriteableException $e ) {
  // Je change les droits du fichier
  echo 'Changement des droits du fichier';
}
catch ( FileException $e ) {
  // Je stoppe tout
  exit( $e->getMessage () );
}
catch ( Exception $e ) {
  // Je stoppe tout
  exit( $e->getMessage () );
}
