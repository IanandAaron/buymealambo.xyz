(this["webpackJsonpsomething-catchy"]=this["webpackJsonpsomething-catchy"]||[]).push([[0],{135:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(39),i=n.n(l),o=(n(135),n(36)),c=n(37),r=n(55),d=n(53),h=n(119),j=n(216),b=n(209),u=n(14),x=n(118),m=n.n(x),p=n(117),O=n.n(p),g=n(220),f=n(225),v=n(223),k=n(226),C=n(224),w=n(120),S=n(107),N=n.n(S),A=n(222),y=n(218),T=n(213),B=n(217),W=n(54),M=n.p+"static/media/logo.6fb4a0cc.jpg",E=n(1),z=["Home"],L=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={anchorElNav:null,setAnchorElNav:null},e.handleOpenNavMenu=function(t){return e.setState({anchorElNav:t.currentTarget})},e.handleCloseNavMenu=function(){return e.setState({anchorElNav:null})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsx)(g.a,{position:"fixed",children:Object(E.jsx)(A.a,{maxWidth:"xl",children:Object(E.jsxs)(v.a,{disableGutters:!0,children:[Object(E.jsx)(C.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:Object(E.jsx)(B.a,{alt:"Logo",src:M})}),Object(E.jsxs)(f.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(E.jsx)(k.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:this.handleOpenNavMenu,color:"inherit",children:Object(E.jsx)(N.a,{})}),Object(E.jsx)(w.a,{id:"menu-appbar",anchorEl:this.state.anchorElNav,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(this.state.anchorElNav),onClose:this.handleCloseNavMenu,sx:{display:{xs:"block",md:"none"}},children:z.map((function(t){return Object(E.jsx)(T.a,{onClick:e.handleCloseNavMenu,component:W.b,to:t,children:Object(E.jsx)(C.a,{textAlign:"center",children:t})},t)}))})]}),Object(E.jsx)(C.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:Object(E.jsx)(B.a,{alt:"Logo",src:M})}),Object(E.jsx)(f.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:z.map((function(t){return Object(E.jsx)(y.a,{component:W.b,to:t,onClick:e.handleCloseNavMenu,sx:{my:2,color:"white",display:"block"},children:t},t)}))}),Object(E.jsx)(f.a,{sx:{flexGrow:0},children:Object(E.jsx)(k.a,{edge:"end",color:"inherit","aria-label":"mode",onClick:this.props.handler,children:this.props.icon})})]})})})}}]),n}(s.a.Component),G=L,I=n(208),D=n(214),F=n(229),H=n(215),P=n(212),J=n(93),R=n(13),Y=(n(144),n(42)),q=n(207),K=n(210),Q=n(116),U=n.n(Q),V=n(94),X={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"60%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};var Z=function(e){var t=s.a.useState(!1),n=Object(R.a)(t,2),a=n[0],l=n[1],i='// Phantom Wallet Button\n<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.js"><\/script>\n<script\n  src="https://cdn.jsdelivr.net/gh/IanandAaron/phantom-wallet-button@latest/main.js"\n  id="solButton"\n  button-text='.concat(e.buttonText,"\n  network=").concat(e.network,"\n  destination-address=").concat(e.destinationAddress,"\n  sol-amount=").concat(e.solAmount,"\n><\/script>"),o=Object(Y.a)(),c={size:Object(q.a)(o.breakpoints.down("sm"))?"small":"large"};return Object(E.jsxs)("div",{children:[Object(E.jsx)(y.a,Object(J.a)(Object(J.a)({},c),{},{variant:"contained",startIcon:Object(E.jsx)(U.a,{}),onClick:function(){return l(!0)},children:"Generate Button"})),Object(E.jsx)(K.a,{open:a,onClose:function(){return l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(E.jsxs)(f.a,{sx:X,children:[Object(E.jsx)(C.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"HTML Snippet"}),Object(E.jsx)("div",{className:"CodeBlock",children:Object(E.jsx)(V.a,{customStyle:{overflowY:"scroll",borderRadius:"10px",boxShadow:"1px 2px 3px rgba(0,0,0,0.35)"},text:i,language:"html",theme:V.b,wrapLongLines:!0})})]})})]})},$=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleButtonChange=function(e){a.setState({buttonText:e.target.value})},a.handleDestinationChange=function(e){a.setState({destinationAddress:e.target.value})},a.handleSolAmountChange=function(e){a.setState({solAmount:e.target.value})},a.handleNetworkChange=function(e){a.setState({network:e.target.value})},a.state={buttonText:"",network:"",solAmount:"",destinationAddress:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsx)("div",{className:"Home",children:Object(E.jsx)("div",{className:"CreateButton",ref:function(t){return e.div=t},children:Object(E.jsx)(A.a,{maxWidth:"md",children:Object(E.jsxs)(I.a,{spacing:2,alignItems:"center",padding:20,children:[Object(E.jsx)(D.a,{fullWidth:!0,id:"filled-basic",label:"Button Text",variant:"filled",size:"small",onChange:this.handleButtonChange}),Object(E.jsx)(D.a,{fullWidth:!0,id:"filled-basic",label:"Destination Wallet Address",variant:"filled",size:"small",onChange:this.handleDestinationChange}),Object(E.jsx)(D.a,{fullWidth:!0,id:"filled-basic",label:"Sol Amount",variant:"filled",size:"small",onChange:this.handleSolAmountChange}),Object(E.jsxs)(F.a,{fullWidth:!0,children:[Object(E.jsx)(H.a,{id:"network-select-label",children:"Network"}),Object(E.jsxs)(P.a,{labelId:"network-select-label",id:"demo-simple-select",label:"Network",value:this.state.network,onChange:this.handleNetworkChange,children:[Object(E.jsx)(T.a,{value:"testnet",children:"testnet"}),Object(E.jsx)(T.a,{value:"devnet",children:"devnet"}),Object(E.jsx)(T.a,{value:"mainnet-beta",children:"mainnet-beta"})]})]}),Object(E.jsx)(Z,{buttonText:this.state.buttonText,network:this.state.network,destinationAddress:this.state.destinationAddress,solAmount:this.state.solAmount})]})})})})}}]),n}(s.a.Component),_=(n(152),function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleThemeChange=function(){return a.setState({darkState:!a.state.darkState})},a.state={darkState:!1,setDarkState:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.darkState?"dark":"light",t=this.state.darkState?Object(E.jsx)(O.a,{}):Object(E.jsx)(m.a,{}),n=Object(h.a)({palette:{mode:e}});return Object(E.jsxs)(j.a,{theme:n,children:[Object(E.jsx)(b.a,{}),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(G,{darkChecked:this.state.darkState,icon:t,handler:this.handleThemeChange}),Object(E.jsxs)(u.c,{children:[Object(E.jsx)(u.a,{exact:!0,path:"/",element:Object(E.jsx)($,{icon:t,darkState:this.state.darkState,handleChange:this.handleChange,handleThemeChange:this.handleThemeChange})}),Object(E.jsx)(u.a,{exact:!0,path:"/Home",element:Object(E.jsx)($,{icon:t,darkState:this.state.darkState,handleChange:this.handleChange,handleThemeChange:this.handleThemeChange})})]})]})]})}}]),n}(s.a.Component)),ee=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,416)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),l(e),i(e)}))};i.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(W.a,{children:Object(E.jsx)(a.Fragment,{children:Object(E.jsx)(_,{})})})}),document.getElementById("root")),ee()}},[[153,152,153]]]);
//# sourceMappingURL=main.a6243baa.chunk.js.map