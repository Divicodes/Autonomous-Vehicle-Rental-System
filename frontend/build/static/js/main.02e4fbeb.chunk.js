(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(19),c=s.n(n),r=s(85),i=s(86),l=s(87),o=s(1),j=function(){return Object(o.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(o.jsx)(r.a,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(l.a,{className:"text-center py-3",children:"Copyright \xa9 Project-V"})})})})},d=s(89),h=s(90),b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d.a,{bg:"dark",expand:"lg",variant:"dark",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(d.a.Brand,{href:"/",children:"Project-V"}),Object(o.jsxs)(h.a,{children:[Object(o.jsx)(h.a.Link,{href:"/",children:"Home"}),Object(o.jsx)(h.a.Link,{href:"/stats",children:"Stats"})]})]})})})},m=s(88),u=(s(56),function(){return Object(o.jsx)("div",{className:"main",children:Object(o.jsx)(r.a,{children:Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"auth-inner",children:[Object(o.jsxs)("div",{className:"intro-text",children:[Object(o.jsx)("h1",{className:"title",children:"Welcome to Project-V"}),Object(o.jsx)("p",{className:"subtitle",children:" Dont have an account? Click on register "})]}),Object(o.jsxs)("div",{className:"buttonContainer",children:[Object(o.jsx)("a",{href:"/login",children:Object(o.jsx)(m.a,{size:"lg",className:"landingButton",variant:"outline-primary",children:" Login "})}),Object(o.jsx)("a",{href:"/register",children:Object(o.jsx)(m.a,{size:"lg",className:"landingButton",children:" Register "})})]})]})})})})}),O=s(43),x=s(6),p=(s(57),function(){return Object(o.jsx)("div",{className:"Stats",children:Object(o.jsx)("h1",{children:"Here are the vaccination stats of Santa Clara County"})})}),f=s(24),g=s(15),v=s(16),N=s(18),C=s(17),y=(s(58),s(25)),w=s.n(y),E=function(e){Object(N.a)(s,e);var t=Object(C.a)(s);function s(){var e;return Object(g.a)(this,s),(e=t.call(this)).onChange=function(t){console.log("e.target.name"+t.target.name),e.setState(Object(f.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t={Email:e.state.Email,Password:e.state.Password};w.a.post("http://localhost:3000/login",t).then((function(e){alert("response:"+e)})).catch((function(e){console.log("err"+e)}))},e.state={fields:{},errors:{}},e}return Object(v.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"Login",children:Object(o.jsx)(r.a,{className:"C",children:Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"f",onSubmit:this.onSubmit,children:[Object(o.jsx)("h3",{children:"Sign In"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Email address"}),Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"Email",onChange:this.onChange,value:this.state.fields.Email})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"Password",onChange:this.onChange,value:this.state.fields.Password})]}),Object(o.jsx)("div",{className:"buttonContainer",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:s,children:"Submit"})}),Object(o.jsx)("div",{className:"forgot-password",children:Object(o.jsxs)("p",{children:["Forgot ",Object(o.jsx)("a",{href:"/",children:"password?"})]})})]})})})})}}]),s}(a.Component),k=(s(77),function(e){Object(N.a)(s,e);var t=Object(C.a)(s);function s(){var e;return Object(g.a)(this,s),(e=t.call(this)).onChange=function(t){console.log("e.target.name"+t.target.name),e.setState(Object(f.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t={FirstName:e.state.FirstName,LastName:e.state.LastName,Email:e.state.Email,Password:e.state.Password};w.a.post("http://localhost:3000/register",t).then((function(e){alert("response:"+e)})).catch((function(e){console.log("err"+e)}))},e.state={fields:{},errors:{}},e}return Object(v.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"Register",children:Object(o.jsx)(r.a,{className:"C",children:Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(o.jsx)("h3",{children:"Register"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"First name"}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",name:"FirstName",onChange:this.onChange,value:this.state.fields.FirstName})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Last name"}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",name:"LastName",onChange:this.onChange,value:this.state.fields.LastName})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"Email",onChange:this.onChange,value:this.state.fields.Email})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"Password",onChange:this.onChange,value:this.state.fields.Password})]}),Object(o.jsxs)("div",{className:"registerButton",children:[Object(o.jsx)(m.a,{type:"submit",onClick:s,children:"Register"}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{className:"AlreadyRegistered",children:["Already registered ",Object(o.jsx)("a",{href:"/login",children:"log in?"})]})})]})]})})})})}}]),s}(a.Component)),P=(s(78),function(e){Object(N.a)(s,e);var t=Object(C.a)(s);function s(){return Object(g.a)(this,s),t.apply(this,arguments)}return Object(v.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"D",children:Object(o.jsx)("div",{className:"buttonContainer",children:Object(o.jsx)("a",{href:"/login",children:Object(o.jsx)(m.a,{size:"lg",className:"landingButton",variant:"outline-primary",children:" Login "})})})})}}]),s}(a.Component)),S=function(){return Object(o.jsxs)(O.a,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)("main",{children:[Object(o.jsx)(x.a,{path:"/",component:u,exact:!0}),Object(o.jsx)(x.a,{path:"/stats",component:p}),Object(o.jsx)(x.a,{path:"/login",component:E}),Object(o.jsx)(x.a,{path:"/register",component:k}),Object(o.jsx)(x.a,{path:"/success",component:P})]}),Object(o.jsx)(j,{})]})};s(82);c.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.02e4fbeb.chunk.js.map