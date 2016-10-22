<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 17:52
 */

include 'Point.php';

$oDot = new Point();
$oDot->setCoords ( 1, 2 );
vdl ( $oDot );

$oDot2 = clone $oDot;
// $oDot2 = $oDot; // Si pas clone, une seule et même instance
// (Décommenter pour voir)
$oDot2->setCoords ( 5, 7 );

vdl ( $oDot );
vdl ( $oDot2 );
