(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},105:function(e,t){},136:function(e,t){},137:function(e,t){},179:function(e,t,n){},94:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";n.r(t);var a=n(86),i=n(87),r=n(92),c=n(88),o=n(93),s=n(11),f=n.n(s),u=n(89),d=n.n(u),l=n(90),v=(n(5),n(179),function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).videoRef=f.a.createRef(),n.canvasRef=f.a.createRef(),n.detectFrame=function(e,t){t.detect(e).then(function(a){n.renderPredictions(a),requestAnimationFrame(function(){n.detectFrame(e,t)})})},n.renderPredictions=function(e){var t=n.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var a="16px sans-serif";t.font=a,t.textBaseline="top",e.forEach(function(e){var n=e.bbox[0],i=e.bbox[1],r=e.bbox[2],c=e.bbox[3];t.strokeStyle="#00FFFF",t.lineWidth=4,t.strokeRect(n,i,r,c),t.fillStyle="#00FFFF";var o=t.measureText(e.class).width,s=parseInt(a,10);t.fillRect(n,i,o+4,s+4)}),e.forEach(function(e){var n=e.bbox[0],a=e.bbox[1];t.fillStyle="#000000",t.fillText(e.class,n,a)})},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var t=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise(function(t,n){e.videoRef.current.onloadedmetadata=function(){t()}})}),n=l.a();Promise.all([n,t]).then(function(t){e.detectFrame(e.videoRef.current,t[0])}).catch(function(e){console.error(e)})}}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("video",{className:"size",autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,width:"600",height:"500"}),f.a.createElement("canvas",{className:"size",ref:this.canvasRef,width:"600",height:"500"}))}}]),t}(f.a.Component)),h=document.getElementById("root");d.a.render(f.a.createElement(v,null),h)}},[[94,2,1]]]);
//# sourceMappingURL=main.617f48a4.chunk.js.map