(function(window){var svgSprite='<svg><symbol id="icon-icon" viewBox="0 0 1024 1024"><path d="M463.121779 125.44199c0-33.995255 29.188786-61.538565 65.182558-61.538565 35.999912 0 65.172325 27.54331 65.172325 61.538565l0 342.323553c0 33.985022-29.172413 61.533448-65.172325 61.533448-35.994796 0-65.182558-27.548426-65.182558-61.533448L463.121779 125.44199 463.121779 125.44199zM512.005117 960.095551c-224.976938 0-407.359778-172.21527-407.359778-384.640334 0-163.541727 108.297518-302.880215 260.71079-358.520443L365.356129 353.862353c-78.180594 46.232974-130.354883 128.068817-130.354883 221.592864 0 144.455019 124.027781 261.551948 277.004895 261.551948 152.98837 0 276.999778-117.096928 276.999778-261.551948 0-79.858816-38.009685-151.2334-97.760534-199.215204L691.245384 230.454696c134.977157 62.657039 228.110301 193.397708 228.110301 345.011778C919.364895 787.880281 736.982054 960.095551 512.005117 960.095551L512.005117 960.095551zM512.005117 960.095551"  ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"  ></path></symbol><symbol id="icon-brush_fill" viewBox="0 0 1024 1024"><path d="M879.04 323.36l-176.8-176.768a64.032 64.032 0 0 0-90.464 0.224l-67.36 67.392 44.864 44.64 0.96-0.192h0.032l176.64 176.576 30.304 30.4 14.848 14.88 66.72-66.72a64 64 0 0 0 0.224-90.432M325.888 815.36l-13.6-13.632-88.32-88.64-14.08-14.144-40.704-43.392L160 645.76v156.128c0 35.136 28.576 63.68 63.68 63.68h154.208l-11.648-11.2-40.352-38.976zM545.024 303.872l-45.248-45.056L179.616 578.976l45.248 45.248 176.544 176.704 45.184 45.024 318.976-318.976-43.936-46.496z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)