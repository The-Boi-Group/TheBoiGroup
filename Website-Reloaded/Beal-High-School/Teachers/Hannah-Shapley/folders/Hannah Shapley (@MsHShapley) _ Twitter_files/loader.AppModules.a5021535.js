(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{"+Aie":function(e,t,n){var i;!function(o,s,r){if(o){for(var a,c={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},l={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},h={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},d=1;d<20;++d)c[111+d]="f"+d;for(d=0;d<=9;++d)c[d+96]=d.toString();g.prototype.bind=function(e,t,n){var i=this;return e=e instanceof Array?e:[e],i._bindMultiple.call(i,e,t,n),i},g.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},g.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},g.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},g.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(y(t,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},g.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},g.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(c[t]=e[t]);a=null},g.init=function(){var e=g(s);for(var t in e)"_"!==t.charAt(0)&&(g[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},g.init(),o.Mousetrap=g,e.exports&&(e.exports=g),void 0===(i=function(){return g}.call(t,n,t,e))||(e.exports=i)}function p(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function m(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return c[e.which]?c[e.which]:l[e.which]?l[e.which]:String.fromCharCode(e.which).toLowerCase()}function b(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function f(e,t,n){return n||(n=function(){if(!a)for(var e in a={},c)e>95&&e<112||c.hasOwnProperty(e)&&(a[c[e]]=e);return a}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function _(e,t){var n,i,o,s=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<n.length;++o)i=n[o],h[i]&&(i=h[i]),t&&"keypress"!=t&&u[i]&&(i=u[i],s.push("shift")),b(i)&&s.push(i);return{key:i,modifiers:s,action:t=f(i,s,t)}}function y(e,t){return null!==e&&e!==s&&(e===t||y(e.parentNode,t))}function g(e){var t=this;if(e=e||s,!(t instanceof g))return new g(e);t.target=e,t._callbacks={},t._directMap={};var n,i={},o=!1,r=!1,a=!1;function c(e){e=e||{};var t,n=!1;for(t in i)e[t]?n=!0:i[t]=0;n||(a=!1)}function l(e,n,o,s,r,a){var c,l,u,h,d=[],p=o.type;if(!t._callbacks[e])return[];for("keyup"==p&&b(e)&&(n=[e]),c=0;c<t._callbacks[e].length;++c)if(l=t._callbacks[e][c],(s||!l.seq||i[l.seq]==l.level)&&p==l.action&&("keypress"==p&&!o.metaKey&&!o.ctrlKey||(u=n,h=l.modifiers,u.sort().join(",")===h.sort().join(",")))){var m=!s&&l.combo==r,f=s&&l.seq==s&&l.level==a;(m||f)&&t._callbacks[e].splice(c,1),d.push(l)}return d}function u(e,n,i,o){t.stopCallback(n,n.target||n.srcElement,i,o)||!1===e(n,i)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function h(e){"number"!=typeof e.which&&(e.which=e.keyCode);var n=m(e);n&&("keyup"!=e.type||o!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function d(e,t,s,r){function l(t){return function(){a=t,++i[e],clearTimeout(n),n=setTimeout(c,1e3)}}function h(t){u(s,t,e),"keyup"!==r&&(o=m(t)),setTimeout(c,10)}i[e]=0;for(var d=0;d<t.length;++d){var p=d+1===t.length?h:l(r||_(t[d+1]).action);f(t[d],p,r,e,d)}}function f(e,n,i,o,s){t._directMap[e+":"+i]=n;var r,a=(e=e.replace(/\s+/g," ")).split(" ");a.length>1?d(e,a,n,i):(r=_(e,i),t._callbacks[r.key]=t._callbacks[r.key]||[],l(r.key,r.modifiers,{type:r.action},o,e,s),t._callbacks[r.key][o?"unshift":"push"]({callback:n,modifiers:r.modifiers,action:r.action,seq:o,level:s,combo:e}))}t._handleKey=function(e,t,n){var i,o=l(e,t,n),s={},h=0,d=!1;for(i=0;i<o.length;++i)o[i].seq&&(h=Math.max(h,o[i].level));for(i=0;i<o.length;++i)if(o[i].seq){if(o[i].level!=h)continue;d=!0,s[o[i].seq]=1,u(o[i].callback,n,o[i].combo,o[i].seq)}else d||u(o[i].callback,n,o[i].combo);var p="keypress"==n.type&&r;n.type!=a||b(e)||p||c(s),r=d&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var i=0;i<e.length;++i)f(e[i],t,n)},p(e,"keypress",h),p(e,"keydown",h),p(e,"keyup",h)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},"6oVL":function(e,t,n){"use strict";var i=n("KEM+"),o=n.n(i),s=(n("kYxP"),n("MvUL"),n("ERkP")),r=n("s9SB"),a=n.n(r),c=n("3XMw"),l=n.n(c),u=n("cnVF"),h=n("Ukpf"),d=n("BTou"),p=n("mrHL"),m="LoginForm_Login_Button",b=n("fEA7"),f=n.n(b),_=n("MWbm"),y=n("Irs7"),g=n("/yvb"),v=n("rHpw");const S=l.a.e919c3bc;class E extends s.Component{constructor(...e){super(...e),o()(this,"_mobileLoginToken",f.a.v1().replace(/-/g,"")),o()(this,"_handleSubmit",(()=>{const{analytics:e,deregisterServiceWorkerBeforeSubmit:t,onSubmit:n}=this.props;return e.scribe({action:"submit"}),t?(d.a.deregisterServiceWorker((()=>{this._setLoginCookie(),n?n(this._form.elements):this._form.submit()})),!1):(d.a.flushHTMLCache(),this._setLoginCookie(),n?(n(this._form.elements),!1):void 0)})),o()(this,"_handleSubmitButtonClick",(()=>{!1!==this._handleSubmit()&&this._form.submit()})),o()(this,"_setFormRef",(e=>{e&&(this._form=e)})),o()(this,"_setLoginCookie",(()=>{const e=new Date(Date.now());e.setTime(e.getTime()+3e5),Object(p.b)(a.a.serialize(u.n,this._mobileLoginToken,{domain:void 0,expires:e,path:"/",secure:!0}))}))}componentDidUpdate(e){this.props.autoSubmit&&!e.autoSubmit&&this._handleSubmitButtonClick()}componentDidMount(){h.a.inject("https://twitter.com/i/js_inst?c_name=ui_metrics")}render(){const{children:e,hideSubmitButton:t,horizontalLayout:n,formActionUrl:i,loginReturnPath:o,submitButtonDisabled:r,submitButtonLabel:a,submitButtonSize:c,submitButtonStyle:l,submitButtonType:u}=this.props,[h,d]="string"==typeof o?o.split("?"):[],p=`${encodeURI(h||"/")}${d?`?${d}`:""}`,b=s.createElement(_.a,{style:n&&w.horizontalFields},s.createElement("input",{name:"redirect_after_login",type:"hidden",value:p}),s.createElement("input",{name:"remember_me",type:"hidden",value:"1"}),s.createElement("input",{name:"authenticity_token",type:"hidden",value:this._mobileLoginToken}),s.createElement("input",{name:"wfa",type:"hidden",value:"1"}),s.createElement("input",{autoComplete:"off",name:"ui_metrics",type:"hidden"}),e,t?null:s.createElement(_.a,{style:n&&w.loginButtonContainer},s.createElement(g.a,{disabled:r,onPress:this._handleSubmitButtonClick,size:c,style:l,testID:m,type:u},a)));return s.createElement(_.a,{style:w.loginForm},s.createElement("form",{action:i,children:b,method:"post",noValidate:!0,onSubmit:this._handleSubmit,ref:this._setFormRef}))}}o()(E,"defaultProps",{autoSubmit:!1,deregisterServiceWorkerBeforeSubmit:!1,formActionUrl:"/sessions",hideSubmitButton:!1,submitButtonDisabled:!1,submitButtonLabel:S,submitButtonType:"primary"});const w=v.a.create((e=>({horizontalFields:{flexDirection:"row",justifyContent:"center",alignItems:"stretch"},loginForm:{width:"100%"},loginButtonContainer:{flexDirection:"column",justifyContent:"center"}})));t.a=Object(y.a)(E,{element:"inline_login_form"})},Ukpf:function(e,t,n){"use strict";const i={inject(e){const t=document.createElement("script");t.async=!0,t.src=e;const n=document.body;n&&n.appendChild(t)}};t.a=i},XTym:function(e,t,n){"use strict";var i=n("97Jx"),o=n.n(i),s=n("KEM+"),r=n.n(s),a=(n("kYxP"),n("QX9J")),c=n("ERkP"),l=n("t62R"),u=n("/yvb"),h=n("mw9i"),d=n("3XMw"),p=n.n(d),m=n("hOZg"),b=n("Oe3h"),f=n("0FVZ"),_=n("cHvH"),y=n("rHpw"),g=n("+/1j"),v=n("MWbm");const S=p.a.af8fa2ad,E=c.createElement(m.a,null);class w extends c.Component{constructor(...e){super(...e),r()(this,"_renderAriaOnly",(()=>{const{text:e,testID:t}=this.props;return c.createElement(v.a,{accessibilityRole:"alert",style:y.a.visuallyHidden,testID:t},c.createElement(g.a,null,e))})),r()(this,"_renderContent",(({windowWidth:e})=>{const{text:t,withAutoDismiss:n,withClearButton:i,testID:s,action:r,LayerComponent:d}=this.props;return c.createElement(d,null,c.createElement(h.a,null,c.createElement(b.a,{id:"Toast"},((h,d)=>c.createElement(a.Provider,{viewType:"toast"},c.createElement(v.a,o()({ref:h()},d({accessibilityRole:"alert",style:[k.root,e>y.a.theme.breakpoints.medium&&k.rootWide],testID:s})),c.createElement(l.c,{color:"whiteOnColor",style:k.titleText},t),c.createElement(v.a,{accessibilityHidden:n,style:k.actionButtons},r&&this._renderActionLabel(r),i&&c.createElement(u.a,{accessibilityLabel:S,borderColor:"transparent",color:"white",icon:E,onPress:this._handleClose,style:k.closeButton}))))))))})),r()(this,"_createTimer",(()=>{const{action:e,autoDismissDelay:t,onClose:n,text:i,withAutoDismiss:o}=this.props;if(o){const o=t||w.calculateDismissDelay(i,!!e);this._timerId=setTimeout(n,o)}})),r()(this,"_handleActionPress",(e=>{this._stopTimer();const{action:t,onClose:n}=this.props;null!=t&&t.onAction&&t.onAction(e),n(e)})),r()(this,"_handleClose",(e=>{this._stopTimer(),this.props.onClose(e)}))}componentDidMount(){this._createTimer()}componentWillUnmount(){this._stopTimer()}render(){return this.props.ariaOnly?this._renderAriaOnly():c.createElement(_.a,null,this._renderContent)}_renderActionLabel(e){const{label:t,link:n,clientEventViewType:i,clientEventEntityToken:o}=e,s=i||"action";return c.createElement(a.Provider,{token:o,viewType:s},c.createElement(l.c,{children:t,color:"whiteOnColor",link:n,onClick:this._handleActionPress,style:[k.actionText,!n&&k.actionMargin],weight:"bold",withInteractiveStyling:!0}))}static calculateDismissDelay(e,t){const n=1e3*e.split(" ").length/5+225;return(n<4e3?4e3:n)+(t?2e3:0)}_stopTimer(){clearTimeout(this._timerId)}}r()(w,"defaultProps",{withAutoDismiss:!0,withClearButton:!1,LayerComponent:f.a.ModalToasts});const k=y.a.create((e=>({root:{alignItems:"center",backgroundColor:e.colors.primary,flexDirection:"row",justifyContent:"space-between",padding:e.spaces.space12},rootWide:{alignSelf:"center",borderRadius:e.borderRadii.small,marginBottom:e.spaces.space32},titleText:{flexShrink:1,paddingHorizontal:e.spaces.space12},actionText:{whiteSpace:"nowrap",marginRight:e.spaces.space12},actionButtons:{flexDirection:"row"},actionMargin:{marginHorizontal:e.spaces.space12},closeButton:{marginLeft:e.spaces.space12,paddingHorizontal:e.spaces.space4}})));t.a=w},aD6h:function(e,t,n){"use strict";var i=n("KEM+"),o=n.n(i),s=n("ERkP"),r=n("Hde2"),a=n("yt7X"),c=n("496R");class l extends s.PureComponent{render(){return this.props.hideEUBanner?null:s.createElement(r.a,null,s.createElement(a.a,null))}}o()(l,"defaultProps",{hideEUBanner:!1}),t.a=Object(c.a)(l)},donR:function(e,t,n){"use strict";n.r(t),n.d(t,"inputDetect",(function(){return ht})),n.d(t,"BottomEUBanner",(function(){return dt})),n.d(t,"DtabBar",(function(){return pt})),n.d(t,"GlobalKeyboardShortcuts",(function(){return mt})),n.d(t,"LivePipeline",(function(){return bt})),n.d(t,"ModalSheet",(function(){return ft})),n.d(t,"SmartLockPrompt",(function(){return _t})),n.d(t,"Seo",(function(){return yt})),n.d(t,"Toast",(function(){return gt})),n.d(t,"appReloader",(function(){return vt})),n.d(t,"badgeTimers",(function(){return St})),n.d(t,"bindKeyboardShortcuts",(function(){return Et})),n.d(t,"ie11Reflower",(function(){return wt})),n.d(t,"multiAccountListFetcher",(function(){return kt})),n.d(t,"redirectEmailUser",(function(){return Tt})),n.d(t,"scribeExternalReferer",(function(){return Ct})),n.d(t,"getScreenReaderShortcutsDataAttribute",(function(){return It})),n.d(t,"altSvc",(function(){return Pt})),n.d(t,"AppInstallOnLandingPrompt",(function(){return Ot})),n.d(t,"AudioModule",(function(){return Dt}));var i={};n.r(i),n.d(i,"initialize",(function(){return y})),n.d(i,"detectedTypes",(function(){return g})),n.d(i,"detectedType",(function(){return v})),n.d(i,"register",(function(){return S})),n.d(i,"registerSome",(function(){return E})),n.d(i,"registerEvery",(function(){return w})),n.d(i,"unregister",(function(){return k})),n.d(i,"reset",(function(){return T})),n.d(i,"KEYBOARD",(function(){return l})),n.d(i,"MOUSE",(function(){return u})),n.d(i,"_private",(function(){return C}));var o=n("3+LL"),s=n("KEM+"),r=n.n(s),a=n("z0MJ"),c=n.n(a);const l="keyboard",u="mouse",h=["textarea","input"];let d=[];const p={[l]:!1,[u]:!1};class m{constructor(e){r()(this,"_handleTimerEnd",(()=>{this._count>=3&&this._handleDetected(),this._reset()})),r()(this,"_handleDetected",(()=>{this._reset(),this.detach(),this.detected()})),r()(this,"_reset",(()=>{clearTimeout(this._timer),this._timer=void 0,this._count=0})),r()(this,"_handleMouseMove",(()=>{this._count=this._count+1,this._count>=3?this._handleDetected():this._timer||(this._timer=setTimeout(this._handleTimerEnd,500))})),r()(this,"attach",(()=>{document.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("touchend",this._reset)})),r()(this,"detach",(()=>{document.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("touchend",this._reset)})),this.detected=e,this._count=0}}class b{constructor(e){r()(this,"_handleKeyDown",(e=>{const{altKey:t,ctrlKey:n,metaKey:i,target:o={}}=e,s=o instanceof HTMLInputElement?o.nodeName:void 0;(t||n||i||!((e="")=>-1!==h.indexOf(e.toLowerCase()))(s))&&(this.detach(),this.detected())})),r()(this,"attach",(()=>{document.addEventListener("keydown",this._handleKeyDown)})),r()(this,"detach",(()=>{document.removeEventListener("keydown",this._handleKeyDown)})),this.detected=e}}function f(e){p[e]=!0;const t=d.filter((({matches:e})=>e())),n=d.filter((({matches:e})=>!e()));d=n,t.forEach((({callback:e})=>e()))}let _;const y=()=>{_=[new b((()=>f(l))),new m((()=>f(u)))],_.forEach((e=>e.attach()))},g=()=>Object.keys(p).filter((e=>p[e])),v=e=>p[e],S=(e,t)=>{const n=()=>p[t];n()?c()(e):d.push({matches:n,callback:e})},E=(e,t)=>{const n=()=>t.some((e=>p[e]));n()?c()(e):d.push({matches:n,callback:e})},w=(e,t)=>{const n=()=>t.every((e=>p[e]));n()?c()(e):d.push({matches:n,callback:e})},k=e=>{const t=d.indexOf(e);t>-1&&d.splice(t,1)},T=()=>{d=[],Object.keys(p).forEach((e=>{p[e]=!1})),_.forEach((e=>e.detach()))},C={MOUSE_INTERVAL_TIME_IN_MS:500,SUCCESSIVE_MOUSE_EVENTS:3,detected:f};var I=n("0KEI");var P=(e,t,n)=>{if(e.isTrue("responsive_web_alt_svc")){const e=n(Object(I.d)("APP_INITIALIZATION_ALT_SVC")({}));t.AltSvc.fetch().catch(e)}},O=(n("kYxP"),n("ERkP")),D=n("sebV"),A=n("rxPX");const L=(e,t)=>t.location.pathname.includes("/intent/"),R=(e,t)=>t.location.pathname.includes("/login");var x=Object(A.a)().propsFromState((()=>({isIntentRoute:L,isLoginRoute:R}))).adjustStateProps((({isIntentRoute:e,isLoginRoute:t})=>({hideAppPrompt:e||t}))),M=n("RxYA"),B=n("TnY3"),U=n("v6aA");class j extends O.Component{constructor(...e){super(...e),r()(this,"_isStandaloneApp",D.a.isStandaloneApp()),r()(this,"state",{showPrompt:!this.props.hideAppPrompt&&!this.context.loggedInUserId&&!this._isStandaloneApp&&this.context.featureSwitches.isTrue("responsive_web_use_app_prompt_enabled")&&!this.context.featureSwitches.isTrue("responsive_web_open_in_app_prompt_enabled")}),r()(this,"_handleClose",(()=>{this.setState({showPrompt:!1})}))}render(){return this.state.showPrompt?O.createElement(M.a,{onClose:this._handleClose,onlyShowOnce:!0,useBottomBanner:!0}):null}}r()(j,"contextType",U.a);var N=Object(B.a)(x(j)),K=n("Pc/x"),F=n("RqPI"),H=n("k49u"),X=n("2g+p"),z=n("auX9"),W=n("fs1G"),q=n("sJRb"),V=n("B5iK"),Y=n("l0YN");const G=(e,t=1e3)=>{window.requestIdleCallback?window.requestIdleCallback((()=>e.fire())):setTimeout((()=>e.fire()),t)};var $=e=>{if(!F.e(e.getState()))return;const t=e.dispatch(Object(I.d)("BADGE_TIMERS")({showToast:!1,[H.a.AccessDeniedByBouncer]:{customAction:W.a}})),n=n=>e.dispatch(n).catch(t),i=new V.b(3e4).interval((()=>{"background"!==X.a.currentState&&(n(Object(Y.b)()),Object(z.b)(e.getState()).forEach(n))}));i.start(),G(i);const o=new V.b(3e4).interval((()=>{"background"!==X.a.currentState&&e.dispatch(q.b.fetchInitialOrTop({polling:!0})).catch(t)}));o.start(),G(o);X.a.addEventListener("change",(e=>{"active"===e&&(G(i),G(o))}))},J=n("+Aie"),Z=n.n(J);var Q=n("aD6h"),ee=(n("Cm4o"),n("Hde2")),te=n("P1r1"),ne=Object(A.a)().propsFromState((()=>({dtabBarInfo:te.m}))).adjustStateProps((({dtabBarInfo:e})=>({dtabAll:e&&e.dtabAll,dtabRweb:e&&e.dtabRweb,hide:e&&e.hide,ttsToken:e&&e.ttsToken}))).propsFromActions((()=>({setDtabBarInfo:te.D}))),ie=n("8jkQ"),oe=n("/yvb"),se=n("mw9i"),re=n("t62R"),ae=n("rHpw");class ce extends O.PureComponent{constructor(e,t){super(e,t),r()(this,"_renderButtons",(()=>O.createElement(O.Fragment,null,O.createElement(oe.a,{onClick:this._handleInfo,size:"small",type:"destructive"},"Info"),O.createElement(oe.a,{onClick:this._handleClear,size:"small",type:"destructive"},"Clear"),O.createElement(oe.a,{onClick:this._handleClose,size:"small",type:"destructive"},"Hide")))),r()(this,"_handleInfo",(()=>{const e=this._getOverrides();window.prompt(e.join("\n"),window.encodeURIComponent(e.join(";")))})),r()(this,"_getOverrides",(()=>{const{dtabAll:e,ttsToken:t}=this.props;let n=[];return e&&!t?n=e:t&&(n=[`tts_token=${t}`]),n.filter((e=>!!e))})),r()(this,"_handleClear",(()=>{const e=`OK to clear overrides?\n${this._getOverrides().join("\n")}`;if(window.confirm(e)){const e=new URL(ie.b.get());e.searchParams.set("dtab_local",""),e.searchParams.set("tts_token",""),ie.b.navigateTo(e.toString())}})),r()(this,"_handleClose",(()=>{const{dtabAll:e,dtabRweb:t,ttsToken:n,setDtabBarInfo:i}=this.props;this.setState({show:!1}),i({dtabAll:e,dtabRweb:t,ttsToken:n,hide:!0})})),r()(this,"_shouldShow",(()=>{const{dtabAll:e,ttsToken:t,hide:n}=this.props;return!(n||!e&&!t)})),this.state={show:this._shouldShow()}}render(){const{dtabAll:e,ttsToken:t}=this.props,n=t||e?O.createElement(ee.a,{style:le.root},O.createElement(se.a,{isLarge:!0,style:le.container,withGutter:!0},O.createElement(re.c,{color:"whiteOnColor",numberOfLines:1,size:"small",style:le.text},"Staging override is active"),this._renderButtons())):null;return this.state.show?n:null}}r()(ce,"defaultProps",{hide:!1});const le=ae.a.create((e=>({root:{backgroundColor:e.colors.red500},container:{alignItems:"center",flexDirection:"row",height:e.spaces.space40,justifyContent:"space-between"},text:{width:"100%"}})));var ue=ne(ce),he=n("OrGc"),de=n("rRIm"),pe=n("aITJ");var me={init:e=>{const t=t=>{if("active"===t&&e&&e.body){const t=e.body.style.display;e.body.style.display="none",e.body.clientHeight,e.body.style.display=t}};pe.b.isDesktopOS()&&pe.b.isIE()&&X.a.addEventListener("change",t)}},be=n("pXBW"),fe=n("nS6Z");function _e(e){return e.json().then((e=>e.errors.some((e=>392===e.code))))}function ye({promiseFactory:e,condition:t,sideEffect:n}){return(...i)=>{const o=e(...i);return o.then(t).then((e=>{e&&n()})).then((()=>o),(()=>o))}}function ge(e){return Object.keys(ve(e))}function ve(e){return e.reduce(((e,t)=>(e[t]=!0,e)),{})}class Se{constructor({makeEventSource:e,callback:t,topics:n}){r()(this,"topics",[]),r()(this,"backoffDuration",0),r()(this,"_handleMessage",(({data:e})=>{try{const t=JSON.parse(e);this.connection&&"/system/config"===t.topic&&(this.connection.hasConfig=!0),this.callback(t)}catch(e){}})),r()(this,"_handleError",(()=>{if(!this.connection||this.connection.eventSource.readyState===this.connection.eventSource.OPEN)return;const e=this.connection;e&&e.eventSource.readyState===e.eventSource.CONNECTING&&function(e,t){const n=ve(e),i=Object.keys(n),o=ge(t);return i.length===o.length&&o.every((e=>n[e]))}(e.topics,this._getTopicsForAutoSubscribe())||(this._cleanup(),this.connection&&this.connection.hasConfig?this.backoffDuration=1e3:this.backoffDuration=Math.max(1e3,Math.min(2*this.backoffDuration,6e4)),this.backoffTimeoutId=setTimeout(this._connect,this.backoffDuration*(.5+Math.random())))})),r()(this,"_connect",(()=>{this._cleanup();const e=this._getTopicsForAutoSubscribe();this.makeEventSource(e).then((t=>{if("object"!=typeof t)throw new Error("EventSource must be defined");t.addEventListener("message",this._handleMessage),t.addEventListener("error",this._handleError),this.connection={eventSource:t,topics:e,hasConfig:!1}})).catch((()=>{this._handleError()}))})),this.makeEventSource=e,this.callback=t,this.setTopics(n),this._connect()}setTopics(e){this.topics=e}getAutoSubscribedTopics(){return this.connection?this.connection.topics:[]}_getTopicsForAutoSubscribe(){return this.topics.slice(0,Se.MAX_AUTO_SUBSCRIBE_TOPICS)}_cleanup(){const e=this.connection;e&&(e.eventSource.removeEventListener("message",this._handleMessage),e.eventSource.removeEventListener("error",this._handleError),e.eventSource.close(),this.connection=null),clearTimeout(this.backoffTimeoutId)}teardown(){this._cleanup()}}r()(Se,"MAX_AUTO_SUBSCRIBE_TOPICS",20);var Ee=n("+d3d");class we{constructor(e){r()(this,"sessionId",""),r()(this,"pendingState",{topics:[],forceSubscribeAll:!1}),r()(this,"appliedState",{topics:[]}),r()(this,"setTopics",((e=[])=>{this.pendingState.topics=ge(e),this._applyPendingState()})),r()(this,"_subscribeAll",(()=>{this.pendingState.forceSubscribeAll=!0,this._applyPendingState()})),r()(this,"_applyPendingState",(()=>{const e=this.pendingState.forceSubscribeAll?this.pendingState.topics:this.pendingState.topics.filter((e=>-1===this.appliedState.topics.indexOf(e))),t=this.appliedState.topics.filter((e=>-1===this.pendingState.topics.indexOf(e))),n=!this.sessionId,i=0===e.length&&0===t.length;n||i||(this.appliedState={topics:this.pendingState.topics},this.pendingState={topics:this.appliedState.topics,forceSubscribeAll:!1},this.updateSubscriptions({toSubscribe:e,toUnsubscribe:t,sessionId:this.sessionId}))}));const{updateSubscriptions:t,throttlePeriod:n=we.UPDATE_SUBSCRIPTIONS_THROTTLE}=e;this.updateSubscriptions=t,this.throttlePeriod=n,null!==n&&n>=0&&(this._applyPendingState=Object(Ee.a)(this._applyPendingState,n,{leading:!1}))}setConfig(e=null,t=[]){if(clearInterval(this.intervalId),!e||!e.config)return;this.sessionId=e.config.session_id,this.appliedState={topics:t},this._applyPendingState();const n=(e.config.subscription_ttl_millis||we.DEFAULT_TTL)-we.TIMEOUT_PREEMPT_DURATION;this.intervalId=setInterval(this._subscribeAll,n)}teardown(){clearInterval(this.intervalId),this.updateSubscriptions({toSubscribe:[],toUnsubscribe:this.appliedState.topics,sessionId:this.sessionId})}}r()(we,"DEFAULT_TTL",12e4),r()(we,"TIMEOUT_PREEMPT_DURATION",2e4),r()(we,"UPDATE_SUBSCRIPTIONS_THROTTLE",1e3);class ke{constructor({makeEventSource:e,updateSubscriptions:t}){r()(this,"isSuspended",!1),r()(this,"eventSourceConnector",null),r()(this,"subscriptionsByTopic",{}),r()(this,"_closeEventSource",(()=>{this._clearExpiryTimeout(),this.livePipelineResubscriber.setConfig(null),this.eventSourceConnector&&(this.eventSourceConnector.teardown(),this.eventSourceConnector=null)})),r()(this,"_restartEventSource",(()=>{this._closeEventSource(),this._reconcileTopics()})),r()(this,"_handleMessage",(({topic:e,payload:t})=>{e===ke.SYSTEM_CONFIG_TOPIC&&this.eventSourceConnector&&this.livePipelineResubscriber.setConfig(t,this.eventSourceConnector.getAutoSubscribedTopics());const n=Promise.resolve(t);return(this.subscriptionsByTopic[e]||[]).map((e=>n.then(e.callback)))})),this.makeEventSource=e,this.livePipelineResubscriber=new we({updateSubscriptions:ye({promiseFactory:t,condition:_e,sideEffect:this._restartEventSource})})}teardown(){this._clearExpiryTimeout(),this.subscriptionsByTopic={},this.livePipelineResubscriber.teardown(),this.eventSourceConnector&&(this.eventSourceConnector.teardown(),this.eventSourceConnector=null)}suspend(){this.isSuspended=!0,this._reconcileTopics()}resume(){this.isSuspended=!1,this._reconcileTopics()}subscribeTopic(e,t){if(!e)return{teardown:()=>{}};const n={topic:e,callback:t};return this.subscriptionsByTopic[e]=this.subscriptionsByTopic[e]||[],this.subscriptionsByTopic[e].push(n),this._reconcileTopics(),{teardown:()=>{const t=(this.subscriptionsByTopic[e]||[]).filter((e=>e!==n));0===t.length?delete this.subscriptionsByTopic[e]:this.subscriptionsByTopic[e]=t,this._reconcileTopics()}}}_reconcileTopics(){const e=this.isSuspended?[]:Object.keys(this.subscriptionsByTopic),t=e.length>0;t&&this._clearExpiryTimeout(),this.livePipelineResubscriber.setTopics(e),this.eventSourceConnector&&this.eventSourceConnector.setTopics(e),t&&!this.eventSourceConnector?(this._closeEventSource(),this.eventSourceConnector=new Se({makeEventSource:this.makeEventSource,callback:this._handleMessage,topics:e})):t||!this.eventSourceConnector||this.connectionExpiryTimeoutId||(this.connectionExpiryTimeoutId=setTimeout(this._closeEventSource,ke.UNUSED_CONNECTION_EXPIRY))}_clearExpiryTimeout(){clearTimeout(this.connectionExpiryTimeoutId),this.connectionExpiryTimeoutId=null}}let Te;r()(ke,"SYSTEM_CONFIG_TOPIC","/system/config"),r()(ke,"UNUSED_CONNECTION_EXPIRY",3e4);var Ce={isSupported:e=>"EventSource"in window&&e.isTrue("livepipeline_client_enabled"),isSupportedAndReady(e){return this.isSupported(e)&&!!Te},create(e,t,n){if(!this.isSupported(e))throw new Error("This browser does not support LivePipeline");if(Te)throw new Error("LivePipeline should only be initialized once");return Te=new ke({makeEventSource:e=>{const t=(e=>{const t=e.map(encodeURIComponent).join(","),i=e=>`${e}/live_pipeline/events?topic=${t}`,o=i(fe.b),s=n.getReplacementHost(new URL(o));return s?i(`https://${s}`):o})(e);return Promise.resolve(new window.EventSource(t,{withCredentials:!0}))},updateSubscriptions:e=>t.LivePipeline.updateSubscriptions(e).catch((e=>{if(e)if(e instanceof be.a&&Object(H.c)(e,H.a.SessionNotFound))Te&&Te._restartEventSource();else if(!(e instanceof be.a)&&e instanceof Error)return Promise.reject(e);return Promise.resolve()}))}),X.a.addEventListener("change",(e=>this._handleAppStateChange(e))),Te},get(){if(!Te)throw new Error("LivePipeline instance has not been initialized");return Te},destroy(){Te&&Te.teardown(),Te=void 0},_handleAppStateChange(e){"active"===e?this.get().resume():this.get().suspend()}},Ie=n("pf9B");var Pe=e=>{const t=Object(I.d)("MULTI_ACCOUNT_LIST_UPDATER"),n=e.dispatch(t({showToast:!1,[H.a.AccessDeniedByBouncer]:{customAction:W.a}})),i=t=>e.dispatch(t).catch(n);(window.requestIdleCallback||window.requestAnimationFrame)((()=>{i(Object(z.d)()).then((()=>{Object(z.b)(e.getState()).forEach(i)}))}))},Oe=(n("MvUL"),n("Sp5X"));const De=["/login/error","/i/sms_login"];var Ae=(e,t)=>{const n=!F.e(t),i=F.c(t);if(n&&i&&Oe.a&&!e.isTrue("responsive_web_ocf_lite_login_flow_enabled")){const{pathname:e}=Oe.a.location;-1===De.indexOf(e)&&Oe.a.replace({pathname:"/i/sms_login"})}},Le=n("Mx3A"),Re=n("qzfk"),xe=n("YeIG"),Me=n("mrHL");const Be={page:"external",action:"referred"};var Ue=(e,t,n)=>{const i=e=>n.dispatch(Object(I.d)(e)({})),o=Oe.a&&Oe.a.location.query,s=Le.c({query:o,httpReferer:document.referrer||"",requestUrl:window.location.href});if(Object(xe.a)(s))return Promise.resolve();if(s.referer&&!ie.b.isExternalUrl(s.referer)&&!ie.b.isInternalRedirect(s.referer))return Promise.resolve();s.referer||(s.referer=""),s.referral_details_str||(s.referral_details_str=""),s.referral_type||(s.referral_type=0);const r=Object(Me.a)("external_referer");r&&(s.external_referer_cookie_value=r);const a=s.referral_type===Le.a.Access,c={...Be,client:Object(Re.a)().clientName};r&&a&&(c.action="set_access_referer_cookie");const l=t.createEventObject(c,"client_event",s),u=t.createPayload([l]);let h,d;h=s?e.Ocf.referer({landing_url:s.url,referral_details:s.referral_details_str||void 0,referrer_url:s.referer||void 0}).catch((()=>i("OCF_EXTERNAL_REFERER"))):Promise.resolve(),d=s?e.Attribution.recordUserEvent({event:"open",referring_link_url:s.url}).catch((()=>i("ATTRIBUTION_EXTERNAL_REFERER"))):Promise.resolve();const p=e.Jot.externalReferer(u).then((e=>{const t=Le.b(e&&e[0]);t&&Object(Me.b)(t)})).catch((()=>i("SCRIBE_EXTERNAL_REFERER")));return Promise.all([p,h,d])},je=n("6/RC"),Ne=n("O6Yq"),Ke=n("muX9");class Fe extends O.PureComponent{render(){let e;je.canUseDOM&&(e=window.location.href);const t=e?{canonical:Object(Ne.a)(e)}:null;return t?O.createElement(Ke.a,null,O.createElement("link",{href:t.canonical,rel:"canonical"})):null}}var He=Object(B.a)(Fe);var Xe=Object(A.a)().propsFromState((()=>({loginReturnPath:F.i}))).withAnalytics({component:"smartlock_prompt"}),ze=n("6oVL"),We=n("SrIh"),qe=n("BnI0"),Ve=n("pQ3Z"),Ye=n.n(Ve),Ge=n("cnVF"),$e=n("MWbm");const Je=["/settings","/signup","/login/error","/i/flow/signup","/login/check"];class Ze extends O.Component{constructor(e,t){super(e,t),this.state={autoSubmit:!1,password:"",smartLockDisabled:!1,userName:""},this._smartLockSupported=!!(window.PasswordCredential&&navigator.credentials&&navigator.credentials.get)&&!t.loggedInUserId,this._isSmartLockDisabledFromCookie="1"===e.getCookie(Ge.t)}componentDidMount(){"/login/error"===this.props.location.pathname?Object(qe.a)():this._checkShouldDisplayPrompt()}componentDidUpdate(e){Ye()(e.location,this.props.location)||this._checkShouldDisplayPrompt()}render(){const{loginReturnPath:e}=this.props,{autoSubmit:t,password:n,userName:i}=this.state;return this._shouldDisplaySmartLockPrompt()?O.createElement($e.a,{style:Qe.hidden},O.createElement(ze.a,{autoSubmit:t,loginReturnPath:e},O.createElement("input",{name:"session[username_or_email]",type:"hidden",value:i}),O.createElement("input",{name:"session[password]",type:"hidden",value:n}))):null}_scribeAction(e,t){const{analytics:n}=this.props;n.scribe({...t,action:e})}_checkShouldDisplayPrompt(){const{location:{pathname:e}}=this.props,{smartLockDisabled:t}=this.state;if(this._shouldDisplaySmartLockPrompt()){this._scribeAction("impression");const n=(t||this._isSmartLockDisabledFromCookie)&&"/login"===e?"required":"optional";let i=!0;setTimeout((()=>i=!1),250),navigator.credentials.get({mediation:n,password:!0}).then((e=>{if(e){i?this._scribeAction("select",{element:"unmediated"}):this._scribeAction("select",{element:"mediated"});const{id:t,password:n}=e;this.setState({autoSubmit:!0,userName:t,password:n})}else this._smartLockSupported&&this.setState({smartLockDisabled:!0},qe.a),i?this._scribeAction("cancel",{element:"no_credentials"}):this._scribeAction("cancel",{element:"with_credentials"})}),(e=>{e&&"NotSupportedError"!==e.name&&"NotAllowedError"!==e.name&&"InvalidStateError"!==e.name&&Object(We.a)(e)}))}}_shouldDisplaySmartLockPrompt(e=this.props){const{loggedInUserId:t}=this.context,{location:{pathname:n}}=e,{smartLockDisabled:i}=this.state,o="/login"===n||!this._isSmartLockDisabledFromCookie&&!i&&!Je.some((e=>e===n));return!t&&this._smartLockSupported&&o}}r()(Ze,"contextType",U.a),r()(Ze,"defaultProps",{getCookie:Me.a});const Qe=ae.a.create((e=>({hidden:{display:"none"}})));var et=Object(B.a)(Xe(Ze)),tt=n("HPNB"),nt=n("ZNx0"),it=n("1YZw"),ot=Object(A.a)().propsFromState((()=>({toast:it.d}))).propsFromActions((()=>({onClose:it.c}))),st="toast",rt=n("zCf4"),at=n("cHvH"),ct=n("0FVZ"),lt=n("XTym");var ut=ot((({onClose:e,toast:t})=>{const n=(e=>e.pathname.startsWith("/explore")?"guide":"app")(Object(rt.f)());return t?O.createElement(at.a,null,(({windowWidth:i})=>{const o=tt.a.shouldRenderAsModal(i)?ct.a.ModalToasts:ct.a.Toasts;return O.createElement(nt.a,{viewType:n},O.createElement(lt.a,{LayerComponent:o,action:t.action,ariaOnly:t.ariaOnly,autoDismissDelay:t.autoDismissDelay,key:t.id,onClose:e,testID:st,text:t.text,withAutoDismiss:t.withAutoDismiss,withClearButton:t.withClearButton}))})):null}));const ht=i,dt=Q.a,pt=ue,mt=de.a,bt=Ce,ft=Ie.a,_t=et,yt=He,gt=ut,vt=o,St=$,Et=function(e,t){const n=Object.keys(e);let i,o=!1;const s=()=>{o||(i=Z()(t),n.forEach((t=>{return i.bind(t,(n=e[t],e=>{e.preventDefault(),e.stopPropagation(),n(e)}));var n})))};return E(s,[l,u]),()=>{o=!0,k(s),i&&i.unbind(n)}},wt=me,kt=Pe,Tt=Ae,Ct=Ue,It=he.c,Pt=P,Ot=N,Dt=K.a},rRIm:function(e,t,n){"use strict";n.d(t,"b",(function(){return D}));var i=n("KEM+"),o=n.n(i),s=(n("kYxP"),n("ERkP")),r=n("sTyV"),a=n("6/RC"),c=n("sebV"),l=n("rxPX"),u=n("G6rE"),h=Object(l.a)().propsFromState((()=>({loggedInUser:u.e.selectLoggedInUser}))).adjustStateProps((({loggedInUser:e})=>({loggedInUserScreenName:e?e.screen_name:void 0}))),d=n("3XMw"),p=n.n(d),m=n("OrGc"),b=n("QK5w"),f=n("aITJ"),_=n("MWbm"),y=n("TnY3"),g=n("rHpw"),v=n("t62R"),S=n("v6aA"),E=n("uScj"),w=n("fs1G"),k=n("BcsE"),T=n("VPAj");const C=p.a.b47e760d,I=p.a.fd2c7b43,P=new E.a,O=e=>{if(e.target instanceof HTMLInputElement){const t=e.target.tagName.toLowerCase();return"input"===t||"textarea"===t}return!1},D=e=>{if(!a.canUseDOM)return w.a;return P.subscribe(e).unsubscribe};class A extends s.Component{constructor(...e){super(...e),o()(this,"_bindKeyboardShortcuts",(()=>{const{history:e,loggedInUserScreenName:t}=this.props,n=t=>n=>{n.preventDefault(),P._listeners.length?P.notify(t):e.push({pathname:"/explore",state:{searchFocused:!0,searchPrefill:t}})},i={[m.d.search]:n(),[m.d.goToUser]:n("@"),[m.d.openKeyboardShortcuts]:()=>e.push("/i/keyboard_shortcuts"),[m.d.goExplore]:()=>e.push("/explore"),[m.d.goSettings]:()=>e.push("/settings")},o=t=>({[m.d.goProfile]:()=>e.push(`/${t}`),[m.d.goLikes]:()=>e.push(`/${t}/likes`),[m.d.goLists]:()=>e.push(`/${t}/lists`)}),s=this.context.featureSwitches.isTrue("responsive_web_moment_maker_enabled"),a=t&&s?{...o(t),[m.d.goMomentMaker]:()=>e.push("/i/moment_maker")}:t?o(t):{},c={...i,...a,[m.d.goHome]:()=>e.push("/home"),[m.d.goDisplay]:()=>e.push("/i/display"),[m.d.goNotifications]:()=>e.push("/notifications"),[m.d.goMentions]:()=>e.push("/notifications/mentions"),[m.d.goMessages]:()=>e.push("/messages"),[m.d.newMessage]:()=>e.push("/messages/compose"),[m.d.newTweet]:()=>e.push("/compose/tweet"),[m.d.goBookmarks]:()=>e.push("/i/bookmarks")},l=this.props.loggedInUserScreenName?c:i;this._unbindKeyboardShortcuts=Object(r.a)(l)})),o()(this,"_handleKeyDown",(e=>{O(e)||"Backspace"!==e.key||(this._backspaceDown=Date.now(),e.preventDefault(),e.stopPropagation())})),o()(this,"_handleKeyUp",(e=>{if(!O(e)&&"Backspace"===e.key){e.preventDefault(),e.stopPropagation();const t=this._backspaceDown,n=!!Object(k.a)(t)&&Date.now()-t<500,i=Object(b.a)({},{location:this.props.location});n&&i?this.props.history.goBack():window.close()}}))}componentDidMount(){this._bindKeyboardShortcuts(),f.b.isKaiOS()&&c.a.isStandaloneApp()&&(document.addEventListener("keydown",this._handleKeyDown),document.addEventListener("keyup",this._handleKeyUp))}componentWillUnmount(){this._unbindKeyboardShortcuts&&this._unbindKeyboardShortcuts(),f.b.isKaiOS()&&c.a.isStandaloneApp()&&(document.removeEventListener("keydown",this._handleKeyDown),document.removeEventListener("keyup",this._handleKeyUp))}render(){return this.props.loggedInUserScreenName?s.createElement(_.a,{accessibilityLevel:2,accessibilityRole:"heading",style:g.a.visuallyHidden},s.createElement(v.c,null,C),s.createElement(v.c,{focusable:!1,link:"/i/keyboard_shortcuts"},I)):null}}o()(A,"contextType",S.a);const L=h(A),R=a.canUseDOM?Object(y.a)(L):Object(T.a)(null);t.a=R},yt7X:function(e,t,n){"use strict";var i=n("KEM+"),o=n.n(i),s=(n("kYxP"),n("ERkP")),r=n("6/RC"),a=n.n(r),c=n("rxPX"),l=n("RqPI"),u=Object(c.a)().propsFromState((()=>({currentCountry:l.l}))),h=n("s9SB"),d=n.n(h),p=n("MWbm"),m=n("t62R"),b=n("cHvH"),f=n("rHpw"),_=n("/yvb"),y=n("v6aA"),g=n("3XMw"),v=n.n(g),S=n("cnVF");const E=(e,t,n)=>{const i=e.indexOf(t.toLowerCase())>-1,o=n[S.i];return i&&"1"!==o},w=v.a.ia5e7487;class k extends s.Component{constructor(...e){super(...e),o()(this,"state",{euWarningIsOpen:!1}),o()(this,"_renderMessage",(()=>s.createElement(m.c,{color:"white",size:"small"},s.createElement(v.a.I18NFormatMessage,{$i18n:"i3c34582"},s.createElement(m.c,{color:"white",link:"https://help.twitter.com/rules-and-policies/twitter-cookies",style:T.link},v.a.fd0ff73b))))),o()(this,"_handleEUBannerClose",(()=>{a.a.canUseDOM&&(document.cookie=d.a.serialize(S.i,"1",{maxAge:31536e3,path:"/",domain:".twitter.com",secure:!0})),this.setState({euWarningIsOpen:!1})}))}componentDidMount(){const{currentCountry:e}=this.props,t=this.context.featureSwitches.getArrayValue("responsive_web_eu_countries",[]),n=r.canUseDOM?d.a.parse(document.cookie):{};this.setState({euWarningIsOpen:!!e&&E(t,e,n)})}render(){return this.state.euWarningIsOpen?s.createElement(b.a,null,(({windowWidth:e})=>{const t=e<f.a.theme.breakpoints.medium;return s.createElement(p.a,{style:[T.root,t&&T.rootNarrow]},this._renderMessage(),s.createElement(_.a,{onPress:this._handleEUBannerClose,size:"normal",style:[T.closeButton,t&&T.closeButtonNarrow],type:"invertedSecondary"},w))})):null}}o()(k,"contextType",y.a);const T=f.a.create((e=>({root:{alignItems:"center",boxShadow:e.boxShadows.medium,flexDirection:"row",width:"100%",justifyContent:"space-evenly",backgroundColor:e.colors.gray900,paddingHorizontal:e.spaces.space20,paddingVertical:e.spaces.space20},rootNarrow:{flexDirection:"column"},container:{alignItems:"center",flexShrink:1},closeButton:{marginLeft:e.spaces.space12,marginTop:0,flexGrow:0,flexShrink:0},closeButtonNarrow:{marginLeft:0,marginTop:e.spaces.space12,width:"100%"},link:{textDecorationLine:"underline"}}))),C=u(k);t.a=C}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules.a5021535.js.map