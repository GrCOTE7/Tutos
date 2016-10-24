<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 24/10/16
 * Time: 11:44
 */
class MaClasse implements Iterator {

  protected $n;
  const MAX = 5;

  public function rewind () {

    $this->n = 0;
  }

  public function next () {

    $this->n++;
  }

  public function key () {

    return 'increment ' . ( $this->n + 1 );
  }

  public function current () {

    return $this->n;
  }

  public function valid () {

    return $this->n <= self::MAX;
  }
}

$c = new MaClasse();
foreach ( $c as $key => $val ) {
  echo $key, ' : ', $val, '<br/>';
}
vdl ( $c );
echo 'Autres interfaces natives:';
vdl ( get_declared_interfaces () );
