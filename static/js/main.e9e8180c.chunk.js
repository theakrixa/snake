(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{13:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),o=n(4),l=n(3),c=n(0),i=n.n(c),s=n(6),u=n.n(s),h=(n(13),0),f="right",v=Array(400).fill("no"),d=[];d[0]=190;var m=Math.floor(400*Math.random()),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"returnSquare",value:function(){return"head"===this.props.val?i.a.createElement("button",{className:"head"}):"body"===this.props.val?i.a.createElement("button",{className:"body"}):"no"===this.props.val?i.a.createElement("button",{className:"no"}):"food"===this.props.val?i.a.createElement("button",{className:"food"}):void 0}},{key:"render",value:function(){return i.a.createElement("span",null,this.returnSquare())}}]),n}(i.a.Component),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"renS",value:function(){return this.props.square.map((function(e){return i.a.createElement(p,{val:e})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"grid1"},i.a.createElement("h1",null,"Score Is:",h)),i.a.createElement("div",{className:"grid"},this.renS()),i.a.createElement("div",{className:"grid2"}))}}]),n}(i.a.Component),k=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={s:v,interval:null},r}return Object(r.a)(n,[{key:"generatefood",value:function(){if(d[0]===m){++h,m=Math.floor(400*Math.random());for(var e=0;e<d.length;e++)m===d[e]&&(m=Math.floor(400*Math.random()),e=0)}else d.pop()}},{key:"checkgame",value:function(){for(var e=1;e<d.length;e++)if(d[0]===d[e]){v.fill("no"),alert("Game Over \n Your score is:"+h+"\n press OK for a new game"),h=0;var t=d[0];(d=[])[0]=t}}},{key:"movebord",value:function(){switch(d.unshift(d[0]),window.addEventListener("keydown",(function e(t){switch(t.keyCode){case 37:"right"!==f&&(f="left");break;case 38:"down"!==f&&(f="up");break;case 39:"left"!==f&&(f="right");break;case 40:"up"!==f&&(f="down")}window.removeEventListener("keydown",e,!1)}),!1),f){case"right":d[0]%20===19&&(d[0]=d[0]-20),d[0]++;break;case"left":d[0]%20===0&&(d[0]=d[0]+20),d[0]=d[0]-1;break;case"up":d[0]<20&&(d[0]=d[0]+400),d[0]=d[0]-20;break;case"down":d[0]>379&&(d[0]=d[0]-400),d[0]=d[0]+20}this.generatefood()}},{key:"trial",value:function(){v.fill("no"),this.movebord(),v[d[0]]="head";for(var e=1;e<d.length;e++)v[d[e]]="body";return v[m]="food",this.checkgame(),v}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,{square:this.state.s}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({s:e.trial()})}),200)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),n}(i.a.Component),y=i.a.createElement(k,null);u.a.render(y,document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.e9e8180c.chunk.js.map