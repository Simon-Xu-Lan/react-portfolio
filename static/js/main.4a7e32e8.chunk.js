(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{27:function(e,a,t){e.exports=t(55)},37:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(23),r=t.n(c),o=t(7),m=t(1),i=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue darken-1"},l.a.createElement(o.b,{to:"#",className:"brand-logo center"},"Lan Simon Xu"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/experience"},"Working Experience")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/portfolio"},"Portfolio")))))},s={firstName:"Lan",middleName:"Simon",lastName:"Xu",fullName:"Lan Simon Xu",headline:"Enjoys hard work, action oriented and full of energy for the challenges",skills1:["Javascript","MySQL","MongoDB"],skills2:["Node","Express","React"],phone:"(720) 397-8719",email:"xulan20907@gmail.com",github:"https://github.com/Simon-Xu-Lan",linkedIn:"www.linkedin.com/in/lan-xu-b51997ba"},u=function(){return l.a.createElement("footer",{className:"page-footer blue darken-1"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6 s12"},l.a.createElement("h5",{className:"white-text"},s.fullName),l.a.createElement("p",{className:"grey-text text-lighten-4"},s.headline)),l.a.createElement("div",{className:"col l4 offset-l2 s12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("h5",{className:"white-text"},"Skills")),l.a.createElement("div",{className:"col s3 m6 l4"},l.a.createElement("ul",null,s.skills1.map((function(e,a){return l.a.createElement("li",{key:a},e)})))),l.a.createElement("div",{className:"col s3 m6 l4"},l.a.createElement("ul",null,s.skills2.map((function(e,a){return l.a.createElement("li",{key:a},e)})))))))),l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("div",{className:"container"},"\xa9 2020 Copyright Text")))},E=(t(37),t(26)),d=t(25),p=t.n(d),f=function(e){var a=e.project;return l.a.createElement("div",{class:"col s12 m6"},l.a.createElement("div",{class:"card blue-grey darken-1"},l.a.createElement("div",{class:"card-content white-text"},l.a.createElement("span",{class:"card-title"},a.name),l.a.createElement("p",null,a.description)),l.a.createElement("div",{class:"card-action"},l.a.createElement("a",{href:a.html_url},"Github page"),l.a.createElement("a",{href:a.homepage},"Demo"))))},h=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){p.a.get("https://api.github.com/users/Simon-Xu-Lan/repos").then((function(e){c(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"row"},t.map((function(e,a){return l.a.createElement(f,{key:a,project:e})})))};var v=function(){return l.a.createElement(o.a,null,l.a.createElement(i,null),l.a.createElement("div",{id:"router-content"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:h}))),l.a.createElement(u,null))};r.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4a7e32e8.chunk.js.map