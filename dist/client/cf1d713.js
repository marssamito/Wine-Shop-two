(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1083:function(t,e,r){"use strict";var n=r(29),o=r(20),l=r(202),c=r(40),f=r(30),d=r(90),m=r(511),_=r(143),h=r(22),v=r(142),y=r(144).f,x=r(66).f,I=r(35).f,N=r(1086).trim,D="Number",S=o.Number,k=S.prototype,C=d(v(k))==D,E=function(t){var e,r,n,o,l,c,f,code,d=_(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=N(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(l(D,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var A,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(C?h((function(){k.valueOf.call(r)})):d(r)!=D)?m(new S(E(e)),r,w):E(e)},M=n?y(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;M.length>O;O++)f(S,A=M[O])&&!f(w,A)&&I(w,A,x(S,A));w.prototype=k,k.constructor=w,c(o,D,w)}},1084:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(206);var o=r(298),l=r(150);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1085:function(t,e,r){"use strict";var n=r(17),o=r(145).find,l=r(294),c="find",f=!0;c in[]&&Array(1).find((function(){f=!1})),n({target:"Array",proto:!0,forced:f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},1086:function(t,e,r){var n=r(47),o="["+r(1087)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},1087:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1091:function(t,e,r){"use strict";r.r(e);r(65);var n=r(1084),o=(r(28),r(1083),r(1085),{props:{cart:{type:[Array],required:!0}},data:function(){return{formData:{full_names:"",estate:"",phone_no:"",address:"",paymentMethod:!0},dataSource:this.cart,columns:[{title:"Total",dataIndex:"total",width:"30%",scopedSlots:{customRender:"total"}},{title:"Product",dataIndex:"items",scopedSlots:{customRender:"product"}}],rules:{full_names:{required:!0,message:"Please input your full names."},estate:{required:!0,message:"Please input your Estate."},phone_no:{required:!0,message:"Please input your phone number."},address:{required:!0,message:"Please input your full address."}}}},computed:{totalInCart:function(){return this.dataSource.reduce((function(t,e){return t+Number(e.total)}),0)}},methods:{onCellChange:function(t,e,r){var o=Object(n.a)(this.dataSource),l=o.find((function(e,r){return r===t}));l&&(l[e]=r,this.dataSource=o)}}}),l=r(36),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"cart"}},[e("a-form-model",{ref:"formData",attrs:{layout:"inline",model:t.formData,rules:t.rules}},[e("h4",[e("strong",[t._v("Your Billing Details")])]),t._v(" "),e("a-form-model-item",{attrs:{"has-feedback":""}},[e("a-input",{attrs:{placeholder:"Full names"},model:{value:t.formData.full_names,callback:function(e){t.$set(t.formData,"full_names",e)},expression:"formData.full_names"}},[e("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t._v(" "),e("a-form-model-item",{attrs:{"has-feedback":""}},[e("a-input",{attrs:{type:"text",placeholder:"Estate"},model:{value:t.formData.estate,callback:function(e){t.$set(t.formData,"estate",e)},expression:"formData.estate"}},[e("a-icon",{attrs:{slot:"prefix",type:"flag"},slot:"prefix"})],1)],1),t._v(" "),e("a-form-model-item",{attrs:{"has-feedback":""}},[e("a-input",{attrs:{type:"number",min:"1"},model:{value:t.formData.phone_no,callback:function(e){t.$set(t.formData,"phone_no",e)},expression:"formData.phone_no"}},[e("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"number"},slot:"prefix"})],1)],1),t._v(" "),e("a-form-model-item",{attrs:{"has-feedback":""}},[e("a-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}},[e("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"file"},slot:"prefix"})],1)],1),t._v(" "),e("h4",{staticClass:"mt-2"},[e("strong",[t._v("Your Order")])]),t._v(" "),e("a-table",{attrs:{bordered:"","data-source":t.dataSource,columns:t.columns,pagination:!1},scopedSlots:t._u([{key:"product",fn:function(r,n,o){return[e("strong",[t._v(t._s(r.name))]),t._v(" "),0!==n.sub_total.bottle?e("div",{staticClass:"d-flex"},[e("div",{staticClass:"w-75"},[t._v("\n            "+t._s(o+1)+". "+t._s(n.items.name)+" (Bottle)\n            "),e("strong",[t._v(t._s(n.items.qtyBottle)+" x\n              "+t._s(Math.round(n.items.cost.bottle)))])])]):0!==n.sub_total.case?e("div",{staticClass:"d-flex"},[e("div",{staticClass:"w-75"},[t._v("\n            "+t._s(o+1)+". "+t._s(n.items.name)+" (Case)\n            "),e("strong",[t._v(t._s(n.items.qtyCase)+" x\n              "+t._s(Math.round(n.items.cost.case)))])])]):t._e()]}},{key:"image",fn:function(image){return[e("img",{attrs:{src:t.$config.imgBaseUrl+image,alt:""}})]}}])}),t._v(" "),e("div",{staticClass:"placeholder"},[e("h3",[t._v("Kshs "+t._s(t.totalInCart))]),t._v(" "),e("hr"),t._v(" "),e("h4",{staticClass:"mb-1"},[e("strong",[t._v("Select your payment method")])]),t._v(" "),e("a-checkbox",{model:{value:t.formData.paymentMethod,callback:function(e){t.$set(t.formData,"paymentMethod",e)},expression:"formData.paymentMethod"}},[t._v("\n        Direct bank transfer\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);