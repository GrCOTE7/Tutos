<!DOCTYPE html>
<html>
<head>
  <title>Tuto jQ</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../../uikit/src/less/uikit.css"/>
  <link rel="stylesheet" href="css/gc7.css">


</head>

<body>
<section class="block_gc7" id="output">


  <button id="affiche">Faire apparaître les images</button>
  <button id="cache">Faire disparaître les images</button>
  <br/>

  <img src="tp_qcm/bon.png">
  <img src="tp_qcm/mauvais.png">
  <img src="tp_qcm/question.png">


  <div id="myAffP"></div>
</section>
<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/gc7.js"></script>
<script src="js/div.js"></script>

<script>
  $(function () {

    $('img').css('display', 'none');

    $('#affiche').click(function () {
      $('img').last().show(3000, function showNextOne() {
        $(this).prev('img').show(3000, showNextOne);
      });
    });

    $('#cache').click(function () {
      $('img').first().hide('slow', function hideNextOne() {
        $(this).next('img').hide('slow', hideNextOne);
      });
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
