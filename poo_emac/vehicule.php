<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 20/10/16
 * Time: 12:03
 */

include 'Vehicule.php';

// Instanciation de l'objet : appel implicite à la méthode __construct()
$maVoiture = new Voiture( 'Renault' );

// Mise à jour de la marque du véhicule
$maVoiture->marque = 'Peugeot';

vdl ( $maVoiture );

// Le véhicule démarre
$maVoiture->demarrer ();
$maVoiture->reparer ();

