<!DOCTYPE html>
<html>
<head>
  <title>Tuto JS</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../uikit/src/less/uikit.css"/>
  <link rel="stylesheet" href="../css/gc7.css">
  <!--  <link rel="stylesheet" href="../css/gc7.less">-->
  <script>
    function afficherDestination(lien) {
      alert("Ce lien mene ici : " + lien.href);
    }

    function voirSelection(liste) {
      var numero = liste.selectedIndex;
      var valeur = liste.options[numero].value;
      aff("Vous avez choisi : " + valeur);
      // En plus court
      // aff(liste.options[liste.selectedIndex].value);
    }
  </script>
</head>

<body>
<!--https://github.com/oc-courses/intro-javascript-->

<section class="block_gc7" id="output">
  Ok (HTML)
  <div id="myAffP"></div>
  <!--  <div id="monHorloge"></div>-->

</section>
<!--<script src=" js/jquery-2.2.4.min.js"></script>-- >
  < !-- < script
  src = "uikit/docs/js/uikit.min.js" ></script>-->
<!--<script src="uikit/src/js/components/sortable.js"></script>-->
<!--<script src="jqgc7.js"></script>-->
<!--<script src="js.js"></script>-->
<!--<script src="horloge.js"></script>-->
<!--<script src="num2Letters.js"></script>-->
<!--<script src="ajax01.js"></script>-->
<script src="dom_js.js"></script>
<script src="div.js"></script>
<!--<script src="variables_speciales.js"></script>-->
<!--<script src="draggable.js"></script>-->
<!--<script src="draggable_api.js"></script>-->
<!--<script src="dom_list_all_validationjs.js"></script>-->
</body>
</html>
