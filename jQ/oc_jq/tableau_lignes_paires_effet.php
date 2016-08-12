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


  <button id="affiche">Faire apparaître les lignes paires</button>
  <button id="cache">Faire disparaître les lignes paires</button>
  <br/>
  <table border>
    <tr>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tr>
    <tr>
      <td>d</td>
      <td>e</td>
      <td>f</td>
    </tr>
    <tr>
      <td>g</td>
      <td>h</td>
      <td>i</td>
    </tr>
    <tr>
      <td>j</td>
      <td>k</td>
      <td>l</td>
    </tr>
    <tr>
      <td>m</td>
      <td>n</td>
      <td>o</td>
    </tr>
  </table>


  <div id="myAffP"></div>
</section>
<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/gc7.js"></script>
<script src="js/div.js"></script>

<script>
  $(function () {


    $('tr:even').css('background', 'yellow');
    $('td').css('width', '200px')
      .css('text-align', 'center');
    jQuery.fx.speeds['slow'] = 1500;
    jQuery.fx.speeds['super-slow'] = 3000;
    $('#affiche').click(function () {
      $('tr:even').show('slow', 'swing');
    });
    $('#cache').click(function () {
      $('tr:even').hide('super-slow');
      console.log('Lignes disparues'); // Executé après effet
    });


    //   $('h2').each(function () {
    //      var elemH2 = $(this);
    //      elemH2.replaceWith('<h3>' + elemH2.text() + '</h3>');
    //    });
    //    $('li:first').clone().insertBefore('li:last');
    //    $('li').wrapInner('<font color="red"><b><i><u>');
    //    $('li:last').prev().remove();

  })
  ;
</script>


</body>
</html>
