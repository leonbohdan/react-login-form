(this["webpackJsonpreact-login-form"]=this["webpackJsonpreact-login-form"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n(1),i=n.n(s),a=n(4),r=n.n(a),c=n(2),l=(n(10),[{id:1,isActive:!1,name:"Petro",lastname:"Sheron",position:"Senion FE",phone:2233445566,registered:"2020-05-30T11:39:51 -03:00",login:"pits",password:1234},{id:2,isActive:!1,name:"Mark",lastname:"Bool",position:"QA",phone:2255663344,registered:"2020-01-30T11:00:51 -03:00",login:"marb",password:3333},{id:3,isActive:!1,name:"Topol",lastname:"Mars",position:"Analyst",phone:4422663355,registered:"2020-04-30T13:40:51 -03:00",login:"mtop",password:4321}]),u=(n(11),function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(""),r=Object(c.a)(a,2),l=r[0],u=r[1],j=Object(s.useState)([]),p=Object(c.a)(j,2),d=p[0],b=p[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("users"));b(e)}),[]),console.log(n),console.log(l),console.log(d),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Sign in form"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("input",{type:"text",name:"users",list:"users",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsxs)("datalist",{id:"users",name:"users",value:n,onChange:function(e){i(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"Choose your login or input new one"}),d.map((function(e){return Object(o.jsx)("option",{value:e.login,children:e.login},e.id)}))]}),Object(o.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:l,onChange:function(e){u(e.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"Sign in"})]})]})});var j=function(){var e=Object(s.useState)(l),t=Object(c.a)(e,2),n=t[0];return t[1],Object(s.useEffect)((function(){localStorage.setItem("users",JSON.stringify(n))}),[n]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{})})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.50c0667b.chunk.js.map