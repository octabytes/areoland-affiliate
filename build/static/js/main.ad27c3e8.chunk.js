(this["webpackJsonpareoland-affiliate"]=this["webpackJsonpareoland-affiliate"]||[]).push([[0],{491:function(e,t){},493:function(e,t){},506:function(e,t){},508:function(e,t){},536:function(e,t){},537:function(e,t){},542:function(e,t){},544:function(e,t){},551:function(e,t){},570:function(e,t){},671:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),o=n(51),s=n(40),l=n(464),u=n(132),j=n(705),d=n(710),b=n(45),p=n(10),f=n(144),O=n(208),h=n(442),g=n.n(h),m=n(27),x=function(e){return 0===Object.keys(e).length},v=n(5),w=Object(O.a)((function(e){return e.app}),(function(e){return e.user})),y=function(e){var t=e.component,n=e.layout,r=e.privateRoute,c=e.layoutTitle,i=Object(f.a)(e,["component","layout","privateRoute","layoutTitle"]);Object(a.useEffect)((function(){document.title=c}),[c]);var l=Object(o.c)(w);if(!l||x(l))return Object(v.jsx)(s.a,{to:"/sign-in"});var u=g.a.decode(l.token),j=Date.now()>=1e3*u.exp;return!r||l.is_login&&!j?Object(v.jsx)(s.b,Object(p.a)(Object(p.a)({},i),{},{render:function(e){return Object(v.jsx)(n,{title:c,children:Object(v.jsx)(t,Object(p.a)({},e))})}})):Object(v.jsx)(s.a,{to:"/sign-in"})},k=function(e){var t=e.page,n=e.path,r=e.title;return Object(a.useEffect)((function(){document.title=r}),[r]),Object(v.jsx)(s.b,{exact:!0,path:n,children:Object(v.jsx)(t,{})})},S=n(293),N=n(699),C=n(405),B=n(294),R=n(63),E=n(443),A=n.n(E),F=n(724),I=n(2),T=n(95),P="APP_TOGGLE_SIDE_BAR",L="USER_SIGNIN",D={drawer:{sidebar:!1},user:{}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(p.a)(Object(p.a)({},e),{},{user:t.userData});case P:return Object(p.a)(Object(p.a)({},e),{},{drawer:Object(p.a)(Object(p.a)({},e.drawer),{},{sidebar:t.value})});default:return Object(p.a)({},e)}},W=Object(T.c)({app:q}),z=Object(T.e)(W),_={toggleSideBar:function(e){z.dispatch({type:P,value:e})},signin:function(e){z.dispatch({type:L,userData:e})}},G=Object(S.a)((function(e){return{title:Object(m.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},appBarHighIndex:{zIndex:1301},menuButton:{marginRight:36},hide:{display:"none"}}})),M=function(){var e=G(),t=Object(s.g)(),n=Object(o.c)((function(e){return e.app.drawer.sidebar}));return Object(v.jsx)("div",{children:Object(v.jsx)(N.a,{className:Object(I.a)(e.appBar,Object(m.a)({},e.appBarShift,n)),position:"fixed",children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(B.a,{edge:"start",className:Object(I.a)(e.menuButton,Object(m.a)({},e.hide,n)),color:"inherit","aria-label":"open drawer",onClick:function(){return _.toggleSideBar(!0)},children:Object(v.jsx)(A.a,{})}),Object(v.jsx)(B.a,{edge:"start",color:"inherit",onClick:function(){return t.push("/")},children:Object(v.jsx)(F.a,{alt:"AreoLand Logo",src:"/logo.png"})}),Object(v.jsx)(R.a,{className:e.title,variant:"h6",noWrap:!0,children:"AreoLand Affiliate Program"})]})})})},V=n(74),H=n(700),U=n(141),$=n.n(U),J=n(701),Q=n(702),X=n(407),Y=n(673),K=n(406),Z=n(231),ee=function(e){return Object(Z.a)(new Set(e))},te=Object(S.a)({tooltip:{fontSize:12,fontWeight:500}}),ne=Object(O.a)((function(e){return e.app}),(function(e){return e.drawer.sidebar})),ae=Object(s.h)((function(e){var t=e.pages,n=e.match,a=e.history,r=te(),c=Object(o.c)(ne);return Object(v.jsx)(Y.a,{style:{outline:"none"},children:t.map((function(e){var t=e.link;if(e.params){var i=e.params.reduce((function(e,t){return e+="/"+n.params[t]}),"");t+=i}return e.parent&&!c?Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)(K.a,{title:"Back",placement:"right",children:Object(v.jsx)(B.a,{onClick:function(){a.push(t)},children:Object(v.jsx)($.a,{})})}),Object(v.jsx)(H.a,{})]},e.title):Object(v.jsxs)(X.a,{activeStyle:{pointerEvents:"none"},activeClassName:Object(I.a)("Mui-selected"),component:b.c,exact:"/"===e.link,to:t,children:[Object(v.jsx)(K.a,{classes:{tooltip:r.tooltip},title:e.title,children:Object(v.jsx)(J.a,{color:"primary",children:e.icon})}),Object(v.jsx)(Q.a,{primary:e.title})]},e.title)}))})})),re=n(445),ce=n.n(re),ie=n(446),oe=n.n(ie),se=[{title:"Dashboard",link:"/",icon:Object(v.jsx)(ce.a,{})},{title:"Help & Support",link:"/help",icon:Object(v.jsx)(oe.a,{}),children:[]}],le=function e(t,n,a){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=[],i=0;i<a.length;i++)for(var o=a[i],s=0,l=Object.keys(o);s<l.length;s++){var u=l[s];if(Array.isArray(o[u])){var j=e(u,n,o[u],r+1);c=c.concat(j)}else o.matchingLink?o.matchingLink===n&&(o.parent||c.push({found:!0,containingArray:a,depth:r,object:o})):o[u]===n&&(o.parent||c.push({found:!0,containingArray:a,depth:r,object:o}))}return c},ue=n(408),je=Object(S.a)((function(e){return{root:{display:"flex"},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(m.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium}}})),de=Object(s.h)((function(e){var t,n,a=e.match,r=je(),c=Object(o.c)((function(e){return e.app.drawer.sidebar})),i=function(e,t){var n=t.url;Object.keys(t.params).forEach((function(e){n=n.replace("/"+t.params[e],"")}));var a=le("link",n,e);return a.length?a[a.length-1].containingArray:e}(se,a),s=i[0].link;i[0].params&&(s+=i[0].params.reduce((function(e,t){return e+="/"+a.params[t]}),""));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(V.a,{variant:"permanent",className:Object(I.a)(r.drawer,(t={},Object(m.a)(t,r.drawerOpen,c),Object(m.a)(t,r.drawerClose,!c),t)),classes:{paper:Object(I.a)((n={},Object(m.a)(n,r.drawerOpen,c),Object(m.a)(n,r.drawerClose,!c),n))},children:[Object(v.jsxs)("div",{className:r.toolbar,children:[i[0].parent?Object(v.jsx)(ue.a,{component:b.b,to:s,startIcon:i[0].icon,style:{flexGrow:1},children:i[0].title}):Object(v.jsx)("div",{style:{flexGrow:1}}),Object(v.jsx)("div",{children:Object(v.jsx)(B.a,{onClick:function(){_.toggleSideBar(!1)},children:Object(v.jsx)($.a,{})})})]}),Object(v.jsx)(H.a,{}),Object(v.jsx)(ae,{pages:i})]})})})),be=Object(S.a)((function(e){return{root:{display:"flex"},toolbar:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}})),pe=function(e){var t=be(),n=e.children;return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsx)(M,{title:e.title}),Object(v.jsx)(de,{}),Object(v.jsxs)("main",{className:t.content,children:[Object(v.jsx)("div",{className:t.toolbar}),n]})]})},fe=n(704),Oe=n(447),he=n.n(Oe),ge=n(686),me=Object(ge.a)((function(e){var t;return{root:{backgroundColor:e.palette.background.default,height:"100%"},grid:{height:"100%"},quoteContainer:Object(m.a)({height:"100vh"},e.breakpoints.down("md"),{display:"none"}),quote:(t={backgroundColor:e.palette.neutral,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},Object(m.a)(t,"backgroundColor","gray"),Object(m.a)(t,"backgroundSize","cover"),Object(m.a)(t,"backgroundRepeat","no-repeat"),Object(m.a)(t,"backgroundPosition","center"),t),quoteInner:{textAlign:"center",flexBasis:"600px"},quoteText:{color:e.palette.common.white,fontWeight:300},name:{marginTop:e.spacing(3),color:e.palette.common.white},bio:{color:e.palette.common.white},contentContainer:{},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:e.spacing(5),paddingBototm:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},logoImage:{marginLeft:e.spacing(4)},contentBody:Object(m.a)({flexGrow:1,display:"flex",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"center"})}})),xe=function(e){var t=me(),n=Object(s.g)();return Object(v.jsx)("div",{className:t.root,children:Object(v.jsxs)(fe.a,{className:t.grid,container:!0,children:[Object(v.jsx)(fe.a,{className:t.quoteContainer,item:!0,lg:5,children:Object(v.jsx)("div",{className:t.quote,children:Object(v.jsxs)("div",{className:t.quoteInner,children:[Object(v.jsx)(R.a,{className:t.quoteText,variant:"h1",children:"AreoLand provide you best user experience while working on your properties or with your vendors."}),Object(v.jsxs)("div",{className:t.person,children:[Object(v.jsx)(R.a,{className:t.name,variant:"body1",children:"Manage Properties Better way"}),Object(v.jsx)(R.a,{className:t.bio,variant:"body2",children:"Version 1.0.0"})]})]})})}),Object(v.jsx)(fe.a,{className:t.content,item:!0,lg:7,xs:12,children:Object(v.jsxs)("div",{className:t.content,children:[Object(v.jsx)("div",{className:t.contentHeader,children:Object(v.jsx)(B.a,{onClick:function(){n.goBack()},children:Object(v.jsx)(he.a,{})})}),Object(v.jsx)("div",{className:t.contentBody,children:e.children})]})})]})})},ve=n(36),we=n.n(ve),ye=n(60),ke=n(73),Se=n(706),Ne=n(709),Ce=n(708),Be=n(707),Re=n(448),Ee=n.n(Re),Ae=n(301),Fe=n(461),Ie=n.n(Fe),Te=n(450),Pe=n.n(Te),Le=n(458),De=n.n(Le),qe=n(451),We=n.n(qe),ze=n(303),_e=n.n(ze),Ge=n(302),Me=n.n(Ge),Ve=n(452),He=n.n(Ve),Ue=n(453),$e=n.n(Ue),Je=n(228),Qe=n.n(Je),Xe=n(455),Ye=n.n(Xe),Ke=n(456),Ze=n.n(Ke),et=n(459),tt=n.n(et),nt=n(454),at=n.n(nt),rt=n(457),ct=n.n(rt),it=n(460),ot=n.n(it),st={Add:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(Pe.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(We.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(Me.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(He.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(_e.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return Object(v.jsx)($e.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(at.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(Qe.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(Ye.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(Ze.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(_e.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return Object(v.jsx)($.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(Me.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(ct.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(De.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(tt.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return Object(v.jsx)(ot.a,Object(p.a)(Object(p.a)({},e),{},{ref:t}))}))},lt=n(462),ut=n.n(lt),jt=n(206),dt=n(715),bt=function(e){var t=e.data;return Object(v.jsx)(jt.a,{anchorEl:e.anchorEl,keepMounted:!0,open:Boolean(e.anchorEl),onClose:e.onClose,children:Object(v.jsx)(Y.a,{style:{outline:"none"},children:t.map((function(t){return Object(v.jsxs)("span",{children:[Object(v.jsx)(dt.a,{disableSticky:!0,children:t.title}),t.values.map((function(n){return Object(v.jsx)(X.a,{onClick:function(){return e.onFilterChange(t.type,n)},children:n},n)}))]},t.type)}))})})},pt=n(409),ft=Object(S.a)((function(e){return{root:{position:"relative"},bottom:{color:e.palette.grey["light"===e.palette.type?200:700]},top:{color:"#1a90ff",animationDuration:"550ms",position:"absolute",left:0},circle:{strokeLinecap:"round"}}})),Ot=function(e){var t=ft();return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsx)(pt.a,Object(p.a)(Object(p.a)({variant:"determinate",className:t.bottom,size:40,thickness:4},e),{},{value:100})),Object(v.jsx)(pt.a,Object(p.a)({variant:"indeterminate",disableShrink:!0,className:t.top,classes:{circle:t.circle},size:40,thickness:4},e))]})},ht=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!1),r=Object(ke.a)(n,2),c=r[0],i=r[1],o=e.exportButton,s=e.data,l=e.remoteData,u=e.refreshAble,j=e.filtering,d=e.onDelete,b=e.actions,O=e.options,h=Object(f.a)(e,["exportButton","data","remoteData","refreshAble","filtering","onDelete","actions","options"]),g=Object(a.useState)(s),m=Object(ke.a)(g,2),x=m[0],w=m[1],y=Object(a.useState)(null),k=Object(ke.a)(y,2),S=k[0],N=k[1],C=[];Object(a.useEffect)((function(){w(s)}),[s]),j&&(C.push({type:"filter_clear",title:"Clear all filters",values:["Clear"]}),j.forEach((function(e){var t,n;C.push({type:e,title:"Filter by "+e,values:ee((t=s,n=e,t.reduce((function(e,t){return e.push(t[n]),e}),[])))})})));var B=function(){N(null)},R=function(){var e=Object(ye.a)(we.a.mark((function e(n,a){var r;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=2;break}return e.abrupt("return");case 2:return i(!0),r=a.reduce((function(e,t){return e.push(t.id),e}),[]),e.next=6,d(r,a);case 6:i(!1),t.current.onAllSelected(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Ee.a,Object(p.a)({tableRef:t,options:Object(p.a)({exportMenu:[o&&{label:"Export as PDF",exportFunc:function(t,n){return Object(Ae.ExportPdf)(t,n,e.title)}},{label:"Export as CSV",exportFunc:function(t,n){return Object(Ae.ExportCsv)(t,n,e.title)}}],selection:!0,actionsColumnIndex:-1,columnsButton:!0},O),actions:[j&&{tooltip:"Filter",icon:Qe.a,isFreeAction:!0,onClick:function(e,t){N(e.currentTarget)}},d&&{tooltip:"Remove All Selected Rows",icon:function(){return c?Object(v.jsx)(Ot,{size:30}):Object(v.jsx)(Ie.a,{})},onClick:R},u&&{tooltip:"Refresh",icon:ut.a,isFreeAction:!0,onClick:function(){t.current&&t.current.onQueryChange()}}].concat(Object(Z.a)(b)),icons:st,data:l||x},h)),j&&Object(v.jsx)(bt,{onClose:B,onFilterChange:function(t,n){if("filter_clear"===t)w(s),e.onFilter&&e.onFilter(s);else{var a=(r=t,c=n,s.filter((function(e){return e[r]===c})));w(a),e.onFilter&&e.onFilter(a)}var r,c;B()},data:C,anchorEl:S})]})};ht.defaultProps={actions:[],exportButton:!0};var gt=ht,mt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var r=e<0?"-":"",c=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),i=c.length>3?c.length%3:0;return r+(i?c.substr(0,i)+a:"")+c.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+a)+(t?n+Math.abs(e-c).toFixed(t).slice(2):"")}catch(o){console.log(o)}},xt=n(102),vt=n(720),wt=n(415),yt=n(717),kt=n(416),St=n(718),Nt=n(418),Ct=n(419),Bt=n(176),Rt=function(e){for(var t=e.rows,n=e.cols,a=[],r=0;r<n;r++)a.push(Object(v.jsx)(kt.a,{children:Object(v.jsx)(R.a,{variant:"h4",children:Object(v.jsx)(vt.a,{animation:"wave"})})},r));for(var c=[],i=0;i<n;i++)c.push(Object(v.jsx)(kt.a,{children:Object(v.jsx)(vt.a,{animation:"wave",variant:"text"})},i));for(var o=[],s=0;s<t;s++)o.push(Object(v.jsx)(Ct.a,{children:c},s));return Object(v.jsx)(St.a,{component:Bt.a,children:Object(v.jsxs)(wt.a,{children:[Object(v.jsx)(Nt.a,{children:Object(v.jsx)(Ct.a,{children:a})}),Object(v.jsx)(yt.a,{children:o})]})})},Et=n(463),At="";At="https://api-dot-areoland.appspot.com";var Ft=n.n(Et).a.create({baseURL:At}),It=function(){var e=Object(ye.a)(we.a.mark((function e(t,n,a){var r;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ft.post("/affiliate_program/new-user",{name:t,email:n,password:a});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("FAILED: unable to perform API request (signupAPI)"),console.log(e.t0),console.log(e.t0.response.data),e.abrupt("return",e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),Tt=function(){var e=Object(ye.a)(we.a.mark((function e(t,n){var a;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ft.post("/affiliate_program/login",{email:t,password:n});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("FAILED: unable to perform API request (signinAPI)"),console.log(e.t0),console.log(e.t0.response.data),e.abrupt("return",e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Pt=function(){var e=Object(ye.a)(we.a.mark((function e(t){var n;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ft.post("/affiliate_program/earn",{token:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log("FAILED: unable to perform API request (dashboardAPI)"),console.log(e.t0),console.log(e.t0.response.data),e.abrupt("return",e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Lt=n(297),Dt=function(e){var t=Object(Lt.default)(new Date(e.date),"iii LLL dd yyyy hh:mm a");return Object(v.jsx)("span",{children:t})},qt=[{title:"Name",field:"name"},{title:"Address",field:"address"},{title:"Email",field:"email"},{title:"Created On",field:"created_on",render:function(e){return Object(v.jsx)(Dt,{date:e.created_on})}},{title:"Account Type",field:"account_type"},{title:"Earn",field:"earn",type:"currency"}],Wt=Object(ge.a)((function(){return{root:{},item:{display:"flex",flexDirection:"column"}}})),zt=function(){var e=Wt(),t=Object(xt.b)().enqueueSnackbar,n=Object(o.c)((function(e){return e.app.user})),r=Object(a.useState)([]),c=Object(ke.a)(r,2),i=c[0],s=c[1],l=i.reduce((function(e,t){return e+t.earn}),0),u=function(){var e=Object(ye.a)(we.a.mark((function e(){var a;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.length){e.next=5;break}return e.next=3,Pt(n.token);case 3:(a=e.sent).error?t(a.error.message,{variant:"error"}):s(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),i.length?Object(v.jsxs)(Se.a,{className:e.root,children:[Object(v.jsx)(Ne.a,{subheader:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(R.a,{children:["Share affiliate link and earn ",Object(v.jsx)("b",{children:"30%"})," on every signup for whole year. Below is your affiliate link"]}),Object(v.jsx)("br",{}),Object(v.jsx)(R.a,{children:"https://areoland.com/affiliate/".concat(n.user_id)})]}),title:"Affiliate"}),Object(v.jsx)(H.a,{}),Object(v.jsx)(Ce.a,{style:{padding:0},children:Object(v.jsx)(fe.a,{container:!0,spacing:6,wrap:"wrap",children:Object(v.jsx)(fe.a,{className:e.item,item:!0,xs:12,children:x(i)?Object(v.jsx)(Rt,{cols:5,rows:5}):Object(v.jsx)(gt,{options:{search:!1},columns:qt,data:i,title:"Affiliated Users"})})})}),Object(v.jsx)(H.a,{}),Object(v.jsx)(Be.a,{style:{justifyContent:"flex-end"},children:Object(v.jsxs)(R.a,{style:{fontWeight:700},color:"textSecondary",gutterBottom:!0,children:["Total Earn: $",mt(l)]})})]}):null},_t=n(229),Gt=n.n(_t),Mt=n(420),Vt=n(714),Ht=n(20),Ut=Object(S.a)((function(e){return{wrapper:{position:"relative"},buttonProgress:{position:"absolute",top:"50%",left:"7%",marginTop:-12,marginLeft:-12}}})),$t=function(e){var t=Ut(),n=Object(Ht.a)(),a=(e.title,e.loading),r=e.onClick,c=e.circleStyle,i=Object(f.a)(e,["title","loading","onClick","circleStyle"]);return Object(v.jsxs)("div",{className:t.wrapper,children:[Object(v.jsx)(ue.a,Object(p.a)(Object(p.a)({variant:"contained",color:n.palette.common.primary,disabled:a,onClick:r},i),{},{children:e.title})),a&&Object(v.jsx)(pt.a,{size:24,className:t.buttonProgress,style:c})]})},Jt={email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}}},Qt=Object(ge.a)((function(e){return{form:Object(m.a)({paddingLeft:100,paddingRight:100,paddingBottom:125,flexBasis:700},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{marginTop:e.spacing(3)},socialButtons:{marginTop:e.spacing(3)},socialIcon:{marginRight:e.spacing(1)},sugestion:{marginTop:e.spacing(2)},textField:{marginTop:e.spacing(2)},signInButton:{margin:e.spacing(2,0)}}})),Xt=Object(s.h)((function(e){var t=e.history,n=Object(a.useState)(!1),r=Object(ke.a)(n,2),c=r[0],i=r[1],o=Object(xt.b)().enqueueSnackbar,s=Qt(),l=Object(a.useState)({isValid:!1,values:{},touched:{},errors:{}}),u=Object(ke.a)(l,2),j=u[0],d=u[1];Object(a.useEffect)((function(){var e=Gt()(j.values,Jt);d((function(t){return Object(p.a)(Object(p.a)({},t),{},{isValid:!e,errors:e||{}})}))}),[j.values]);var f=function(e){e.persist(),d((function(t){return Object(p.a)(Object(p.a)({},t),{},{values:Object(p.a)(Object(p.a)({},t.values),{},Object(m.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(p.a)(Object(p.a)({},t.touched),{},Object(m.a)({},e.target.name,!0))})}))},O=function(){var e=Object(ye.a)(we.a.mark((function e(n){var a;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),i(!0),e.next=4,Tt(j.values.email,j.values.password);case 4:(a=e.sent).error?o(a.error.message,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}}):(i(!1),_.signin(a),t.replace("/")),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return!(!j.touched[e]||!j.errors[e])};return Object(v.jsx)(xe,{children:Object(v.jsxs)("form",{className:s.form,onSubmit:O,children:[Object(v.jsx)(R.a,{className:s.title,variant:"h2",children:"Sign in"}),Object(v.jsx)(R.a,{color:"textSecondary",gutterBottom:!0,children:"Sign in with your credentials"}),Object(v.jsx)(Mt.a,{className:s.textField,error:h("email"),fullWidth:!0,helperText:h("email")?j.errors.email[0]:null,label:"Email",name:"email",onChange:f,type:"text",value:j.values.email||"",variant:"outlined"}),Object(v.jsx)(Mt.a,{className:s.textField,error:h("password"),fullWidth:!0,helperText:h("password")?j.errors.password[0]:null,label:"Password",name:"password",onChange:f,type:"password",value:j.values.password||"",variant:"outlined"}),Object(v.jsx)($t,{title:"Sign in now",className:s.signInButton,loading:c,disabled:!j.isValid||c,fullWidth:!0,size:"large",type:"submit"}),Object(v.jsxs)(R.a,{color:"textSecondary",variant:"body1",children:["Don't have an account?"," ",Object(v.jsx)(Vt.a,{component:b.b,to:"/sign-up",variant:"h6",children:"Sign up"})]}),Object(v.jsx)(Vt.a,{component:b.b,to:"/forget-password",variant:"h6",children:"Forget Password"})]})})})),Yt={name:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:50}},email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}}},Kt=Object(ge.a)((function(e){return{form:Object(m.a)({paddingLeft:100,paddingRight:100,paddingBottom:125,flexBasis:700},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{marginTop:e.spacing(3)},textField:{marginTop:e.spacing(2)},signUpButton:{margin:e.spacing(2,0)}}})),Zt=function(e){var t=Kt(),n=Object(a.useState)(!1),r=Object(ke.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)({isValid:!1,values:{},touched:{},errors:{}}),s=Object(ke.a)(o,2),l=s[0],u=s[1];Object(a.useEffect)((function(){var e=Gt()(l.values,Yt);u((function(t){return Object(p.a)(Object(p.a)({},t),{},{isValid:!e,errors:e||{}})}))}),[l.values]);var j=function(e){e.persist(),u((function(t){return Object(p.a)(Object(p.a)({},t),{},{values:Object(p.a)(Object(p.a)({},t.values),{},Object(m.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(p.a)(Object(p.a)({},t.touched),{},Object(m.a)({},e.target.name,!0))})}))},d=function(){var t=Object(ye.a)(we.a.mark((function t(n){return we.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),i(!0),t.next=4,e.onSubmit(l.values);case 4:i(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(e){return!(!l.touched[e]||!l.errors[e])};return Object(v.jsxs)("form",{className:t.form,onSubmit:d,children:[Object(v.jsx)(R.a,{className:t.title,variant:"h1",children:"Create new account"}),Object(v.jsx)(R.a,{color:"textSecondary",gutterBottom:!0,children:"Use your email to create new account"}),Object(v.jsx)(Mt.a,{className:t.textField,error:f("name"),fullWidth:!0,helperText:f("name")?l.errors.name[0]:null,label:"Full name",name:"name",onChange:j,type:"text",value:l.values.name||"",variant:"outlined"}),Object(v.jsx)(Mt.a,{className:t.textField,fullWidth:!0,error:f("email"),helperText:f("email")?l.errors.email[0]:null,label:"Email address",name:"email",onChange:j,type:"text",value:l.values.email||"",variant:"outlined"}),Object(v.jsx)(Mt.a,{className:t.textField,error:f("password"),fullWidth:!0,helperText:f("password")?l.errors.password[0]:null,label:"Password",name:"password",onChange:j,type:"password",value:l.values.password||"",variant:"outlined"}),Object(v.jsx)($t,{title:"Sign up now",className:t.signUpButton,loading:c,disabled:!l.isValid||c,fullWidth:!0,size:"large",type:"submit"}),Object(v.jsxs)(R.a,{color:"textSecondary",variant:"body1",children:["Have an account?"," ",Object(v.jsx)(Vt.a,{component:b.b,to:"/sign-in",variant:"h6",children:"Sign in"})]})]})},en=Object(s.h)((function(e){var t=e.history,n=Object(xt.b)().enqueueSnackbar,a=function(){var e=Object(ye.a)(we.a.mark((function e(a){var r;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,It(a.name,a.email,a.password);case 2:(r=e.sent).error?n(r.error.message,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}}):(n("Successfully signup now login to your account",{variant:"success"}),t.replace("/sign-in"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(xe,{children:Object(v.jsx)(Zt,{onSubmit:a})})})),tn=Object(ge.a)((function(e){return{root:{padding:e.spacing(4)},content:{paddingTop:150,textAlign:"center"}}})),nn=function(){var e=tn();return Object(v.jsx)("div",{className:e.root,children:Object(v.jsx)(fe.a,{container:!0,justify:"center",spacing:4,children:Object(v.jsx)(fe.a,{item:!0,lg:6,xs:12,children:Object(v.jsxs)("div",{className:e.content,children:[Object(v.jsx)(R.a,{variant:"h1",children:"404: The page you are looking for isn\u2019t here"}),Object(v.jsx)(R.a,{variant:"subtitle2",children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation"})]})})})})},an=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(R.a,{variant:"h1",children:"Help & Support"}),Object(v.jsx)(H.a,{}),Object(v.jsx)(R.a,{children:"Email: support@areoland.com"}),Object(v.jsx)(R.a,{children:"WhatsApp Support: +92 315 1101492"})]})},rn=function(){return Object(v.jsx)(b.a,{children:Object(v.jsxs)(s.d,{children:[Object(v.jsx)(y,{privateRoute:!0,component:zt,exact:!0,layout:pe,layoutTitle:"Dashboard",path:"/"}),Object(v.jsx)(y,{privateRoute:!0,component:an,exact:!0,layout:pe,layoutTitle:"Help & Support",path:"/help"}),Object(v.jsx)(k,{title:"Sign in",path:"/sign-in",page:Xt}),Object(v.jsx)(k,{title:"Sign up",path:"/sign-up",page:en}),Object(v.jsx)(k,{title:"Page not found",path:"/not-found",page:nn}),Object(v.jsx)(s.a,{to:"/not-found"})]})})},cn=Object(l.a)();var on=function(){var e=!1,t=r.a.useMemo((function(){return Object(u.a)({palette:{type:"light",common:{white:"#ffffff",black:"#000000",primary:"primary",grey:"#fafafa"},primary:{light:"#63a4ff",main:"#1976d2",dark:"#004ba0"}},typography:{h1:{fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"}}})}),[e]);return Object(v.jsxs)(j.a,{theme:t,children:[Object(v.jsx)(d.a,{}),Object(v.jsx)(s.c,{history:cn,children:Object(v.jsx)(rn,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(v.jsx)(o.a,{store:z,children:Object(v.jsx)(xt.a,{maxSnack:3,children:Object(v.jsx)(on,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[671,1,2]]]);
//# sourceMappingURL=main.ad27c3e8.chunk.js.map