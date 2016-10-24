<!DOCTYPE html>
<html>
<head>
  <title>Tuto jQ</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="uikit/src/less/uikit.css"/>
  <link rel="stylesheet" href="css/gc7.css">
</head>

<body>
<!--https://github.com/GrCOTE7/Tutos-->
<section class="block_gc7" id="output">

  <!--  <div id="monHorloge"></div>-->
  <?
  /**
   * vdl var_dump_li
   * Ma fonction qui présente une variable avec \< pre >
   *
   * @param $v Nom de la variable
   */
  function vdl ( $v ) {

    $args = func_get_args ();

    echo '<pre>';
    foreach ( $args as $v ) {

      var_dump ( $v );
    }
    echo '</pre>';
  }

  //  include 'poo_emac/personne.php'; // Bese des classes
  //  include 'poo_emac/vehicule.php'; // Héritage
  //  include 'poo_emac/kid.php'; // Méthodes magiques __get() & __set(=
  include 'poo_emac/Manchot.php'; // Méthodes __call() (Permet d'appeler méthode non déclarée

  ?>

  <div id="myAffP"></div>
</section>
<!--<script src=" js/jquery-2.2.4.min.js"></script>-->
<!--<script src="uikit/src/js/components/sortable.js"></script>-->

<script src="js/dom_js.js"></script>
<script src="js/div.js"></script>


<!--<script src="jqgc7.js"></script>-->
<!--<script src="js.js"></script>-->

</body>
</html>
