(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(2),i=n.n(r),c=n(5),o=n.n(c),s=(n(15),n(16),n(1)),l=n(3),u=n(6),d=n(7),h=n(9),f=n(8),v=(n(17),n.p+"static/media/zero.a10f561f.svg"),b=n.p+"static/media/cross.17a94979.svg",j=Array(9).fill(null),O=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],m={O:v,X:b},y=[{borderTop:"none",borderLeft:"none"},{borderTop:"none"},{borderTop:"none",borderRight:"none"},{borderLeft:"none"},{},{borderRight:"none"},{borderBottom:"none",borderLeft:"none"},{borderBottom:"none"},{borderBottom:"none",borderRight:"none"}],p={boardState:j,turn:"X",active:!0,winText:null,checks:!1},x=function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).reset=function(){r.setState(Object(l.a)(Object(l.a)({},p),{},{boardState:Array(9).fill(null)}))},r.computerMoves=function(){if(r.state.active&&"X"!==r.state.turn){var t,e=r.state.boardState,n=!1,a=Object(s.a)(O);try{for(a.s();!(t=a.n()).done;){var i,c=t.value,o=[],l=Object(s.a)(c);try{for(l.s();!(i=l.n()).done;){"O"===e[j=i.value]&&o.push(j)}}catch(x){l.e(x)}finally{l.f()}if(o.length>=2){var u,d=Object(s.a)(c);try{for(d.s();!(u=d.n()).done;)if(j=u.value,!o.includes(j)&&null===e[j])return r.handleMove(j),void(n=!0)}catch(x){d.e(x)}finally{d.f()}}}}catch(x){a.e(x)}finally{a.f()}if(!n){var h,f=Object(s.a)(O);try{for(f.s();!(h=f.n()).done;){c=h.value,o=[];var v,b=Object(s.a)(c);try{for(b.s();!(v=b.n()).done;){var j;"X"===e[j=v.value]&&o.push(j)}}catch(x){b.e(x)}finally{b.f()}if(o.length>=2){var m,y=Object(s.a)(c);try{for(y.s();!(m=y.n()).done;)if(j=m.value,!o.includes(j)&&null===e[j])return r.handleMove(j),void(n=!0)}catch(x){y.e(x)}finally{y.f()}}}}catch(x){f.e(x)}finally{f.f()}if(!n)for(;!n;){var p=Math.floor(9*Math.random());null===e[p]&&(r.handleMove(p),n=!0)}}}},r.checkDrawCondition=function(){return!(!r.state.active||0!==r.state.boardState.filter((function(t){return null===t})).length)},r.checkWinCondition=function(t){var e,n=r.state.boardState,a=!1,i=Object(s.a)(O);try{for(i.s();!(e=i.n()).done;){var c=e.value;a=!0;var o,l=Object(s.a)(c);try{for(l.s();!(o=l.n()).done;){if(n[o.value]!==t){a=!1;break}}}catch(u){l.e(u)}finally{l.f()}if(a)return!0}}catch(u){i.e(u)}finally{i.f()}return!1},r.handleMove=function(t){if(r.state.active){var e=r.state.turn,n=r.state.boardState;null===n[t]&&(n[t]=e,e="X"===e?"O":"X",r.setState({boardState:n,turn:e,checks:!1}))}},r.renderGrid=function(){var t=r.state.boardState.map((function(t,e){return Object(a.jsx)("button",{onClick:function(){r.handleMove(e)},style:y[e],children:t&&Object(a.jsx)("img",{src:m[t],alt:t,style:{filter:"invert(100%)"}})})}));return Object(a.jsx)("div",{className:"grid",children:t})},r.state=Object(l.a)(Object(l.a)({},p),{},{computer:0,you:0}),r}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){if(this.state.active){if(!this.state.checks){if(this.checkWinCondition("O")){var t=this.state.computer;this.setState({active:!1,winText:"Computer wins!",computer:t+1})}else if(this.checkWinCondition("X")){var e=this.state.you;this.setState({active:!1,winText:"You win!",you:e+1})}else this.checkDrawCondition()&&this.setState({active:!1,winText:"Game is Draw"});this.setState({checks:!0})}this.state.checks&&this.computerMoves()}}},{key:"render",value:function(){var t=this.renderGrid(),e="X"===this.state.turn?"Your turn":"O's turn";return this.state.active||(e="Game Over"),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:"Tic Tac Toe"}),Object(a.jsx)("div",{className:"text",children:"You: ".concat(this.state.you," | Computer: ").concat(this.state.computer)}),Object(a.jsx)("div",{className:"text",children:e}),t,Object(a.jsx)("div",{className:"text",style:{fontSize:"42px"},children:this.state.winText||Object(a.jsx)(a.Fragment,{children:"\xa0"})}),Object(a.jsx)("button",{className:"restart-btn",onClick:this.reset,children:"Restart"})]})}}]),n}(i.a.Component);var g=function(){return Object(a.jsx)("div",{className:"App",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%"},children:Object(a.jsx)(x,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),k()}},[[18,1,2]]]);
//# sourceMappingURL=main.6c8f2d3e.chunk.js.map