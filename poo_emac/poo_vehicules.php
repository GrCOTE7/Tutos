<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 20/10/16
 * Time: 12:03
 */

include 'Vehicule.php';

// Instanciation de l'objet : appel implicite à la méthode __construct()
$monVehicule = new Vehicule();

// Mise à jour de la marque du véhicule
$monVehicule->marque = 'Peugeot';

// Affichage de la marque du véhicule
echo $monVehicule->marque;

vdl($monVehicule);
