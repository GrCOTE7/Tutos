<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 20/10/16
 * Time: 11:26
 */
class Vehicule {

  // Attributs
  protected $_marque;
  protected $_estRepare;

  // Méthodes
  public function __construct ( $marque ) {

    $this->_marque    = $marque;
    $this->_estRepare = false;
  }

  // Met le véhicule en maintenance
  public function reparer () {

    $this->_estRepare = true;
    echo 'Le véhicule est en réparation';
  }
}

class Voiture extends Vehicule {

  // Attributs
  private $_volumeCarburant;

  // Constructeur
  public function __construct ( $marque ) {

    // Appel du constructeur de la classe parente
    parent::__construct ( $marque );
    $this->_volumeCarburant = 40;
  }

  // Démarre la voiture si le réservoir
  // n'est pas vide
  public function demarrer () {

    if ( $this->_controlerVolumeCarburant () ) {
      echo 'Le véhicule démarre.<br>';
      echo sprintf ( 'Il s\'agit d\'un véhicule de type: <b>%s</b><br>', self::class );

      return true;
    }

    echo 'Le réservoir est vide...';

    return false;
  }

  // Vérifie qu'il y'a du carburant dans le réservoir
  private function _controlerVolumeCarburant () {

    return ( $this->_volumeCarburant > 0 );
  }
}
