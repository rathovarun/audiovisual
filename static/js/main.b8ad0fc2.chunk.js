(this.webpackJsonpaudiovisual=this.webpackJsonpaudiovisual||[]).push([[0],{11:function(t,e,a){t.exports=a(20)},16:function(t,e,a){},18:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(8),r=a.n(o),c=(a(16),a(6)),s=a.n(c),u=a(9),h=a(1),l=a(2),d=a(5),v=a(3),m=a(4),p=(a(18),a(19),a(10)),f=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).canvas=i.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var t=this.props.audioData,e=this.canvas.current,a=e.height,n=e.width,i=e.getContext("2d"),o=0,r=1*n/t.length;i.lineWidth=2,i.strokeStyle="#000000",i.clearRect(0,0,n,a),i.beginPath(),i.moveTo(0,a/2);var c,s=Object(p.a)(t);try{for(s.s();!(c=s.n()).done;){var u=c.value/255*a;i.lineTo(o,u),o+=r}}catch(h){s.e(h)}finally{s.f()}i.lineTo(o,a/2),i.stroke()}},{key:"render",value:function(){return i.a.createElement("canvas",{width:"300",height:"300",ref:this.canvas})}}]),a}(n.Component),y=(n.Component,function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={audioData:new Uint8Array(0)},n.tick=n.tick.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(this.props.audio),this.source.connect(this.analyser),this.rafId=requestAnimationFrame(this.tick)}},{key:"tick",value:function(){this.analyser.getByteTimeDomainData(this.dataArray),this.setState({audioData:this.dataArray}),this.rafId=requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rafId),this.analyser.disconnect(),this.source.disconnect()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,{audioData:this.state.audioData}),i.a.createElement("h1",null,"Linear"))}}]),a}(n.Component)),g=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={audio:null},n.toggleMicrophone=n.toggleMicrophone.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"getMicrophone",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 2:e=t.sent,this.setState({audio:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"stopMicrophone",value:function(){this.state.audio.getTracks().forEach((function(t){return t.stop()})),this.setState({audio:null})}},{key:"toggleMicrophone",value:function(){this.state.audio?this.stopMicrophone():this.getMicrophone()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"controls"},i.a.createElement("button",{onClick:this.toggleMicrophone},this.state.audio?"Stop microphone":"Get microphone input")),this.state.audio?i.a.createElement(y,{audio:this.state.audio}):"")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.b8ad0fc2.chunk.js.map