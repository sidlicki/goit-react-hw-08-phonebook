"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[488],{7488:function(t,e,n){n.r(e),n.d(e,{default:function(){return Y}});var a=n(3433),r=n(2791),s="ContactList_list__csErn",c="ContactList_item__EZYHO",o="ContactList_link__SuaLH",i="ContactList_button__7kL4l",l="ContactList_subtitle__sjzfd",u="ContactList_buttonDelete__3LEoC",d="ContactList_loaderWrapper__goayi",m=n(9434),h=n(7671),_=n(1686),f=n(4414),p=function(t){return t.contacts.contacts.items},b=function(t){return t.contacts.contacts.isLoading},y=function(t){return t.contacts.filter},v=n(27),x=n(9439),C="ModalEdit_closeBtn__C1Xdb",j="ModalEdit_modal__qHL5S",w="ModalEdit_wrapper__Ji4aZ",N="ModalEdit_overlay__NLf+E",L="ModalEdit_title__hTaq7",E="ModalEdit_subtitle__MZsWw",g="ModalEdit_form__BYjr7",k="ModalEdit_input__lQxNb",M="ModalEdit_button__Iw1sV",Z=function(t){return t.modal.isOpenModal},A=function(t){return t.modal.modalData},D=n(184),S=function(){var t=(0,m.I0)(),e=(0,m.v9)(A),n=(0,m.v9)(p);(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&t((0,v.Mr)())};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[t]);return(0,D.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&t((0,v.Mr)())},className:N,children:(0,D.jsxs)("div",{className:j,children:[(0,D.jsx)("button",{className:C,onClick:function(){return t((0,v.Mr)())},children:"\u274c"}),(0,D.jsxs)("div",{className:w,children:[(0,D.jsx)("h3",{className:L,children:"Edit contact:"}),(0,D.jsxs)("p",{className:E,children:['"',e.name," : ",e.number,'"']}),(0,D.jsxs)("form",{className:g,onSubmit:function(a){a.preventDefault();var r=(0,x.Z)(a.target.elements,2),s=r[0],c=r[1],o=n.some((function(t){return t.name.toLowerCase()===s.value.toLowerCase()&&t.id!==e.id})),i=n.some((function(t){return t.number===c.value&&t.id!==e.id}));if(o)alert("A contact with that name already exists, try changing the name");else if(i)alert("A contact with this phone number already exists");else{var l={name:s.value,number:c.value,id:e.id};try{t((0,h.mP)(l)).unwrap().then((function(){return _.Notify.success('Contact "'.concat(l.name,'"  edited successfully'))})),t((0,v.cU)(l))}catch(u){_.Notify.error('Contact "'.concat(l.name,'" not edited.  Error: ').concat(u.message))}}},children:[(0,D.jsx)("input",{className:k,type:"text",name:"name",defaultValue:e.name,placeholder:"Enter new name",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0407\u0457\u0406\u0456\\d\\s]+$",title:"You can enter letters of the Latin and Cyrillic alphabets, numbers, and spaces."}),(0,D.jsx)("input",{className:k,type:"text",name:"number",defaultValue:e.number,placeholder:"Enter new number",required:!0,pattern:"^[\\d+\\s\\-*#]{5,18}$",title:"Phone number can contain digits, spaces, hyphens, or symbols like *, #, etc. Length: 5-18 characters."}),(0,D.jsx)("button",{type:"submit",className:M,title:"Change this contact information",children:"Change information"})]})]})]})})},q=function(){var t=(0,m.I0)();(0,r.useEffect)((function(){t((0,h.CL)())}),[t]);var e=(0,m.v9)(p),n=(0,m.v9)(y),x=(0,m.v9)(b),C=(0,m.v9)(Z),j=e.filter((function(t){return t.name.trim().toLowerCase().includes(n.toLowerCase().trim())||t.number.trim().toString().includes(n.toLowerCase().trim())})),w=(0,a.Z)(j).sort((function(t,e){return t.name.localeCompare(e.name)}));return(0,D.jsxs)("ul",{className:s,children:[x&&(0,D.jsx)("div",{className:d,children:(0,D.jsx)(f.Z,{})}),w.length>0?w.map((function(e){return(0,D.jsxs)("li",{className:c,children:[(0,D.jsx)("button",{className:i,title:"Edit this conatct",onClick:function(){return t((0,v.h7)(e))},children:"\ud83d\udd8a"}),(0,D.jsxs)("a",{className:o,href:"tel:".concat(e.number),children:[(0,D.jsxs)("span",{children:[(0,D.jsx)("b",{children:e.name}),":"]}),(0,D.jsxs)("span",{children:[" ",e.number]})]}),(0,D.jsx)("button",{className:"".concat(i," ").concat(u),onClick:function(){return n=e.name,a=e.id,void t((0,h.GK)(a)).unwrap().then((function(){return _.Notify.info('Contact "'.concat(n,'" deleted'))}));var n,a},title:'Delete contact "'.concat(e.name,'"'),children:"Delete"})]},e.id)})):(0,D.jsx)("h3",{className:l,children:"No contacts found."}),C&&(0,D.jsx)(S,{})]})},I="Filter_input__N7T3z",P=function(){var t=(0,m.I0)();return(0,D.jsx)("input",{className:I,type:"text",placeholder:"Search...",onChange:function(e){return t((0,h.xO)(e.target.value))},title:"Search by name or phone number"})},T=n(8971),B="ContactForm_form__dhl+T",F="ContactForm_input__Bl93P",z="ContactForm_button__eSwX9",V=function(){var t=(0,m.I0)(),e=(0,m.v9)(p);return(0,D.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=(0,x.Z)(n.target.elements,2),r=a[0],s=a[1];if(e.some((function(t){return t.name.toLowerCase()===r.value.toLowerCase()})))alert("A contact with that name (".concat(r.value.toLowerCase(),") already exists, try changing the name"));else if(e.some((function(t){return t.number===s.value})))alert("A contact with this phone number (".concat(s.value,") already exists"));else{var c={name:r.value,number:s.value};try{t((0,h.uK)(c)).unwrap().then((function(){n.target.reset()})).then((function(){_.Notify.success('Contact "'.concat(c.name,'"  added successfully'))}))}catch(o){_.Notify.error('Contact "'.concat(c.name,'" not added.  Error: ').concat(o.message))}}},className:B,children:[(0,D.jsx)("input",{className:F,type:"text",name:"name",placeholder:"Enter name",required:!0,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0407\u0457\u0406\u0456\\d\\s]+$",title:"You can enter letters of the Latin and Cyrillic alphabets, numbers, and spaces."}),(0,D.jsx)("input",{className:F,type:"tel",name:"number",placeholder:"Enter number",required:!0,pattern:"^[\\d+\\s\\-*#]{5,18}$",title:"Phone number can contain digits, spaces, hyphens, or symbols like *, #, etc. Length: 5-18 characters."}),(0,D.jsx)("button",{type:"submit",className:z,title:"Add new contact",children:"Add contact"})]})},Y=function(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("h1",{className:T.Z.title,children:"Phonebook"}),(0,D.jsx)(V,{}),(0,D.jsx)("h2",{className:T.Z.subtitle,children:"Contacts"}),(0,D.jsx)(P,{}),(0,D.jsx)(q,{})]})}},8971:function(t,e){e.Z={title:"styles_title__Eys6g",subtitle:"styles_subtitle__DqUiJ",homeTitle:"styles_homeTitle__lV-0B",form:"styles_form__oR3c0",label:"styles_label__IRvBR",input:"styles_input__t9D6P",button:"styles_button__6oMs0"}}}]);
//# sourceMappingURL=488.c4610788.chunk.js.map