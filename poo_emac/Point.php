<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 17:51
 */
class Point {

  /**
   * Abscisse du point
   *
   * @var integer
   */
  protected $_x = 0;

  /**
   * Ordonnée du point
   *
   * @var integer
   */
  protected $_y = 0;

  /**
   * Fixe les coordonnées du point
   *
   * @param integer $x Abscisse du point
   * @param integer $y Ordonnée du point
   *
   * @return void
   */
  public function setCoords ( $x, $y ) {

    $this->_x = (int) $x;
    $this->_y = (int) $y;
  }

}
