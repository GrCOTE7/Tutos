<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 19:09
 */
abstract class EtreHumain {

  /**
   * Sexe de la personne
   *
   * @var string
   */
  protected $sexe;

  /**
   * Nom de la personne
   *
   * @var string
   */
  protected $nom;

  /**
   * La personne fait du sport
   *
   * @abstract
   */
  abstract function faireDuSport ();

  /**
   * Divertit la personne
   *
   * @abstract
   */
  abstract function seDivertir ();

  /**
   * Met à jour le nom
   *
   * @param string $nom
   *
   * @return void
   */
  public function setNom ( $nom ) {

    $this->nom = $nom;
  }

  /**
   * Retourne le nom de la personne
   *
   * @param void
   *
   * @return string $nom
   */
  public function getNom () {

    return $this->nom;
  }

  /**
   * Retourne le sexe de la personne
   *
   * @param void
   *
   * @return string $sexe
   */
  public function getSexe () {

    return $this->sexe;
  }
}

class Homme extends EtreHumain {

  /**
   * Construit l'objet Homme
   *
   * @param string $nom Nom de l'homme
   *
   * @return void
   */
  public function __construct ( $nom ) {

    $this->nom  = $nom;
    $this->sexe = 'M';
  }

  /**
   * Affiche le sport de l'homme
   *
   * @param void
   *
   * @return void
   */
  public function faireDuSport () {

    echo $this->nom . ' fait de la boxe';
  }

  /**
   * Affiche la distraction de l'homme
   *
   * @param void
   *
   * @return void
   */
  public function seDivertir () {

    echo 'Soirée TV et pâtes';
  }
}

class Femme extends EtreHumain {

  /**
   * Construit l'objet Femme
   *
   * @param string $nom Nom de la femme
   *
   * @return void
   */
  public function __construct ( $nom ) {

    $this->nom  = $nom;
    $this->sexe = 'F';
  }

  /**
   * Affiche le sport de la femme
   *
   * @param void
   *
   * @return void
   */
  public function faireDuSport () {

    echo $this->nom . ' fait du fitness';
  }

  /**
   * Affiche la distraction de la femme
   *
   * @param void
   *
   * @return void
   */
  public function seDivertir () {

    echo 'Shopping entre filles';
  }
}

$pers01 = new Homme( 'Lionel' );
vdl ( $pers01 );
$pers01->seDivertir ();
echo '<hr>';

$oAlice = new Femme( 'Alice' );
$oAlice->faireDuSport ();
echo '<br/>';
$oAlice->seDivertir ();
echo '<br/>';
echo 'Sexe : ', $oAlice->getSexe ();

echo '<br/><br/>';

$oBob = new Homme( 'Bobby' );
$oBob->faireDuSport ();
echo '<br/>';
$oBob->seDivertir ();
echo '<br/>';
echo 'Sexe : ', $oBob->getSexe ();

final class JeuneGarcon extends Homme {

  /**
   * Construit l'objet JeuneGarcon
   *
   * @param string $nom Nom du jeune garcon
   *
   * @return void
   */
  public function __construct ( $nom ) {

    parent::__construct ( $nom );
  }
}

//class Bebe extends JeuneGarcon {
// // Class lève erreur car JH est classe finale
//}

?>
