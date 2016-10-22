<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 21/10/16
 * Time: 19:36
 */
class Kid {

  /**
   * Age du kid
   *
   * @var int
   * @access private
   */
  private $age;

  /**
   * Methode magique __get()
   *
   * Retourne la valeur de la propriété appelée
   *
   * @param string $property
   *
   * @return int $age
   * @throws Exception
   */
  public function getAge () {

    return $this->age;
  }

  public function setAge ( $age ) {

    if ( ctype_digit ( $age ) ) {
      $this->age = $age;
    }
    else {
      throw new Exception( 'Propriété ou valeur invalide !' );
    }
  }
}

$lio = new Kid();
$lio->setAge ( '2' );
vdl ( $lio );
