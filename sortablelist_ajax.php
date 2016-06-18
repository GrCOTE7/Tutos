<!DOCTYPE html>
<html>
<head>
  <title>Tuto</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="uikit/src/less/uikit.css"/>
  <link rel="stylesheet" href="css/gc7.css">
</head>

<body>

<div id="maingc7">
  <h1>Tuto</h1>


  <div class="uk-container uk-container-center">

    <ul class="uk-sortable uk-list uk-list-space" data-uk-sortable="{handleClass:'uk-panel'}">
      <li data-id="1">
        <div class="uk-panel uk-panel-box">
          <div class="uk-badge uk-badge-notification uk-panel-badge">0</div>
          <strong>Item 1</strong>
        </div>
      </li>
      <li data-id="2">
        <div class="uk-panel uk-panel-box">
          <div class="uk-badge uk-badge-notification uk-panel-badge">0</div>
          <strong>Item 2</strong>
        </div>
      </li>
      <li data-id="3">
        <div class="uk-panel uk-panel-box">
          <div class="uk-badge uk-badge-notification uk-panel-badge">0</div>
          <strong>Item 3</strong>
        </div>
      </li>
    </ul>
    
    <button type="button" class="uk-button uk-button-success">Save</button>

  </div>


</div>
<script src="js/jquery-2.2.4.min.js"></script>
<script src="uikit/docs/js/uikit.min.js"></script>
<script src="uikit/src/js/components/sortable.js"></script>
<script src="sortablelist_ajax.php.js"></script>
</body>
</html>
