<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 18:38
 */
$iVar          = 7;
$sSerialized   = serialize ( $iVar );
$iUnserialized = unserialize ( $sSerialized );

vdl ( $sSerialized, $iUnserialized );

$aTableau = ['Riri','Fifi','Loulou','Donald','Picsou'];
$sSerialized   = serialize ( $aTableau );
$aUnserialized = unserialize ( $sSerialized );

vdl ( $sSerialized, $aUnserialized );
