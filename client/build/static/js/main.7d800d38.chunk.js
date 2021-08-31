(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(14),a=n.n(c),i=(n(48),n(16)),s=n(89),u=n(90),d=n(92),l=n(3),p=function(t){var e=t.todo,n=t.updateTodo,o=t.deleteTodo,c=Object(r.useState)(e.status),a=Object(i.a)(c,2),p=a[0],f=a[1];return Object(l.jsxs)(s.a,{container:!0,spacing:2,children:[Object(l.jsxs)(s.a,{item:!0,xs:6,children:[Object(l.jsx)(u.a,{component:"h1",style:{fontWeight:"bold",fontFamily:"Serif",fontSize:"20px",textDecoration:p?"line-through":""},children:e.name}),Object(l.jsx)(u.a,{component:"h2",style:{fontFamily:"Serif",fontSize:"15px"},children:e.description})]}),Object(l.jsxs)(s.a,{item:!0,xs:6,style:{padding:"10px",display:"flex",alignItems:"baseline"},children:[Object(l.jsx)(d.a,{style:{fontFamily:"Serif",fontSize:"15px"},onClick:function(){n(e),f(!p)},children:"Completed"}),Object(l.jsx)(d.a,{style:{fontFamily:"Serif",fontSize:"15px"},onClick:function(){return o(e._id)},children:"Delete"})]})]})},f=n(24),h=n(26),j=n(93),x=function(t){var e=t.saveTodo,n=Object(r.useState)(),o=Object(i.a)(n,2),c=o[0],a=o[1],p=function(t){a(Object(h.a)(Object(h.a)({},c),{},Object(f.a)({},t.currentTarget.id,t.currentTarget.value)))};return Object(l.jsx)("form",{onSubmit:function(t){return e(t,c)},children:Object(l.jsxs)(s.a,{container:!0,spacing:3,children:[Object(l.jsx)(s.a,{item:!0,xs:12,style:{padding:"10px",textAlign:"center"},children:Object(l.jsx)(u.a,{component:"h1",style:{fontWeight:"bold",fontFamily:"Serif",fontSize:"20px"},children:"Todo"})}),Object(l.jsx)(s.a,{item:!0,xs:6,children:Object(l.jsx)(u.a,{children:"Name:"})}),Object(l.jsx)(s.a,{item:!0,xs:6,children:Object(l.jsx)(u.a,{children:"Description:"})}),Object(l.jsx)(s.a,{item:!0,xs:6,children:Object(l.jsx)(j.a,{fullWidth:!0,placeholder:"Enter Name",type:"text",id:"name",required:!0,onChange:p})}),Object(l.jsx)(s.a,{item:!0,xs:6,children:Object(l.jsx)(j.a,{fullWidth:!0,placeholder:"Enter Description",type:"text",id:"description",required:!0,onChange:p})}),Object(l.jsx)(s.a,{item:!0,xs:12,children:Object(l.jsx)(d.a,{fullWidth:!0,type:"submit",variant:"contained",disabled:void 0===c,children:"Add Todo"})})]})})},b=n(13),m=n.n(b),O=n(21),v=n(22),g=n.n(v),w="https://mern-todo-typescript.herokuapp.com",y=function(){var t=Object(O.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get(w+"/todos");case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(O.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={name:e.name,description:e.description,status:!1},t.next=4,g.a.post(w+"/add-todo",n);case 4:return r=t.sent,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(O.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={status:!e.status},t.next=4,g.a.put("".concat(w,"/edit-todo/").concat(e._id),n);case 4:return r=t.sent,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(O.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.delete("".concat(w,"/delete-todo/").concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),k=n(91),F=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1];Object(r.useEffect)((function(){c()}),[]);var c=function(){y().then((function(t){var e=t.data.todos;return o(e)})).catch((function(t){return console.log(t)}))},a=function(t){T(t).then((function(t){var e=t.status,n=t.data;if(200!==e)throw new Error("Error! Todo not updated");o(n.todos)})).catch((function(t){return console.log(t)}))},s=function(t){E(t).then((function(t){var e=t.status,n=t.data;if(200!==e)throw new Error("Error! Todo not deleted");o(n.todos)})).catch((function(t){return console.log(t)}))};return Object(l.jsx)("main",{className:"App",children:Object(l.jsxs)(k.a,{maxWidth:"xs",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",boxShadow:"0 1rem 2rem rgba(0, 0, 0, 0.2)",paddingTop:"20px",paddingBottom:"20px"},children:[Object(l.jsx)(x,{saveTodo:function(t,e){t.preventDefault(),S(e).then((function(t){var e=t.status,n=t.data;if(201!==e)throw new Error("Error! Todo not saved");o(n.todos)})).catch((function(t){return console.log(t)}))}}),n.map((function(t){return Object(l.jsx)(p,{updateTodo:a,deleteTodo:s,todo:t},t._id)}))]})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),o(t),c(t),a(t)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),C()}},[[73,1,2]]]);
//# sourceMappingURL=main.7d800d38.chunk.js.map