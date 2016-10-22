<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 18:51
 */
class Strumpf {

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
}

$oStrumpf      = new Strumpf();
$sSerialized   = serialize ( $oStrumpf );
$oUnserialized = unserialize ( $sSerialized );

vdl ( $sSerialized, $oUnserialized );

?>
