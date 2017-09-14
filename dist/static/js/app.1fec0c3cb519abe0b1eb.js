webpackJsonp([1],[,,function(e,t,a){"use strict";var s=a(22),r=a.n(s),n=r.a.create({baseURL:"https://blog-tastypie.herokuapp.com/api/v1/",timeout:1e3,Authorization:void 0});window.localStorage.getItem("api_key_header")&&(n.defaults.headers.common.Authorization=window.localStorage.getItem("api_key_header")),t.a=n},function(e,t,a){"use strict";var s={username:void 0,last_login:void 0};t.a=s},,,,,,,,,,,,,,,function(e,t,a){"use strict";var s=a(8),r=a(82),n=a(67),o=a.n(n),i=a(71),l=a.n(i),c=a(70),d=a.n(c),u=a(3),v=a(2);s.a.use(r.a);var _=new r.a({routes:[{path:"/",name:"home",component:o.a},{path:"/post/add",name:"post_add",component:d.a},{path:"/post/:post_id/:slug",name:"post_detail",component:l.a}]});_.beforeEach(function(e,t,a){window.localStorage.getItem("api_key_header")&&!u.a.username&&v.a.get("user").then(function(e){u.a.username=e.data.objects[0].username,u.a.last_login=e.data.objects[0].last_login}).catch(function(e){console.log(e)}),a()}),t.a=_},,function(e,t,a){function s(e){a(52),a(53),a(54)}var r=a(1)(a(41),a(77),s,"data-v-4866abf7",null);e.exports=r.exports},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(8),r=a(21),n=a.n(r),o=a(20),i=a.n(o),l=a(18),c=a(19),d=a.n(c);s.a.use(n.a),s.a.use(d.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:l.a,template:"<App/>",components:{App:i.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(66),r=a.n(s),n=a(65),o=a.n(n),i=a(3);t.default={components:{"app-header":r.a,"app-footer":o.a},data:function(){return{state:i.a}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(72),r=a.n(s),n=a(68),o=a.n(n),i=a(69),l=a.n(i),c=a(3);t.default={components:{"register-component":r.a,"login-component":o.a,"logout-component":l.a},data:function(){return{state:c.a}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(57),r=a.n(s),n=a(3),o=a(2);t.default={data:function(){return{state:n.a,posts:[],snack_bar:!1,snack_msg:void 0,is_snack_for_error:!0}},created:function(){var e=this;o.a.get("post/").then(function(t){e.posts=t.data.objects}).catch(function(t){e.is_snack_for_error=!0,e.snack_bar=!0,e.snack_msg=t.response.data.reason})},mounted:function(){this.$nextTick(function(){new r.a(".grid",{itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-item"}})})}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),r=a(3);t.default={data:function(){return{login_dialog:!1,login_data:{username:void 0,password:void 0},state:r.a,snack_bar:!1,snack_msg:void 0,is_snack_for_error:!0}},methods:{login:function(){var e=this;if(this.login_data.username&&this.login_data.password){var t=this;s.a.post("user/login/",this.login_data).then(function(a){var r=a.data.api_key,n="ApiKey "+a.data.username+":"+r;window.localStorage.setItem("api_key_header",n),s.a.defaults.headers.common.Authorization=n,t.state.username=a.data.username,t.state.last_login=a.data.last_login,e.$router.push({name:"home"})}).catch(function(t){e.is_snack_for_error=!0,e.snack_bar=!0,e.snack_msg=t.response.data.reason})}else this.is_snack_for_error=!0,this.snack_bar=!0,this.snack_msg="Please enter a username and password."}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),r=a(2);t.default={data:function(){return{state:s.a}},methods:{logout:function(){window.localStorage.removeItem("api_key_header"),r.a.defaults.headers.common.Authorization=void 0,this.state.username=void 0,this.state.last_login=void 0,this.$router.push({name:"home"})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2);t.default={$validates:!0,data:function(){return{post:{title:"",body:"",header_image:"http://lorempixel.com/500/500/technics/"}}},methods:{submit:function(){var e=this;this.$validator.validateAll(),this.$validator.errors.any()||s.a.post("post/",this.post).then(function(t){e.$router.push({name:"post_detail",params:{slug:t.data.slug,post_id:t.data.id}})}).catch(function(e){console.log(e.response)})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),r=a(2);t.default={data:function(){return{state:s.a,post:{title:void 0,body:void 0,header_image:void 0}}},created:function(){var e=this;r.a.get("post/"+this.$route.params.post_id).then(function(t){e.post=t.data}).catch(function(e){console.log(e)})}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(2);t.default={data:function(){return{register_dialog:!1,register:{first_name:void 0,last_name:void 0,email:void 0,username:void 0,password:void 0},snack_bar:!1,snack_msg:void 0,is_snack_for_error:!0}},methods:{save:function(){var e=this;this.$validator.validateAll(),this.$validator.errors.any()||s.a.post("user/",this.register).then(function(t){e.register_dialog=!1,e.is_snack_for_error=!1,e.snack_bar=!0,e.snack_msg="User created, please login!"}).catch(function(t){console.log(t.response),e.is_snack_for_error=!0,e.snack_bar=!0,e.snack_msg=t.response.data.error})}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,function(e,t,a){var s=a(1)(a(42),a(79),null,null,null);e.exports=s.exports},function(e,t,a){function s(e){a(50)}var r=a(1)(a(43),a(74),s,null,null);e.exports=r.exports},function(e,t,a){function s(e){a(51)}var r=a(1)(a(44),a(76),s,null,null);e.exports=r.exports},function(e,t,a){var s=a(1)(a(45),a(75),null,null,null);e.exports=s.exports},function(e,t,a){var s=a(1)(a(46),a(78),null,null,null);e.exports=s.exports},function(e,t,a){var s=a(1)(a(47),a(73),null,null,null);e.exports=s.exports},function(e,t,a){function s(e){a(55)}var r=a(1)(a(48),a(81),s,"data-v-d481645e",null);e.exports=r.exports},function(e,t,a){var s=a(1)(a(49),a(80),null,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"content"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{sm12:""}},[a("v-card",[a("div",{staticClass:"container"},[a("h5",{staticClass:"center"},[e._v(" Blog post ")]),e._v(" "),a("v-flex",{attrs:{sm12:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:200",expression:"'required|max:200'"}],attrs:{autofocus:"",label:"Title","error-messages":e.errors.collect("title"),"data-vv-name":"title",required:""},model:{value:e.post.title,callback:function(t){e.post.title=t},expression:"post.title"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:5000",expression:"'required|max:5000'"}],attrs:{"error-messages":e.errors.collect("body"),"data-vv-name":"body",required:"",name:"body",label:"Post","multi-line":""},model:{value:e.post.body,callback:function(t){e.post.body=t},expression:"post.body"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Image URL","error-messages":e.errors.collect("image-url"),"data-vv-name":"image-url",required:""},model:{value:e.post.header_image,callback:function(t){e.post.header_image=t},expression:"post.header_image"}})],1),e._v(" "),a("v-flex",{staticClass:"rigth",attrs:{sm12:""}},[a("v-btn",{staticClass:"secondary",on:{click:e.submit}},[e._v("Publish")])],1),e._v(" "),a("br")],1)])],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{staticClass:"header primary",attrs:{dark:""}},[a("v-toolbar-title",{staticClass:"white--text headline"},[a("router-link",{staticClass:"white--text no-text-decoration",attrs:{to:{name:"home"}}},[e._v(" Earth, stars and beyond.")])],1),e._v(" "),a("v-spacer"),e._v(" "),e.state.username?e._e():a("login-component"),e._v(" "),e.state.username?e._e():a("register-component"),e._v(" "),e.state.username?a("p",{staticClass:"headline no-margin white--text"},[e._v("Hello "+e._s(e.state.username)+"!")]):e._e(),e._v(" "),e.state.username?a("logout-component"):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:""},model:{value:e.login_dialog,callback:function(t){e.login_dialog=t},expression:"login_dialog"}},[a("v-btn",{staticClass:"secondary",slot:"activator"},[e._v(" Login")]),e._v(" "),a("v-card",[a("br"),e._v(" "),a("h5",{staticClass:"secondary--text center"},[e._v(" Login ")]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Username",autofocus:"",required:""},model:{value:e.login_data.username,callback:function(t){e.login_data.username=t},expression:"login_data.username"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:e.login_data.password,callback:function(t){e.login_data.password=t},expression:"login_data.password"}})],1)],1)],1),e._v(" "),a("small",[e._v("*indicates required field")])],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"secondary--text",attrs:{flat:""},nativeOn:{click:function(t){e.login_dialog=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{staticClass:"secondary--text",attrs:{flat:""},on:{click:e.login}},[e._v("Login")])],1)],1),e._v(" "),a("v-snackbar",{attrs:{timeout:3e3,error:e.is_snack_for_error,success:!e.is_snack_for_error},model:{value:e.snack_bar,callback:function(t){e.snack_bar=t},expression:"snack_bar"}},[e._v("\n      "+e._s(e.snack_msg)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snack_bar=!1}}},[e._v("Close")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-container",{staticClass:"content main"},[a("v-layout",{staticClass:"grid",attrs:{row:"",wrap:""}},e._l(e.posts,function(t){return a("v-flex",{staticClass:"grid-item sm12 md4 "},[a("v-card",{attrs:{hover:""}},[a("router-link",{staticClass:"no-text-decoration",attrs:{to:{name:"post_detail",params:{slug:t.slug,post_id:t.id}}}},[a("v-card-media",{staticClass:"white--text",attrs:{height:"200px",src:t.header_image}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("span",{staticClass:"headline"},[e._v(" "+e._s(t.title)+" ")])])],1)],1)],1)],1),e._v(" "),a("v-card-title",[a("div",[a("span",{staticClass:"grey--text"},[e._v(e._s(t.author_name))]),a("br"),e._v(" "),a("span",[e._v(" "+e._s(t.body.substring(0,180))+" ")])])]),e._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"secondary--text full",attrs:{to:{name:"post_detail",params:{slug:t.slug,post_id:t.id}},flat:""}},[e._v("Explore")])],1)],1)],1)}))],1),e._v(" "),e.state.username?a("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to add posts"},expression:"{html: 'Click to add posts'}",arg:"top"}],staticClass:"secondary white--text post-add",attrs:{to:{name:"post_add"},fab:""}},[a("v-icon",[e._v("add")])],1):e._e(),e._v(" "),a("v-snackbar",{attrs:{timeout:3e3,error:e.is_snack_for_error,success:!e.is_snack_for_error},model:{value:e.snack_bar,callback:function(t){e.snack_bar=t},expression:"snack_bar"}},[e._v("\n    "+e._s(e.snack_msg)+" \n    "),a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snack_bar=!1}}},[e._v("Close")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"wrapper",attrs:{"application--light":""}},[a("app-header"),e._v(" "),a("div",{staticClass:"content"},[a("router-view")],1),e._v(" "),a("app-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-btn",{staticClass:"secondary",on:{click:e.logout}},[e._v("Logout")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"pa-3",attrs:{fixed:""}},[a("v-spacer"),e._v(" "),a("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-dialog",{attrs:{id:"register-dialog",width:"600px"},model:{value:e.register_dialog,callback:function(t){e.register_dialog=t},expression:"register_dialog"}},[a("v-btn",{staticClass:"secondary",slot:"activator"},[e._v("Register")]),e._v(" "),a("v-card",[a("br"),e._v(" "),a("h5",{staticClass:"secondary--text center"},[e._v(" Register ")]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{sm12:"",md6:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:200",expression:"'required|max:200'"}],attrs:{label:"First name","error-messages":e.errors.collect("firstname"),"data-vv-name":"firstname",required:""},model:{value:e.register.first_name,callback:function(t){e.register.first_name=t},expression:"register.first_name"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md6:""}},[a("v-text-field",{attrs:{label:"Lastname"},model:{value:e.register.last_name,callback:function(t){e.register.last_name=t},expression:"register.last_name"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md12:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"email",expression:"'email'"}],attrs:{label:"Email",type:"email","error-messages":e.errors.collect("email_id"),"data-vv-name":"email_id"},model:{value:e.register.email,callback:function(t){e.register.email=t},expression:"register.email"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md6:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],attrs:{label:"Username","error-messages":e.errors.collect("username"),"data-vv-name":"username"},model:{value:e.register.username,callback:function(t){e.register.username=t},expression:"register.username"}})],1),e._v(" "),a("v-flex",{attrs:{sm12:"",md6:""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],attrs:{label:"Password",type:"password","error-messages":e.errors.collect("password"),"data-vv-name":"password",required:""},model:{value:e.register.password,callback:function(t){e.register.password=t},expression:"register.password"}})],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"secondary--text",attrs:{flat:""},nativeOn:{click:function(t){e.register_dialog=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{staticClass:"secondary--text",attrs:{flat:""},nativeOn:{click:function(t){e.save()}}},[e._v("Save")])],1)],1)],1),e._v(" "),a("v-snackbar",{attrs:{timeout:3e3,error:e.is_snack_for_error,success:!e.is_snack_for_error},model:{value:e.snack_bar,callback:function(t){e.snack_bar=t},expression:"snack_bar"}},[e._v(e._s(e.snack_msg)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snack_bar=!1}}},[e._v("Close")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-parallax",{staticClass:"full",attrs:{src:e.post.header_image,height:"400"}}),e._v(" "),a("v-container",{staticClass:"content"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{sm12:""}},[a("br"),e._v(" "),a("h4",{staticClass:"center primary--text "},[e._v(e._s(e.post.title))]),e._v(" "),a("p",[e._v("\n           "+e._s(e.post.body)+"\n         ")])])],1)],1),e._v(" "),e.state.username?a("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{html:"Click to add posts"},expression:"{html: 'Click to add posts'}",arg:"top"}],staticClass:"secondary white--text post-add",attrs:{to:{name:"post_add"},fab:""}},[a("v-icon",[e._v("add")])],1):e._e()],1)},staticRenderFns:[]}}],[40]);
//# sourceMappingURL=app.1fec0c3cb519abe0b1eb.js.map