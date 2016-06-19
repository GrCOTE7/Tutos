<!DOCTYPE html>
<html>
<head>
  <title>Tuto jQ</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../uikit/src/less/uikit.css"/>
  <link rel="stylesheet" href="../css/gc7.css">
</head>

<body>
<section>
  <div class="block_gc7" id="output">
    <!--  <h1>JS</h1>-->
    <!--  <p id="myP">Ceci est un paragraphe !</p>-->
    <p id='myAffP'></p>
    <!---->
  </div>
</section>
<div id="divTP4" class="block_gc7">
  <form enctype="multipart/form-data" method="post" action="upload.php">
    <fieldset>
      <legend>Uploader une image</legend>

      <div style="text-align: center">
        <label for="inputUpload">Image à uploader :</label>
        <input type="file" name="inputUpload" id="inputUpload"/>
        <br/><br/>
        <input type="submit" value="Envoyer"/>
      </div>
    </fieldset>
  </form>
</div>

<!--<script src=" js/jquery-2.2.4.min.js"></script>-- >
  < !-- < script
  src = "uikit/docs/js/uikit.min.js" ></script>-->
<!--<script src="uikit/src/js/components/sortable.js"></script>-->
<!--<script src="jqgc7.js"></script>-->
<!--<script src="js.js"></script>-->
<script src="dom_create04_js.js"></script>
</body>
</html>
