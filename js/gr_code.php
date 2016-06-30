<?php
/**
 * Created by PhpStorm.
 * User: cote
 * Date: 30/06/16
 * Time: 13:24
 */

$prenoms = [
  'prenom'  => 'François',
  'nom'     => 'Dupont',
  'adresse' => '3 Rue du Paradis',
  'ville'   => 'Marseille' ];

foreach ( $prenoms as $k => $prenom ) {
//  echo ucfirst ( $k ) . ': ' . $prenom . '<br>';
}
?>
<style>
  #fileContent span {
    padding               : 3px 25px;
    border                : 1px solid #888;
    background-color      : #DDD;
    -webkit-border-radius : 5px;
    -moz-border-radius    : 5px;
    border-radius         : 5px;
    line-height           : 1.7;
  }

  .error {
    color : red;
  }
</style>
<p>
  Veuillez choisir quel est le fichier dont vous souhaitez voir le contenu :
</p>

<p>
  <input type="button" value="file1.txt"/>
  <input type="button" value="file2.txt"/>
  <br/><br/>
  <input type="button" value="unknown.txt"/>
</p>

<p id="fileContent">
  <span>Aucun fichier chargé</span>
</p>
