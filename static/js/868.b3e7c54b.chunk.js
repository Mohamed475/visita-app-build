"use strict";(self.webpackChunktemplete_react_app=self.webpackChunktemplete_react_app||[]).push([[868],{4868:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r,i,a=t(5861),o=t(885),s=t(4942),l=t(1413),u=t(168),c=t(7757),d=t.n(c),p=t(2791),f=t(6031),m=t(3165),h=t(291),g=t(8590),v=t(1287),b=t(184),x=f.ZP.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1rem;\n\n  p {\n    margin-top: 1rem;\n    font-size: 1.7rem;\n    font-weight: 400;\n  }\n\n  .error-text {\n    color: red;\n  }\n\n  .success-text {\n    color: green;\n  }\n"]))),y=function(e){var n=(0,p.useState)(!1),t=(0,o.Z)(n,2),r=t[0],i=t[1],s=(0,p.useState)(null),l=(0,o.Z)(s,2),u=l[0],c=l[1],f=(0,p.useState)(!1),m=(0,o.Z)(f,2),h=m[0],y=m[1],w=e.isFormSubmitted;(0,p.useEffect)((function(){i(!1),c(null),y(!1)}),[w]);var I=function(){var e=(0,a.Z)(d().mark((function e(n){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),i(!0),t=void 0,navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var n=e.coords,r=n.latitude,i=n.longitude;Z(r,i,t)}),(function(e){i(!1),t=e.message,c(t)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:0}):(t="Geolocation is not supported by this browser.",i(!1),c(t)),e.abrupt("return",null);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var n=(0,a.Z)(d().mark((function n(t,r,a){var o,s,l,u;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o="","fbadb263b1fcf914a168438770e966ab",s="http://api.weatherstack.com/current?access_key=".concat("fbadb263b1fcf914a168438770e966ab","&query=").concat(t,",").concat(r),n.prev=3,n.next=6,fetch(s);case 6:if(200===(l=n.sent).status&&!0===l.ok){n.next=12;break}throw a="Something went wrong",i(!1),c(a),new Error("Something went wrong");case 12:return n.next=14,l.json();case 14:(u=n.sent).location?o={shortName:u.location.region,longName:u.location.name,country:u.location.country}:(a="Something went wrong",i(!1),c(a)),n.next=23;break;case 18:n.prev=18,n.t0=n.catch(3),a=n.t0.message,i(!1),c(a);case 23:return i(!1),y(!0),e.onPickLocation(t,r,o),n.abrupt("return",null);case 27:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e,t,r){return n.apply(this,arguments)}}();return(0,b.jsxs)(x,{children:[!r&&!h&&(0,b.jsx)(g.Z,{onClick:I,children:"PICK MY CURRENT LOCATION"}),r&&(0,b.jsx)(v.Z,{isVisable:!0,color:"#3498db",backgroundColor:"#f3f3f3",size:".5",widthAndHeight:"4",speedInSecond:".6"}),u&&!h&&(0,b.jsxs)("p",{className:"error-text",children:[u,"!"]}),h&&(0,b.jsx)("p",{className:"success-text",children:"Your address has been captured"})]})},w=t(95),I=t(5112),Z=t(3108),j=t(3989),N=f.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  max-width: 100vw;\n  min-height: 100vh;\n  font-size: 2rem;\n  padding: 12rem 0;\n\n  h1 {\n    font-size: 4rem;\n    font-weight: 500;\n  }\n\n  .form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    gap: 2rem;\n    color: #000;\n    font-size: 2rem;\n    width: 35vw;\n    background-color: #ebebeb;\n    padding: 3rem 5rem;\n    border-radius: 1rem;\n    margin-top: 3rem;\n\n    .error-mes {\n      color: #ff0000;\n    }\n  }\n\n  /* Responsive */\n  @media (max-width: 768px) {\n    .form-container {\n      width: 80vw;\n      padding: 5rem 4rem;\n    }\n\n    h1 {\n      margin-top: 7rem;\n    }\n  }\n"]))),C={requiredInputs:{title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:"",isValid:!1}},optionalInputs:{rating:1,location:{lat:0,lng:0,shortName:"",longName:"",country:""}},isFormValid:!1,isFormSubmitted:!1,isLoading:!1,error:null},T=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var r in e.requiredInputs)t=r===n.inputId?t&&n.isValid:t&&e.requiredInputs[r].isValid;return(0,l.Z)((0,l.Z)({},e),{},{requiredInputs:(0,l.Z)((0,l.Z)({},e.requiredInputs),{},(0,s.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isFormValid:t});case"PICK_LOCATION":return(0,l.Z)((0,l.Z)({},e),{},{optionalInputs:(0,l.Z)((0,l.Z)({},e.optionalInputs),{},{location:{lat:n.lat,lng:n.lng,shortName:n.shortName,longName:n.longName,country:n.country}})});case"RATING_CHANGE":return(0,l.Z)((0,l.Z)({},e),{},{optionalInputs:(0,l.Z)((0,l.Z)({},e.optionalInputs),{},{rating:n.ratingValue})});case"RESET":return C;case"FORM_SUBMITTED":return(0,l.Z)((0,l.Z)({},e),{},{isFormSubmitted:n.isFormSubmitted});case"LOADING":return(0,l.Z)((0,l.Z)({},e),{},{isLoading:n.isLoading});case"ERROR":return(0,l.Z)((0,l.Z)({},e),{},{error:n.error});default:return e}},O=function(){var e=(0,p.useContext)(Z.V),n=e.userId,t=e.token,r=(0,p.useReducer)(T,C),i=(0,o.Z)(r,2),s=i[0],l=i[1],u=(0,p.useCallback)((function(e,n,t){l({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[l]),c=function(){var e=(0,a.Z)(d().mark((function e(){var r,i,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l({type:"LOADING",isLoading:!0}),(r=new FormData).append("title",s.requiredInputs.title.value),r.append("rating",s.optionalInputs.rating),r.append("description",s.requiredInputs.description.value),r.append("address",s.requiredInputs.address.value),r.append("image",s.requiredInputs.image.value),r.append("lat",s.optionalInputs.location.lat),r.append("lng",s.optionalInputs.location.lng),r.append("creator",n),e.next=13,fetch("".concat("https://visita.onrender.com/api/v1","/places/create"),{method:"POST",body:r,headers:{Authorization:"Bearer ".concat(t)}});case 13:return i=e.sent,e.next=16,i.json();case 16:a=e.sent,l({type:"LOADING",isLoading:!1}),!a.error&&i.ok||l({type:"ERROR",error:a.error.message}),a.createdPlace&&l({type:"FORM_SUBMITTED",isFormSubmitted:!0}),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(0),l({type:"ERROR",error:e.t0.message}),l({type:"LOADING",isLoading:!1});case 26:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(d().mark((function e(n){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),c();case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsxs)(N,{children:[s.isFormSubmitted?(0,b.jsx)(w.Z,{show:s.isFormSubmitted,closeModal:function(){l({type:"RESET"})},width:"30vw",height:"20vh",widthResponsive:"80vw",heightResponsive:"20vh",modalBackgroundColor:"#fff",modalTextColor:"#000",modalFontSize:"2.2rem",modalBorderRadius:"10px",modalBorder:"1px solid #fff",modalPadding:"0 0 3rem 0",overlayBackgroundColor:"rgba(0,0,0,0.65)",button:!0,buttonText:"Ok",buttonBackgroundColor:"#00b894",buttonBackgroundColorHover:"#00a88e",buttonTextColor:"#fff",buttonTextColorHover:"#fff",children:"The new place added sussessfully."}):null,(0,b.jsx)("h1",{children:"Add New Place"}),(0,b.jsxs)("form",{className:"form-container",children:[(0,b.jsx)(m.Z,{id:"title",element:"input",type:"text",placeholder:"Ex. Smouha",lable:"Title *",errorText:"Please enter a valid title",validators:[(0,h.hg)(),(0,h.IT)(50),(0,h.CP)(3)],onInput:u,value:s.requiredInputs.title.value}),(0,b.jsx)(m.Z,{id:"address",element:"input",type:"text",placeholder:"Ex. Egypt - Alexandria",lable:"Address *",errorText:"Please enter a valid address",validators:[(0,h.hg)(),(0,h.IT)(50),(0,h.CP)(5)],onInput:u,value:s.requiredInputs.address.value}),(0,b.jsx)(y,{onPickLocation:function(e,n,t){e&&n&&t.shortName&&t.longName&&t.country&&(l({type:"PICK_LOCATION",lat:e,lng:n,shortName:t.shortName,longName:t.longName,country:t.country}),l({type:"INPUT_CHANGE",value:"".concat(t.country," - ").concat(t.shortName),isValid:!0,inputId:"address"}),l({type:"INPUT_CHANGE",value:t.longName,isValid:!0,inputId:"title"}),console.log(s))},isFormSubmitted:s.isFormSubmitted}),(0,b.jsx)(m.Z,{id:"description",element:"textarea",rows:"10",lable:"Description *",errorText:"Please enter a discription of at least 10 characters",validators:[(0,h.hg)(),(0,h.CP)(10),(0,h.IT)(500)],onInput:u,value:s.requiredInputs.description.value}),(0,b.jsx)(j.Z,{id:"image",onInput:u,previewHeight:"15rem"}),(0,b.jsx)(I.Z,{count:5,onChange:function(e){l({type:"RATING_CHANGE",ratingValue:e})},size:35,isHalf:!0,emptyIcon:(0,b.jsx)("i",{className:"far fa-star"}),halfIcon:(0,b.jsx)("i",{className:"fa fa-star-half-alt"}),fullIcon:(0,b.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700",value:s.optionalInputs.rating}),!s.isLoading&&(0,b.jsx)(g.Z,{onClick:f,disabled:!s.isFormValid,children:"ADD PLACE"}),(0,b.jsx)("div",{className:"loading-container",children:s.isLoading&&(0,b.jsx)(v.Z,{isVisable:!0,color:"#3498db",backgroundColor:"#f3f3f3",size:".5",widthAndHeight:"4",speedInSecond:".6"})}),(0,b.jsx)("p",{className:"error-mes",children:s.error&&s.error})]})]})}},3989:function(e,n,t){var r,i=t(885),a=t(168),o=t(2791),s=t(6031),l=t(8590),u=t(184),c=s.ZP.div(r||(r=(0,a.Z)(["\n  .image-upload {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background-color: #ebebeb;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 1rem;\n  }\n\n  .image-upload__preview {\n    width: 40rem;\n    height: ",";\n    border: 1px solid #ccc;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n\n  .image-upload__preview img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .image-upload__preview p {\n    font-size: 2rem;\n  }\n\n  @media (max-width: 768px) {\n    .image-upload__preview {\n      width: 30rem;\n      height: ",";\n    }\n  }\n"])),(function(e){return e.previewHeight||"40rem"}),(function(e){return e.previewHeight||"30rem"}));n.Z=function(e){var n=(0,o.useState)(),t=(0,i.Z)(n,2),r=t[0],a=t[1],s=(0,o.useState)(),d=(0,i.Z)(s,2),p=d[0],f=d[1],m=(0,o.useState)(!1),h=(0,i.Z)(m,2),g=h[0],v=h[1],b=(0,o.useRef)();(0,o.useEffect)((function(){if(r){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(r)}}),[r]);return(0,u.jsxs)(c,{previewHeight:e.previewHeight,children:[(0,u.jsx)("input",{id:e.id,ref:b,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(n){var t,r=g;n.target.files&&1===n.target.files.length?(t=n.target.files[0],a(t),v(!0),r=!0):(v(!1),r=!1),e.onInput(e.id,t,r)}}),(0,u.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,u.jsxs)("div",{className:"image-upload__preview",children:[p&&(0,u.jsx)("img",{src:p,alt:"Preview"}),!p&&(0,u.jsx)("p",{children:"Please pick an image."})]}),(0,u.jsx)(l.Z,{type:"button",onClick:function(){b.current.click()},children:"PICK IMAGE"})]}),!g&&(0,u.jsx)("p",{children:e.errorText})]})}},3165:function(e,n,t){t.d(n,{Z:function(){return p}});var r,i=t(885),a=t(1413),o=t(2791),s=t(291),l=t(168),u=t(6031).ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  gap: 0.4rem;\n  color: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  /* padding: 0 2rem; */\n\n  label {\n    font-size: 3rem;\n    font-weight: 500;\n    align-self: flex-start;\n  }\n\n  input {\n    width: 100%;\n    height: 2rem;\n    border-radius: 0.5rem;\n    padding: 3rem 1.5rem;\n    font-size: 2rem;\n    border: 2px solid\n      ",";\n  }\n\n  input:focus {\n    outline: none;\n    border-color: #2185d0;\n  }\n\n  textarea {\n    min-width: 100%;\n    height: 20rem;\n    border: 2px solid #fff;\n    border-radius: 0.5rem;\n    padding: 2rem 1.5rem;\n    font-size: 2rem;\n    resize: none;\n    align-self: flex-start;\n    border-color: ",";\n  }\n\n  textarea:focus {\n    outline: none;\n    border-color: #2185d0;\n  }\n\n  .error-text {\n    color: #ff0000;\n    font-size: 1.65rem;\n    align-self: flex-start;\n  }\n"])),(function(e){return!e.isValid&&e.isTouched?"#ff0000":"#fff"}),(function(e){return!e.isValid&&e.isTouched?"#ff0000":"#fff"})),c=t(184),d=function(e,n){switch(n.type){case"RESET":return(0,a.Z)((0,a.Z)({},e),{},{value:n.value,isValid:!0});case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:n.value,isValid:(0,s.Gu)(n.value,n.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},p=function(e){var n={value:e.value||"",isValid:e.valid||!1,isTouched:!1},t=(0,o.useReducer)(d,n),r=(0,i.Z)(t,2),a=r[0],s=r[1],l=function(n){s({type:"CHANGE",value:n.target.value,validators:e.validators})},p=function(){s({type:"TOUCH"})},f=e.id,m=e.onInput,h=a.value,g=a.isValid;(0,o.useEffect)((function(){m(f,h,g)}),[f,h,g,m]);var v="textarea"===e.element?(0,c.jsx)("textarea",{id:e.id,rows:e.rows||10,onChange:l,onBlur:p,value:e.value}):(0,c.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:l,onBlur:p,value:e.value,disabled:e.disabled});return(0,c.jsxs)(u,{isValid:a.isValid,isTouched:a.isTouched,children:[(0,c.jsx)("label",{htmlFor:e.id,children:e.lable}),v,!a.isValid&&a.isTouched&&(0,c.jsx)("p",{className:"error-text",children:e.errorText})]})}},291:function(e,n,t){t.d(n,{Ox:function(){return d},IT:function(){return c},CP:function(){return u},hg:function(){return l},Gu:function(){return p}});var r=t(8192);var i="REQUIRE",a="MINLENGTH",o="MAXLENGTH",s="EMAIL",l=function(){return{type:i}},u=function(e){return{type:a,val:e}},c=function(e){return{type:o,val:e}},d=function(){return{type:s}},p=function(e,n){var t,l=!0,u=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw o}}}}(n);try{for(u.s();!(t=u.n()).done;){var c=t.value;c.type===i&&(l=l&&e.trim().length>0),c.type===a&&(l=l&&e.trim().length>=c.val),c.type===o&&(l=l&&e.trim().length<=c.val),"MIN"===c.type&&(l=l&&+e>=c.val),"MAX"===c.type&&(l=l&&+e<=c.val),c.type===s&&(l=l&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){u.e(d)}finally{u.f()}return l}},4942:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=868.b3e7c54b.chunk.js.map