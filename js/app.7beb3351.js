(function(t){function e(e){for(var s,o,i=e[0],c=e[1],p=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/password-generator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var p=0;p<i.length;p++)e(i[p]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"187d":function(t,e,n){"use strict";n("eb7e")},"2c38":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f5df1");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Password Generator")]),n("password-generator")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"generator"},[n("password-display",{attrs:{password:t.generatedPassword},on:{"update:password":function(e){t.generatedPassword=e}}}),n("password-options",{on:{options:t.getOptions}})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"display"},[n("div",{staticClass:"input-group text-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{readonly:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("div",{staticClass:"tooltip-wrapper",on:{click:t.animateTooltip}},[n("button",{staticClass:"copy-button",on:{click:t.copyPass}},[n("icon-copy")],1),n("span",{ref:"tooltip",staticClass:"tooltip"},[t._v("Copied!")])])]),n("password-difficulty")],1)},p=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"difficulty"})},l=[],d={},f=d,h=n("2877"),g=Object(h["a"])(f,u,l,!1,null,"d4c8dc82",null),m=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"}},[n("g",{attrs:{id:"Layer_100","data-name":"Layer 100"}},[n("path",{attrs:{d:"M44.84,10.5H24.9a5,5,0,0,0-5,5V42.8a5,5,0,0,0,5,5H44.84a5,5,0,0,0,5-5V15.46A5,5,0,0,0,44.84,10.5Zm2,32.3a2,2,0,0,1-2,2H24.9a2,2,0,0,1-2-2V15.46a2,2,0,0,1,2-2H44.84a2,2,0,0,1,2,2Z"}}),n("path",{attrs:{d:"M39.07,50.5H19.18a2,2,0,0,1-2-2V21.23a1.5,1.5,0,0,0-3,0V48.51a5,5,0,0,0,5,5H39.07A1.5,1.5,0,0,0,39.07,50.5Z"}})])])},b=[],w={},y=Object(h["a"])(w,v,b,!1,null,null,null),k=y.exports,_={components:{PasswordDifficulty:m,IconCopy:k},props:{password:{type:String,required:!0}},methods:{copyPass:function(){navigator.clipboard.writeText(this.password)},animateTooltip:function(){var t=this.$refs.tooltip;t.classList.add("anim"),t.addEventListener("animationend",(function(){t.classList.remove("anim")}))}}},P=_,x=(n("6c1f"),Object(h["a"])(P,c,p,!1,null,"63b0c440",null)),O=x.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"options"},[n("h2",{staticClass:"options-title"},[t._v("Customize your password:")]),n("div",{staticClass:"options__wrapper"},[n("div",{staticClass:"option option--length"},[n("p",[t._v("Password length")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passLength,expression:"passLength"}],attrs:{type:"number"},domProps:{value:t.passLength},on:{input:[function(e){e.target.composing||(t.passLength=e.target.value)},function(e){t.checkLength(e.target.value),t.passOptions()}]}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passLength,expression:"passLength"}],attrs:{type:"range",min:"0",max:t.maxPassLength},domProps:{value:t.passLength},on:{input:t.passOptions,__r:function(e){t.passLength=e.target.value}}})]),n("div",{staticClass:"option option--symbols"},t._l(t.switchers,(function(e){return n("div",{key:e.id,staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"option.checked"}],attrs:{type:"checkbox",name:"option",id:e.id,disabled:t.checkSwitcher(e)},domProps:{checked:Array.isArray(e.checked)?t._i(e.checked,null)>-1:e.checked},on:{change:[function(n){var s=e.checked,a=n.target,r=!!a.checked;if(Array.isArray(s)){var o=null,i=t._i(s,o);a.checked?i<0&&t.$set(e,"checked",s.concat([o])):i>-1&&t.$set(e,"checked",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(e,"checked",r)},t.passOptions]}}),n("label",{attrs:{for:e.id}},[t._v(t._s(e.label))])])})),0)])])},C=[],j=(n("d81d"),n("4de4"),n("d3b7"),50),$=12,A=/[a-z]+/,S=/[A-Z]+/,E=/\d/,H=/[@#$%?/\\._!]/,M={data:function(){return{passLength:$,maxPassLength:j,switchers:[{id:"uppercase",label:"Uppercase",pattern:S,checked:!0},{id:"lowercase",label:"Lowercase",pattern:A,checked:!0},{id:"numbers",label:"Numbers",pattern:E,checked:!0},{id:"symbols",label:"Symbols",pattern:H,checked:!0}]}},mounted:function(){this.passOptions()},methods:{passOptions:function(){this.$emit("options",{passLength:this.passLength,patterns:this.checkedPatterns})},checkSwitcher:function(t){return 1===this.checkedPatterns.length&&!0===t.checked},checkLength:function(t){t>this.maxPassLength&&(this.passLength=this.maxPassLength)}},computed:{checkedPatterns:function(){return this.switchers.filter((function(t){return t.checked})).map((function(t){return t.pattern}))}}},T=M,V=(n("dbfb"),Object(h["a"])(T,L,C,!1,null,"2121f8fb",null)),N=V.exports,R=n("d4ec"),Z=n("bee2"),B=(n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("a15b"),n("00b4"),function(){function t(e,n){Object(R["a"])(this,t),this.length=e,this.pattern=new RegExp(n.reduce((function(t,e){return new RegExp(t.source+"|"+e.source)})),"g")}return Object(Z["a"])(t,[{key:"getRandomByte",value:function(){var t=new Uint8Array(1);return window.crypto.getRandomValues(t),t[0]}},{key:"generate",value:function(){var t=this;return Array.apply(null,{length:this.length}).map((function(){var e;while(1)if(e=String.fromCharCode(t.getRandomByte()),t.pattern.test(e))return e}),this).join("")}}]),t}()),z={components:{PasswordDisplay:O,PasswordOptions:N},data:function(){return{options:null,generatedPassword:""}},methods:{getOptions:function(t){this.options=t,this.generatePass()},generatePass:function(){this.generatedPassword=new B(this.options.passLength,this.options.patterns).generate()}}},D=z,G=(n("187d"),Object(h["a"])(D,o,i,!1,null,"62da66a7",null)),J=G.exports,U={name:"App",components:{PasswordGenerator:J}},q=U,I=(n("5c0b"),Object(h["a"])(q,a,r,!1,null,null,null)),F=I.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(F)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6c1f":function(t,e,n){"use strict";n("2c38")},"92a0":function(t,e,n){},"9c0c":function(t,e,n){},dbfb:function(t,e,n){"use strict";n("92a0")},eb7e:function(t,e,n){}});
//# sourceMappingURL=app.7beb3351.js.map