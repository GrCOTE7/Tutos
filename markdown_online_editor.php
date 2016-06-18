<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="js/jquery-2.2.4.min.js"></script>
  <script src="uikit/docs/js/uikit.min.js"></script>
  <link rel="stylesheet" href="uikit/src/less/uikit.css"/>

  <!-- Codemirror and marked dependencies -->
  <link rel="stylesheet" href="markdown_viewer/codemirror-5.15.2/lib/codemirror.css">
  <script src="markdown_viewer/codemirror-5.15.2/lib/codemirror.js"></script>
  <script src="markdown_viewer/codemirror-5.15.2/mode/markdown/markdown.js"></script>
  <script src="markdown_viewer/codemirror-5.15.2/addon/mode/overlay.js"></script>
  <script src="markdown_viewer/codemirror-5.15.2/mode/xml/xml.js"></script>
  <script src="markdown_viewer/codemirror-5.15.2/mode/gfm/gfm.js"></script>
  <script src="markdown_viewer/marked-master/lib/marked.js"></script>

  <!-- HTML editor CSS and JavaScript -->
  <link rel="stylesheet" href="uikit/src/less/components/htmleditor.css">
  <script src="uikit/src/js/components/htmleditor.js"></script>
  <style>
    body {
      background-color : #fff2c7;
      padding-bottom   : 200px;
    }

    #maingc7 {
      width  : 95%;
      margin : 0 auto;
    }

    #maingc7 .lio {
      border-radius : 10px;
      margin        : 0 auto;
      padding       : 5px 10px;
      text-align    : justify;
    }

  </style>
</head>

<body>

<div id="maingc7">
  <h1>Éditeurs en ligne GC7 - Html & Markdown</h1>
<textarea data-uk-htmleditor="{maxsplitsize:600}"><h1>Heading</h1>

<p>Lorem ipsum dolor sit <strong>amet</strong>, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. <a href="#">This is a link</a></p>

<ul>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ul>

<h2>Heading</h2>

<p>Ut enim ad <em>minim</em> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></textarea>

  <h3 class="tm-article-subtitle">Markup</h3>

  <pre><code>&lt;textarea data-uk-htmleditor&gt;...&lt;/textarea&gt;</code></pre>

  <hr class="uk-article-divider">

  <h2 id="markdown"><a href="#markdown" class="uk-link-reset">Markdown</a></h2>

  <p>You can also write markdown inside the HTML editor. Just add the <code>markdown:true</code> option to the data
    attribute.</p>

  <h3 class="tm-article-subtitle">Example</h3>

<textarea data-uk-htmleditor="{maxsplitsize:600, markdown:true}">#Heading

Lorem ipsum dolor sit **amet**, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [This is a link](#)

* Item
* Item
* Item

## Heading

Ut enim ad *minim* veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

<a href="#">This link is written in HTML</a>

## Voilà de quoi bien rédiger les README.md !!! ;-) !

</textarea>

</div>
</body>
</html>
