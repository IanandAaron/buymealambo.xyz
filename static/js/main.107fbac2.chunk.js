(this["webpackJsonpsomething-catchy"]=this["webpackJsonpsomething-catchy"]||[]).push([[0],{134:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(38),s=n.n(r),i=(n(134),n(22)),o=n(23),l=n(28),h=n(27),j=n(117),d=n(212),b=n(207),u=n(14),x=n(116),O=n.n(x),p=n(115),m=n.n(p),v=n(216),f=n(221),g=n(219),k=n(222),C=n(220),y=n(118),S=n(103),w=n.n(S),N=n(218),T=n(214),B=n(211),A=n(213),M=n(50),P=n.p+"static/media/logo.6fb4a0cc.jpg",E=n(1),G=["Home","About","Docs"],L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={anchorElNav:null,setAnchorElNav:null},e.handleOpenNavMenu=function(t){return e.setState({anchorElNav:t.currentTarget})},e.handleCloseNavMenu=function(){return e.setState({anchorElNav:null})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsx)(v.a,{position:"fixed",children:Object(E.jsx)(N.a,{maxWidth:"xl",children:Object(E.jsxs)(g.a,{disableGutters:!0,children:[Object(E.jsx)(C.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:Object(E.jsx)(A.a,{alt:"Logo",src:P})}),Object(E.jsxs)(f.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(E.jsx)(k.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:this.handleOpenNavMenu,color:"inherit",children:Object(E.jsx)(w.a,{})}),Object(E.jsx)(y.a,{id:"menu-appbar",anchorEl:this.state.anchorElNav,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(this.state.anchorElNav),onClose:this.handleCloseNavMenu,sx:{display:{xs:"block",md:"none"}},children:G.map((function(t){return Object(E.jsx)(B.a,{onClick:e.handleCloseNavMenu,component:M.b,to:t,children:Object(E.jsx)(C.a,{textAlign:"center",children:t})},t)}))})]}),Object(E.jsx)(C.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:Object(E.jsx)(A.a,{alt:"Logo",src:P})}),Object(E.jsx)(f.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:G.map((function(t){return Object(E.jsx)(T.a,{component:M.b,to:t,onClick:e.handleCloseNavMenu,sx:{my:2,color:"white",display:"block"},children:t},t)}))}),Object(E.jsx)(f.a,{sx:{flexGrow:0},children:Object(E.jsx)(k.a,{edge:"end",color:"inherit","aria-label":"mode",onClick:this.props.handler,children:this.props.icon})})]})})})}}]),n}(c.a.Component),D=L,F=n(215),z=n(208),H=n(88),I=n(13),W=n(104),J=n.n(W),_=n(41),q=n(206),K=n(209),Q=n(113),R=n.n(Q),U=n(89),V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};var X=function(e){var t=c.a.useState(!1),n=Object(I.a)(t,2),a=n[0],r=n[1],s=Object(E.jsx)("script",{src:"https://cdn.jsdelivr.net/gh/isurewould/phantom-wallet-button@main/main.js",buttontext:e.buttonText}),i=Object(_.a)(),o={size:Object(q.a)(i.breakpoints.down("sm"))?"small":"large"};return Object(E.jsxs)("div",{children:[Object(E.jsx)(T.a,Object(H.a)(Object(H.a)({},o),{},{variant:"contained",startIcon:Object(E.jsx)(R.a,{}),onClick:function(){return r(!0)},children:"Generate Button"})),Object(E.jsx)(K.a,{open:a,onClose:function(){return r(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(E.jsxs)(f.a,{sx:V,children:[Object(E.jsx)(C.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Javascript Snippet"}),Object(E.jsx)("div",{className:"CodeBlock",children:Object(E.jsx)(U.a,{text:J.a.renderToStaticMarkup(s),language:"javascript",showLineNumbers:!1,theme:U.b,wrapLines:!0,codeBlock:!0})})]})})]})},Y=(n(150),n(114)),Z=n.n(Y),$=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e))._onPickerButton=function(){var e=a.state.showPicker;a.setState({showPicker:!e}),console.log("Show Picker: "+a.state.showPicker)},a.state={showPicker:!1},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:this._onPickerButton,children:Object(E.jsx)(Z.a,{})})})}}]),n}(c.a.Component),ee=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={buttonText:""},e.handleChange=function(t){return e.setState({buttonText:t.target.value})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsx)("div",{className:"Home",children:Object(E.jsx)("div",{className:"CreateButton",ref:function(t){return e.div=t},children:Object(E.jsx)(N.a,{maxWidth:"sm",children:Object(E.jsxs)(F.a,{container:!0,spacing:1,alignItems:"center",style:{minHeight:"100vh"},children:[Object(E.jsx)(F.a,{item:!0,xs:2,children:Object(E.jsx)($,{})}),Object(E.jsx)(F.a,{item:!0,xs:5,children:Object(E.jsx)(z.a,{id:"filled-basic",label:"Button Text",variant:"filled",onChange:this.handleChange})}),Object(E.jsx)(F.a,{item:!0,xs:5,children:Object(E.jsx)(X,{buttonText:this.state.buttonText})})]})})})})}}]),n}(c.a.Component),te=ee,ne=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(E.jsx)("div",{className:"About"})}}]),n}(c.a.Component),ae=ne,ce=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(E.jsx)("div",{className:"Docs"})}}]),n}(c.a.Component),re=ce,se=(n(151),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={darkState:!1,setDarkState:!1},e.handleThemeChange=function(){return e.setState({darkState:!e.state.darkState})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.darkState?"dark":"light",t=this.state.darkState?Object(E.jsx)(m.a,{}):Object(E.jsx)(O.a,{}),n=Object(j.a)({palette:{mode:e}});return Object(E.jsxs)(d.a,{theme:n,children:[Object(E.jsx)(b.a,{}),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(D,{darkChecked:this.state.darkState,icon:t,handler:this.handleThemeChange}),Object(E.jsxs)(u.c,{children:[Object(E.jsx)(u.a,{exact:!0,path:"/",element:Object(E.jsx)(te,{icon:t,darkState:this.state.darkState,handleChange:this.handleChange,handleThemeChange:this.handleThemeChange})}),Object(E.jsx)(u.a,{exact:!0,path:"/Home",element:Object(E.jsx)(te,{icon:t,darkState:this.state.darkState,handleChange:this.handleChange,handleThemeChange:this.handleThemeChange})}),Object(E.jsx)(u.a,{path:"/About",element:Object(E.jsx)(ae,{})}),Object(E.jsx)(u.a,{path:"/Docs",element:Object(E.jsx)(re,{})})]})]})]})}}]),n}(c.a.Component)),ie=se,oe=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,408)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(M.a,{children:Object(E.jsx)(a.Fragment,{children:Object(E.jsx)(ie,{})})})}),document.getElementById("root")),oe()}},[[152,152,153]]]);
//# sourceMappingURL=main.107fbac2.chunk.js.map