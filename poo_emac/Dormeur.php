<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 18:58
 */
class Dormeur {

  /**
   * Age du nain Dormeur
   *
   * @var integer
   * @access protected
   */
  protected $_age;

  /**
   * Le nom porte-t-il un bonnet ?
   *
   * @var boolean
   * @access protected
   */
  protected $_aSonBonnet;

  /**
   * Sa couleur préférée
   *
   * @var string
   * @access private
   */
  private $_couleurPreferee;

  /**
   * Ses hobbies
   *
   * @var array
   * @access public
   */
  public $_gouts;

  /**
   * Constructeur de la classe
   */
  public function __construct () {

    $this->_age             = 19;
    $this->_aSonBonnet      = true;
    $this->_couleurPreferee = 'rouge';
    $this->_gouts           = [ 'musique', 'cinéma', 'curling' ];
  }

  /**
   * Méthode magique __sleep() Appelée lors d’un serialize()
   *
   * @return Array la liste des paramètres à conserver
   */
  public function __sleep () {

    echo 'Bon ben moi, je vais dormir.';

    return [ '_age', '_aSonBonnet', '_couleurPreferee'

//    ,'_gouts'

    ]; // Retourne Array des propriétés à conserver
  }

  /**
   * Méthode magique __wakeup() Appelée lors d’un unserialize()
   *
   * @return void
   */
  public function __wakeup () {

    echo 'bon ben moi, je vais me faire un café.';
  }
}

$oDormeur = new Dormeur();
vdl ( $oDormeur );
$sSerialized   = serialize ( $oDormeur );
$oUnserialized = unserialize ( $sSerialized );

vdl ( $sSerialized, $oUnserialized );
