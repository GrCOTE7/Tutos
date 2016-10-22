<?php

class Sheep {

  /**
   * Nom du mouton
   *
   * @var String
   */
  protected $_name;

  /**
   * Contructeur de la classe Sheep
   *
   * @param String $name nom du mouton
   */
  public function __construct ( $name ) {

    $this->_name = (string) $name;
  }

  /**
   * Methode magique clone
   *
   * @return void
   */
  // Function appelée automatiquement si clone utilisé
  public function __clone () {

    $this->_name = 'Copie de ' . $this->_name;
  }
}

$oSheep    = new Sheep( 'Dolly' );
$oNewSheep = clone $oSheep;
vdl ( $oSheep );
vdl ( $oNewSheep );
