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

  public function boire () {

    echo 'La personne boit<br/>';
  }

  public function manger () {

    echo 'La personne mange<br/>';
  }
}
