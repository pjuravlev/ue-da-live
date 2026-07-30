(()=>{"use strict";let e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;class o{constructor(e,t,a){if(this._$cssResult$=!0,a!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,r=this.t;if(t&&void 0===e){let t=void 0!==r&&1===r.length;t&&(e=a.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&a.set(r,e))}return e}toString(){return this.cssText}}let i=(e,...t)=>new o(1===e.length?e[0]:t.reduce((t,r,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[a+1],e[0]),e,r),n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,a="";for(let t of e.cssRules)a+=t.cssText;return new o("string"==typeof(t=a)?t:t+"",void 0,r)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:c}=Object,b=globalThis,u=b.trustedTypes,g=u?u.emptyScript:"",v=b.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},m=(e,t)=>!s(e,t),y={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),a=this.getPropertyDescriptor(e,r,t);void 0!==a&&l(this.prototype,e,a)}}static getPropertyDescriptor(e,t,r){let{get:a,set:o}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){let i=a?.call(this);o?.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=c(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...d(e),...p(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(n(r));else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,a)=>{if(t)r.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of a){let a=document.createElement("style"),o=e.litNonce;void 0!==o&&a.setAttribute("nonce",o),a.textContent=t.cssText,r.appendChild(a)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,r);if(void 0!==a&&!0===r.reflect){let o=(void 0!==r.converter?.toAttribute?r.converter:f).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(e,t){let r=this.constructor,a=r._$Eh.get(e);if(void 0!==a&&this._$Em!==a){let e=r.getPropertyOptions(a),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=a;let i=o.fromAttribute(t,e.type);this[a]=i??this._$Ej?.get(a)??i,this._$Em=null}}requestUpdate(e,t,r,a=!1,o){if(void 0!==e){let i=this.constructor;if(!1===a&&(o=this[e]),!(((r??=i.getPropertyOptions(e)).hasChanged??m)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:a,wrapped:o},i){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==o||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,r,a)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w.elementProperties=new Map,w.finalized=new Map,v?.({ReactiveElement:w}),(b.reactiveElementVersions??=[]).push("2.1.2");let x=globalThis,k=e=>e,$=x.trustedTypes,z=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,_="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+S,C=`<${A}>`,E=document,R=()=>E.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,j="[ 	\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,M=/>/g,q=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,H=/"/g,D=/^(?:script|style|textarea|title)$/i,B=(e,...t)=>({_$litType$:1,strings:e,values:t}),N=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),V=new WeakMap,F=E.createTreeWalker(E,129);function G(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}class W{constructor({strings:e,_$litType$:t},r){let a;this.parts=[];let o=0,i=0;const n=e.length-1,s=this.parts,[l,h]=((e,t)=>{let r=e.length-1,a=[],o,i=2===t?"<svg>":3===t?"<math>":"",n=T;for(let t=0;t<r;t++){let r=e[t],s,l,h=-1,d=0;for(;d<r.length&&(n.lastIndex=d,null!==(l=n.exec(r)));)d=n.lastIndex,n===T?"!--"===l[1]?n=I:void 0!==l[1]?n=M:void 0!==l[2]?(D.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=q):void 0!==l[3]&&(n=q):n===q?">"===l[0]?(n=o??T,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?q:'"'===l[3]?H:L):n===H||n===L?n=q:n===I||n===M?n=T:(n=q,o=void 0);let p=n===q&&e[t+1].startsWith("/>")?" ":"";i+=n===T?r+C:h>=0?(a.push(s),r.slice(0,h)+_+r.slice(h)+S+p):r+S+(-2===h?t:p)}return[G(e,i+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]})(e,t);if(this.el=W.createElement(l,r),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=F.nextNode())&&s.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(_)){const t=h[i++],r=a.getAttribute(e).split(S),n=/([.?@])?(.*)/.exec(t);s.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?J:"?"===n[1]?X:"@"===n[1]?ee:Y}),a.removeAttribute(e)}else e.startsWith(S)&&(s.push({type:6,index:o}),a.removeAttribute(e));if(D.test(a.tagName)){const e=a.textContent.split(S),t=e.length-1;if(t>0){a.textContent=$?$.emptyScript:"";for(let r=0;r<t;r++)a.append(e[r],R()),F.nextNode(),s.push({type:2,index:++o});a.append(e[t],R())}}}else if(8===a.nodeType)if(a.data===A)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=a.data.indexOf(S,e+1));)s.push({type:7,index:o}),e+=S.length-1}o++}}static createElement(e,t){let r=E.createElement("template");return r.innerHTML=e,r}}function K(e,t,r=e,a){if(t===N)return t;let o=void 0!==a?r._$Co?.[a]:r._$Cl,i=O(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e))._$AT(e,r,a),void 0!==a?(r._$Co??=[])[a]=o:r._$Cl=o),void 0!==o&&(t=K(e,o._$AS(e,t.values),o,a)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,a=(e?.creationScope??E).importNode(t,!0);F.currentNode=a;let o=F.nextNode(),i=0,n=0,s=r[0];for(;void 0!==s;){if(i===s.index){let t;2===s.type?t=new Q(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new et(o,this,e)),this._$AV.push(t),s=r[++n]}i!==s?.index&&(o=F.nextNode(),i++)}return F.currentNode=E,a}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,a){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let r;O(e=K(this,e,t))?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==N&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):P(r=e)||"function"==typeof r?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,a="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=W.createElement(G(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(t);else{let e=new Z(a,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new W(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,a=0;for(let o of e)a===t.length?t.push(r=new Q(this.O(R()),this.O(R()),this,this.options)):r=t[a],r._$AI(o),a++;a<t.length&&(this._$AR(r&&r._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,a,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=U}_$AI(e,t=this,r,a){let o=this.strings,i=!1;if(void 0===o)(i=!O(e=K(this,e,t,0))||e!==this._$AH&&e!==N)&&(this._$AH=e);else{let a,n,s=e;for(e=o[0],a=0;a<o.length-1;a++)(n=K(this,s[r+a],t,a))===N&&(n=this._$AH[a]),i||=!O(n)||n!==this._$AH[a],n===U?e=U:e!==U&&(e+=(n??"")+o[a+1]),this._$AH[a]=n}i&&!a&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class J extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}class X extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class ee extends Y{constructor(e,t,r,a,o){super(e,t,r,a,o),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??U)===N)return;let r=this._$AH,a=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==U&&(r===U||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class et{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}let er=x.litHtmlPolyfillSupport;er?.(W,Q),(x.litHtmlVersions??=[]).push("3.3.3");let ea=globalThis;class eo extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let a=r?.renderBefore??t,o=a._$litPart$;if(void 0===o){let e=r?.renderBefore??null;a._$litPart$=o=new Q(t.insertBefore(R(),e),e,void 0,r??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}}eo._$litElement$=!0,eo.finalized=!0,ea.litElementHydrateSupport?.({LitElement:eo});let ei=ea.litElementPolyfillSupport;ei?.({LitElement:eo}),(ea.litElementVersions??=[]).push("4.2.2");let en=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},es={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m};function el(e){return(t,r)=>{let a;return"object"==typeof r?((e=es,t,r)=>{let{kind:a,metadata:o}=r,i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),"accessor"===a){let{name:a}=r;return{set(r){let o=t.get.call(this);t.set.call(this,r),this.requestUpdate(a,o,e,!0,r)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){let{name:a}=r;return function(r){let o=this[a];t.call(this,r),this.requestUpdate(a,o,e,!0,r)}}throw Error("Unsupported decorator location: "+a)})(e,t,r):(a=t.hasOwnProperty(r),t.constructor.createProperty(r,e),a?Object.getOwnPropertyDescriptor(t,r):void 0)}}function eh(e){return el({...e,state:!0,attribute:!1})}let ed=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function ep(e){return(t,r)=>{let{slot:a,selector:o}=e??{},i="slot"+(a?`[name=${a}]`:":not([name])");return ed(t,r,{get(){let t=this.renderRoot?.querySelector(i),r=t?.assignedElements(e)??[];return void 0===o?r:r.filter(e=>e.matches(o))}})}}let ec=i`
  :host {
    display: block;
    width: 100%;
    --hpe-columns-gap-horizontal: var(--hpe-web-spacing-large);
    --hpe-columns-gap-vertical: var(--hpe-web-spacing-small);
  }

  .columns {
    width: 100%;
    box-sizing: border-box;
  }

  .column {
    min-width: 0;
    box-sizing: border-box;
  }

  ::slotted(*) {
    display: block;
    width: 100%;
    min-width: 0;
  }

  :host([orientation="horizontal"]) .columns {
    display: grid;
    gap: var(--hpe-columns-gap-horizontal);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][order="reverse"]) .column-1 {
    order: 5;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-2 {
    order: 4;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-3 {
    order: 3;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-4 {
    order: 2;
  }

  :host([orientation="horizontal"][order="reverse"]) .column-5 {
    order: 1;
  }

  :host([orientation="vertical"]) .columns {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-columns-gap-vertical);
  }

  :host([orientation="vertical"][order="reverse"]) .columns {
    flex-direction: column-reverse;
  }

  :host([orientation="vertical"]) .column {
    width: 100%;
  }

  :host([orientation="horizontal"][columns="1"]) .columns {
    grid-template-columns: minmax(0, 1fr);
  }

  :host([orientation="horizontal"][columns="2"]) .columns {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="3"]) .columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="4"]) .columns {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="5"]) .columns {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  :host([orientation="horizontal"][columns="40:60"]) .columns {
    grid-template-columns: minmax(0, 40fr) minmax(0, 60fr);
  }

  :host([orientation="horizontal"][columns="60:40"]) .columns {
    grid-template-columns: minmax(0, 60fr) minmax(0, 40fr);
  }

  :host([orientation="horizontal"][columns="33:66"]) .columns {
    grid-template-columns: minmax(0, 33fr) minmax(0, 66fr);
  }

  :host([orientation="horizontal"][columns="66:33"]) .columns {
    grid-template-columns: minmax(0, 66fr) minmax(0, 33fr);
  }

  :host([orientation="horizontal"][columns="20:80"]) .columns {
    grid-template-columns: minmax(0, 20fr) minmax(0, 80fr);
  }

  :host([orientation="horizontal"][columns="80:20"]) .columns {
    grid-template-columns: minmax(0, 80fr) minmax(0, 20fr);
  }
`;var eb,eu,eg,ev,ef=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let em=class extends eo{constructor(){super(...arguments),this.columns="2",this.orientation="horizontal",this.order="default"}render(){return B`
      <div part="columns" class="columns">
        ${this.renderColumn("column-1")}
        ${this.shouldRenderColumn(2)?this.renderColumn("column-2"):""}
        ${this.shouldRenderColumn(3)?this.renderColumn("column-3"):""}
        ${this.shouldRenderColumn(4)?this.renderColumn("column-4"):""}
        ${this.shouldRenderColumn(5)?this.renderColumn("column-5"):""}
      </div>
    `}renderColumn(e){return B`
      <div part="column" class="column ${e}">
        <slot name=${e}></slot>
      </div>
    `}shouldRenderColumn(e){return e<=this.columnCount}get columnCount(){return this.columns.includes(":")?2:Number(this.columns)}};em.styles=ec,ef([el({reflect:!0})],em.prototype,"columns",void 0),ef([el({reflect:!0})],em.prototype,"orientation",void 0),ef([el({reflect:!0})],em.prototype,"order",void 0),em=ef([en("hpe-columns")],em);let ey=i`
  :host {
    display: block;
    width: 100%;
    background: var(--hpe-web-color-background-default);
    --hpe-section-inline-padding: var(--hpe-web-spacing-4xlarge);
    --hpe-section-block-padding: var(--hpe-web-spacing-xxlarge);
    --hpe-section-max-width: 1600px;
  }

  .section {
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: var(--hpe-section-block-padding) var(--hpe-section-inline-padding);
    background: var(--hpe-web-color-background-default);
  }

  .container {
    width: 100%;
    max-width: var(--hpe-section-max-width);
    display: flex;
    flex-direction: column;
    gap: var(--hpe-web-spacing-large);
  }

  :host([padding="none"]) .section {
    padding: 0;
  }

  :host([padding="none"]) .container {
    max-width: none;
  }

  :host([padding="top"]) .section {
    padding-bottom: 0;
  }

  :host([padding="bottom"]) .section {
    padding-top: 0;
  }

  :host([padding="left-right-only"]) .section {
    padding-top: 0;
    padding-bottom: 0;
  }
`;var ew=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let ex=class extends eo{constructor(){super(...arguments),this.padding="default"}render(){return B`
      <section part="section" class="section">
        <div part="container" class="container">
          <slot></slot>
        </div>
      </section>
    `}};ex.styles=ey,ew([el({reflect:!0})],ex.prototype,"padding",void 0),ex=ew([en("hpe-section")],ex);let ek=i`
  :host {
    display: block;
    width: 100%;
    --hpe-stack-gap-xs: var(--hpe-web-spacing-xsmall, 1rem);
    --hpe-stack-gap-sm: var(--hpe-web-spacing-small, 1.5rem);
    --hpe-stack-gap-md: var(--hpe-web-spacing-medium, 2rem);
    --hpe-stack-gap-lg: var(--hpe-web-spacing-large, 2.5rem);
  }

  .stack {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
    gap: var(--hpe-stack-gap-xs);
  }

  :host([gap="sm"]) .stack {
    gap: var(--hpe-stack-gap-sm);
  }

  :host([gap="md"]) .stack {
    gap: var(--hpe-stack-gap-md);
  }

  :host([gap="lg"]) .stack {
    gap: var(--hpe-stack-gap-lg);
  }
`;var e$=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let ez=class extends eo{constructor(){super(...arguments),this.gap="xs"}render(){return B`
      <div part="stack" class="stack">
        <slot></slot>
      </div>
    `}};ez.styles=ek,e$([el({reflect:!0})],ez.prototype,"gap",void 0),ez=e$([en("hpe-x-stack")],ez);let e_=i`
  :host {
    display: block;
    width: 100%;
    --hpe-stack-gap-xs: var(--hpe-web-spacing-xsmall, 1rem);
    --hpe-stack-gap-sm: var(--hpe-web-spacing-small, 1.5rem);
    --hpe-stack-gap-md: var(--hpe-web-spacing-medium, 2rem);
    --hpe-stack-gap-lg: var(--hpe-web-spacing-large, 2.5rem);
  }

  .stack {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    box-sizing: border-box;
    gap: var(--hpe-stack-gap-xs);
  }

  :host([gap="sm"]) .stack {
    gap: var(--hpe-stack-gap-sm);
  }

  :host([gap="md"]) .stack {
    gap: var(--hpe-stack-gap-md);
  }

  :host([gap="lg"]) .stack {
    gap: var(--hpe-stack-gap-lg);
  }
`;var eS=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let eA=class extends eo{constructor(){super(...arguments),this.gap="xs"}render(){return B`
      <div part="stack" class="stack">
        <slot></slot>
      </div>
    `}};eA.styles=e_,eS([el({reflect:!0})],eA.prototype,"gap",void 0),eA=eS([en("hpe-y-stack")],eA);let eC=i`
  :host {
    display: block;
    color: var(--hpe-condensed-heading-color, var(--hpe-web-color-text-strong));
    font-family: var(
      --hpe-condensed-heading-font-family,
      var(--hpe-web-base-font-family-condensed),
      "HPE Graphik",
      sans-serif
    );
  }

  .heading {
    margin: 0;
    color: inherit;
    text-transform: uppercase;
  }

  .display-bold {
    font-size: var(--hpe-web-heading-h1-large-condensed-bold-font-size);
    font-weight: var(--hpe-web-heading-h1-large-condensed-bold-font-weight);
    line-height: var(--hpe-web-heading-h1-large-condensed-bold-line-height);
    letter-spacing: var(
      --hpe-web-heading-h1-large-condensed-bold-letter-spacing
    );
  }

  .display-regular {
    font-size: var(--hpe-web-heading-h1-large-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-large-condensed-medium-font-weight);
    line-height: var(--hpe-web-heading-h1-large-condensed-medium-line-height);
    letter-spacing: var(
      --hpe-web-heading-h1-large-condensed-medium-letter-spacing
    );
  }

  .display-light {
    font-size: var(--hpe-web-heading-h1-large-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-large-condensed-light-font-weight);
    line-height: var(--hpe-web-heading-h1-large-condensed-medium-line-height);
    letter-spacing: var(
      --hpe-web-heading-h1-large-condensed-medium-letter-spacing
    );
  }

  .xl-bold {
    font-size: var(--hpe-web-heading-h1-condensed-bold-font-size);
    font-weight: var(--hpe-web-heading-h1-condensed-bold-font-weight);
    line-height: var(--hpe-web-heading-h1-condensed-bold-line-height);
    letter-spacing: var(--hpe-web-heading-h1-condensed-bold-letter-spacing);
  }

  .xl-regular {
    font-size: var(--hpe-web-heading-h1-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-condensed-medium-font-weight);
    line-height: var(--hpe-web-heading-h1-condensed-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h1-condensed-medium-letter-spacing);
  }

  .xl-light {
    font-size: var(--hpe-web-heading-h1-condensed-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-condensed-light-font-weight);
    line-height: var(--hpe-web-heading-h1-condensed-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h1-condensed-medium-letter-spacing);
  }

  .lg-bold {
    font-size: var(
      --hpe-web-heading-h2-condensed-bold-font-size,
      var(--hpe-web-heading-h1-condensed-bold-font-size)
    );
    font-weight: var(
      --hpe-web-heading-h2-condensed-bold-font-weight,
      var(--hpe-web-heading-h1-condensed-bold-font-weight)
    );
    line-height: var(
      --hpe-web-heading-h2-condensed-bold-line-height,
      var(--hpe-web-heading-h1-condensed-bold-line-height)
    );
    letter-spacing: var(
      --hpe-web-heading-h2-condensed-bold-letter-spacing,
      var(--hpe-web-heading-h1-condensed-bold-letter-spacing)
    );
  }

  .lg-regular {
    font-size: var(
      --hpe-web-heading-h2-condensed-medium-font-size,
      var(--hpe-web-heading-h1-condensed-medium-font-size)
    );
    font-weight: var(
      --hpe-web-heading-h2-condensed-medium-font-weight,
      var(--hpe-web-heading-h1-condensed-medium-font-weight)
    );
    line-height: var(
      --hpe-web-heading-h2-condensed-medium-line-height,
      var(--hpe-web-heading-h1-condensed-medium-line-height)
    );
    letter-spacing: var(
      --hpe-web-heading-h2-condensed-medium-letter-spacing,
      var(--hpe-web-heading-h1-condensed-medium-letter-spacing)
    );
  }

  .lg-light {
    font-size: var(
      --hpe-web-heading-h2-condensed-medium-font-size,
      var(--hpe-web-heading-h1-condensed-medium-font-size)
    );
    font-weight: var(
      --hpe-web-heading-h2-condensed-light-font-weight,
      var(--hpe-web-heading-h1-condensed-light-font-weight)
    );
    line-height: var(
      --hpe-web-heading-h2-condensed-medium-line-height,
      var(--hpe-web-heading-h1-condensed-medium-line-height)
    );
    letter-spacing: var(
      --hpe-web-heading-h2-condensed-medium-letter-spacing,
      var(--hpe-web-heading-h1-condensed-medium-letter-spacing)
    );
  }
`;var eE=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let eR=class extends eo{constructor(){super(...arguments),this.level="h1",this.size="auto",this.weight="regular"}get resolvedScale(){return"h1"===this.level&&"display"===this.size?"display":"h2"===this.level?"lg":"xl"}get headingClass(){return`heading ${this.resolvedScale}-${this.weight}`}get renderedTag(){return this.as??this.level}renderTag(){let e=B`<slot></slot>`;switch(this.renderedTag){case"h1":return B`<h1 part="heading" class=${this.headingClass}>
          ${e}
        </h1>`;case"h2":return B`<h2 part="heading" class=${this.headingClass}>
          ${e}
        </h2>`;case"div":return B`<div part="heading" class=${this.headingClass}>
          ${e}
        </div>`;case"span":return B`<span part="heading" class=${this.headingClass}>
          ${e}
        </span>`;default:return U}}render(){return this.renderTag()}};eR.styles=eC,eE([el({reflect:!0})],eR.prototype,"level",void 0),eE([el({reflect:!0})],eR.prototype,"size",void 0),eE([el({reflect:!0})],eR.prototype,"weight",void 0),eE([el({reflect:!0})],eR.prototype,"as",void 0),eR=eE([en("hpe-condensed-heading")],eR);let eO=i`
  :host {
    display: block;
    color: var(--hpe-heading-color, var(--hpe-web-color-text-strong));
    font-family: var(--hpe-heading-font-family, "HPE Graphik", sans-serif);
  }

  .heading {
    margin: 0;
    color: inherit;
  }

  .default-h1-large {
    font-size: var(--hpe-web-heading-h1-large-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-large-medium-font-weight);
    line-height: var(--hpe-web-heading-h1-large-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h1-large-medium-letter-spacing);
  }

  .default-h1 {
    font-size: var(--hpe-web-heading-h1-medium-font-size);
    font-weight: var(--hpe-web-heading-h1-medium-font-weight);
    line-height: var(--hpe-web-heading-h1-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h1-medium-letter-spacing);
  }

  .default-h2 {
    font-size: var(--hpe-web-heading-h2-medium-font-size);
    font-weight: var(--hpe-web-heading-h2-medium-font-weight);
    line-height: var(--hpe-web-heading-h2-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h2-medium-letter-spacing);
  }

  .default-h3 {
    font-size: var(--hpe-web-heading-h3-medium-font-size);
    font-weight: var(--hpe-web-heading-h3-medium-font-weight);
    line-height: var(--hpe-web-heading-h3-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h3-medium-letter-spacing);
  }

  .default-h4 {
    font-size: var(--hpe-web-heading-h4-medium-font-size);
    font-weight: var(--hpe-web-heading-h4-medium-font-weight);
    line-height: var(--hpe-web-heading-h4-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h4-medium-letter-spacing);
  }

  .default-h5 {
    font-size: var(--hpe-web-heading-h5-medium-font-size);
    font-weight: var(--hpe-web-heading-h5-medium-font-weight);
    line-height: var(--hpe-web-heading-h5-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h5-medium-letter-spacing);
  }

  .default-h6 {
    font-size: var(--hpe-web-heading-h6-medium-font-size);
    font-weight: var(--hpe-web-heading-h6-medium-font-weight);
    line-height: var(--hpe-web-heading-h6-medium-line-height);
    letter-spacing: var(--hpe-web-heading-h6-medium-letter-spacing);
  }
`;var eP=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let ej=class extends eo{constructor(){super(...arguments),this.level="h2",this.size="auto"}get resolvedScale(){switch(this.size){case"display":return"h1-large";case"xl":return"h1";case"lg":return"h2";case"md":return"h3";case"sm":return"h4";case"xs":return"h5";default:return this.level}}get headingClass(){let e=this.resolvedScale;return"h1-large"===e?"heading default-h1-large":`heading default-${e}`}get renderedTag(){return this.as??this.level}renderTag(){let e=this.renderedTag,t=B`<slot></slot>`;switch(e){case"h1":return B`<h1 part="heading" class=${this.headingClass}>
          ${t}
        </h1>`;case"h2":return B`<h2 part="heading" class=${this.headingClass}>
          ${t}
        </h2>`;case"h3":return B`<h3 part="heading" class=${this.headingClass}>
          ${t}
        </h3>`;case"h4":return B`<h4 part="heading" class=${this.headingClass}>
          ${t}
        </h4>`;case"h5":return B`<h5 part="heading" class=${this.headingClass}>
          ${t}
        </h5>`;case"h6":return B`<h6 part="heading" class=${this.headingClass}>
          ${t}
        </h6>`;case"div":return B`<div part="heading" class=${this.headingClass}>
          ${t}
        </div>`;case"span":return B`<span part="heading" class=${this.headingClass}>
          ${t}
        </span>`;default:return U}}render(){return this.renderTag()}};ej.styles=eO,eP([el({reflect:!0})],ej.prototype,"level",void 0),eP([el({reflect:!0})],ej.prototype,"size",void 0),eP([el({reflect:!0})],ej.prototype,"as",void 0),ej=eP([en("hpe-heading")],ej);let eT=i`
  :host {
    display: block;
    color: var(--hpe-paragraph-color, var(--hpe-web-color-text-default));
    font-family: var(--hpe-paragraph-font-family, "HPE Graphik", sans-serif);
  }

  .paragraph {
    margin: 0;
    color: inherit;
  }

  .size-lg {
    font-size: var(--hpe-web-paragraph-large-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-large-body-copy-font-weight);
    line-height: var(--hpe-web-paragraph-large-body-copy-line-height);
    letter-spacing: var(--hpe-web-paragraph-large-body-copy-letter-spacing);
  }

  .size-md {
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-body-copy-font-weight);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
  }

  .size-sm {
    font-size: var(--hpe-web-paragraph-small-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-small-body-copy-font-weight);
    line-height: var(--hpe-web-paragraph-small-body-copy-line-height);
    letter-spacing: var(--hpe-web-paragraph-small-body-copy-letter-spacing);
  }

  .size-disclaimer {
    font-size: var(--hpe-web-paragraph-disclaimer-font-size);
    font-weight: var(--hpe-web-paragraph-disclaimer-font-weight);
    line-height: var(--hpe-web-paragraph-disclaimer-line-height);
    letter-spacing: var(--hpe-web-paragraph-disclaimer-letter-spacing);
  }
`;var eI=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let eM=class extends eo{constructor(){super(...arguments),this.size="md",this.as="p"}render(){let e=`paragraph size-${this.size}`;switch(this.as){case"div":return B`<div part="paragraph" class=${e}>
          <slot></slot>
        </div>`;case"span":return B`<span part="paragraph" class=${e}
          ><slot></slot
        ></span>`;default:return B`<p part="paragraph" class=${e}>
          <slot></slot>
        </p>`}}};eM.styles=eT,eI([el({reflect:!0})],eM.prototype,"size",void 0),eI([el({reflect:!0})],eM.prototype,"as",void 0),eM=eI([en("hpe-paragraph")],eM);let eq=i`
  :host {
    display: block;
    width: 100%;
    --hpe-accordion-font-family: var(
      --hpe-web-heading-font,
      "HPE Graphik",
      Arial,
      sans-serif
    );
    --hpe-accordion-font-size: var(--hpe-web-heading-h5-medium-font-size);
    --hpe-accordion-line-height: var(--hpe-web-heading-h5-medium-line-height);
    --hpe-accordion-font-weight: var(--hpe-web-heading-h5-medium-font-weight);
    --hpe-accordion-letter-spacing: var(
      --hpe-web-heading-h5-medium-letter-spacing
    );
    --hpe-accordion-label-color: var(--hpe-web-color-text-strong);
    --hpe-accordion-icon-color: var(--hpe-web-color-icon-default);
    --hpe-accordion-border-color: var(--hpe-web-color-border-weak);
    --hpe-accordion-horizontal-padding: var(--hpe-web-spacing-small);
    --hpe-accordion-vertical-padding: var(--hpe-web-spacing-small);
    --hpe-accordion-content-gap: var(--hpe-web-spacing-xxlarge);
    --hpe-accordion-icon-size: 24px;
  }

  .accordion {
    width: 100%;
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid var(--hpe-accordion-border-color);
  }

  .trigger {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--hpe-accordion-content-gap);
    width: 100%;
    padding: var(--hpe-accordion-vertical-padding)
      var(--hpe-accordion-horizontal-padding);
    background: transparent;
    border: 0;
    appearance: none;
    color: var(--hpe-accordion-label-color);
    cursor: pointer;
    text-align: left;
  }

  .trigger:disabled {
    cursor: not-allowed;
    opacity: 0.64;
  }

  .trigger:focus-visible {
    outline: 2px solid var(--hpe-web-color-border-primary);
    outline-offset: -2px;
  }

  .label {
    flex: 1 1 auto;
    min-width: 0;
    font-family: var(--hpe-accordion-font-family);
    font-size: var(--hpe-accordion-font-size);
    font-weight: var(--hpe-accordion-font-weight);
    line-height: var(--hpe-accordion-line-height);
    letter-spacing: var(--hpe-accordion-letter-spacing);
    color: var(--hpe-accordion-label-color);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: var(--hpe-accordion-icon-size);
    height: var(--hpe-accordion-icon-size);
    color: var(--hpe-accordion-icon-color);
    transition: transform 0.2s ease-in-out;
  }

  :host([expanded]) .icon {
    transform: rotate(180deg);
  }

  .icon svg {
    width: var(--hpe-accordion-icon-size);
    height: var(--hpe-accordion-icon-size);
    display: block;
  }

  .panel {
    padding: var(--hpe-accordion-vertical-padding)
      var(--hpe-accordion-horizontal-padding);
  }

  .panel[hidden] {
    display: none;
  }
`;var eL=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let eH=0,eD=eb=class extends eo{constructor(){super(...arguments),this.label="Accordion Item Label",this.expanded=!1,this.disabled=!1,this.panelId=`hpe-accordion-panel-${eH++}`,this.triggerId=`hpe-accordion-trigger-${eH++}`}render(){return B`
      <div part="item" class="item">
        <button
          id=${this.triggerId}
          part="trigger"
          class="trigger"
          type="button"
          aria-expanded=${this.expanded?"true":"false"}
          aria-controls=${this.panelId}
          ?disabled=${this.disabled}
          @click=${this.handleToggle}
          @keydown=${this.handleKeydown}
        >
          <span part="label" class="label">${this.label}</span>
          <span part="icon" class="icon" aria-hidden="true">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        <div
          id=${this.panelId}
          part="panel"
          class="panel"
          role="region"
          aria-labelledby=${this.triggerId}
          ?hidden=${!this.expanded}
        >
          <slot></slot>
        </div>
      </div>
    `}focusTrigger(){this.shadowRoot?.querySelector("button")?.focus()}handleToggle(){if(this.disabled)return;let e=!this.expanded,t=this.parentElement;t?.tagName.toLowerCase()==="hpe-accordion"?this.dispatchEvent(new CustomEvent("accordion-item-toggle",{detail:{item:this,expanded:e},bubbles:!0,composed:!0})):this.expanded=e}handleKeydown(e){let t,r=this.parentElement;if(this.disabled||!r||"hpe-accordion"!==r.tagName.toLowerCase())return;let a=Array.from(r.querySelectorAll("hpe-accordion-item")).filter(e=>e instanceof eb).filter(e=>!e.disabled),o=a.indexOf(this);if(-1!==o&&0!==a.length){switch(e.key){case"ArrowDown":case"ArrowRight":e.preventDefault(),t=a[o+1]||a[0];break;case"ArrowUp":case"ArrowLeft":e.preventDefault(),t=a[o-1]||a[a.length-1];break;case"Home":e.preventDefault(),t=a[0];break;case"End":e.preventDefault(),t=a[a.length-1]}t?.focusTrigger()}}};eD.styles=eq,eL([el({reflect:!0})],eD.prototype,"label",void 0),eL([el({reflect:!0,type:Boolean})],eD.prototype,"expanded",void 0),eL([el({reflect:!0,type:Boolean})],eD.prototype,"disabled",void 0),eD=eb=eL([en("hpe-accordion-item")],eD);let eB=class extends eo{constructor(){super(...arguments),this.items=[],this.updateItems=()=>{this.items=Array.from(this.querySelectorAll("hpe-accordion-item")).filter(e=>e instanceof eD&&e.parentElement===this),this.items.filter(e=>e.expanded).slice(1).forEach(e=>{e.expanded=!1})},this.handleItemToggle=e=>{let{item:t,expanded:r}=e.detail;this.items.forEach(e=>{e.expanded=e===t&&r})}}connectedCallback(){super.connectedCallback(),this.addEventListener("accordion-item-toggle",this.handleItemToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("accordion-item-toggle",this.handleItemToggle)}render(){return B`
      <div part="accordion" class="accordion">
        <slot @slotchange=${this.updateItems}></slot>
      </div>
    `}};eB.styles=eq,eB=eL([en("hpe-accordion")],eB);let eN=i`
  :host {
    display: block;
  }

  .section {
    background-color: var(--hpe-web-color-background-default);
    padding-block: var(--hpe-web-spacing-xxlarge);
    padding-inline: var(--hpe-web-spacing-4xlarge);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .row {
    display: grid;
    grid-template-columns: var(--hpe-agenda-row-time-column, 20%) 1fr;
    gap: var(--hpe-web-spacing-xxlarge);
    align-items: center;
    padding: var(--hpe-web-spacing-medium);
    background-color: var(--hpe-web-color-background-default);
  }

  @media (max-width: 767px) {
    .row {
      grid-template-columns: 1fr;
    }
  }

  :host([tone='sunken']) .row {
    background-color: var(--hpe-web-color-background-back);
  }

  :host([bordered]) .row {
    border-top: 1px solid var(--hpe-web-color-border-weak);
  }

  .time,
  .content {
    display: flex;
    flex-direction: column;
    color: var(--hpe-agenda-row-text-color, var(--hpe-web-color-text-default));
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-body-copy-font-weight);
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
  }

  .time {
    gap: var(--hpe-web-spacing-none);
  }

  .content {
    gap: var(--hpe-web-spacing-xxsmall);
  }

  ::slotted([slot='title']) {
    margin: 0;
    color: var(--hpe-agenda-row-text-color, var(--hpe-web-color-text-default));
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: 700;
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
  }

  ::slotted([slot='description']) {
    margin: 0;
    color: var(--hpe-agenda-row-text-color, var(--hpe-web-color-text-default));
    font-size: var(--hpe-web-paragraph-body-copy-font-size);
    font-weight: var(--hpe-web-paragraph-body-copy-font-weight);
    letter-spacing: var(--hpe-web-paragraph-body-copy-letter-spacing);
    line-height: var(--hpe-web-paragraph-body-copy-line-height);
  }

  ::slotted(hpe-agenda-row) {
    width: 100%;
  }
`;var eU=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let eV=class extends eo{constructor(){super(...arguments),this.format="alternating",this.syncRows=()=>{let e=this.shadowRoot?.querySelector("slot");e&&e.assignedElements({flatten:!0}).filter(e=>e instanceof eF).forEach((e,t)=>{e.bordered="border"===this.format,e.tone="alternating"===this.format&&t%2==0?"sunken":"default"})}}updated(e){e.has("format")&&this.syncRows()}render(){return B`
      <section part="section" class="section">
        <div part="container" class="container">
          <slot @slotchange=${this.syncRows}></slot>
        </div>
      </section>
    `}};eV.styles=eN,eU([el({reflect:!0})],eV.prototype,"format",void 0),eV=eU([en("hpe-agenda")],eV);let eF=class extends eo{constructor(){super(...arguments),this.tone="default",this.bordered=!1}render(){return B`
      <div part="row" class="row">
        <div part="time" class="time">
          <slot name="time"></slot>
        </div>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot name="description">
            <slot></slot>
          </slot>
        </div>
      </div>
    `}};eF.styles=eN,eU([el({reflect:!0})],eF.prototype,"tone",void 0),eU([el({reflect:!0,type:Boolean})],eF.prototype,"bordered",void 0),eF=eU([en("hpe-agenda-row")],eF);let eG=i`
  :host {
    --hpe-button-font-family: var(--hpe-web-base-font-family-primary);
    --hpe-button-transition: all 0.2s ease-in-out;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--hpe-button-font-family);
    border: none;
    cursor: pointer;
    transition: var(--hpe-button-transition);
    white-space: nowrap;
    padding: 0;
  }

  .button:disabled {
    cursor: not-allowed;
  }

  :host([type="primary"]) .button {
    font-weight: var(--hpe-web-button-primary-rest-font-weight);
  }

  :host([type="primary"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-primary-hover-font-weight);
  }

  :host([type="primary"]) .button:disabled {
    font-weight: var(--hpe-web-button-primary-disabled-rest-font-weight);
  }

  :host([type="secondary"]) .button {
    font-weight: var(--hpe-web-button-secondary-rest-font-weight);
  }

  :host([type="secondary"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-secondary-hover-font-weight);
  }

  :host([type="secondary"]) .button:disabled {
    font-weight: var(--hpe-web-button-secondary-disabled-rest-font-weight);
  }

  :host([type="link-primary"]) .button {
    font-weight: var(--hpe-web-button-link-primary-rest-font-weight);
  }

  :host([type="link-primary"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-link-primary-hover-font-weight);
  }

  :host([type="link-primary"]) .button:disabled {
    font-weight: var(--hpe-web-button-link-primary-disabled-rest-font-weight);
  }

  :host([type="link-neutral"]) .button {
    font-weight: var(--hpe-web-button-link-neutral-rest-font-weight);
  }

  :host([type="link-neutral"]) .button:not(:disabled):hover {
    font-weight: var(--hpe-web-button-link-neutral-hover-font-weight);
  }

  :host([type="link-neutral"]) .button:disabled {
    font-weight: var(--hpe-web-button-link-neutral-disabled-rest-font-weight);
  }

  .label {
    display: inline-block;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .icon[hidden] {
    display: none;
  }

  .icon svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* PRIMARY BUTTONS */
  :host([type="primary"][size="small"]) .button {
    min-height: var(--hpe-web-button-primary-small-min-height);
    padding: var(--hpe-web-button-primary-small-padding-y)
      var(--hpe-web-button-primary-small-padding-x);
    gap: var(--hpe-web-button-primary-small-gap-x);
    font-size: var(--hpe-web-button-primary-small-font-size);
    line-height: var(--hpe-web-button-primary-small-line-height);
    border-radius: var(--hpe-web-button-primary-small-border-radius);
    background-color: var(--hpe-web-button-primary-rest-background);
    color: var(--hpe-web-button-primary-rest-text-color);
  }

  :host([type="primary"][size="small"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-primary-hover-background);
    color: var(--hpe-web-button-primary-hover-text-color);
  }

  :host([type="primary"][size="small"]) .button:disabled {
    background-color: var(--hpe-web-button-primary-disabled-rest-background);
    color: var(--hpe-web-button-primary-disabled-rest-text-color);
  }

  :host([type="primary"][size="default"]) .button {
    min-height: var(--hpe-web-button-primary-medium-min-height);
    padding: var(--hpe-web-button-primary-medium-padding-y)
      var(--hpe-web-button-primary-medium-padding-x);
    gap: var(--hpe-web-button-primary-medium-gap-x);
    font-size: var(--hpe-web-button-primary-medium-font-size);
    line-height: var(--hpe-web-button-primary-medium-line-height);
    border-radius: var(--hpe-web-button-primary-medium-border-radius);
    background-color: var(--hpe-web-button-primary-rest-background);
    color: var(--hpe-web-button-primary-rest-text-color);
  }

  :host([type="primary"][size="default"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-primary-hover-background);
    color: var(--hpe-web-button-primary-hover-text-color);
  }

  :host([type="primary"][size="default"]) .button:disabled {
    background-color: var(--hpe-web-button-primary-disabled-rest-background);
    color: var(--hpe-web-button-primary-disabled-rest-text-color);
  }

  :host([type="primary"][size="large"]) .button {
    min-height: var(--hpe-web-button-primary-large-min-height);
    padding: var(--hpe-web-button-primary-large-padding-y)
      var(--hpe-web-button-primary-large-padding-x);
    gap: var(--hpe-web-button-primary-large-gap-x);
    font-size: var(--hpe-web-button-primary-large-font-size);
    line-height: var(--hpe-web-button-primary-large-line-height);
    border-radius: var(--hpe-web-button-primary-large-border-radius);
    background-color: var(--hpe-web-button-primary-rest-background);
    color: var(--hpe-web-button-primary-rest-text-color);
  }

  :host([type="primary"][size="large"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-primary-hover-background);
    color: var(--hpe-web-button-primary-hover-text-color);
  }

  :host([type="primary"][size="large"]) .button:disabled {
    background-color: var(--hpe-web-button-primary-disabled-rest-background);
    color: var(--hpe-web-button-primary-disabled-rest-text-color);
  }

  /* SECONDARY BUTTONS */
  :host([type="secondary"][size="small"]) .button {
    min-height: var(--hpe-web-button-secondary-small-min-height);
    padding: var(--hpe-web-button-secondary-small-padding-y)
      var(--hpe-web-button-secondary-small-padding-x);
    gap: var(--hpe-web-button-secondary-small-gap-x);
    font-size: var(--hpe-web-button-secondary-small-font-size);
    line-height: var(--hpe-web-button-secondary-small-line-height);
    border-radius: var(--hpe-web-button-secondary-small-border-radius);
    background-color: var(--hpe-web-button-secondary-rest-background);
    color: var(--hpe-web-button-secondary-rest-text-color);
    border: var(--hpe-web-button-secondary-small-border-width) solid
      var(--hpe-web-button-secondary-rest-border-color);
  }

  :host([type="secondary"][size="small"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-secondary-hover-background);
    border-color: var(--hpe-web-button-secondary-hover-border-color);
    color: var(--hpe-web-button-secondary-hover-text-color);
  }

  :host([type="secondary"][size="small"]) .button:disabled {
    background-color: var(--hpe-web-button-secondary-disabled-rest-background);
    border-color: var(--hpe-web-button-secondary-disabled-rest-border-color);
    color: var(--hpe-web-button-secondary-disabled-rest-text-color);
  }

  :host([type="secondary"][size="default"]) .button {
    min-height: var(--hpe-web-button-secondary-medium-min-height);
    padding: var(--hpe-web-button-secondary-medium-padding-y)
      var(--hpe-web-button-secondary-medium-padding-x);
    gap: var(--hpe-web-button-secondary-medium-gap-x);
    font-size: var(--hpe-web-button-secondary-medium-font-size);
    line-height: var(--hpe-web-button-secondary-medium-line-height);
    border-radius: var(--hpe-web-button-secondary-medium-border-radius);
    background-color: var(--hpe-web-button-secondary-rest-background);
    color: var(--hpe-web-button-secondary-rest-text-color);
    border: var(--hpe-web-button-secondary-medium-border-width) solid
      var(--hpe-web-button-secondary-rest-border-color);
  }

  :host([type="secondary"][size="default"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-secondary-hover-background);
    border-color: var(--hpe-web-button-secondary-hover-border-color);
    color: var(--hpe-web-button-secondary-hover-text-color);
  }

  :host([type="secondary"][size="default"]) .button:disabled {
    background-color: var(--hpe-web-button-secondary-disabled-rest-background);
    border-color: var(--hpe-web-button-secondary-disabled-rest-border-color);
    color: var(--hpe-web-button-secondary-disabled-rest-text-color);
  }

  :host([type="secondary"][size="large"]) .button {
    min-height: var(--hpe-web-button-secondary-large-min-height);
    padding: var(--hpe-web-button-secondary-large-padding-y)
      var(--hpe-web-button-secondary-large-padding-x);
    gap: var(--hpe-web-button-secondary-large-gap-x);
    font-size: var(--hpe-web-button-secondary-large-font-size);
    line-height: var(--hpe-web-button-secondary-large-line-height);
    border-radius: var(--hpe-web-button-secondary-large-border-radius);
    background-color: var(--hpe-web-button-secondary-rest-background);
    color: var(--hpe-web-button-secondary-rest-text-color);
    border: var(--hpe-web-button-secondary-large-border-width) solid
      var(--hpe-web-button-secondary-rest-border-color);
  }

  :host([type="secondary"][size="large"]) .button:not(:disabled):hover {
    background-color: var(--hpe-web-button-secondary-hover-background);
    border-color: var(--hpe-web-button-secondary-hover-border-color);
    color: var(--hpe-web-button-secondary-hover-text-color);
  }

  :host([type="secondary"][size="large"]) .button:disabled {
    background-color: var(--hpe-web-button-secondary-disabled-rest-background);
    border-color: var(--hpe-web-button-secondary-disabled-rest-border-color);
    color: var(--hpe-web-button-secondary-disabled-rest-text-color);
  }

  /* LINK PRIMARY BUTTONS */
  :host([type="link-primary"][size="small"]) .button {
    background: var(--hpe-web-button-link-primary-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-small-min-height);
    padding: var(--hpe-web-button-link-small-padding-y)
      var(--hpe-web-button-link-small-padding-x);
    gap: var(--hpe-web-button-link-small-gap-x);
    font-size: var(--hpe-web-button-link-small-font-size);
    line-height: var(--hpe-web-button-link-small-line-height);
    border-radius: var(--hpe-web-button-link-small-border-radius);
    color: var(--hpe-web-button-link-primary-rest-text-color);
  }

  :host([type="link-primary"][size="small"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-primary-hover-background);
    color: var(--hpe-web-button-link-primary-hover-text-color);
  }

  :host([type="link-primary"][size="small"]) .button:disabled {
    background: var(--hpe-web-button-link-primary-disabled-rest-background);
    color: var(--hpe-web-button-link-primary-disabled-rest-text-color);
  }

  :host([type="link-primary"][size="default"]) .button {
    background: var(--hpe-web-button-link-primary-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-medium-min-height);
    padding: var(--hpe-web-button-link-medium-padding-y)
      var(--hpe-web-button-link-medium-padding-x);
    gap: var(--hpe-web-button-link-medium-gap-x);
    font-size: var(--hpe-web-button-link-medium-font-size);
    line-height: var(--hpe-web-button-link-medium-line-height);
    border-radius: var(--hpe-web-button-link-medium-border-radius);
    color: var(--hpe-web-button-link-primary-rest-text-color);
  }

  :host([type="link-primary"][size="default"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-primary-hover-background);
    color: var(--hpe-web-button-link-primary-hover-text-color);
  }

  :host([type="link-primary"][size="default"]) .button:disabled {
    background: var(--hpe-web-button-link-primary-disabled-rest-background);
    color: var(--hpe-web-button-link-primary-disabled-rest-text-color);
  }

  :host([type="link-primary"][size="large"]) .button {
    background: var(--hpe-web-button-link-primary-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-large-min-height);
    padding: var(--hpe-web-button-link-large-padding-y)
      var(--hpe-web-button-link-large-padding-x);
    gap: var(--hpe-web-button-link-large-gap-x);
    font-size: var(--hpe-web-button-link-large-font-size);
    line-height: var(--hpe-web-button-link-large-line-height);
    border-radius: var(--hpe-web-button-link-large-border-radius);
    color: var(--hpe-web-button-link-primary-rest-text-color);
  }

  :host([type="link-primary"][size="large"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-primary-hover-background);
    color: var(--hpe-web-button-link-primary-hover-text-color);
  }

  :host([type="link-primary"][size="large"]) .button:disabled {
    background: var(--hpe-web-button-link-primary-disabled-rest-background);
    color: var(--hpe-web-button-link-primary-disabled-rest-text-color);
  }

  /* LINK NEUTRAL BUTTONS */
  :host([type="link-neutral"][size="small"]) .button {
    background: var(--hpe-web-button-link-neutral-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-small-min-height);
    padding: var(--hpe-web-button-link-small-padding-y)
      var(--hpe-web-button-link-small-padding-x);
    gap: var(--hpe-web-button-link-small-gap-x);
    font-size: var(--hpe-web-button-link-small-font-size);
    line-height: var(--hpe-web-button-link-small-line-height);
    border-radius: var(--hpe-web-button-link-small-border-radius);
    color: var(--hpe-web-button-link-neutral-rest-text-color);
  }

  :host([type="link-neutral"][size="small"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-neutral-hover-background);
    color: var(--hpe-web-button-link-neutral-hover-text-color);
  }

  :host([type="link-neutral"][size="small"]) .button:disabled {
    background: var(--hpe-web-button-link-neutral-disabled-rest-background);
    color: var(--hpe-web-button-link-neutral-disabled-rest-text-color);
  }

  :host([type="link-neutral"][size="default"]) .button {
    background: var(--hpe-web-button-link-neutral-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-medium-min-height);
    padding: var(--hpe-web-button-link-medium-padding-y)
      var(--hpe-web-button-link-medium-padding-x);
    gap: var(--hpe-web-button-link-medium-gap-x);
    font-size: var(--hpe-web-button-link-medium-font-size);
    line-height: var(--hpe-web-button-link-medium-line-height);
    border-radius: var(--hpe-web-button-link-medium-border-radius);
    color: var(--hpe-web-button-link-neutral-rest-text-color);
  }

  :host([type="link-neutral"][size="default"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-neutral-hover-background);
    color: var(--hpe-web-button-link-neutral-hover-text-color);
  }

  :host([type="link-neutral"][size="default"]) .button:disabled {
    background: var(--hpe-web-button-link-neutral-disabled-rest-background);
    color: var(--hpe-web-button-link-neutral-disabled-rest-text-color);
  }

  :host([type="link-neutral"][size="large"]) .button {
    background: var(--hpe-web-button-link-neutral-rest-background);
    border: none;
    min-height: var(--hpe-web-button-link-large-min-height);
    padding: var(--hpe-web-button-link-large-padding-y)
      var(--hpe-web-button-link-large-padding-x);
    gap: var(--hpe-web-button-link-large-gap-x);
    font-size: var(--hpe-web-button-link-large-font-size);
    line-height: var(--hpe-web-button-link-large-line-height);
    border-radius: var(--hpe-web-button-link-large-border-radius);
    color: var(--hpe-web-button-link-neutral-rest-text-color);
  }

  :host([type="link-neutral"][size="large"]) .button:not(:disabled):hover {
    background: var(--hpe-web-button-link-neutral-hover-background);
    color: var(--hpe-web-button-link-neutral-hover-text-color);
  }

  :host([type="link-neutral"][size="large"]) .button:disabled {
    background: var(--hpe-web-button-link-neutral-disabled-rest-background);
    color: var(--hpe-web-button-link-neutral-disabled-rest-text-color);
  }

  /* ICON SIZING */
  :host([type="primary"][size="small"]) .icon {
    width: var(--hpe-web-button-primary-small-icon-width);
    height: var(--hpe-web-multi-mode-button-primary-small-icon-height);
  }

  :host([type="primary"][size="default"]) .icon {
    width: var(--hpe-web-button-primary-medium-icon-width);
    height: var(--hpe-web-multi-mode-button-primary-medium-icon-height);
  }

  :host([type="primary"][size="large"]) .icon {
    width: var(--hpe-web-button-primary-large-icon-width);
    height: var(--hpe-web-multi-mode-button-primary-large-icon-height);
  }

  :host([type="secondary"][size="small"]) .icon {
    width: var(--hpe-web-multi-mode-button-secondary-small-icon-width);
    height: var(--hpe-web-button-secondary-small-icon-height);
  }

  :host([type="secondary"][size="default"]) .icon {
    width: var(--hpe-web-multi-mode-button-secondary-medium-icon-width);
    height: var(--hpe-web-button-secondary-medium-icon-height);
  }

  :host([type="secondary"][size="large"]) .icon {
    width: var(--hpe-web-multi-mode-button-secondary-large-icon-width);
    height: var(--hpe-web-button-secondary-large-icon-height);
  }

  :host([type="link-primary"][size="small"]) .icon,
  :host([type="link-neutral"][size="small"]) .icon {
    width: var(--hpe-web-multi-mode-button-link-small-icon-width);
    height: var(--hpe-web-multi-mode-button-link-small-icon-height);
  }

  :host([type="link-primary"][size="default"]) .icon,
  :host([type="link-neutral"][size="default"]) .icon {
    width: var(--hpe-web-multi-mode-button-link-medium-icon-width);
    height: var(--hpe-web-multi-mode-button-link-medium-icon-height);
  }

  :host([type="link-primary"][size="large"]) .icon,
  :host([type="link-neutral"][size="large"]) .icon {
    width: var(--hpe-web-multi-mode-button-link-large-icon-width);
    height: var(--hpe-web-multi-mode-button-link-large-icon-height);
  }
`;var eW=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let eK=class extends eo{constructor(){super(...arguments),this.hasStartIcon=!1,this.hasEndIcon=!1,this.type="primary",this.size="default",this.label="Label",this.disabled=!1,this.showLeftIcon=!1,this.showRightIcon=!0}hasSlottedIcon(e){return null!==this.querySelector(`[slot="${e}"]`)}connectedCallback(){super.connectedCallback(),this.syncSlottedIcons()}syncSlottedIcons(){this.hasStartIcon=this.hasSlottedIcon("start-icon"),this.hasEndIcon=this.hasSlottedIcon("end-icon")}handleIconSlotChange(e){let t=e.target,r=t.assignedElements({flatten:!0}).length>0;if("start-icon"===t.name){this.hasStartIcon=r;return}this.hasEndIcon=r}get backwardArrowIcon(){return B`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>`}get forwardArrowIcon(){return B`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>`}renderIcon(e,t,r){return B`
      <span
        ?hidden=${t}
        part="icon ${e}"
        class="icon icon-${e}"
      >
        <slot name=${e} @slotchange=${this.handleIconSlotChange}
          >${r??""}</slot
        >
      </span>
    `}render(){let e=this.showLeftIcon||this.hasStartIcon,t=this.showRightIcon||this.hasEndIcon;return B`
      <button
        part="button"
        class="button"
        type="button"
        ?disabled=${this.disabled}
      >
        ${this.renderIcon("start-icon",!e,this.showLeftIcon?this.backwardArrowIcon:void 0)}
        <span part="label" class="label">
          <slot>${this.label}</slot>
        </span>
        ${this.renderIcon("end-icon",!t,this.showRightIcon?this.forwardArrowIcon:void 0)}
      </button>
    `}};eK.styles=eG,eW([eh()],eK.prototype,"hasStartIcon",void 0),eW([eh()],eK.prototype,"hasEndIcon",void 0),eW([el({reflect:!0})],eK.prototype,"type",void 0),eW([el({reflect:!0})],eK.prototype,"size",void 0),eW([el({reflect:!0})],eK.prototype,"label",void 0),eW([el({reflect:!0,type:Boolean})],eK.prototype,"disabled",void 0),eW([el({reflect:!0,attribute:"show-left-icon",type:Boolean})],eK.prototype,"showLeftIcon",void 0),eW([el({reflect:!0,attribute:"show-right-icon",type:Boolean})],eK.prototype,"showRightIcon",void 0),eK=eW([en("hpe-button")],eK);let eZ=i`
  :host {
    --button-group-spacing: var(--spacing-medium, 16px);
    display: contents;
  }

  .button-group {
    display: flex;
    gap: var(--button-group-spacing);
  }

  /* Horizontal layout (default) */
  :host([orientation="horizontal"]) .button-group {
    flex-direction: row;
    align-items: center;
    width: max-content;
  }

  /* Vertical layout */
  :host([orientation="vertical"]) .button-group {
    flex-direction: column;
    align-items: flex-start;
    width: max-content;
  }
`;var eQ=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let eY=class extends eo{constructor(){super(...arguments),this.orientation="horizontal"}render(){return B`
      <div part="button-group" class="button-group">
        <slot></slot>
      </div>
    `}};eY.styles=eZ,eQ([el({reflect:!0})],eY.prototype,"orientation",void 0),eY=eQ([en("hpe-button-group")],eY);let eJ=i`
  :host {
    display: block;
    --hpe-card-background: var(--hpe-web-color-background-card);
    --hpe-card-content-padding: var(--hpe-web-spacing-medium);
    --hpe-card-text-gap: var(--hpe-web-spacing-xxsmall);
    --hpe-card-section-gap: var(--hpe-web-spacing-medium);
    --hpe-card-footer-gap: var(--hpe-web-spacing-small);
    --hpe-card-hover-transition: opacity 0.2s ease-in-out;
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    background: var(--hpe-card-background);
  }

  .card-media {
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  .card-media[hidden] {
    display: none;
  }

  ::slotted(hpe-image[slot="media"]) {
    display: block;
    width: 100%;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-card-section-gap);
    padding: var(--hpe-card-content-padding);
    background: var(--hpe-card-background);
    flex: 1;
    position: relative;
    isolation: isolate;
  }

  .card-body::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        88% 74% at 100% 100%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-125) 88%,
            var(--hpe-web-color-background-card)
          )
          0%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-125) 62%,
            var(--hpe-web-color-background-card)
          )
          22%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-100) 38%,
            var(--hpe-web-color-background-card)
          )
          42%,
        color-mix(
            in srgb,
            var(--hpe-web-base-color-green-100) 16%,
            var(--hpe-web-color-background-card)
          )
          56%,
        var(--hpe-card-background) 72%
      ),
      radial-gradient(
        54% 48% at 86% 95%,
        color-mix(
            in srgb,
            var(--hpe-web-color-decorative-green) 78%,
            var(--hpe-card-background)
          )
          0%,
        color-mix(
            in srgb,
            var(--hpe-web-color-decorative-green) 46%,
            var(--hpe-card-background)
          )
          30%,
        color-mix(
            in srgb,
            var(--hpe-web-color-decorative-green) 18%,
            var(--hpe-card-background)
          )
          46%,
        var(--hpe-card-background) 64%
      );
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0;
    pointer-events: none;
    transition: var(--hpe-card-hover-transition);
    z-index: 0;
  }

  :host([variant="default"]:hover) .card-body::after {
    opacity: 1;
  }

  :host([variant="flush"]) .card,
  :host([variant="flush"]) .card-body {
    background: transparent;
  }

  :host([variant="flush"]) .card-body {
    padding-block: var(--hpe-card-content-padding);
    padding-inline: var(--hpe-web-spacing-none);
  }

  .card-header,
  .card-footer {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-card-footer-gap);
    position: relative;
    z-index: 1;
  }

  .card-header[hidden],
  .card-footer[hidden] {
    display: none;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-card-text-gap);
    position: relative;
    z-index: 1;
  }

  .tagline,
  .heading,
  .body,
  .card-actions {
    display: block;
  }

  .card-actions {
    margin-top: auto;
    position: relative;
    z-index: 1;
  }

  ::slotted([slot="actions"]) {
    display: block;
  }

  .default-actions {
    display: flex;
    align-items: flex-start;
  }
`;var eX=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let e0=class extends eo{constructor(){super(...arguments),this.variant="default",this._hasMedia=!1,this._hasHeader=!1,this._hasFooter=!1,this._hasActions=!1}_hasAssignedElements(e){return e.assignedElements({flatten:!0}).length>0}_onMediaSlotChange(e){let t=e.target;this._hasMedia=this._hasAssignedElements(t)}_onHeaderSlotChange(e){let t=e.target;this._hasHeader=this._hasAssignedElements(t)}_onFooterSlotChange(e){let t=e.target;this._hasFooter=this._hasAssignedElements(t)}_onActionsSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._hasActions=t.length>0,t.forEach(e=>{"hpe-button-group"===e.tagName.toLowerCase()&&e.setAttribute("orientation","vertical")})}render(){return B`
      <div part="card" class="card">
        <div part="card-media" class="card-media" ?hidden=${!this._hasMedia}>
          <slot name="media" @slotchange=${this._onMediaSlotChange}></slot>
        </div>
        <div part="card-body" class="card-body">
          <div
            part="card-header"
            class="card-header"
            ?hidden=${!this._hasHeader}
          >
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>

          <div part="card-content" class="card-content">
            <hpe-paragraph part="tagline" class="tagline" size="md">
              <slot name="tagline"></slot>
            </hpe-paragraph>
            <hpe-heading part="heading" class="heading" level="h4">
              <slot name="heading"></slot>
            </hpe-heading>
            <div part="body" class="body">
              <slot name="body"></slot>
            </div>
          </div>

          <div
            part="card-footer"
            class="card-footer"
            ?hidden=${!this._hasFooter}
          >
            <slot name="footer" @slotchange=${this._onFooterSlotChange}></slot>
          </div>

          <div part="card-actions" class="card-actions">
            <slot
              name="actions"
              @slotchange=${this._onActionsSlotChange}
            ></slot>
            ${this._hasActions?"":B`
                  <hpe-button-group
                    class="default-actions"
                    orientation="vertical"
                  >
                    <hpe-button type="link-primary" size="default"
                      >Learn more</hpe-button
                    >
                  </hpe-button-group>
                `}
          </div>
        </div>
      </div>
    `}};e0.styles=eJ,eX([el({reflect:!0})],e0.prototype,"variant",void 0),eX([eh()],e0.prototype,"_hasMedia",void 0),eX([eh()],e0.prototype,"_hasHeader",void 0),eX([eh()],e0.prototype,"_hasFooter",void 0),eX([eh()],e0.prototype,"_hasActions",void 0),e0=eX([en("hpe-card")],e0);let e1=i`
  :host {
    display: block;
    width: 100%;
    --hpe-carousel-stack-gap: 40px;
    --hpe-carousel-controls-gap: 16px;
    --hpe-carousel-slide-gap: 0px;
    --hpe-carousel-nav-size: 56px;
    --hpe-carousel-nav-rest-background: #535c66;
    --hpe-carousel-nav-disabled-background: #b4b6ba;
    --hpe-carousel-nav-icon-color: #ffffff;
    --hpe-carousel-slide-count-color: #606a70;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--hpe-carousel-stack-gap);
    width: 100%;
  }

  .slides {
    display: flex;
    align-items: center;
    gap: var(--hpe-carousel-slide-gap);
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .slides::-webkit-scrollbar {
    display: none;
  }

  ::slotted(*) {
    flex: 0 0 var(--_hpe-carousel-slide-width, 100%);
    min-width: 0;
    box-sizing: border-box;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: var(--hpe-carousel-controls-gap);
  }

  .slide-count {
    color: var(--hpe-carousel-slide-count-color);
    font-family: var(--heading-font, sans-serif);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;
  }

  .nav-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--hpe-carousel-nav-size);
    height: var(--hpe-carousel-nav-size);
    padding: 0;
    border: none;
    border-radius: 9999px;
    background: var(--hpe-carousel-nav-rest-background);
    color: var(--hpe-carousel-nav-icon-color);
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .nav-button:hover:not(:disabled) {
    opacity: 0.88;
  }

  .nav-button:disabled {
    background: var(--hpe-carousel-nav-disabled-background);
    cursor: not-allowed;
  }

  .nav-button svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (max-width: 766px) {
    :host {
      --hpe-carousel-controls-gap: 12px;
      --hpe-carousel-nav-size: 40px;
    }

    .nav-button svg {
      width: 20px;
      height: 20px;
    }
  }
`;var e2=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let e3=class extends eo{constructor(){super(...arguments),this.visibleSlides=1,this.showControls=!0,this.showSlideCount=!1,this.currentIndex=0,this.totalSlides=0}get currentSlideIndex(){return this.currentIndex}get pageCount(){return this.totalPages}firstUpdated(){this.syncSlides(),this.updateSlideWidth()}updated(e){e.has("visibleSlides")&&(this.currentIndex=0,this.updateSlideWidth(),this.goTo(0))}get totalPages(){return Math.max(this.totalSlides-this.visibleSlides+1,1)}syncSlides(){let e=this.renderRoot.querySelector("slot");e&&(this.totalSlides=e.assignedElements({flatten:!0}).length,this.currentIndex=Math.min(this.currentIndex,this.totalPages-1),this.notifyStateChange())}updateSlideWidth(){let e=Math.max(1,this.visibleSlides);this.style.setProperty("--_hpe-carousel-slide-width",`calc((100% - (var(--hpe-carousel-slide-gap, 0px) * ${e-1})) / ${e})`)}goTo(e){let t=Math.max(0,Math.min(e,this.totalPages-1));this.currentIndex=t;let r=this.renderRoot.querySelector("slot");if(!r||!this.slidesElement)return;let a=r.assignedElements({flatten:!0})[t];a&&this.slidesElement.scrollTo({left:a.offsetLeft,behavior:"smooth"}),this.notifyStateChange()}goToPrevious(){this.goTo(this.currentIndex-1)}goToNext(){this.goTo(this.currentIndex+1)}handleSlotChange(){this.syncSlides(),this.updateSlideWidth()}notifyStateChange(){this.dispatchEvent(new CustomEvent("hpe-carousel-change",{detail:{currentIndex:this.currentIndex,totalSlides:this.totalSlides,totalPages:this.totalPages},bubbles:!0,composed:!0}))}renderIcon(e){return"left"===e?B`
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 6.5L9 12l5.5 5.5" />
          </svg>
        `:B`
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 6.5L15 12l-5.5 5.5" />
          </svg>
        `}render(){let e=this.showControls&&this.totalSlides>this.visibleSlides,t=`Slide ${this.currentIndex+1} of ${this.totalSlides}`;return B`
      <div part="container" class="container">
        <div part="slides" class="slides">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>

        ${e?B`
              <div part="controls" class="controls">
                <button
                  part="prev-button"
                  class="nav-button"
                  type="button"
                  aria-label="Previous slide"
                  ?disabled=${0===this.currentIndex}
                  @click=${this.goToPrevious}
                >
                  ${this.renderIcon("left")}
                </button>

                <button
                  part="next-button"
                  class="nav-button"
                  type="button"
                  aria-label="Next slide"
                  ?disabled=${this.currentIndex>=this.totalPages-1}
                  @click=${this.goToNext}
                >
                  ${this.renderIcon("right")}
                </button>

                ${this.showSlideCount?B`
                      <span part="slide-count" class="slide-count"
                        >${t}</span
                      >
                    `:U}
              </div>
            `:U}
      </div>
    `}};e3.styles=e1,e2([el({type:Number,reflect:!0,attribute:"visible-slides"})],e3.prototype,"visibleSlides",void 0),e2([el({type:Boolean,reflect:!0,attribute:"show-controls"})],e3.prototype,"showControls",void 0),e2([el({type:Boolean,reflect:!0,attribute:"show-slide-count"})],e3.prototype,"showSlideCount",void 0),e2([eh()],e3.prototype,"currentIndex",void 0),e2([eh()],e3.prototype,"totalSlides",void 0),e2([(e,t,r)=>ed(e,t,{get(){let e;return e=this,e.renderRoot?.querySelector(".slides")??null}})],e3.prototype,"slidesElement",void 0),e3=e2([en("hpe-carousel")],e3);let e4=i`
  :host {
    display: block;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-web-spacing-xlarge);
    width: 100%;
    padding: var(--hpe-web-spacing-xlarge);
    box-sizing: border-box;
    border: 1px solid var(--hpe-web-color-border-weak);
    background: var(--hpe-web-color-background-card);
  }

  .header,
  .fields,
  .actions {
    display: flex;
    width: 100%;
  }

  .header,
  .fields {
    flex-direction: column;
  }

  .header {
    gap: var(--hpe-web-spacing-xsmall);
  }

  .fields {
    gap: var(--hpe-web-spacing-medium);
  }

  .actions {
    align-items: center;
  }

  hpe-heading,
  hpe-paragraph {
    margin: 0;
  }

  ::slotted(*) {
    box-sizing: border-box;
  }

  ::slotted(hpe-input),
  ::slotted(hpe-input-group),
  ::slotted(hpe-select),
  ::slotted(hpe-textarea) {
    display: block;
    width: 100%;
    max-width: none;
  }

  @media (max-width: 767px) {
    .container {
      gap: var(--hpe-web-spacing-large);
      padding: var(--hpe-web-spacing-medium);
    }
  }
`;var e6=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let e5=class extends eo{constructor(){super(...arguments),this.heading="Heading",this.description="Desription text providing context for the form and its fields. This can be a few sentences long.",this.submitLabel="Submit"}render(){return B`
      <form part="container" class="container" @submit=${this.onSubmit}>
        <div part="header" class="header">
          <hpe-heading level="h2">${this.heading}</hpe-heading>
          <hpe-paragraph size="md">${this.description}</hpe-paragraph>
        </div>
        <div part="fields" class="fields">
          <slot></slot>
        </div>
        <div part="actions" class="actions">
          <hpe-button-group>
            <hpe-button
              type="primary"
              size="small"
              .showRightIcon=${!1}
              @click=${this.onSubmitClick}
            >
              ${this.submitLabel}
            </hpe-button>
            <slot name="actions"></slot>
          </hpe-button-group>
        </div>
      </form>
    `}onSubmit(e){e.preventDefault(),this.dispatchEvent(new SubmitEvent("submit",{bubbles:!0,cancelable:!0,composed:!0}))}onSubmitClick(){let e=this.shadowRoot?.querySelector("form");e&&e.requestSubmit()}};e5.styles=e4,e6([el({reflect:!0})],e5.prototype,"heading",void 0),e6([el({reflect:!0})],e5.prototype,"description",void 0),e6([el({reflect:!0,attribute:"submit-label"})],e5.prototype,"submitLabel",void 0),e5=e6([en("hpe-form")],e5);let e8=i`
  :host {
    display: block;
    width: 100%;
  }

  .rule {
    display: block;
    width: 100%;
    height: 0;
    margin: 0;
    border: none;
    border-top: var(--hpe-web-border-width-default) solid
      var(--hpe-web-color-border-weak);
  }
`,e9=class extends eo{render(){return B`<hr part="rule" class="rule" />`}};e9.styles=e8,e9=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n}([en("hpe-horizontal-rule")],e9);let e7=i`
  :host {
    --hpe-image-background: var(
      --image-background,
      var(--hpe-web-color-transparent)
    );
    display: block;
  }

  .image-container {
    position: relative;
    width: 100%;
    background-color: var(--hpe-image-background);
    overflow: hidden;
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 16:9 aspect ratio */
  :host([aspect-ratio="16:9"]) .image-container {
    aspect-ratio: 16 / 9;
  }

  /* 4:3 aspect ratio (default) */
  :host([aspect-ratio="4:3"]) .image-container {
    aspect-ratio: 4 / 3;
  }

  /* 1:1 aspect ratio (square) */
  :host([aspect-ratio="1:1"]) .image-container {
    aspect-ratio: 1 / 1;
  }

  /* 9:16 aspect ratio (tall) */
  :host([aspect-ratio="9:16"]) .image-container {
    aspect-ratio: 9 / 16;
  }

  /* 3:4 aspect ratio (tall) */
  :host([aspect-ratio="3:4"]) .image-container {
    aspect-ratio: 3 / 4;
  }

  /* 18:5 aspect ratio (ultra-wide) */
  :host([aspect-ratio="18:5"]) .image-container {
    aspect-ratio: 18 / 5;
  }

  /* Slot (fallback content) styling */
  ::slotted(*) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;var te=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let tt=class extends eo{constructor(){super(...arguments),this.alt="Image",this.aspectRatio="4:3"}render(){return B`
      <div part="image-container" class="image-container">
        ${this.src?B`<img
              part="image"
              class="image"
              src=${this.src}
              alt=${this.alt}
            />`:B`<slot></slot>`}
      </div>
    `}};tt.styles=e7,te([el({reflect:!0})],tt.prototype,"src",void 0),te([el({reflect:!0})],tt.prototype,"alt",void 0),te([el({reflect:!0,attribute:"aspect-ratio"})],tt.prototype,"aspectRatio",void 0),tt=te([en("hpe-image")],tt);let tr=i`
  :host {
    --input-group-horizontal-spacing: var(--hpe-web-spacing-large);
    --input-group-vertical-spacing: var(--hpe-web-spacing-xsmall);
    display: contents;
  }

  .input-group {
    display: flex;
  }

  :host([orientation="horizontal"]) .input-group {
    flex-direction: row;
    gap: var(--input-group-horizontal-spacing);
    flex-wrap: wrap;
    align-items: center;
    width: max-content;
  }

  :host([orientation="vertical"]) .input-group {
    flex-direction: column;
    gap: var(--input-group-vertical-spacing);
    align-items: flex-start;
    width: max-content;
  }
`;var ta=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let to=class extends eo{constructor(){super(...arguments),this.orientation="horizontal"}render(){return B`
      <div part="input-group" class="input-group">
        <slot></slot>
      </div>
    `}};to.styles=tr,ta([el({reflect:!0})],to.prototype,"orientation",void 0),to=ta([en("hpe-input-group")],to);let ti=i`
  :host {
    display: inline-flex;
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-xxsmall, 12px);
    align-items: center;
    width: fit-content;
    cursor: pointer;
  }

  .checkbox-group {
    position: relative;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .checkbox-input {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin: 0;
    z-index: 1;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--hpe-web-color-background-default, #ffffff);
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    border-radius: var(--checkbox-default-medium-control-borderradius, 6px);
    pointer-events: none;
    box-sizing: border-box;
    transition:
      background-color 150ms ease,
      border-color 150ms ease;
  }

  .checkmark svg {
    width: 16px;
    height: 16px;
    opacity: 0;
  }

  .checkmark path {
    fill: none;
    stroke: var(--hpe-web-color-text-on-strong, #ffffff);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.75;
  }

  .checkbox-input:checked ~ .checkmark {
    background-color: var(--hpe-web-color-background-primary, #01a982);
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  .checkbox-input:checked ~ .checkmark svg {
    opacity: 1;
  }

  .container:hover .checkbox-input:not(:disabled):checked ~ .checkmark {
    background-color: var(--hpe-web-color-background-primary-strong, #068667);
    border-color: var(--hpe-web-color-background-primary-strong, #068667);
  }

  .container:hover .checkbox-input:not(:disabled):not(:checked) ~ .checkmark {
    background-color: var(
      --hpe-web-color-background-contrast,
      rgba(0, 0, 0, 0.04)
    );
  }

  .checkbox-input:disabled {
    cursor: not-allowed;
  }

  .checkbox-input:disabled ~ .checkmark {
    background-color: var(--hpe-web-color-background-neutral-weak, #d4d8db);
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  .checkbox-input:disabled ~ .checkmark path {
    stroke: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }

  .checkbox-input:focus-visible ~ .checkmark {
    outline: 2px solid var(--hpe-web-color-border-selected, #006750);
    outline-offset: 2px;
  }

  .label {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    cursor: pointer;
    margin: 0;
    user-select: none;
  }

  .checkbox-input:disabled ~ .label {
    cursor: not-allowed;
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;var tn=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let ts=class extends eo{constructor(){super(...arguments),this.internals=this.attachInternals(),this.checked=!1,this.label="Checkbox Label",this.required=!1,this.disabled=!1}render(){let e=this.name||"checkbox";return B`
      <label part="container" class="container" for=${e}>
        <div part="checkbox-group" class="checkbox-group">
          <input
            part="input"
            class="checkbox-input"
            id=${e}
            type="checkbox"
            name=${this.name||""}
            value=${this.value||""}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._onCheckboxChange}
          />
          <span part="checkmark" class="checkmark" aria-hidden="true">
            <svg viewBox="0 0 16 16" focusable="false">
              <path d="M3.5 8.25 6.5 11.25 12.5 4.75" />
            </svg>
          </span>
        </div>
        <span part="label" class="label">${this.label}</span>
      </label>
    `}_onCheckboxChange(e){let t=e.target;this.checked=t.checked,this.updateFormState()}updateFormState(){let e=this.checked?this.value||"on":"";this.internals.setFormValue(e),this.checkValidity()?this.internals.setValidity({}):this.internals.setValidity({customError:!0},this.getValidationMessage(),this.shadowRoot?.querySelector("input")||void 0)}checkValidity(){return!this.required||!!this.checked}getValidationMessage(){return this.required&&!this.checked?`${this.label} must be checked`:""}};ts.styles=ti,ts.formAssociated=!0,tn([el({reflect:!0})],ts.prototype,"name",void 0),tn([el({reflect:!0})],ts.prototype,"value",void 0),tn([el({reflect:!0,type:Boolean})],ts.prototype,"checked",void 0),tn([el({reflect:!0})],ts.prototype,"label",void 0),tn([el({reflect:!0,type:Boolean})],ts.prototype,"required",void 0),tn([el({reflect:!0,type:Boolean})],ts.prototype,"disabled",void 0),ts=tn([en("hpe-checkbox")],ts);let tl=i`
  :host {
    display: block;
    width: 100%;
    max-width: 352px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xsmall, 8px);
    align-items: flex-start;
    width: 100%;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: var(--spacing-3xsmall, 8px);
  }

  .label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-hair, 1px);
    width: 100%;
  }

  .label-text {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    margin: 0;
  }

  .required-indicator {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-critical, #cc1f1a);
    margin: 0;
  }

  .input {
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    outline: none;
    background: transparent;
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    padding: var(--spacing-xxsmall, 12px) var(--spacing-small, 24px);
    width: 100%;
    min-height: 56px;
    box-sizing: border-box;
    display: block;
  }

  .input::placeholder {
    color: var(--hpe-web-color-text-default, #3e4550);
    opacity: 1;
  }

  .input:disabled {
    cursor: not-allowed;
  }

  :host([state="typing"]) .input {
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  :host([state="complete"]) .input {
    border-color: var(--hpe-web-color-border-strong, #535c66);
  }

  :host([state="error"]) .input {
    border-color: var(--hpe-web-color-border-critical, #cc1f1a);
  }

  :host([state="error"]) .label-text,
  :host([state="error"]) .required-indicator,
  :host([state="error"]) .input,
  :host([state="error"]) .input::placeholder,
  :host([state="error"]) .description-text {
    color: var(--hpe-web-color-text-critical, #cc1f1a);
  }

  :host([state="typing"]) .input,
  :host([state="complete"]) .input,
  :host([state="typing"]) .input::placeholder,
  :host([state="complete"]) .input::placeholder {
    color: var(--hpe-web-color-text-strong, #292d3a);
  }

  :host([state="disabled"]) .input {
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  :host([state="disabled"]) .label-text,
  :host([state="disabled"]) .required-indicator,
  :host([state="disabled"]) .input,
  :host([state="disabled"]) .input::placeholder,
  :host([state="disabled"]) .description-text {
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }

  .description {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .description-text {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    margin: 0;
    white-space: nowrap;
  }
`;var th=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let td=eu=class extends eo{constructor(){super(...arguments),this.inputId=`hpe-input-${eu.idCounter++}`,this.internals=this.attachInternals(),this.value="",this.placeholder="",this.label="Label",this.required=!0,this.showLabel=!0,this.descriptionText="Description (Optional)",this.showDescription=!0,this.state="enabled",this.disabled=!1}render(){let e=this.disabled||"disabled"===this.state;return B`
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel?B`
                <label part="label" class="label" for=${this.inputId}>
                  <span part="label-text" class="label-text"
                    >${this.label}</span
                  >
                  ${this.required?B`<span
                        part="required-indicator"
                        class="required-indicator"
                      >
                        *
                      </span>`:""}
                </label>
              `:""}
          <input
            id=${this.inputId}
            part="field input"
            class="input"
            type="text"
            name=${this.name||""}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${e}
            aria-invalid=${"error"===this.state?"true":"false"}
            aria-disabled=${e?"true":"false"}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
          />
        </div>
        ${this.showDescription?B`
              <div part="description" class="description">
                <p class="description-text">${this.descriptionText}</p>
              </div>
            `:""}
      </div>
    `}_onInput(e){let t=e.target;this.value=t.value,"error"!==this.state&&"disabled"!==this.state&&(this.state="typing"),this.updateFormState()}_onBlur(){"error"!==this.state&&"disabled"!==this.state&&(this.value.trim()?this.state="complete":this.state="enabled",this.updateFormState())}_onFocus(){"error"!==this.state&&"disabled"!==this.state&&(this.state="typing")}updateFormState(){this.internals.setFormValue(this.value),this.checkValidity()?this.internals.setValidity({}):this.internals.setValidity({customError:!0},this.getValidationMessage(),this.shadowRoot?.querySelector("input"))}checkValidity(){return!(this.required&&!this.value.trim()||this.pattern&&this.value.trim()&&!new RegExp(this.pattern).test(this.value))&&!0}getValidationMessage(){return this.required&&!this.value.trim()?`${this.label} is required`:this.pattern&&this.value.trim()&&!new RegExp(this.pattern).test(this.value)?`${this.label} does not match the required pattern`:""}};td.styles=tl,td.formAssociated=!0,td.idCounter=0,th([el({reflect:!0})],td.prototype,"name",void 0),th([el({reflect:!0})],td.prototype,"value",void 0),th([el({reflect:!0})],td.prototype,"placeholder",void 0),th([el({reflect:!0})],td.prototype,"label",void 0),th([el({reflect:!0,type:Boolean})],td.prototype,"required",void 0),th([el({reflect:!0,attribute:"show-label",type:Boolean})],td.prototype,"showLabel",void 0),th([el({reflect:!0,attribute:"description-text"})],td.prototype,"descriptionText",void 0),th([el({reflect:!0,attribute:"show-description",type:Boolean})],td.prototype,"showDescription",void 0),th([el({reflect:!0})],td.prototype,"pattern",void 0),th([el({reflect:!0})],td.prototype,"state",void 0),th([el({reflect:!0,type:Boolean})],td.prototype,"disabled",void 0),td=eu=th([en("hpe-input")],td);let tp=i`
  :host {
    display: inline-flex;
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-xxsmall, 12px);
    align-items: center;
    width: fit-content;
    cursor: pointer;
  }

  .radio-group {
    position: relative;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .radio-input {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin: 0;
    z-index: 1;
  }

  .radio {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    border-radius: 50%;
    background-color: var(--hpe-web-color-background-default, #ffffff);
    pointer-events: none;
    box-sizing: border-box;
    transition:
      background-color 150ms ease,
      border-color 150ms ease;
  }

  .radio::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--hpe-web-color-background-primary, #01a982);
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .radio-input:checked ~ .radio::after {
    opacity: 1;
  }

  .radio-input:checked ~ .radio {
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  .container:hover .radio-input:not(:disabled):checked ~ .radio::after {
    background-color: var(--hpe-web-color-background-primary-strong, #068667);
  }

  .container:hover .radio-input:not(:disabled):not(:checked) ~ .radio {
    background-color: var(
      --hpe-web-color-background-contrast,
      rgba(0, 0, 0, 0.04)
    );
  }

  .radio-input:disabled {
    cursor: not-allowed;
  }

  .radio-input:disabled ~ .radio {
    background-color: var(--hpe-web-color-background-neutral-weak, #d4d8db);
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  .radio-input:disabled ~ .radio::after {
    opacity: 1;
    background-color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }

  .radio-input:focus-visible ~ .radio {
    outline: 2px solid var(--hpe-web-color-border-selected, #006750);
    outline-offset: 2px;
  }

  .label {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    cursor: pointer;
    margin: 0;
    user-select: none;
  }

  .radio-input:disabled ~ .label {
    cursor: not-allowed;
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;var tc=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let tb=class extends eo{constructor(){super(...arguments),this.internals=this.attachInternals(),this.checked=!1,this.label="Radio Label",this.required=!1,this.disabled=!1}render(){let e=`${this.name||"radio"}-${this.value||this.label}`;return B`
      <label part="container" class="container" for=${e}>
        <div part="radio-group" class="radio-group">
          <input
            part="input"
            class="radio-input"
            id=${e}
            type="radio"
            name=${this.name||""}
            value=${this.value||""}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._onRadioChange}
          />
          <span part="radio" class="radio"></span>
        </div>
        <span part="label" class="label">${this.label}</span>
      </label>
    `}_onRadioChange(e){let t=e.target;this.checked=t.checked,this.updateFormState()}updateFormState(){let e=this.checked?this.value||"on":"";this.internals.setFormValue(e),this.checkValidity()?this.internals.setValidity({}):this.internals.setValidity({customError:!0},this.getValidationMessage(),this.shadowRoot?.querySelector("input")||void 0)}checkValidity(){return!this.required||!!this.checked}getValidationMessage(){return this.required&&!this.checked?`${this.label} must be selected`:""}};tb.styles=tp,tb.formAssociated=!0,tc([el({reflect:!0})],tb.prototype,"name",void 0),tc([el({reflect:!0})],tb.prototype,"value",void 0),tc([el({reflect:!0,type:Boolean})],tb.prototype,"checked",void 0),tc([el({reflect:!0})],tb.prototype,"label",void 0),tc([el({reflect:!0,type:Boolean})],tb.prototype,"required",void 0),tc([el({reflect:!0,type:Boolean})],tb.prototype,"disabled",void 0),tb=tc([en("hpe-radio")],tb);let tu=i`
  :host {
    display: block;
    width: 100%;
    max-width: 352px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xsmall, 8px);
    align-items: flex-start;
    width: 100%;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: var(--spacing-3xsmall, 8px);
    position: relative;
  }

  .label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-hair, 1px);
    width: 100%;
  }

  .label-text {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    margin: 0;
  }

  .required-indicator {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-critical, #cc1f1a);
    margin: 0;
  }

  .select {
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    outline: none;
    background: transparent;
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    padding: var(--spacing-xxsmall, 12px) var(--spacing-small, 24px);
    padding-right: calc(var(--spacing-small, 24px) + 28px);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    min-height: 56px;
    box-sizing: border-box;
    display: block;
  }

  .select:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }

  .select:focus {
    outline: none;
  }

  .icon {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: var(--hpe-web-color-text-default, #3e4550);
    pointer-events: none;
    transition: transform 150ms ease;
    position: absolute;
    right: var(--spacing-small, 24px);
    bottom: 20px;
  }

  :host([state="typing"]) .select {
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  :host([state="complete"]) .select {
    border-color: var(--hpe-web-color-border-strong, #535c66);
  }

  :host([state="error"]) .select {
    border-color: var(--hpe-web-color-border-critical, #cc1f1a);
  }

  :host([state="error"]) .label-text,
  :host([state="error"]) .required-indicator,
  :host([state="error"]) .select,
  :host([state="error"]) .icon,
  :host([state="error"]) .description-text {
    color: var(--hpe-web-color-text-critical, #cc1f1a);
  }

  :host([state="typing"]) .select,
  :host([state="complete"]) .select,
  :host([state="typing"]) .icon,
  :host([state="complete"]) .icon {
    color: var(--hpe-web-color-text-strong, #292d3a);
  }

  :host([state="typing"]) .icon {
    transform: rotate(180deg);
  }

  :host([state="disabled"]) .select {
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  .description {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .description-text {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    margin: 0;
    white-space: nowrap;
  }

  :host([state="disabled"]) .label-text,
  :host([state="disabled"]) .required-indicator,
  :host([state="disabled"]) .select,
  :host([state="disabled"]) .icon,
  :host([state="disabled"]) .description-text {
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;var tg=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let tv=eg=class extends eo{constructor(){super(...arguments),this.selectId=`hpe-select-${eg.idCounter++}`,this.internals=this.attachInternals(),this.parsedOptions=[],this.parsedOptGroups=[],this.value="",this.label="Label",this.required=!0,this.showLabel=!0,this.descriptionText="Description (Optional)",this.showDescription=!0,this.state="enabled",this.disabled=!1}firstUpdated(){this.updateOptionCollections(),this.setupMutationObserver()}disconnectedCallback(){super.disconnectedCallback(),this.optionsMutationObserver&&this.optionsMutationObserver.disconnect()}render(){let e=this.disabled||"disabled"===this.state;return B`
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel?B`
                <label part="label" class="label" for=${this.selectId}>
                  <span part="label-text" class="label-text"
                    >${this.label}</span
                  >
                  ${this.required?B`<span
                        part="required-indicator"
                        class="required-indicator"
                      >
                        *
                      </span>`:""}
                </label>
              `:""}
          <slot @slotchange=${this.onOptionsSlotChange} hidden></slot>
          <select
            id=${this.selectId}
            part="field select"
            class="select"
            name=${this.name||""}
            .value=${this.value}
            ?disabled=${e}
            aria-invalid=${"error"===this.state?"true":"false"}
            aria-disabled=${e?"true":"false"}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
          >
            ${this.parsedOptGroups.map(e=>B`
                <optgroup label=${e.label} ?disabled=${e.disabled}>
                  ${Array.from(e.children).filter(e=>e instanceof HTMLOptionElement).map(e=>B`
                        <option
                          value=${e.value}
                          ?disabled=${e.disabled}
                          ?selected=${e.selected}
                        >
                          ${e.textContent||""}
                        </option>
                      `)}
                </optgroup>
              `)}
            ${this.parsedOptions.map(e=>B`
                <option
                  value=${e.value}
                  ?disabled=${e.disabled}
                  ?selected=${e.selected}
                >
                  ${e.textContent||""}
                </option>
              `)}
          </select>
          <svg
            part="icon"
            class="icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        ${this.showDescription?B`
              <div part="description" class="description">
                <p class="description-text">${this.descriptionText}</p>
              </div>
            `:""}
      </div>
    `}onOptionsSlotChange(){this.updateOptionCollections()}setupMutationObserver(){this.optionsMutationObserver=new MutationObserver(()=>{this.updateOptionCollections()}),this.optionsMutationObserver.observe(this,{childList:!0,subtree:!1})}updateOptionCollections(){let e=Array.from(this.children);this.parsedOptions=e.filter(e=>e instanceof HTMLOptionElement),this.parsedOptGroups=e.filter(e=>e instanceof HTMLOptGroupElement)}_onInput(e){let t=e.target;this.value=t.value,"error"!==this.state&&"disabled"!==this.state&&(this.state="typing"),this.updateFormState()}_onBlur(){"error"===this.state||"disabled"===this.state||(this.value&&this.value.toString().trim()?this.state="complete":this.state="enabled",this.updateFormState())}_onFocus(){"error"!==this.state&&"disabled"!==this.state&&(this.state="typing")}updateFormState(){this.internals.setFormValue(this.value||""),this.checkValidity()?this.internals.setValidity({}):this.internals.setValidity({customError:!0},this.getValidationMessage(),this.shadowRoot?.querySelector("select")||void 0)}checkValidity(){return!this.required||!!this.value&&!!this.value.toString().trim()}getValidationMessage(){return!this.required||this.value&&this.value.toString().trim()?"":`${this.label} is required`}};tv.styles=tu,tv.formAssociated=!0,tv.idCounter=0,tg([eh()],tv.prototype,"parsedOptions",void 0),tg([eh()],tv.prototype,"parsedOptGroups",void 0),tg([el({reflect:!0})],tv.prototype,"name",void 0),tg([el({reflect:!0})],tv.prototype,"value",void 0),tg([el({reflect:!0})],tv.prototype,"label",void 0),tg([el({reflect:!0,type:Boolean})],tv.prototype,"required",void 0),tg([el({reflect:!0,attribute:"show-label",type:Boolean})],tv.prototype,"showLabel",void 0),tg([el({reflect:!0,attribute:"description-text"})],tv.prototype,"descriptionText",void 0),tg([el({reflect:!0,attribute:"show-description",type:Boolean})],tv.prototype,"showDescription",void 0),tg([el({reflect:!0})],tv.prototype,"state",void 0),tg([el({reflect:!0,type:Boolean})],tv.prototype,"disabled",void 0),tv=eg=tg([en("hpe-select")],tv);let tf=i`
  :host {
    display: block;
    width: 100%;
    max-width: 352px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xsmall, 8px);
    align-items: flex-start;
    width: 100%;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: var(--spacing-3xsmall, 8px);
  }

  .label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-hair, 1px);
    width: 100%;
  }

  .label-text {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    margin: 0;
  }

  .required-indicator {
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-critical, #cc1f1a);
    margin: 0;
  }

  .textarea {
    border: 1px solid var(--hpe-web-color-border-default, #b1b9be);
    outline: none;
    background: transparent;
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-small-body-copy-fontsize, 16px);
    font-weight: var(--paragraph-small-body-copy-fontweight, 400);
    line-height: var(--paragraph-small-body-copy-lineheight, 24px);
    letter-spacing: var(--paragraph-small-body-copy-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
    width: 100%;
    min-height: 128px;
    padding: var(--spacing-small, 24px);
    box-sizing: border-box;
    resize: vertical;
    display: block;
  }

  .textarea::placeholder {
    color: var(--hpe-web-color-text-default, #3e4550);
    opacity: 1;
  }

  .textarea:disabled {
    cursor: not-allowed;
  }

  .textarea:focus {
    outline: none;
  }

  :host([state="typing"]) .textarea {
    border-color: var(--hpe-web-color-border-selected, #006750);
  }

  :host([state="complete"]) .textarea {
    border-color: var(--hpe-web-color-border-strong, #535c66);
  }

  :host([state="error"]) .textarea {
    border-color: var(--hpe-web-color-border-critical, #cc1f1a);
  }

  :host([state="error"]) .label-text,
  :host([state="error"]) .required-indicator,
  :host([state="error"]) .textarea,
  :host([state="error"]) .textarea::placeholder,
  :host([state="error"]) .description {
    color: var(--hpe-web-color-text-critical, #cc1f1a);
  }

  .description {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: flex-start;
    width: 100%;
    font-family: var(--heading-font, "HPE_Graphik", sans-serif);
    font-size: var(--paragraph-disclaimer-fontsize, 14px);
    font-weight: var(--paragraph-disclaimer-fontweight, 400);
    line-height: var(--paragraph-disclaimer-lineheight, 20px);
    letter-spacing: var(--paragraph-disclaimer-letterspacing, 0);
    color: var(--hpe-web-color-text-default, #3e4550);
  }

  .description-text {
    flex: 1;
    margin: 0;
    min-height: 20px;
  }

  .char-counter {
    margin: 0;
    white-space: nowrap;
    text-align: right;
  }

  :host([state="typing"]) .textarea,
  :host([state="complete"]) .textarea,
  :host([state="typing"]) .textarea::placeholder,
  :host([state="complete"]) .textarea::placeholder {
    color: var(--hpe-web-color-text-strong, #292d3a);
  }

  :host([state="disabled"]) .textarea {
    border-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  :host([state="disabled"]) .label-text,
  :host([state="disabled"]) .required-indicator,
  :host([state="disabled"]) .textarea,
  :host([state="disabled"]) .textarea::placeholder,
  :host([state="disabled"]) .description {
    color: var(--hpe-web-color-text-disabled, rgba(0, 0, 0, 0.24));
  }
`;var tm=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let ty=ev=class extends eo{constructor(){super(...arguments),this.textareaId=`hpe-textarea-${ev.idCounter++}`,this.internals=this.attachInternals(),this.value="",this.placeholder="",this.label="Label",this.required=!0,this.showLabel=!0,this.descriptionText="Description (Optional)",this.showDescription=!0,this.maxLength=3e3,this.state="enabled",this.disabled=!1}render(){let e=this.value.length,t=this.disabled||"disabled"===this.state;return B`
      <div part="container" class="container">
        <div part="input-group" class="input-group">
          ${this.showLabel?B`
                <label part="label" class="label" for=${this.textareaId}>
                  <span part="label-text" class="label-text"
                    >${this.label}</span
                  >
                  ${this.required?B`<span
                        part="required-indicator"
                        class="required-indicator"
                      >
                        *
                      </span>`:""}
                </label>
              `:""}
          <textarea
            id=${this.textareaId}
            part="field textarea"
            class="textarea"
            name=${this.name||""}
            .value=${this.value}
            placeholder=${this.placeholder}
            maxlength=${this.maxLength}
            ?disabled=${t}
            aria-invalid=${"error"===this.state?"true":"false"}
            aria-disabled=${t?"true":"false"}
            @input=${this._onInput}
            @blur=${this._onBlur}
            @focus=${this._onFocus}
          ></textarea>
        </div>
        ${this.showDescription?B`
              <div part="description" class="description">
                <p class="description-text">${this.descriptionText}</p>
                <p class="char-counter">${e}/${this.maxLength}</p>
              </div>
            `:""}
      </div>
    `}_onInput(e){let t=e.target;this.value=t.value,"error"!==this.state&&"disabled"!==this.state&&(this.state="typing"),this.updateFormState()}_onBlur(){if("error"!==this.state&&"disabled"!==this.state){if(this.value.trim()){this.state="complete";return}this.state="enabled"}}_onFocus(){"error"!==this.state&&"disabled"!==this.state&&(this.state="typing")}updateFormState(){this.internals.setFormValue(this.value),this.checkValidity()?this.internals.setValidity({}):this.internals.setValidity({customError:!0},this.getValidationMessage(),this.shadowRoot?.querySelector("textarea")||void 0)}checkValidity(){return(!this.required||!!this.value.trim())&&!(this.value.length>this.maxLength)}getValidationMessage(){return this.required&&!this.value.trim()?`${this.label} is required`:this.value.length>this.maxLength?`${this.label} exceeds maximum length of ${this.maxLength} characters`:""}};ty.styles=tf,ty.formAssociated=!0,ty.idCounter=0,tm([el({reflect:!0})],ty.prototype,"name",void 0),tm([el({reflect:!0})],ty.prototype,"value",void 0),tm([el({reflect:!0})],ty.prototype,"placeholder",void 0),tm([el({reflect:!0})],ty.prototype,"label",void 0),tm([el({reflect:!0,type:Boolean})],ty.prototype,"required",void 0),tm([el({reflect:!0,attribute:"show-label",type:Boolean})],ty.prototype,"showLabel",void 0),tm([el({reflect:!0,attribute:"description-text"})],ty.prototype,"descriptionText",void 0),tm([el({reflect:!0,attribute:"show-description",type:Boolean})],ty.prototype,"showDescription",void 0),tm([el({reflect:!0,attribute:"max-length",type:Number})],ty.prototype,"maxLength",void 0),tm([el({reflect:!0})],ty.prototype,"state",void 0),tm([el({reflect:!0,type:Boolean})],ty.prototype,"disabled",void 0),ty=ev=tm([en("hpe-textarea")],ty);let tw=i`
  :host {
    display: block;
    width: 100%;
    --hpe-list-item-gap: var(--hpe-web-spacing-small, 1.5rem);
    --hpe-list-gap: var(--hpe-web-spacing-xsmall, 1rem);
    --hpe-list-bullet-color: var(--hpe-web-color-background-primary, #01a982);
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-list-gap);
    width: 100%;
    box-sizing: border-box;
  }

  ::slotted(hpe-list-item) {
    width: 100%;
  }

  .item {
    position: relative;
    display: block;
    padding-left: var(--hpe-list-item-gap);
    width: 100%;
    box-sizing: border-box;
  }

  .bullet {
    position: absolute;
    left: 0;
    top: 7px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkmark {
    width: 16px;
    height: 16px;
    color: var(--hpe-list-bullet-color);
  }

  .checkmark path {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.75;
  }

  .point {
    width: 7px;
    height: 7px;
    background: var(--hpe-list-bullet-color);
    display: block;
  }

  .text {
    display: block;
    min-width: 0;
  }
`;var tx=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let tk=class extends eo{constructor(){super(...arguments),this.bulletType="checkmark"}render(){return B`
      <div part="item" class="item">
        <div part="bullet" class="bullet" aria-hidden="true">
          ${"checkmark"===this.bulletType?B`
                <svg
                  part="checkmark"
                  class="checkmark"
                  viewBox="0 0 16 16"
                  focusable="false"
                >
                  <path d="M3.5 8.25 6.5 11.25 12.5 4.75" />
                </svg>
              `:B`<span part="point" class="point"></span>`}
        </div>
        <hpe-paragraph part="text" class="text" size="md">
          <slot></slot>
        </hpe-paragraph>
      </div>
    `}};tk.styles=tw,tx([el({reflect:!0,attribute:"bullet-type"})],tk.prototype,"bulletType",void 0),tk=tx([en("hpe-list-item")],tk);let t$=class extends eo{constructor(){super(...arguments),this.bulletType="checkmark",this.syncItemBulletTypes=()=>{if("mixed"===this.bulletType)return;let e=this.shadowRoot?.querySelector("slot");e&&e.assignedElements({flatten:!0}).filter(e=>e instanceof tk).forEach(e=>{e.bulletType=this.bulletType})}}updated(e){e.has("bulletType")&&this.syncItemBulletTypes()}render(){return B`
      <div part="list" class="list">
        <slot @slotchange=${this.syncItemBulletTypes}></slot>
      </div>
    `}};t$.styles=tw,tx([el({reflect:!0,attribute:"bullet-type"})],t$.prototype,"bulletType",void 0),t$=tx([en("hpe-list")],t$);let tz=i`
  :host {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--hpe-web-spacing-small);
    font-family: var(--hpe-web-base-font-family-primary);
  }

  .quote-sign {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    inline-size: 28.608px;
    block-size: 22px;
    color: var(--hpe-web-color-text-primary);
  }

  .quote-sign svg {
    display: block;
    inline-size: 28.608px;
    block-size: 22px;
  }

  .quote-body {
    display: flex;
    flex-direction: column;
    gap: var(--hpe-web-spacing-small);
    flex: 1;
    min-width: 0;
  }

  /* ── Quote text ──────────────────────────────────── */

  hpe-paragraph.quote-text {
    margin: 0;
    --hpe-paragraph-color: var(--hpe-web-color-text-default);
  }

  /* ── Attribution ─────────────────────────────────── */

  .attribution {
    display: flex;
    flex-direction: column;
  }

  hpe-heading.attribution-name {
    margin: 0;
    --hpe-heading-color: var(--hpe-web-color-text-strong);
  }

  hpe-paragraph.attribution-role {
    margin: 0;
    --hpe-paragraph-color: var(--hpe-web-color-text-default);
  }
`;var t_=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let tS=class extends eo{constructor(){super(...arguments),this.hideQuoteSign=!1,this._hasAttribution=!1}_onAttributionSlotChange(){let e=this.shadowRoot?.querySelector('slot[name="attribution-name"]'),t=this.shadowRoot?.querySelector('slot[name="attribution-role"]'),r=(e?.assignedNodes({flatten:!0}).length??0)>0,a=(t?.assignedNodes({flatten:!0}).length??0)>0;this._hasAttribution=r||a}render(){return B`
      ${!this.hideQuoteSign?B`<span part="quote-sign" class="quote-sign" aria-hidden="true">
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M2.55469 2.02832C2.97 0.815027 4.11115 0 5.39355 0H6.97461C9.05306 0 10.5019 2.06236 9.79688 4.01758L8.30622 8.15098C8.07118 8.80274 8.55408 9.49023 9.24692 9.49023H11.667C13.3238 9.49023 14.667 10.8334 14.667 12.4902L14.667 19C14.667 20.6569 13.3238 22 11.667 22L3 22C1.34316 22 0 20.6568 0 19L0 9.4908C0 9.49049 0.000254631 9.49023 0.000569344 9.49023C0.000812531 9.49023 0.00102997 9.49008 0.00110817 9.48985L2.55469 2.02832Z"
                fill="currentColor"
              />
              <path
                d="M18.667 22C17.0101 22 15.667 20.6568 15.667 19L15.667 9.48982C15.667 9.48951 15.6672 9.48926 15.6676 9.48926C15.6678 9.48926 15.668 9.4891 15.6681 9.48886L17.8896 2.13281C18.2721 0.8666 19.439 0.000104904 20.7617 0H21.4873C23.5173 0.000297546 24.9609 1.97462 24.3457 3.90918L22.9849 8.18607C22.7797 8.83101 23.2611 9.48926 23.9379 9.48926H25.6084C27.265 9.48931 28.6081 10.8327 28.6084 12.4893L28.6084 19C28.6084 20.6568 27.2652 21.9999 25.6084 22L18.667 22Z"
                fill="currentColor"
              />
            </svg>
          </span>`:""}
      <div part="quote-body" class="quote-body">
        <hpe-paragraph class="quote-text" size="lg">
          <slot></slot>
        </hpe-paragraph>
        <footer
          part="attribution"
          class="attribution"
          ?hidden=${!this._hasAttribution}
        >
          <hpe-heading
            part="attribution-name"
            class="attribution-name"
            level="h5"
            as="span"
          >
            <slot
              name="attribution-name"
              @slotchange=${this._onAttributionSlotChange}
            ></slot>
          </hpe-heading>
          <hpe-paragraph
            part="attribution-role"
            class="attribution-role"
            size="md"
          >
            <slot
              name="attribution-role"
              @slotchange=${this._onAttributionSlotChange}
            ></slot>
          </hpe-paragraph>
        </footer>
      </div>
    `}};tS.styles=tz,t_([el({type:Boolean,attribute:"hide-quote-sign",reflect:!0})],tS.prototype,"hideQuoteSign",void 0),t_([eh()],tS.prototype,"_hasAttribution",void 0),tS=t_([en("hpe-pull-quote")],tS);let tA=i`
  :host {
    display: block;
    --hpe-tab-font-family: var(
      --hpe-web-heading-font,
      "HPE Graphik",
      Arial,
      sans-serif
    );
    --hpe-tab-horizontal-font-size: var(
      --hpe-web-heading-h5-medium-font-size,
      20px
    );
    --hpe-tab-horizontal-line-height: var(
      --hpe-web-heading-h5-medium-line-height,
      26px
    );
    --hpe-tab-horizontal-font-weight: var(
      --hpe-web-heading-h5-medium-font-weight,
      500
    );
    --hpe-tab-horizontal-letter-spacing: var(
      --hpe-web-heading-h5-medium-letter-spacing,
      0px
    );

    --hpe-tab-vertical-font-size: var(
      --hpe-web-heading-h6-medium-font-size,
      16px
    );
    --hpe-tab-vertical-line-height: var(
      --hpe-web-heading-h6-medium-line-height,
      22px
    );
    --hpe-tab-vertical-font-weight: var(
      --hpe-web-heading-h6-medium-font-weight,
      500
    );
    --hpe-tab-vertical-letter-spacing: var(
      --hpe-web-heading-h6-medium-letter-spacing,
      0px
    );

    --hpe-tab-horizontal-padding: 24px 0;
    --hpe-tab-vertical-padding: 8px 32px;
    --hpe-tab-content-gap: var(--spacing-none, 0px);
    --hpe-tab-horizontal-list-gap: var(--spacing-medium, 32px);
    --hpe-tab-vertical-list-gap: var(--spacing-3xsmall, 8px);
    --hpe-tab-horizontal-indicator-width: 4px;
    --hpe-tab-vertical-indicator-width: 6px;
    --hpe-tab-vertical-layout-gap: var(--spacing-large, 40px);
    --hpe-tab-transition: all 0.2s ease-in-out;
    --hpe-tab-enabled-text-color: var(--hpe-web-color-text-default, #3e4550);
    --hpe-tab-active-text-color: var(--hpe-web-color-text-strong, #292d3a);
    --hpe-tab-active-border-color: var(
      --hpe-web-color-border-selected,
      #006750
    );
    --hpe-tab-hover-border-color: var(--hpe-web-color-border-weak, #d4d8db);
    --hpe-tab-panels-padding-top: var(--spacing-large, 40px);
  }

  .tab-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0;
  }

  [role="tablist"] {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--hpe-tab-horizontal-list-gap);
  }

  .tab-panels {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: var(--hpe-tab-panels-padding-top);
  }

  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--hpe-tab-horizontal-padding);
    gap: var(--hpe-tab-content-gap);
    border: none;
    border-bottom: var(--hpe-tab-horizontal-indicator-width) solid transparent;
    cursor: pointer;
    transition: var(--hpe-tab-transition);
    font-family: var(--hpe-tab-font-family);
    font-size: var(--hpe-tab-horizontal-font-size);
    font-weight: var(--hpe-tab-horizontal-font-weight);
    line-height: var(--hpe-tab-horizontal-line-height);
    letter-spacing: var(--hpe-tab-horizontal-letter-spacing);
    color: var(--hpe-tab-enabled-text-color);
    background: transparent;
    min-width: 40px;
    white-space: nowrap;
  }

  :host([active]) .tab {
    color: var(--hpe-tab-active-text-color);
    border-bottom-color: var(--hpe-tab-active-border-color);
  }

  .tab:hover:not(:disabled) {
    color: var(--hpe-tab-enabled-text-color);
    border-bottom-color: var(--hpe-tab-hover-border-color);
  }

  :host([active]) .tab:hover:not(:disabled) {
    color: var(--hpe-tab-active-text-color);
    border-bottom-color: var(--hpe-tab-active-border-color);
  }

  :host([orientation="vertical"]) .tab-group {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--hpe-tab-vertical-layout-gap);
  }

  :host([orientation="vertical"]) [role="tablist"] {
    flex-direction: column;
    align-items: stretch;
    flex: 0 0 25%;
    gap: var(--hpe-tab-vertical-list-gap);
  }

  :host([orientation="vertical"]) .tab-panels {
    flex: 1;
    padding-top: 0;
  }

  :host([orientation="vertical"]) .tab {
    width: 100%;
    min-width: 0;
    align-items: flex-start;
    padding: var(--hpe-tab-vertical-padding);
    border-left: var(--hpe-tab-vertical-indicator-width) solid transparent;
    border-bottom: none;
    font-size: var(--hpe-tab-vertical-font-size);
    font-weight: var(--hpe-tab-vertical-font-weight);
    line-height: var(--hpe-tab-vertical-line-height);
    letter-spacing: var(--hpe-tab-vertical-letter-spacing);
    text-align: left;
  }

  :host([orientation="vertical"][active]) .tab {
    border-left-color: var(--hpe-tab-active-border-color);
    border-bottom-color: transparent;
  }

  :host([orientation="vertical"]) .tab:hover:not(:disabled) {
    border-left-color: var(--hpe-tab-hover-border-color);
    border-bottom-color: transparent;
  }

  :host([orientation="vertical"][active]) .tab:hover:not(:disabled) {
    border-left-color: var(--hpe-tab-active-border-color);
  }

  :host([disabled]) .tab {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .tab-panel {
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: fadeIn 0.2s ease-in-out;
  }

  .tab-panel[hidden] {
    display: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var tC=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let tE=class extends eo{constructor(){super(...arguments),this.activationMode="automatic",this.orientation="horizontal",this.active=!1,this.disabled=!1}focus(e){this.shadowRoot?.querySelector("button")?.focus(e)}render(){return B`
      <button
        part="tab"
        class="tab"
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
        role="tab"
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled?-1:this.active?0:-1}
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `}handleClick(){this.disabled||this.selectTab()}handleKeydown(e){let t;if(this.disabled)return;let r=this.parentElement;if(!r)return;let a=Array.from(r.querySelectorAll("hpe-tab")),o=a.indexOf(this),i="vertical"===this.orientation;switch(e.key){case"ArrowLeft":if(i)return;e.preventDefault(),t=a[o-1]||a[a.length-1];break;case"ArrowRight":if(i)return;e.preventDefault(),t=a[o+1]||a[0];break;case"ArrowUp":if(!i)return;e.preventDefault(),t=a[o-1]||a[a.length-1];break;case"ArrowDown":if(!i)return;e.preventDefault(),t=a[o+1]||a[0];break;case"Home":e.preventDefault(),t=a[0];break;case"End":e.preventDefault(),t=a[a.length-1]}t&&!t.disabled&&(t.focus(),"automatic"===this.activationMode&&t.selectTab())}selectTab(){this.dispatchEvent(new CustomEvent("tab-selected",{detail:{tab:this},bubbles:!0,composed:!0}))}};tE.styles=tA,tC([el({reflect:!0,attribute:"activation-mode"})],tE.prototype,"activationMode",void 0),tC([el({reflect:!0})],tE.prototype,"orientation",void 0),tC([el({reflect:!0,type:Boolean})],tE.prototype,"active",void 0),tC([el({reflect:!0,type:Boolean})],tE.prototype,"disabled",void 0),tE=tC([en("hpe-tab")],tE);let tR=class extends eo{constructor(){super(...arguments),this.active=!1}render(){return B`
      <div
        part="tab-panel"
        class="tab-panel"
        role="tabpanel"
        ?hidden=${!this.active}
      >
        <slot></slot>
      </div>
    `}};tR.styles=tA,tC([el({reflect:!0,type:Boolean})],tR.prototype,"active",void 0),tR=tC([en("hpe-tab-panel")],tR);let tO=class extends eo{constructor(){super(...arguments),this.activationMode="automatic",this.orientation="horizontal",this.activeTabIndex=0,this.tabs=[],this.panels=[],this.handleTabSelected=e=>{let t=e.detail.tab,r=this.tabs.indexOf(t);-1!==r&&this.setActiveTab(r)}}connectedCallback(){super.connectedCallback(),this.addEventListener("tab-selected",this.handleTabSelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("tab-selected",this.handleTabSelected)}updated(){this.updateTabsAndPanels()}render(){return B`
      <div part="tab-group" class="tab-group">
        <div
          role="tablist"
          aria-orientation=${this.orientation}
          part="tabs"
          class="tabs"
        >
          <slot name="tab" @slotchange=${this.updateTabsAndPanels}></slot>
        </div>
        <div class="tab-panels" part="tab-panels">
          <slot name="panel" @slotchange=${this.updateTabsAndPanels}></slot>
        </div>
      </div>
    `}updateTabsAndPanels(){let e=this.shadowRoot?.querySelector('slot[name="tab"]'),t=this.shadowRoot?.querySelector('slot[name="panel"]');e&&t&&(this.tabs=e.assignedElements().filter(e=>e instanceof tE),this.panels=t.assignedElements().filter(e=>e instanceof tR),this.tabs.forEach(e=>{e.orientation=this.orientation,e.activationMode=this.activationMode}),this.setActiveTab(this.activeTabIndex))}setActiveTab(e){if(0===this.tabs.length)return;let t=Math.max(0,Math.min(e,this.tabs.length-1));this.activeTabIndex=t,this.tabs.forEach((e,r)=>{e.active=r===t}),this.panels.forEach((e,r)=>{e.active=r===t})}};tO.styles=tA,tC([el({reflect:!0,attribute:"activation-mode"})],tO.prototype,"activationMode",void 0),tC([el({reflect:!0})],tO.prototype,"orientation",void 0),tC([el({type:Number})],tO.prototype,"activeTabIndex",void 0),tO=tC([en("hpe-tab-group")],tO);let tP=i`
  :host {
    --hpe-table-header-font-family: var(
      --hpe-web-heading-font,
      "HPE Graphik",
      Arial,
      sans-serif
    );
    --hpe-table-body-font-family: var(
      --hpe-web-paragraph-font,
      "HPE Graphik",
      Arial,
      sans-serif
    );
    --hpe-table-header-font-size: var(
      --hpe-web-heading-h5-medium-font-size,
      1.25rem
    );
    --hpe-table-header-font-weight: var(
      --hpe-web-heading-h5-medium-font-weight,
      500
    );
    --hpe-table-header-line-height: var(
      --hpe-web-heading-h5-medium-line-height,
      1.3
    );
    --hpe-table-header-letter-spacing: var(
      --hpe-web-heading-h5-medium-letter-spacing,
      0
    );
    --hpe-table-body-font-size: var(
      --hpe-web-paragraph-body-copy-font-size,
      1.25rem
    );
    --hpe-table-body-font-weight: var(
      --hpe-web-paragraph-body-copy-font-weight,
      400
    );
    --hpe-table-body-line-height: var(
      --hpe-web-paragraph-body-copy-line-height,
      1.5
    );
    --hpe-table-body-letter-spacing: var(
      --hpe-web-paragraph-body-copy-letter-spacing,
      -0.01em
    );
    --hpe-table-row-gap: var(--hpe-web-spacing-none, 0px);
    --hpe-table-cell-padding-block: var(--hpe-web-spacing-medium, 2rem);
    --hpe-table-cell-padding-inline: var(--hpe-web-spacing-small, 1.5rem);
    --hpe-table-mobile-cell-width: 11.875rem;
    --hpe-table-mobile-overflow-width: 7.25rem;
    --hpe-table-header-border-width: 0.25rem;
    --hpe-table-header-text-color: var(--hpe-web-color-text-strong, #292d3a);
    --hpe-table-body-text-color: var(--hpe-web-color-text-default, #3e4550);
    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  .container {
    position: relative;
    width: 100%;
  }

  .source-slots {
    display: none;
  }

  .table {
    width: 100%;
    overflow-x: hidden;
    background: var(--hpe-web-color-background-default, #ffffff);
  }

  .table > table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    background: var(--hpe-web-color-background-default, #ffffff);
  }

  .header-rows,
  .body-rows {
    width: 100%;
  }

  .overflow-gradient {
    display: none;
  }

  .header-row {
    width: 100%;
    border-bottom: var(--hpe-table-header-border-width) solid
      var(--hpe-web-color-border-default, #b1b9be);
    background: transparent;
  }

  .header-row.gray {
    background: var(--hpe-web-color-background-card, #f7f7f7);
    border-bottom-color: var(--hpe-web-color-border-weak, #d4d8db);
  }

  .header-row.dark {
    background: var(--hpe-web-color-background-neutral-strong, #1d1f27);
    border-bottom-color: var(--hpe-web-base-color-white-opacity12, #ffffff1f);
  }

  .header-cell {
    box-sizing: border-box;
    min-height: 5.625rem;
    padding: var(--hpe-table-cell-padding-block)
      var(--hpe-table-cell-padding-inline);
    text-align: center;
    vertical-align: middle;
  }

  .header-cell-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: var(--hpe-table-header-text-color, #292d3a);
    font-family: var(--hpe-table-header-font-family);
    font-size: var(--hpe-table-header-font-size);
    font-weight: var(--hpe-table-header-font-weight);
    line-height: var(--hpe-table-header-line-height);
    letter-spacing: var(--hpe-table-header-letter-spacing);
    text-align: center;
  }

  .header-cell.dark .header-cell-content {
    color: var(--hpe-web-color-text-on-strong, #ffffff);
  }

  .body-row {
    width: 100%;
    border-top: 1px solid var(--hpe-web-color-border-weak, #d4d8db);
    border-bottom: 1px solid var(--hpe-web-color-border-weak, #d4d8db);
    background: var(--hpe-web-color-background-default, #ffffff);
  }

  .body-row.stripped {
    background: var(--hpe-web-color-background-card, #f7f7f7);
  }

  .body-cell {
    box-sizing: border-box;
    min-height: 5.875rem;
    padding: var(--hpe-table-cell-padding-block)
      var(--hpe-table-cell-padding-inline);
    vertical-align: middle;
  }

  .body-cell-content {
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--hpe-table-body-text-color);
    font-family: var(--hpe-table-body-font-family);
    font-size: var(--hpe-table-body-font-size);
    font-weight: var(--hpe-table-body-font-weight);
    line-height: var(--hpe-table-body-line-height);
    letter-spacing: var(--hpe-table-body-letter-spacing);
    text-align: left;
  }

  .body-row.vertical .body-cell {
    display: block;
    width: 100%;
    min-width: 100%;
  }

  @media (max-width: 48rem) {
    .table {
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .table::-webkit-scrollbar {
      display: none;
    }

    .table > table {
      width: max-content;
      min-width: 100%;
    }

    .overflow-gradient {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      display: block;
      z-index: 1;
      width: var(--hpe-table-mobile-overflow-width);
      pointer-events: none;
      background: linear-gradient(
        270deg,
        var(--hpe-web-color-gradient-content-overlay-stop50) 50%,
        var(--hpe-web-color-gradient-content-overlay-stop0) 100%
      );
    }

    .header-cell,
    .body-cell {
      min-width: var(--hpe-table-mobile-cell-width);
      width: var(--hpe-table-mobile-cell-width);
    }
  }
`;var tj=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let tT=class extends eo{render(){return B`
      <th part="header-cell" class="header-cell" scope="col">
        <div part="header-cell-content" class="header-cell-content">
          <slot>Table Heading Cell</slot>
        </div>
      </th>
    `}};tT.styles=tP,tT=tj([en("hpe-table-header-cell")],tT);let tI=class extends eo{render(){return B`
      <td part="body-cell" class="body-cell">
        <div part="body-cell-content" class="body-cell-content">
          <slot>Table Body Cell</slot>
        </div>
      </td>
    `}};tI.styles=tP,tI=tj([en("hpe-table-body-cell")],tI);let tM=class extends eo{constructor(){super(...arguments),this.type="default"}render(){return B`
      <tr part="header-row" class="header-row">
        <slot></slot>
      </tr>
    `}};tM.styles=tP,tj([el({reflect:!0})],tM.prototype,"type",void 0),tM=tj([en("hpe-table-header-row")],tM);let tq=class extends eo{constructor(){super(...arguments),this.orientation="horizontal",this.type="default"}render(){return B`
      <tr part="body-row" class="body-row">
        <div part="body-row-cells" class="body-row-cells">
          <slot></slot>
        </div>
      </tr>
    `}};tq.styles=tP,tj([el({reflect:!0})],tq.prototype,"orientation",void 0),tj([el({reflect:!0})],tq.prototype,"type",void 0),tq=tj([en("hpe-table-body-row")],tq);let tL=class extends eo{constructor(){super(...arguments),this.structureObserver=new MutationObserver(()=>{this.requestUpdate()}),this.handleSlotChange=()=>{this.observeStructureChanges(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.observeStructureChanges()}disconnectedCallback(){this.structureObserver.disconnect(),super.disconnectedCallback()}updated(){this.observeStructureChanges()}render(){return B`
      <div part="container" class="container">
        <div class="source-slots" aria-hidden="true">
          <slot name="header-row" @slotchange=${this.handleSlotChange}></slot>
          <slot name="body-row" @slotchange=${this.handleSlotChange}></slot>
        </div>
        <div part="table" class="table">
          <table>
            ${this.headerRows.length>0?B`
                  <thead part="header-rows" class="header-rows">
                    ${this.headerRows.map(e=>this.renderHeaderRow(e))}
                  </thead>
                `:U}
            <tbody part="body-rows" class="body-rows">
              ${this.bodyRows.map((e,t)=>this.renderBodyRow(e,t))}
            </tbody>
          </table>
        </div>
        <div part="overflow-gradient" class="overflow-gradient"></div>
      </div>
    `}observeStructureChanges(){for(let e of(this.structureObserver.disconnect(),[...this.headerRows,...this.bodyRows]))this.structureObserver.observe(e,{attributes:!0,attributeFilter:["type","orientation"],childList:!0,characterData:!0,subtree:!0})}renderHeaderRow(e){let t=Array.from(e.querySelectorAll("hpe-table-header-cell"));return B`
      <tr class=${`header-row ${e.type}`}>
        ${t.map(t=>B`
            <th scope="col" class=${`header-cell ${e.type}`}>
              <div class="header-cell-content">
                ${this.renderCellContent(t,"Table Heading Cell")}
              </div>
            </th>
          `)}
      </tr>
    `}renderBodyRow(e,t){let r=Array.from(e.querySelectorAll("hpe-table-body-cell")),a="stripped"===e.type&&t%2==1?"stripped":"default";return B`
      <tr class=${`body-row ${a} ${e.orientation}`}>
        ${r.map(t=>B`
            <td class=${`body-cell ${e.orientation}`}>
              <div class="body-cell-content">
                ${this.renderCellContent(t,"Table Body Cell")}
              </div>
            </td>
          `)}
      </tr>
    `}renderCellContent(e,t){let r=Array.from(e.childNodes);return 0===r.length?t:r.map(e=>e.cloneNode(!0))}};tL.styles=tP,tj([ep({slot:"header-row",flatten:!0})],tL.prototype,"headerRows",void 0),tj([ep({slot:"body-row",flatten:!0})],tL.prototype,"bodyRows",void 0),tL=tj([en("hpe-table")],tL)})();