<?php

/**
 * Created by PhpStorm.
 * User: cote
 * Date: 22/10/16
 * Time: 17:35
 */
class SearchEngine {

  /**
   * Effectue une recherche dans la base de données à
   * partir des critères fournis en argument
   *
   * @param array $conditions Tableau de critères de recherche
   *
   * @return array $return Tableau des résultats
   * @see SPDO
   */
  public function search ( $conditions = [ ] ) {

    $query = 'SELECT id FROM table';

    if ( sizeof ( $conditions ) > 0 ) {
      $query .= ' WHERE ' . implode ( ' AND ', $conditions );
    }

    // Exécution de la requête SQL avec une classe PDO
//    $result = SPDO::getInstance ()->query ( $query );
//    $return = $result->fetchAll ( PDO::FETCH_ASSOC );

//    return $return;
    return $query;
  }

  public function __call ( $method, $args ) {

    if ( preg_match ( '#^searchBy#i', $method ) ) {
      $searchConditions = str_replace ( 'searchBy', '', $method );
      vdl ( $searchConditions );
      $searchCriterias = explode ( 'And', $searchConditions );
      vdl ( $searchCriterias );
      $conditions  = [ ];
      $nbCriterias = sizeof ( $searchCriterias );

      for ( $i = 0; $i < $nbCriterias; $i++ ) {
        $conditions[] = strtolower ( $searchCriterias[ $i ] ) . ' = "' . $args[ $i ] . '"';
      }

      vdl ( $conditions );

      return $this->search ( $conditions );
    }

    return null;
  }
}

echo 'searchEngine:';
$mySearchEngine = new SearchEngine();
echo $mySearchEngine->searchByNameAndDate ( 'palleas', '25/07/1987' );
