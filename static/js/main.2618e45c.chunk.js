(this["webpackJsonpreact-contact-manager"]=this["webpackJsonpreact-contact-manager"]||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(11),s=a.n(n),d=a(5),o=a(12),l=a(6),i=a(4),m=a(2),x=a(21),b=(a(17),a(9)),u=a(0),g=function(){return Object(u.jsx)("nav",{className:"bg-white shadow dark:bg-gray-800",children:Object(u.jsxs)("div",{className:"container px-6 py-3 mx-auto md:flex",children:[Object(u.jsxs)("div",{className:"flex items-center justify-between",children:[Object(u.jsx)("div",{className:"text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",children:Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)(b.a,{className:"w-20 h-20"})})}),Object(u.jsx)("div",{className:"flex md:hidden",children:Object(u.jsx)("button",{type:"button",className:"text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400","aria-label":"toggle menu",children:Object(u.jsx)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6 fill-current",children:Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),Object(u.jsx)("div",{className:"w-full md:flex md:items-center md:justify-between",children:Object(u.jsxs)("div",{className:"flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0",children:[Object(u.jsx)(i.b,{to:"/",className:"px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:"Home"}),Object(u.jsx)(i.b,{to:"/add",className:"px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2",children:"Add Contact"})]})})]})})},j=function(e){var t=Object(m.f)(),a=Object(r.useState)({firstName:"",lastName:"",email:"",phoneNumber:""}),c=Object(l.a)(a,2),n=c[0],s=c[1];return Object(u.jsxs)("section",{className:"max-w-4xl mt-6 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800",children:[Object(u.jsx)("h2",{className:"text-lg font-semibold text-gray-700 capitalize dark:text-white",children:"Account settings"}),Object(u.jsxs)("form",{onSubmit:function(a){a.preventDefault(),""!==n.firstName&&""!==n.email?(e.addContactHandler(n),s({firstName:"",lastName:"",email:"",phoneNumber:""}),t("/")):alert("First Name and Email is required!")},children:[Object(u.jsxs)("div",{className:"grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:"firstName",children:"First Name"}),Object(u.jsx)("input",{id:"firstName",type:"text",value:n.firstName,onChange:function(e){return s(Object(d.a)(Object(d.a)({},n),{},{firstName:e.target.value}))},className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:"lastName",children:"Last Name"}),Object(u.jsx)("input",{id:"lastName",type:"text",value:n.lastName,onChange:function(e){return s(Object(d.a)(Object(d.a)({},n),{},{lastName:e.target.value}))},className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",value:n.email,onChange:function(e){return s(Object(d.a)(Object(d.a)({},n),{},{email:e.target.value}))},className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:"phone",children:"Phone Number"}),Object(u.jsx)("input",{id:"phoneNumber",type:"text",value:n.phoneNumber,onChange:function(e){return s(Object(d.a)(Object(d.a)({},n),{},{phoneNumber:e.target.value}))},className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"})]})]}),Object(u.jsxs)("div",{className:"flex justify-end mt-6",children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("button",{className:"px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:"Back to Home"})}),Object(u.jsx)("button",{className:"px-6 py-2 ml-6 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:"Save"})]})]})]})},h=function(e){var t=e.contact,a=t.id,r=t.firstName,c=t.lastName,n=t.email,s=t.phoneNumber;return Object(u.jsx)("div",{className:"flex justify-center items-center py-2",children:Object(u.jsx)("div",{className:"border border-gray-400 bg-white rounded p-4 flex flex-col leading-normal",children:Object(u.jsxs)("div",{className:"flex items-center justify-between",children:[Object(u.jsx)("img",{className:"w-10 h-10 rounded-full mr-4",src:"data:image/png;base64,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",alt:"Avatar"}),Object(u.jsx)("div",{className:"text-sm w-60",children:Object(u.jsxs)(i.b,{to:"/contact/".concat(a),state:e.contact,children:[Object(u.jsxs)("p",{className:"text-gray-900 leading-none",children:[r," ",c]}),Object(u.jsx)("p",{className:"text-gray-600",children:n}),Object(u.jsx)("p",{className:"text-gray-600",children:s})]})}),Object(u.jsx)("div",{className:"text-sm",children:Object(u.jsx)(b.b,{className:"w-8 h-8 text-red-500",onClick:function(){return e.clickHandler(a)}})})]})})})},f=function(e){var t=function(t){e.getContactId(t)},a=e.contacts.map((function(e){return Object(u.jsx)(h,{contact:e,clickHandler:t},e.id)}));return Object(u.jsx)("div",{className:"py-6 justify-center",children:Object(u.jsx)("div",{className:"py-6",children:a})})},O=function(e){var t=Object(m.e)().state,a=t.firstName,r=t.lastName,c=t.email,n=t.phoneNumber,s=new Date,d=s.getDate()+"-"+(s.getMonth()+1)+"-"+s.getFullYear();return Object(u.jsxs)("div",{className:"max-w-2xl px-8 py-4 mt-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800",children:[Object(u.jsxs)("div",{className:"flex items-center justify-between",children:[Object(u.jsx)("span",{className:"text-sm font-light text-gray-600 dark:text-gray-400",children:d}),Object(u.jsx)(i.b,{to:"/",className:"px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500",children:"Back to Home"})]}),Object(u.jsxs)("div",{className:"mt-2",children:[Object(u.jsxs)("div",{className:"text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline",children:[a," ",r]}),Object(u.jsxs)("p",{className:"mt-2 text-gray-600 dark:text-gray-300",children:["Email: ",c]}),Object(u.jsxs)("p",{className:"mt-2 text-gray-600 dark:text-gray-300",children:["Phone: ",n]})]})]})};var y=function(){var e="contacts",t=Object(r.useState)([]),a=Object(l.a)(t,2),c=a[0],n=a[1];return Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));t&&n(t)}),[]),Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[c]),Object(u.jsx)("div",{className:"container mx-auto",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(g,{}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{path:"/",element:Object(u.jsx)(f,{contacts:c,getContactId:function(e){var t=c.filter((function(t){return t.id!==e}));n(t)}})}),Object(u.jsx)(m.a,{path:"/add",element:Object(u.jsx)(j,{addContactHandler:function(e){console.log(e),n([].concat(Object(o.a)(c),[Object(d.a)({id:Object(x.a)()},e)]))}})}),Object(u.jsx)(m.a,{path:"/contact/:id",element:Object(u.jsx)(O,{})})]})]})})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2618e45c.chunk.js.map