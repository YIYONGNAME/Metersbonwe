(function(window){var svgSprite='<svg><symbol id="icon-fenxiang" viewBox="0 0 1024 1024"><path d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z" fill="#3D3D3D" ></path></symbol><symbol id="icon-xihuan" viewBox="0 0 1024 1024"><path d="M523.733333 841.024l33.173334-32.576 99.690666-97.813333c70.976-69.632 120.32-117.973333 138.709334-135.893334 59.008-57.514667 93.248-121.28 99.626666-184.234666 6.250667-61.44-15.488-119.744-61.589333-164.672-44.992-43.84-98.88-61.909333-157.034667-52.906667-49.365333 7.616-101.034667 34.624-150.016 78.848a21.333333 21.333333 0 0 1-28.586666 0c-48.981333-44.224-100.650667-71.232-150.016-78.869333-58.154667-8.96-112.042667 9.088-157.034667 52.928-46.101333 44.928-67.84 103.210667-61.610667 164.693333 6.4 62.933333 40.64 126.72 99.648 184.213333a100207.573333 100207.573333 0 0 1 145.92 142.826667l24.256 23.765333L512 852.522667l11.733333-11.498667z m-11.733333 11.52l-1.493333 1.429333A2.133333 2.133333 0 0 1 512 853.333333c0.512 0 1.045333 0.213333 1.493333 0.64l-1.493333-1.450666z m157.781333-721.792c71.637333-11.093333 138.901333 11.477333 193.344 64.533333 55.317333 53.930667 81.834667 124.992 74.282667 199.530667-7.466667 73.642667-46.549333 146.368-112.32 210.474667-18.346667 17.898667-67.669333 66.218667-138.453333 135.637333-31.829333 31.232-65.706667 64.448-99.84 97.984L553.6 871.466667l-13.184 12.949333a40.554667 40.554667 0 0 1-56.832 0l-114.602667-112.64-24.213333-23.722667a677626.346667 677626.346667 0 0 0-145.856-142.762666C133.141333 541.184 94.08 468.48 86.613333 394.816c-7.552-74.538667 18.944-145.6 74.282667-199.530667 54.442667-53.056 121.706667-75.605333 193.344-64.533333 53.162667 8.213333 107.093333 34.688 157.781333 76.949333 50.709333-42.24 104.618667-68.736 157.781334-76.949333z" fill="#3D3D3D" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)