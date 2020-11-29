(this["webpackJsonphows-the-coffee"]=this["webpackJsonphows-the-coffee"]||[]).push([[0],{12:function(e,t,a){e.exports={text:"Input_text__dvDWA",radio:"Input_radio__3pgRQ",textarea:"Input_textarea__kLQiU",number:"Input_number__2Dfks",suffix:"Input_suffix__3Pzc0",group:"Input_group__1i4Id","required-input":"Input_required-input__2X4yU",wrapper:"Input_wrapper__1deqt",select:"Input_select__1ePxt"}},18:function(e,t,a){e.exports={"rating-block":"RatingBlock_rating-block__2BYzC",img:"RatingBlock_img__2qXV2",manufacturer:"RatingBlock_manufacturer__1HDAw",rating:"RatingBlock_rating__1-IdT",name:"RatingBlock_name__3kv0Q",notes:"RatingBlock_notes__YArnw",date:"RatingBlock_date__iTdAV",description:"RatingBlock_description__2OBFY","extra-info":"RatingBlock_extra-info__xuXFv"}},21:function(e,t,a){e.exports={header:"SidePanel_header__33n60","side-panel":"SidePanel_side-panel__1ZWzX",open:"SidePanel_open__2NbX5",collapsed:"SidePanel_collapsed__3gCeL",content:"SidePanel_content__rMUiC","current-user":"SidePanel_current-user__zrII6","user-photo":"SidePanel_user-photo__2VujN","info-pair":"SidePanel_info-pair__1bdA3"}},30:function(e,t,a){e.exports={"new-rating":"Ratings_new-rating__3s9ts",ratings:"Ratings_ratings__1wpTT","rating-selector":"Ratings_rating-selector__3wdDN",selected:"Ratings_selected__S64Pu"}},33:function(e,t,a){e.exports={app:"App_app__2ziFi",container:"App_container__eSJ6i","dark-theme":"App_dark-theme__3zzOz"}},41:function(e,t,a){"use strict";var n=a(43);a.d(t,"GroundType",(function(){return n.a}));a(44)},42:function(e,t,a){e.exports={"app-page":"AppPage_app-page__23Hiw","app-page-wrapper":"AppPage_app-page-wrapper__3kwsn"}},43:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.bean="bean",e.ground="ground"}(n||(n={}))},44:function(e,t){},47:function(e,t,a){e.exports={header:"Header_header__22rC9"}},48:function(e,t,a){e.exports={primary:"Button_primary__qrr19",success:"Button_success__1Iosr",secondary:"Button_secondary__1sG9u"}},50:function(e,t,a){e.exports={"sub-header":"SubHeader_sub-header__qh238"}},52:function(e,t,a){e.exports={"new-rating":"NewRating_new-rating__3XeS0"}},53:function(e,t,a){e.exports={login:"Auth_login__1m4V3"}},66:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a.n(r),i=a(27),s=a.n(i),o=(a(65),a(66),a(19)),l=a(7),u=a(89),d=a(88),p=a(23),j=a(20),_=a(47),b=a.n(_),O=a(8),f=function(e,t){switch(t.type){case"SET_FIREBASE":return Object(O.a)(Object(O.a)({},e),{},{firebase:t.payload});case"SET_USER":return Object(O.a)(Object(O.a)({},e),{},{currentUser:t.payload});case"SET_RATINGS":return Object(O.a)(Object(O.a)({},e),{},{ratings:t.ratings});case"INITIALISE_RATINGS_DATABASE":return Object(O.a)(Object(O.a)({},e),{},{ratingsReference:t.ref});case"TOGGLE_SIDE_PANEL":return Object(O.a)(Object(O.a)({},e),{},{sidePanelState:t.newState});default:return e}},h={firebase:null,sidePanelState:"collapsed",currentUser:null,ratings:[],ratingsReference:null},g=c.a.createContext({state:h,dispatch:function(){}}),m=g.Provider,x=function(e){var t=e.children,a=c.a.useReducer(f,h),r=Object(o.a)(a,2),i=r[0],s=r[1];return Object(n.jsx)(m,{value:{state:i,dispatch:s},children:t})},S=function(){var e=c.a.useContext(g),t=e.state,a=e.dispatch;return t.currentUser?Object(n.jsxs)("header",{className:b.a.header,children:[Object(n.jsx)("h1",{children:"How's the coffee?"}),Object(n.jsx)(p.a,{icon:j.b,size:"lg",onClick:function(){return a({type:"TOGGLE_SIDE_PANEL",newState:"open"})}})]}):null},v=a(21),E=a.n(v),T=a(25),A=a(48),N=a.n(A),y=function(e){var t=e.children,a=e.href,r=e.theme,c=e.onClick,i=Object(T.a)(e,["children","href","theme","onClick"]),s=Object(l.g)();return Object(n.jsx)("button",Object(O.a)(Object(O.a)({},i),{},{className:N.a[r||"primary"],onClick:a?function(e){e.preventDefault(),"internal"===a.type?s.push(a.to):window.location.assign(a.to)}:c,children:t}))},R=function(){var e=c.a.useContext(g),t=e.state,a=e.dispatch,r=t.sidePanelState,i=t.currentUser,s=t.firebase;return i&&s?Object(n.jsxs)("section",{className:"".concat(E.a["side-panel"]," ").concat(E.a[r]),children:[Object(n.jsxs)("div",{className:E.a.header,children:[Object(n.jsx)("h1",{children:"Settings"}),Object(n.jsx)(p.a,{icon:j.e,size:"lg",onClick:function(){return a({type:"TOGGLE_SIDE_PANEL",newState:"collapsed"})}})]}),Object(n.jsx)("div",{className:E.a.content,children:Object(n.jsxs)("div",{className:E.a["current-user"],children:[i.photoURL&&Object(n.jsx)("div",{className:E.a["user-photo"],children:Object(n.jsx)("img",{src:i.photoURL})}),Object(n.jsxs)("div",{style:{flexGrow:1},children:[Object(n.jsxs)("div",{className:E.a["info-pair"],children:[Object(n.jsx)(p.a,{icon:j.f,fixedWidth:!0,size:"lg"}),Object(n.jsx)("p",{children:i.displayName})]}),Object(n.jsxs)("div",{className:E.a["info-pair"],children:[Object(n.jsx)(p.a,{icon:j.a,fixedWidth:!0,size:"lg"}),Object(n.jsx)("p",{children:i.email})]})]}),Object(n.jsx)(y,{type:"button",theme:"success",onClick:function(){return s.auth.signOut()},children:"Sign out"})]})})]}):null},P=a(30),C=a.n(P),I=a(50),D=a.n(I),w=function(e){var t=e.children;return Object(n.jsx)("div",{className:D.a["sub-header"],children:t})},F=a(26),B=a(51),U=a(18),L=a.n(U),k=function(e){var t=e.manufacturer,a=e.rating,r=e.coffeeName,c=e.price,i=e.tastingNotes,s=e.notes,o=e.groundType,l=e.roastLevel,u=e.date,d=e.bagSize,_=function(e){var t=e%2,a=Math.floor(e/2),r=5-a-t,c=function(e,t){return Object(F.a)(new Array(e)).map((function(e,a){return Object(n.jsx)(p.a,{icon:t},"star-".concat(a,"-").concat(t.iconName))}))};return Object(n.jsxs)(n.Fragment,{children:[c(a,j.c),c(t,j.d),c(r,B.a)]})}(a),b=String((c/d).toFixed(2)),O=new Date(u).toLocaleDateString();return Object(n.jsxs)("div",{className:L.a["rating-block"],children:[Object(n.jsx)("div",{className:L.a.img}),Object(n.jsx)("div",{className:L.a.manufacturer,children:t}),Object(n.jsx)("div",{className:L.a.rating,children:_}),Object(n.jsx)("div",{className:L.a.name,children:r}),Object(n.jsx)("div",{className:L.a["extra-info"],children:Object(n.jsxs)("div",{className:L.a["roast-level"],children:[b,"\u20ac / 100g | ","".concat(o," (").concat(l,")")]})}),Object(n.jsx)("div",{className:L.a.notes,children:i.join(" | ")}),Object(n.jsx)("div",{className:L.a.date,children:O}),Object(n.jsx)("div",{className:L.a.description,children:Object(n.jsx)("i",{children:s})})]},"".concat(t,"-").concat(name))},H=["latest","best"],W={best:"Best reviews",latest:"Latest reviews"},K=function(e){var t=e.order,a=e.onClick,r=e.selected;return Object(n.jsx)("span",{onClick:function(){return a(t)},className:"".concat(C.a["rating-selector"]," ").concat(r&&C.a.selected),children:W[t]})},q=function(e){var t=e.store,a=e.dispatch,r=c.a.useState("latest"),i=Object(o.a)(r,2),s=i[0],l=i[1],u=t.ratings,d=t.firebase,p=t.currentUser,j=t.ratingsReference;return c.a.useEffect((function(){if(p&&d&&!j){var e=d.database.ref("ratings/".concat(p.uid));a({type:"INITIALISE_RATINGS_DATABASE",ref:e}),e.on("value",(function(e){var t=e.val();t&&a({type:"SET_RATINGS",ratings:Object.values(t)})}))}}),[p,d,j]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{children:H.map((function(e){return Object(n.jsx)(K,{order:e,onClick:l,selected:e===s},e)}))}),Object(n.jsx)("div",{className:C.a.ratings,children:u.map(k)}),Object(n.jsx)("div",{className:C.a["new-rating"],children:Object(n.jsx)(y,{href:{type:"internal",to:"/ratings/new"},children:"Add new rating"})})]})},G=a(32),z=a(12),V=a.n(z),M=function(e){var t=e.groupStyles,a=e.type,r=e.name,c=e.label,i=e.suffix,s=e.required,o=e.placeholder,l=Object(T.a)(e,["groupStyles","type","name","label","suffix","required","placeholder"]);return Object(n.jsxs)("div",{className:"custom-input-group ".concat(V.a.group),style:t||{},children:[Object(n.jsx)("label",{htmlFor:r,className:s?V.a["required-input"]:"",children:c}),Object(n.jsxs)("div",{className:V.a.wrapper,children:[Object(n.jsx)("input",Object(O.a)(Object(O.a)({},l),{},{name:r,className:V.a[a],required:s,type:a,placeholder:o||"..."})),i&&Object(n.jsx)("div",{className:V.a.suffix,children:i})]})]})},X=function(e){var t=e.groupStyles,a=e.name,r=e.label,c=e.suffix,i=e.required,s=e.placeholder,o=Object(T.a)(e,["groupStyles","name","label","suffix","required","placeholder"]);return Object(n.jsxs)("div",{className:"custom-input-group ".concat(V.a.group),style:t||{},children:[Object(n.jsx)("label",{htmlFor:a,className:i?V.a["required-input"]:"",children:r}),Object(n.jsxs)("div",{className:V.a.wrapper,children:[Object(n.jsx)("textarea",Object(O.a)(Object(O.a)({},o),{},{name:a,required:i,className:V.a.textarea,placeholder:s||"..."})),c&&Object(n.jsx)("div",{className:V.a.suffix,children:c})]})]})},J=function(e){var t=e.groupStyles,a=e.name,r=e.label,c=e.required,i=e.options,s=e.min,o=e.max,l=s&&o?Object(F.a)(new Array(o-s+1)).map((function(e,t){return{label:String(t+1),value:String(t+1)}})):i||[];return Object(n.jsxs)("div",{className:"custom-input-group ".concat(V.a.group),style:t||{},children:[Object(n.jsx)("label",{htmlFor:a,className:c?V.a["required-input"]:"",children:r}),Object(n.jsx)("div",{className:"".concat(V.a.wrapper," ").concat(V.a.radio),children:l.map((function(e){var t=e.label,r=e.value;return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{id:"".concat(a,"-").concat(r),name:a,required:c,type:"radio",value:r}),Object(n.jsx)("label",{htmlFor:"".concat(a,"-").concat(r),children:t})]},"radio-".concat(a,"-").concat(r))}))})]})},Y=function(e){var t=e.groupStyles,a=e.name,r=e.label,c=e.suffix,i=e.required,s=e.placeholder,o=Object(T.a)(e,["groupStyles","name","label","suffix","required","placeholder"]);return Object(n.jsxs)("div",{className:"custom-input-group ".concat(V.a.group),style:t||{},children:[Object(n.jsx)("label",{htmlFor:a,className:i?V.a["required-input"]:"",children:r}),Object(n.jsxs)("div",{className:V.a.wrapper,children:[Object(n.jsx)("select",Object(O.a)(Object(O.a)({},o),{},{name:a,className:V.a.select,required:i,placeholder:s||"..."})),c&&Object(n.jsx)("div",{className:V.a.suffix,children:c})]})]})},Q=a(52),Z=a.n(Q),$=a(41),ee=function(e){var t=e.store,a=c.a.useRef(null),r=c.a.useState(!1),i=Object(o.a)(r,2),s=i[0],u=i[1],d=c.a.useState(!1),p=Object(o.a)(d,2),j=p[0],_=p[1],b=Object(l.g)().push,f=t.ratingsReference;c.a.useEffect((function(){f||b("/ratings")}),[f]);var h=function(){if(f)if(_(!0),a.current&&a.current.reportValidity(),s&&a.current){var e=function(e){var t=Object(F.a)(e).reduce((function(e,t){var a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(O.a)(Object(O.a)({},e),{},Object(G.a)({},n,r||""))}),{});return{date:(new Date).toISOString(),manufacturer:t.manufacturer,coffeeName:t["coffee-name"],groundType:t["ground-type"],roastLevel:Number(t["roast-level"]||"-1"),price:Math.round(100*Number(t.price||"0")),bagSize:Number(t["bag-size"]||"1"),rating:Number(t.rating||"-1"),notes:t.notes,tastingNotes:t["tasting-notes"].split(" ")}}(new FormData(a.current));f.push().set(e,(function(e){if(e)return console.log(e),void _(!1);_(!1),b("/ratings")}))}else _(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{children:"Add a new rating"}),Object(n.jsxs)("form",{ref:a,className:Z.a["new-rating"],onChange:function(){a.current&&u(a.current.checkValidity())},onSubmit:function(e){e.preventDefault(),h()},children:[Object(n.jsx)(M,{disabled:j,label:"Manufacturer",type:"text",name:"manufacturer",required:!0,minLength:2,groupStyles:{gridArea:"company"}}),Object(n.jsx)(M,{disabled:j,label:"Coffee name",type:"text",name:"coffee-name",minLength:2,required:!0,groupStyles:{gridArea:"name"}}),Object(n.jsxs)(Y,{name:"ground-type",label:"Ground type",required:!0,groupStyles:{gridArea:"ground-type"},children:[Object(n.jsx)("option",{value:$.GroundType.bean,children:"Bean"}),Object(n.jsx)("option",{value:$.GroundType.ground,children:"Ground"})]}),Object(n.jsx)(J,{label:"Roast level",required:!0,name:"roast-level",min:1,max:5,groupStyles:{gridArea:"roast-level"}}),Object(n.jsx)(M,{label:"Price",type:"number",name:"price",min:0,max:100,step:.01,suffix:"\u20ac",pattern:"\\d+[\\.,]\\d{2}",groupStyles:{gridArea:"price"}}),Object(n.jsx)(M,{disabled:j,label:"Bag size",type:"number",name:"bag-size",min:10,max:2e3,suffix:"g",groupStyles:{gridArea:"size"}}),Object(n.jsx)(J,{label:"Rating (1-10)",required:!0,name:"rating",min:1,max:10,groupStyles:{gridArea:"rating"}}),Object(n.jsx)(X,{disabled:j,name:"notes",label:"Notes",groupStyles:{gridArea:"notes"}}),Object(n.jsx)(X,{disabled:j,name:"tasting-notes",label:"Tasting notes",groupStyles:{gridArea:"taste-notes"}}),Object(n.jsx)(y,{disabled:j||!0,theme:"primary",style:{gridArea:"add-btn"},children:"(TBA)"}),Object(n.jsx)(y,{disabled:j,type:"button",theme:"secondary",style:{gridArea:"cancel-btn"},href:{type:"internal",to:"/ratings"},children:"Cancel"}),Object(n.jsx)(y,{disabled:j,type:"submit",theme:"success",style:{gridArea:"save-btn"},children:"Save rating"})]})]})},te=a(33),ae=a.n(te),ne=a(42),re=a.n(ne),ce=a(53),ie=a.n(ce),se=(a(76),function(e){var t=e.firebase;return c.a.useEffect((function(){t&&t.showAuthUi("#firebaseui-auth-container")}),[t]),Object(n.jsxs)("div",{className:ie.a.login,children:[Object(n.jsx)("h1",{children:"How's the coffee?"}),Object(n.jsx)("h2",{children:"a coffee rating application"}),Object(n.jsx)("div",{id:"firebaseui-auth-container"})]})}),oe=function(e){var t=e.children;return Object(n.jsx)("div",{className:re.a["app-page"],children:Object(n.jsx)("div",{className:re.a["app-page-wrapper"],children:t})})},le=function(e){return function(t){var a=Object.assign({},t),r=c.a.useContext(g),i=r.state,s=r.dispatch;return Object(n.jsx)(oe,Object(O.a)(Object(O.a)({},a),{},{children:e?i.currentUser?Object(n.jsx)(e,{store:i,dispatch:s}):Object(n.jsx)(se,{firebase:i.firebase}):null}))}},ue=a(54),de=a(55),pe=a(58),je=a(56),_e=a(5),be=(a(46),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/coffee-rating-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FB_MEASUREMENT_ID}),Oe={signInSuccessUrl:"http://localhost:3000",signInOptions:[pe.a.auth.GoogleAuthProvider.PROVIDER_ID],signInFlow:"popup",tosUrl:"<your-tos-url>",privacyPolicyUrl:function(){window.location.assign("<your-privacy-policy-url>")}},fe=function(){function e(){Object(ue.a)(this,e),this.auth=void 0,this.database=void 0,this.ui=void 0,_e.a.initializeApp(be),this.auth=_e.a.auth(),this.database=_e.a.database(),this.ui=new je.a.AuthUI(this.auth)}return Object(de.a)(e,[{key:"showAuthUi",value:function(e){this.ui.start(e,Oe)}}]),e}(),he=function(){var e=Object(l.h)(),t=c.a.useContext(g).dispatch,a=e.pathname,r=c.a.useState("slide-left"),i=Object(o.a)(r,2),s=i[0],p=i[1];return c.a.useEffect((function(){var e=new fe;t({type:"SET_FIREBASE",payload:e}),e.auth.onAuthStateChanged((function(e){return t({type:"SET_USER",payload:e})}))}),[]),c.a.useEffect((function(){window.setTimeout((function(){a.endsWith("/ratings")?p("slide-left"):p("slide-right")}),300)}),[a]),Object(n.jsx)("div",{className:"".concat(ae.a.app," ").concat(ae.a["dark-theme"]),children:Object(n.jsxs)("div",{className:ae.a.container,children:[Object(n.jsx)(S,{}),Object(n.jsx)(R,{}),Object(n.jsx)(u.a,{style:{position:"relative"},children:Object(n.jsx)(d.a,{classNames:s,timeout:300,children:Object(n.jsxs)(l.d,{location:e,children:[Object(n.jsx)(l.a,{path:"/",to:"/ratings",exact:!0}),Object(n.jsx)(l.b,{path:"/ratings",exact:!0,component:le(q)}),Object(n.jsx)(l.b,{path:"/ratings/new",component:le(ee)}),Object(n.jsx)(l.a,{path:"*",to:"/"})]})},e.key)})]})})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},me=a(37);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{children:Object(n.jsx)(me.a,{basename:"/coffee-rating-app",children:Object(n.jsx)(l.d,{children:Object(n.jsx)(l.b,{path:"*",component:he})})})})}),document.getElementById("root")),ge()}},[[86,1,2]]]);
//# sourceMappingURL=main.ed75e933.chunk.js.map