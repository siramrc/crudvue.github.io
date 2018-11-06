webpackJsonp([0],[,,,,function(e,t,a){"use strict";var i=a(5),n=a.n(i),s=(a(40),a(41)),o=n.a.initializeApp(s.a),r=o.firestore();r.settings({timestampsInSnapshots:!0}),t.a=r},,,,,,function(e,t,a){"use strict";var i=a(11);t.a={name:"app",components:{Principal:i.a}}},function(e,t,a){"use strict";function i(e){a(24)}var n=a(12),s=a(26),o=a(0),r=i,l=o(n.a,s.a,!1,r,null,null);t.a=l.exports},function(e,t,a){"use strict";t.a={}},function(e,t,a){"use strict";var i=a(4);t.a={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;i.a.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}}},,,function(e,t,a){"use strict";var i=a(4);t.a={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;i.a.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){return e.$router.push("/dashboard")}).catch(function(e){return console.log(err)})}}}},function(e,t,a){"use strict";var i=a(4);t.a={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){i.a.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;i.a.colletion("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&i.a.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/dashboard")})})}}}},function(e,t,a){"use strict";var i=a(4);t.a={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){i.a.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;i.a.colletion("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;i.a.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}}},function(e,t,a){"use strict";var i=a(5),n=a.n(i);t.a={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;n.a.auth().signInWithEmailAndPassword(this.email+"@domian.xta",this.password).then(function(t){alert("Bienvenido(a)!! ^-^"),e.$router.push("/dashboard")},function(e){alert(e.mensaje)})}}}},function(e,t,a){"use strict";var i=a(5),n=a.n(i);t.a={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email+"@domian.xta",this.password).then(function(e){alert("Account created for "+e.email),t.$router.push("/dashboard")},function(e){alert(e.message)}),e.preventDefault()}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(7),n=a(23),s=a(29);i.a.config.productionTip=!1,new i.a({el:"#app",router:s.a,template:"<App/>",components:{App:n.a}})},,function(e,t,a){"use strict";var i=a(10),n=a(28),s=a(0),o=s(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t){},,function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"principal"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m7"},[a("div",{staticClass:"card"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"card-action"},[a("router-link",{staticClass:"btn grey",attrs:{to:"/register"}},[e._v("Resgister")]),e._v(" "),a("router-link",{staticClass:"btn ",attrs:{to:"/login"}},[e._v("Login")])],1)])])])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card-image"},[i("img",{attrs:{src:a(27)}}),e._v(" "),i("span",{staticClass:"card-title"},[e._v("CRUDEmployee")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-content"},[a("p",[e._v(" Welcome, this is a crud so you can manage the jobs of\n            the employees of your company.\n             Create an account and if you already\n             have an account and have good use of this CRUD.")])])}],s={render:i,staticRenderFns:n};t.a=s},function(e,t,a){e.exports=a.p+"static/img/retener-empleados.d4a1012.png"},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("router-view")],1)])},n=[],s={render:i,staticRenderFns:n};t.a=s},function(e,t,a){"use strict";var i=a(7),n=a(30),s=a(11),o=a(31),r=a(43),l=a(45),c=a(47),d=a(49),p=a(52);i.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"principal",component:s.a},{path:"/dashboard",name:"dashboard",component:o.a},{path:"/login",name:"login",component:d.a},{path:"/register",name:"register",component:p.a},{path:"/new",name:"new-employee",component:r.a},{path:"/edit/:employee_id",name:"edit-employee",component:c.a},{path:"/:employee_id",name:"view-employee",component:l.a}]})},,function(e,t,a){"use strict";var i=a(13),n=a(42),s=a(0),o=s(i.a,n.a,!1,null,null,null);t.a=o.exports},,,,,,,,,,function(e,t,a){"use strict";t.a={apiKey:"AIzaSyBQ2EJeQZg8Uvl4o7vSbt0ZUUqqoApLrlA",authDomain:"mycrud2.firebaseapp.com",databaseURL:"https://mycrud2.firebaseio.com",projectId:"mycrud2",storageBucket:"mycrud2.appspot.com",messagingSenderId:"1075443990136"}},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[e._m(0),e._v(" "),a("div",{staticClass:"container"},[a("ul",{staticClass:"colletion with-header"},[e._m(1),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"colletion-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(e._s(t.employee_id)+":"+e._s(t.name)+"\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("h4",{staticClass:"titulo"},[e._v("EmployeesCRUD")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"colletion-header"},[a("h4",[e._v("Employees")])])}],s={render:i,staticRenderFns:n};t.a=s},function(e,t,a){"use strict";var i=a(16),n=a(44),s=a(0),o=s(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID#")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Departament")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/dashboard"}},[e._v("Cancel")])],1)])])},n=[],s={render:i,staticRenderFns:n};t.a=s},function(e,t,a){"use strict";var i=a(17),n=a(46),s=a(0),o=s(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"colletion witch-header"},[a("li",{staticClass:"colletion-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"colletion-item"},[e._v("Employee ID#:"+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"colletion-item"},[e._v("Departament:"+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"colletion-item"},[e._v("Position"+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/dashboard"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large ",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},n=[],s={render:i,staticRenderFns:n};t.a=s},function(e,t,a){"use strict";var i=a(18),n=a(48),s=a(0),o=s(i.a,n.a,!1,null,null,null);t.a=o.exports},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-filed col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/dashboard"}},[e._v("Cancel")])],1)])])},n=[],s={render:i,staticRenderFns:n};t.a=s},function(e,t,a){"use strict";function i(e){a(50)}var n=a(19),s=a(51),o=a(0),r=i,l=o(n.a,s.a,!1,r,null,null);t.a=l.exports},function(e,t){},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m7"},[a("div",{staticClass:"login card-panel #fce4ec pink lighten-5"},[a("h3",[e._v("Login")]),e._v(" "),a("form",[a("div",{staticClass:"input-filed"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-filed"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large #e57373 red lighten-2",on:{click:e.login}},[e._v("Login")])])])])])])])},n=[],s={render:i,staticRenderFns:n};t.a=s},function(e,t,a){"use strict";function i(e){a(53)}var n=a(20),s=a(54),o=a(0),r=i,l=o(n.a,s.a,!1,r,null,null);t.a=l.exports},function(e,t){},function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel #e0f2f1 teal lighten-5"},[a("h3",[e._v("Register")]),e._v(" "),a("form",[a("div",{staticClass:"input-filed"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-filed"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large #69f0ae green accent-2",on:{click:e.register}},[e._v("Resgister")])])])])])])])},n=[],s={render:i,staticRenderFns:n};t.a=s}],[21]);
//# sourceMappingURL=app.9c6251fa56c0d35149fc.js.map