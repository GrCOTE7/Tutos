<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 19/10/16
 * Time: 18:17
 */
class Personne {

  // Attributs
  public $nom;
  public $prenom;
  public $dateDeNaissance;
  public $taille;
  public $sexe;

  // Constantes
  const NOMBRE_DE_BRAS   = 2;
  const NOMBRE_DE_JAMBES = 2;
  const NOMBRE_DE_YEUX   = 2;
  const NOMBRE_DE_PIEDS  = 2;
  const NOMBRE_DE_MAINS  = 2;

  // Méthodes
  public function __construct () {
  }

  private function boire () {

    return ' et boit';
  }

  /**
   * Personne mange
   *
   * @param null $etBoire En buvant en même temps
   */
  public function manger ( $etBoire = null ) {

    echo ( isset( $this->prenom ) ? $this->prenom : 'La personne' ) . ' mange';
    if ( $etBoire ) {
      echo $this->boire ();
    }

  }
}
