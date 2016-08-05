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


  <div id="myAffP"></div>
</section>
<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/gc7.js"></script>
<script src="js/div.js"></script>

<script>
  $(function () {

//    $('img').each(function(index){
//      this.src = 'images2/i' + (index+1) + '.png';
//    });
    $('h2').each(function () {
      var elemH2 = $(this);
      elemH2.replaceWith('<h3>' + elemH2.text() + '</h3>');
    });
    $('li:first').clone().insertBefore('li:last');
    $('li').wrapInner('<font color="red"><b><i><u>');
    $('li:last').prev().remove();

  });
</script>


</body>
</html>
