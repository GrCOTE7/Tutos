<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 24/10/16
 * Time: 12:06
 */
class ArrayValue implements JsonSerializable {

  public function __construct ( array $array ) {

    $this->array = $array;
  }

  public function jsonSerialize () {

    return $this->array;
  }
}

//$array=[1,2,3];
$array = [ 'val1' => 1, 'val2' => 2 ];

$myArr = new ArrayValue( $array );
vdl ( $myArr );

echo json_encode ( new ArrayValue( $array ), JSON_PRETTY_PRINT ) . '<hr>';

date_default_timezone_set ( 'Europe/Paris' );

class Fruit implements JsonSerializable {

  public
    $type = 'Pomme',
    $lastEaten = null;

  public function __construct () {
    $this->lastEaten = new DateTime();
  }

  public function jsonSerialize () {
    return [
      'type'      => $this->type,
      //      'lastEaten' => $this->lastEaten->format ( DateTime::ISO8601 )
      'lastEaten' => $this->lastEaten->format ( 'd/m/Y h:i:s' )
    ];
  }
}

$myFruit = new Fruit();
vdl($myFruit);
$myFruitEncoded = json_encode ( new Fruit() );

echo $myFruitEncoded;

vdl(json_decode($myFruitEncoded));

?>
