(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{"3GUV":function(e,t,r){"use strict";var s=r("ERkP"),i=r("rHpw"),n=r("MWbm");class o extends s.Component{shouldComponentUpdate(){return!1}render(){return s.createElement(n.a,{style:a.root})}}const a=i.a.create((e=>({root:{height:5*e.lineHeightsPx.body}})));t.a=o},"5UID":function(e,t,r){"use strict";var s=r("ERkP"),i=r("3XMw"),n=r.n(i),o=r("rHpw"),a=r("+/1j"),c=r("MWbm");const l=n.a.e5b0063d;let h=0;class d extends s.Component{constructor(){super(),this._listDomId=`accessible-list-${h}`,h+=1}render(){const{children:e,title:t}=this.props,r=l({title:t});return s.createElement(c.a,{accessibilityLabelledBy:this._listDomId,accessibilityRole:"region"},s.createElement(a.a,{accessibilityLevel:1,accessibilityRole:"heading",nativeID:this._listDomId,style:o.a.visuallyHidden},t),s.createElement(c.a,{accessibilityLabel:r},e))}}t.a=d},JsJV:function(e,t,r){"use strict";var s=r("6/RC"),i=r("tI3i"),n=r.n(i),o=s.canUseDOM?window.location.href:"",a=function(){function e(){var e=this;this._eventCallbacks={},this.addEventListener=function(t,r){e._eventCallbacks[t]?e._eventCallbacks[t].push(r):e._eventCallbacks[t]=[r]},this.removeEventListener=function(t,r){var s=e._eventCallbacks[t].filter((function(e){return e.toString()!==r.toString()}));e._eventCallbacks[t]=s}}var t=e.prototype;return t._dispatchEvent=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];var i=this._eventCallbacks[e];null!=i&&Array.isArray(i)&&i.map((function(e){e.apply(void 0,r)}))},t.canOpenURL=function(){return Promise.resolve(!0)},t.getInitialURL=function(){return Promise.resolve(o)},t.openURL=function(e){try{return c(e),this._dispatchEvent("onOpen",e),Promise.resolve()}catch(e){return Promise.reject(e)}},t._validateURL=function(e){n()("string"==typeof e,"Invalid URL: should be a string. Was: "+e),n()(e,"Invalid URL: cannot be empty")},e}(),c=function(e){if(s.canUseDOM){var t=new URL(e,window.location).toString();window.open(t,"_blank","noopener")}};t.a=new a},VeNJ:function(e,t,r){"use strict";r.r(t),r.d(t,"TimelineRenderer",(function(){return le}));var s=r("KEM+"),i=r.n(s),n=(r("kYxP"),r("n+Zb")),o=r("ERkP"),a=r("5UID"),c=r("6/RC"),l=r("1YZw"),h=r("rxPX"),d=Object(h.a)().propsFromActions((()=>({addToast:l.b}))).withAnalytics(),p=r("KNCp"),m=r("lUZE");var u=Object.freeze({Icon:"Icon",IconSmall:"IconSmall",FullWidth:"FullWidth"}),_=r("caTy"),b=r("TnY3"),y=r("TIdA"),v=r("A91F"),g=r("feu+"),f=r("JsJV"),C=r("MWbm"),E=r("oQhu"),w=r("fs1G"),I=r("rcen");class T extends o.PureComponent{constructor(...e){super(...e),i()(this,"_getGraphicProps",Object(E.a)(((e,t)=>{const r=e?({style:t})=>o.createElement(C.a,{style:t},o.createElement(y.a,{accessibilityLabel:"",aspectMode:v.a.exact(e.width/e.height),image:e})):m.a;let s="illustration";return e&&t!==u.IconSmall?t===u.FullWidth&&(s="illustrationFullWidth"):s="icon",{graphic:r,graphicDisplayMode:s}}))),i()(this,"_scribeAction",((e,t)=>{const{analytics:r}=this.props,{action:s,component:i,element:n}=t||{};r.scribe({action:s||e,component:i||"cover",element:n})})),i()(this,"_handleDismiss",(()=>{const{dismissInfo:e,processCallback:t}=this.props,{callbacks:r}=e||{};r&&r.forEach((e=>{t(e)})),e&&(this._scribeAction("dismiss"),this.props.onClose())})),i()(this,"_handlePrimaryCtaClick",(()=>{this._handleCtaClick(this.props.primaryCta,"primary_cta")})),i()(this,"_handleSecondaryCtaClick",(()=>{this.props.secondaryCta&&this._handleCtaClick(this.props.secondaryCta,"secondary_cta")})),i()(this,"_handleCtaClick",(({ctaBehavior:e,callbacks:t,clientEventInfo:r},s)=>{const{addToast:i,processCallback:n,history:o}=this.props;if(this.props.onClose(),this._scribeAction("click",{element:s,...r}),e.dismiss){const{dismiss:t}=e;t&&t.feedbackMessage&&i({text:t.feedbackMessage.text})}if(e.navigate){const{navigate:t}=e,r=t&&Object(_.b)(t.url);r&&(r.external?f.a.openURL(r.pathname):o.push(r.pathname))}t&&t.forEach((e=>n(e)))}))}componentDidMount(){this.props.onImpression&&this.props.onImpression()}render(){const{image:e,imageDisplayType:t,primaryText:r,primaryCta:s,secondaryText:i,secondaryCta:n,details:a,displayType:c,type:l,dismissInfo:h}=this.props,d=o.createElement(I.b,{entities:r.entities,text:r.text}),m=i?o.createElement(I.b,{entities:i.entities,text:i.text}):null;if(l===p.a.Full){const l=a?o.createElement(I.b,{entities:a.entities,text:a.text}):null,{graphic:p,graphicDisplayMode:u}=this._getGraphicProps(e,t);return o.createElement(g.a,{actionLabel:s.text,footer:l,footerAlign:a&&a.alignment===I.a.Center?"center":"left",graphic:p,graphicDisplayMode:u,headline:d,headlineAlign:r.alignment===I.a.Natural?"left":"center",isFullHeightOnMobile:!h&&"CenterCover"!==c,onAction:this._handlePrimaryCtaClick,onClose:this._handleDismiss,onTertiaryAction:this._handleSecondaryCtaClick,subtext:m,subtextAlign:i&&i.alignment===I.a.Natural?"left":"center",tertiaryActionLabel:n&&n.text,withCloseButton:!!h})}return o.createElement(g.a,{actionLabel:s.text,graphicDisplayMode:"none",headline:d,headlineAlign:r.alignment===I.a.Center?"center":"left",onAction:this._handlePrimaryCtaClick,onClose:w.a,onSecondaryAction:this._handleSecondaryCtaClick,secondaryActionLabel:n&&n.text,subtext:m,subtextAlign:i&&i.alignment===I.a.Center?"center":"left",withCloseButton:!1})}}i()(T,"defaultProps",{imageDisplayType:u.Icon});var S=Object(b.a)(d(T));const k={component:"cover",action:"impression"};var x=({activeCover:e,clearActiveCover:t,processCallback:r,scribeAction:s,scribeNamespace:i})=>{const n=((e,t)=>{let r={...e,...k};return t&&(r={...r,component:t.component||r.component,element:t.element||r.element,action:t.action||r.action}),r})(i,e.clientEventInfo),a=()=>{const{cover:{impressionCallbacks:t}}=e;t&&t.forEach((e=>r(e))),s(n)};return"full"===e.type?(c=e.cover,o.createElement(S,{details:c.details||void 0,dismissInfo:c.dismissInfo,displayType:c.displayType,image:c.image,imageDisplayType:c.imageDisplayType||void 0,onClose:t,onImpression:a,primaryCta:c.primaryCoverCta,primaryText:c.primaryText,processCallback:r,secondaryCta:c.secondaryCoverCta,secondaryText:c.secondaryText,type:"full"})):"half"===e.type?function(e){const s="CenterCover"===e.displayType?"full":"half";return o.createElement(S,{displayType:e.displayType,image:e.coverImage?e.coverImage.image:void 0,imageDisplayType:e.coverImage?e.coverImage.imageDisplayType:void 0,onClose:t,onImpression:a,primaryCta:e.primaryCoverCta,primaryText:e.primaryText,processCallback:r,secondaryCta:e.secondaryCoverCta,secondaryText:e.secondaryText,type:s})}(e.cover):null;var c},L=r("8UdT"),R=r("MDbM"),A=(r("C1yv"),r("Qyxo"));class D{constructor(){this._lingerScribed={},this._appearance={}}processPositioningUpdate(e,t,r=Date.now()){const s=N(e,t);return this._lingerTransition(s,r)}flushLingerEvents(e=Date.now()){return this._detectScribeLingerEvents(this._appearance,{},e)}_lingerTransition(e,t){const r=this._appearance;return this._appearance=e.reduce(((e,s)=>(e[s]=r[s]||{start:t,lingered:!1},e)),{}),{allLingerIds:this._detectAllLingerEvents(r,t),scribeLingerEvents:this._detectScribeLingerEvents(r,this._appearance,t)}}_detectAllLingerEvents(e,t){return Object.keys(e).reduce(((r,s)=>{const{start:i,lingered:n}=e[s];return!n&&t-i>=500&&(r.push(s),this._appearance[s]&&(this._appearance[s]={...this._appearance[s],lingered:!0})),r}),[])}_detectScribeLingerEvents(e,t,r){return Object.keys(e).reduce(((s,i)=>{const{start:n}=e[i];return!t[i]&&!this._lingerScribed[i]&&r-n>=500&&(this._lingerScribed[i]=!0,s.push({id:i,start:n,end:r})),s}),[])}}const N=(e,t)=>Object(A.a)(e,(({id:e,rectangle:r})=>O(r,t)>=.5*r.getHeight()?e:void 0)),O=(e,t)=>Math.max(0,Math.min(e.getBottom(),t.getBottom())-Math.max(e.getTop(),t.getTop()));var P=r("Stgo"),M=r("LFzM");var U=({children:e,impressionTracker:t})=>t?o.createElement(M.a.Provider,{value:{impressionTracker:t}},e):e,B=r("OrGc"),F=r("hACr"),V=r("VPAj"),j=r("3GUV"),W=r("v//M"),H=r("rHpw");const G=Object(V.a)(o.createElement(j.a,null)),K=({bottomFetchStatus:e,onBottomRetry:t})=>o.createElement(C.a,{style:z.footer},o.createElement(W.a,{fetchStatus:e,onRequestRetry:t,render:G})),z=H.a.create((e=>({footer:{height:`calc(5 * ${e.lineHeights.body})`}})));var J=o.memo(K),q=r("xjVt"),Z=r("EUHl"),Y=r("IG4P"),Q=r("iBK2"),X=r("b1wW");r("rxtR");const $=Object.freeze({ON_LINGER:"onLinger"});var ee=r("aITJ"),te=r("aWzz"),re=r("cFgU"),se=r("iChn"),ie=r("+d3d");const ne=e=>e.entryId,oe=e=>e.sortIndex;const ae=new Map;let ce;class le extends o.PureComponent{constructor(e,t){var r;super(e,t),i()(this,"_adjustFocusBy",(e=>{this._shouldPreventKeyboardShortcuts()||this._scroller&&this._scroller.adjustFocusBy(e)})),i()(this,"_focusNext",(()=>this._adjustFocusBy(1))),i()(this,"_focusPrevious",(()=>this._adjustFocusBy(-1))),i()(this,"_renderLoadBottom",(()=>{const{bottomFetchStatus:e,onBottomRetry:t}=this.props;return o.createElement(J,{bottomFetchStatus:e,onBottomRetry:t})})),i()(this,"_refreshControlWrapper",(e=>{const{canRefresh:t,refreshControl:r,topFetchStatus:s,onRefresh:i}=this.props;return r?o.createElement(r,{canRefresh:t,isRefreshing:s===R.a.LOADING,onRefresh:i},e):e})),i()(this,"_getCellRenderer",Object(E.a)(((e,t)=>{let r;const s={module:t,renderEntry:e=>r(e)};return r=(t,r)=>{const i=e.getHandler(t);return i&&i.render?i.render(t,s,r):null},r}))),i()(this,"_getInitialFocusedEntry",Object(E.a)(((e,t)=>t&&e.find(t)))),i()(this,"_createEntryIndex",Object(E.a)((e=>Object(se.a)(e,(e=>e.entryId))))),i()(this,"_handleBeforeWindowUnload",(()=>{this._flushLingerScribes()})),i()(this,"scrollToTop",(e=>{this._scroller&&this._scroller.scrollToTop(e)})),i()(this,"_shouldPreventKeyboardShortcuts",(()=>{const{isModal:e,withKeyboardShortcuts:t}=this.props;return ce&&!e||!t})),i()(this,"_handleRefreshKeyboardShortcut",Object(ie.a)((()=>{this._shouldPreventKeyboardShortcuts()||this.refreshOrGoTop(!0)}),1e3)),i()(this,"_handleAtBottom",this._proximityHandler((()=>{this.props.onAtBottom&&this.props.onAtBottom()}))),i()(this,"_handleNearBottom",this._proximityHandler((()=>{this.props.onNearBottom()}))),i()(this,"_handleNearTop",this._proximityHandler((()=>{const{onNearTop:e}=this.props;e()}))),i()(this,"_handleAtTop",this._proximityHandler((()=>{this.props.removeAlert&&this.props.removeAlert(),this.props.onAtTop&&this.props.onAtTop()}))),i()(this,"_handleItemsRendered",this._proximityHandler((({viewport:e,positions:t})=>{const r=this._impressionTracker.processPositioningUpdate(t,e);this._scribeLingerEvents(r.scribeLingerEvents),this._handleOnLingerEvents(r.allLingerIds)}))),i()(this,"_handleProcessLingerEvents",(()=>{if(this._impressionTrackerV2){const e=this._impressionTrackerV2.getLingerEvents();this._scribeLingerEvents(e)}})),i()(this,"_handleOnLingerEvents",(e=>{e.forEach((e=>this._handleOnLingerEvent(e)))})),i()(this,"_handleOnLingerEvent",(e=>{const{applyReactionInstructions:t}=this.props,r=this._getEntryIndex()[e];r&&t({entry:r,triggerName:$.ON_LINGER})})),i()(this,"_handlePositionRestored",(()=>{this._positionedRestored=!0})),i()(this,"_scheduleNewEntriesScribing",(r=e=>{const{richScribeAction:t,scribeNamespace:r}=this.props,s=this._buildStreamScribeData(e);s.length>0&&t({...r,component:"stream",action:"results"},{items:s})},c.canUseDOM&&window.requestIdleCallback?e=>{const t=window.requestIdleCallback((()=>r(e)));return()=>window.cancelIdleCallback(t)}:c.canUseDOM&&window.requestAnimationFrame?e=>{const t=window.requestAnimationFrame((()=>r(e)));return()=>window.cancelAnimationFrame(t)}:()=>w.a)),i()(this,"_setScroller",(e=>{this._scroller=e})),i()(this,"_V2ImpressionsEnabled",(()=>{var e;return c.canUseDOM&&(null==(e=this.context.featureSwitches)?void 0:e.isTrue("responsive_web_linger_refactor_enabled"))})),i()(this,"_newImpressionTrackerV2",(()=>this._V2ImpressionsEnabled()&&window.IntersectionObserver?new P.a({root:this.context.viewport.getViewport(),reactivityCallback:this._handleOnLingerEvent}):void 0)),this._impressionTracker=new D,this._streamScribeCancelCallbacks=[],this._impressionTrackerV2=this._newImpressionTrackerV2()}UNSAFE_componentWillReceiveProps(e){this.props.timelineId!==e.timelineId&&(this._flushLingerScribes(),this._impressionTracker=new D,this._impressionTrackerV2&&this._impressionTrackerV2.disconnect(),this._impressionTrackerV2=this._newImpressionTrackerV2())}componentDidMount(){const{isModal:e,onRef:t}=this.props;this._initialize(),window.addEventListener("beforelogout",this._handleBeforeWindowUnload),window.addEventListener("beforeunload",this._handleBeforeWindowUnload),t&&t(this),e&&(ce=!0)}componentWillUnmount(){var e;const{isModal:t,onRef:r}=this.props;this._flushLingerScribes(),this._cancelStreamScribeCallbacks(),window.removeEventListener("beforelogout",this._handleBeforeWindowUnload),window.removeEventListener("beforeunload",this._handleBeforeWindowUnload),r&&r(void 0),t&&(ce=!1),null==(e=this._impressionTrackerV2)||e.disconnect()}componentDidUpdate(e){const{entries:t,handlerRegistry:r,timelineId:s,onRef:i}=this.props;s!==e.timelineId?this._initialize():t===e.entries&&r===e.handlerRegistry||this._scribeNewEntries(t),i&&i!==e.onRef&&i(this)}render(){const{anchoring:e,entries:t,handlerRegistry:r,showFooter:s,header:i,isInitialFocusEntry:c,nearStartProximityRatio:l,renderEmptyState:h,scrollerDisplayType:d,timelineId:p,title:m,module:u}=this.props,_=this.props.scroller,b=this._getInitialFocusedEntry(t,c),y=this._V2ImpressionsEnabled()?this._handleProcessLingerEvents:w.a,v=this._V2ImpressionsEnabled()?void 0:this._handleItemsRendered;return this._refreshControlWrapper(this._shouldRenderEmptyState(t)?h():o.createElement(U,{impressionTracker:this._impressionTrackerV2},o.createElement(a.a,{title:m},this._renderActiveCover(),this._renderPill(),o.createElement(F.a,{handlers:{[B.d.loadNewTweets]:this._handleRefreshKeyboardShortcut,[B.d.nextItem]:this._focusNext,[B.d.previousItem]:this._focusPrevious}},o.createElement(_,{anchoring:e,assumedItemHeight:ee.b.isDesktopOS()?100:void 0,cacheKey:p,footer:s&&this._renderLoadBottom(),header:i,identityFunction:ne,initialAnchor:b&&n.b(ne(b)),items:t,nearStartProximityRatio:l,onAtEnd:this._handleAtBottom,onAtStart:this._handleAtTop,onItemsRendered:v,onNearEnd:this._handleNearBottom,onNearStart:this._handleNearTop,onPositionRestored:this._handlePositionRestored,onScrollEnd:y,ref:this._setScroller,renderer:this._getCellRenderer(r,u),scrollerDisplayType:d,sortIndexFunction:oe})))))}_renderPill(){const{alert:e,removeAlert:t,topUnseenCount:r,newTweetsPillMode:s,scribeNamespace:i,timelineId:n}=this.props;return s?s===Z.a.URT?o.createElement(q.a.Configure,{alert:e,removeAlert:t,scribeNamespace:i,timelineId:n}):s===Z.a.CLIENT&&r&&r>0?o.createElement(q.a.Configure,{removeAlert:t,scribeNamespace:i,timelineId:n,unreadCount:r}):void 0:null}_renderActiveCover(){const{activeCover:e,clearActiveCover:t,processCallback:r,scribeAction:s,scribeNamespace:i}=this.props,n=e&&e.cover;return e&&n?o.createElement(x,{activeCover:e,clearActiveCover:t,processCallback:r,scribeAction:s,scribeNamespace:i}):null}_shouldRenderEmptyState(e){const{activeCover:t,initialFetchStatus:r}=this.props,s=r===R.a.LOADED,i=0===e.length;return s&&i&&!t}_getEntryIndex(){return this._createEntryIndex(this.props.entries)}_initialize(){this._scribeNewEntries(this.props.entries)}_flushLingerScribes(){const e=this._impressionTrackerV2?this._impressionTrackerV2.flushLingerEvents():this._impressionTracker.flushLingerEvents();this._scribeLingerEvents(e)}refreshOrGoTop(e){this._scroller&&!this._scroller.isAtTop()?this.scrollToTop(e):this.props.onRefresh()}_proximityHandler(e){return t=>{this._positionedRestored&&e(t)}}_scribeNewEntries(e){const t=this._scheduleNewEntriesScribing(e);for(this._streamScribeCancelCallbacks.push(t);this._streamScribeCancelCallbacks.length>=20;)this._streamScribeCancelCallbacks.shift()}_buildStreamScribeData(e){const{scribeCache:t,timelineId:r,handlerRegistry:s}=this.props;let i=null;if(!t.has(r)){const e=new Set;t.set(r,e)}const n=t.get(r);return n?e.reduce(((e,t,r)=>{const{entryId:o}=t;let a=!1;if(t.content&&t.content.promotedMetadata&&(a=t.content.promotedMetadata),!n.has(o)&&!s.getNeedsLoad(t)){n.add(o);const r=this._getScribeDataItem(s,t);r&&(a&&null!==i&&(r.tweet_count=i),e.push(r))}return a?i=0:null!==i&&-1===t.type.indexOf("ui_")&&(i+=1),e}),[]):[]}_storeSeenIds(e){const{seenIds:t,seenIdsLatest:r,timelineId:s}=this.props;"home"===s&&t?t.addNewTweets(e):"home-latest"===s&&r&&r.addNewTweets(e)}_scribeLingerEvents(e){if(0===e.length)return;const{handlerRegistry:t}=this.props,r=this._getEntryIndex(),s=[],i=[];if(e.forEach((({id:e,start:n,end:o})=>{const a=r[e];if(a){const e=this._getScribeDataItem(t,a);if(e){const t={visibility_start:n,visibility_end:o};s.push({...e,impression_details:t})}a.type===L.b.Tweet&&i.push(a.content.id)}})),s.length>0){const{richScribeAction:e,scribeNamespace:t}=this.props;e({...t,component:"stream",element:"linger",action:"results"},{items:s})}i.length>0&&this._storeSeenIds(i)}_getScribeDataItem(e,t){const r=e.getHandler(t);if(r)return r.getScribeDataItem(t)}_cancelStreamScribeCallbacks(){this._streamScribeCancelCallbacks.forEach((e=>e()))}}i()(le,"contextTypes",{viewport:te.object,featureSwitches:te.any}),i()(le,"defaultProps",{onBottomRetry:w.a,onNearBottom:w.a,onNearTop:w.a,onRefresh:w.a,refreshControl:Y.a,scribeCache:ae,scroller:Q.b,scrollerDisplayType:X.a.Vertical,seenIds:Object(re.b)(),seenIdsLatest:Object(re.a)(),showFooter:!0,withKeyboardShortcuts:!0});t.default=le},"n+Zb":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i}));const s=e=>({id:e,distanceToViewportTop:0}),i=e=>({id:e,distanceToViewportBottom:0})}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineRenderer.3f337e85.js.map