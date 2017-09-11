<!DOCTYPE html>
<!-- saved from url=(0032)http://chingweb.pancakeapps.com/ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="./Welcome to Pancake.io!_files/e7f564513b"></script><script src="./Welcome to Pancake.io!_files/nr-1044.min.js.下載"></script><script type="text/javascript" async="" src="./Welcome to Pancake.io!_files/ga.js.下載"></script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"e7f564513b","applicationID":"2031336","transactionName":"cQwPRhNXWFtQShlFTVAPCFFOUVpTUEA=","queueTime":0,"applicationTime":900,"agent":""}</script>
<script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o||n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({1:[function(e,n,t){function r(){}function o(e,n,t){return function(){return i(e,[c.now()].concat(u(arguments)),n?null:this,t),n?void 0:this}}var i=e("handle"),a=e(2),u=e(3),f=e("ee").get("tracer"),c=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,n){s[n]=o(d+n,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,o="function"==typeof n;return i(l+"tracer",[c.now(),e,t],r),function(){if(f.emit((o?"":"no-")+"fn-start",[c.now(),r,o],t),o)try{return n.apply(this,arguments)}finally{f.emit("fn-end",[c.now()],t)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=o(l+n)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,c.now()])}},{}],2:[function(e,n,t){function r(e,n){var t=[],r="",i=0;for(r in e)o.call(e,r)&&(t[i]=n(r,e[r]),i+=1);return t}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],3:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(o<0?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=r},{}],4:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function o(e){function n(e){return e&&e instanceof r?e:e?f(e,u,i):i()}function t(t,r,o,i){if(!d.aborted||i){e&&e(t,r,o);for(var a=n(o),u=m(t),f=u.length,c=0;c<f;c++)u[c].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function l(e,n){v[e]=m(e).concat(n)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(t)}function g(e,n){c(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var v={},y={},b={on:l,emit:t,get:w,listeners:m,context:n,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",f=e("gos"),c=e(2),s={},p={},d=n.exports=o();d.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(o.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){o.buffer([e],r),o.emit(e,n,t)}var o=e("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=h.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();c(y,function(n,t){e[n]||(e[n]=t)}),f("mark",["onload",a()+h.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function o(){"complete"===d.readyState&&i()}function i(){f("mark",["domContent",a()+h.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),f=e("handle"),c=e(2),s=e("ee"),p=window,d=p.document,l="addEventListener",m="attachEvent",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1044.min.js"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=n.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l]("DOMContentLoaded",i,!1),p[l]("load",r,!1)):(d[m]("onreadystatechange",o),p[m]("onload",r)),f("mark",["firstbyte",u],null,"api");var x=0,E=e(4)},{}]},{},["loader"]);</script>
  <title>Welcome to Pancake.io!</title>

  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link rel="stylesheet" media="screen" href="./Welcome to Pancake.io!_files/public.css">



  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(["_setAccount", "UA-26670425-1"]);
    _gaq.push(["_trackPageview"]);

    (function() {
      var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;
      ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
      var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);
    })();

  </script>
  <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="ByHICpAYtpNuMbfDxuOE4tnm8YaxkhfxCPxsIh79MPQEDdVStt26UKHgaI35kGzK6/Yy0B4ZUDtZmzD/BtEjKQ==">
</head>
<body>
  <div id="wrapper">
    
    <header>
      <div id="header_inner">加油好嗎~  測試用Web</div>
    </header>

    <div id="container">
      <h1>Getting Started</h1>

<p>Welcome to <a href="http://pancake.io/">Pancake.io</a>. Here's a quick how-to guide to get you up and running. Feel free to delete this file from your Pancake.io folder at any time.</p>

<ul>
  <li class="icon-fire"><a href="http://blog.pancake.io/">Blog</a></li>
  <li class="icon-gift"><a href="http://themes.pancake.io/">Themes</a></li>
  <li class="icon-info-sign"><a href="http://docs.pancake.io/">Guides</a></li>
  <li class="icon-twitter-sign"><a href="http://twitter.com/pancakeio">@pancakeio</a></li>
  <li class="icon-github-sign"><a href="http://github.com/pancakeio">Github</a></li>
</ul>

<h2>1. Basics</h2>

<p>We've added the <strong>Pancake.io</strong> folder to your Dropbox Apps folder. If you don't see it yet, please wait a moment for it to sync to your computer. It will appear in <strong>Dropbox &gt; Apps &gt; Pancake.io</strong></p>

<p>To create a web page, just add a file to the Pancake.io folder. Wait a couple of minutes for it to sync to Dropbox, and then refresh your dashboard to see it there. You'll be able to click on it and share the link with anyone. Updating the file will not change the link (unless you rename it).</p>

<p>We support a whole bunch of different file types: text files, images, pdfs, Microsoft Office files, and more.</p>

<p><strong>Advanced users</strong>: If you want to personalize your public pages, you can upload a CSS file under <a href="http://pancake.io/settings">Settings</a>.</p>

<p>If you need any additional help, or have any feedback or suggestions, we'd love to hear from you! Send an email to <a href="mailto:support@pancake.io">support@pancake.io</a>.</p>

<h2>2. Page Configuration</h2>

<p>At the top of this text file is configuration section that looks like this:</p>

<pre><code>---
title: Welcome to Pancake.io!
header: Welcome
---
</code></pre>

<p>This section can be added to your Pancake.io text files to enable additional functionality.</p>

<h2>3. Themes</h2>

<p>We have a small but growing <a href="http://themes.pancake.io/">collection of themes</a> you can check out.</p>

<h2>4. Formatting</h2>

<p>You can format text using Markdown. Here are some of the more common things you might want to use:</p>

<ul>
<li>If you surround some text with double asterisks, you get <strong>bold text</strong></li>
<li>Single asterisks <em>emphasize text</em></li>
<li>You can make a list pretty easily too with dashes</li>
</ul>

<p>For more see <a href="http://pancake.io/help">here</a>.</p>

<h2>5. Formatting (Advanced)</h2>

<p>Here are a few more things you can do with Markdown:</p>

<h3>Headers</h3>

<h1>Header 1</h1>

<h2>Header 2</h2>

<h3>Header 3</h3>

<h3>Quoted text</h3>

<blockquote>
<p>Lollipop toffee pastry candy canes jelly fruitcake. Candy canes soufflé cookie tootsie roll jelly tootsie roll jelly beans jelly beans gummies. Cotton candy brownie bear claw candy sweet gummi bears cheesecake candy sweet roll.</p>
</blockquote>

<p>Croissant bonbon tiramisu cake. Brownie danish brownie brownie toffee chocolate cake liquorice. Jujubes brownie applicake icing sweet roll biscuit. Fruitcake pudding applicake lemon drops chupa chups biscuit sesame snaps sesame snaps apple pie. Topping tiramisu fruitcake. Lemon drops muffin oat cake toffee halvah.</p>

<h3>Code Blocks</h3>

<p>Indent with four spaces for a code block:</p>

<pre><code>---
title: Welcome to Pancake.io!
header: Welcome
---
</code></pre>

<p>Code can also appear <code>inline</code>.</p>

<h3>Numbered Lists</h3>

<ol>
<li>Macaroon</li>
<li>Tootsie Roll</li>
<li>Biscuit</li>
<li>Gummi Bears</li>
</ol>

<h3>HTML works too</h3>

<table>
  <tbody><tr>
    <th>heading 1</th>
    <th>heading 2</th>
  </tr>
  <tr>
    <td>row 1, cell 1</td>
    <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td>row 2, cell 1</td>
    <td>row 2, cell 2</td>
  </tr>
</tbody></table>

    </div>


<footer>
  <a href="http://pancake.io/">Get your own free Dropbox-powered website at <span>Pancake.io</span></a> 
</footer>

  </div>


</body></html>
