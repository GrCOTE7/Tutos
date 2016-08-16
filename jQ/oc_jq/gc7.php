<!DOCTYPE html>
<html>
<head>
  <title>Tuto jQ</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../../uikit/src/less/uikit.css"/>
  <link rel="stylesheet" href="css/gc7.css">

  <style>

    
  </style>

</head>

<body>
<section class="block_gc7" id="output">

  <button id="enchainer">Enchaîner les animations</button>
  <button id="nePasEnchainer">Ne pas enchaîner les animations</button>
  <br/>
  <button id="executerEnMemeTemps">Exécuter les animations en même temps</button>
  <button id="etatInitial">État initial</button>
  <br/><br/>
  <img src="tp_qcm/bon.png" style="border: 2px black solid;">

  <!--  <img src="tp_qcm/bon.png">-->
  <!--  <img src="tp_qcm/mauvais.png">-->
  <!--  <img src="tp_qcm/question.png">-->


  <div id="myAffP"></div>
</section>
<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/gc7.js"></script>
<script src="js/div.js"></script>

<script>
  $(function () {


    $('#enchainer').click(function () {
      $('img').animate({'border-width': '100'}, 1500)
        .animate({'width': '-=100'}, 1500);
    });
    $('#nePasEnchainer').click(function () {
      $('img').animate({'border-width': '100'}, {queue: false, duration: 1500})
        .animate({'width': '-=100'}, 1500);
    });
    $('#executerEnMemeTemps').click(function () {
      $('img').animate({'border-width': '100', 'width': '-=100'}, 1500);
    });
    $('#etatInitial').click(function () {
      $('img').css({'border-width': '2px', width: '200'});
    });


    //   $('h2').each(function () {
    //      var elemH2 = $(this);
    //      elemH2.replaceWith('<h3>' + elemH2.text() + '</h3>');
    //    });
    //    $('li:first').clone().insertBefore('li:last');
    //    $('li').wrapInner('<font color="red"><b><i><u>');
    //    $('li:last').prev().remove();

  });
</script>


</body>
</html>
