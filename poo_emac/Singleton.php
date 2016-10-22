<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 18:13
 */
class Singleton {

  /**
   * Instance de la classe Singleton
   *
   * @var Singleton
   */
  protected static $_instance = null;

  /**
   * Constructeur de la classe
   *
   * @access protected
   */
  protected function __construct () {
  }

  /**
   * getInstance() : recuperation de l'instance de la classe
   *
   * @return Singleton
   */
  public static function getInstance () {

    if ( null === self::$_instance ) {
      self::$_instance = new Singleton();
    }

    return self::$_instance;
  }

  /**
   * Methode magique clone
   *
   * @return void
   */
  public function __clone () {

    throw new Exception( 'Are you Trying to clone me ? I\'m a Singleton dude !' );
  }
}

try {
  $oSingleton = Singleton::getInstance ();
  clone $oSingleton;
}
catch ( Exception $e ) {
  echo 'Oops, exception : ', $e->getMessage ();
}

