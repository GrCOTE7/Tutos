<!DOCTYPE html>
<html>
<head>
  <title>Tuto jQ</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../uikit/src/less/uikit.css"/>
  <link rel="stylesheet" href="../css/gc7.css">
  <!--  <link rel="stylesheet" href="../css/gc7.less">-->
</head>

<body>
<!--https://github.com/oc-courses/intro-javascript-->

<section class="block_gc7" id="output">
  <div class="centered">
    <iframe src="file1.html" width="300" height="150" id="myFrame" name="myFrame"
            style="border: 2px solid red; -webkit-border-radius: 7px;-moz-border-radius: 7px;border-radius: 7px;margin: 5px auto 10px auto;"
            class="centered blue">
    </iframe>
  </div>
  <? // include 'ajax01.php'; ?>
  <div id="myAffP"></div>
  <!--  <div id="monHorloge"></div>-->
  <? // echo  date('d-m-Y H:i:s')
  $titre = 'Test';
  $maVar = <<<EOS
<h1>$titre</h1>
<p>Ok</p>
EOS;
  echo $maVar;

  ?>
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
<!--<script src="dom_list_all_validationjs.js"></script>-->
</body>
</html>
