(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=a(20),s=a(3),i=a(4),u=a(6),p=a(5),m=(a(48),a(10)),h=a(16),d=a.n(h),g=new(function(){function e(){Object(s.a)(this,e),this.auth=d.a.create({baseURL:"http://localhost:4000",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),v=r.a.createContext(),f=v.Consumer,b=v.Provider,E=function(e){return function(t){Object(u.a)(n,t);var a=Object(p.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(f,null,(function(a){var n=a.login,o=a.signup,c=a.user,l=a.logout,s=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:o,user:c,logout:l,isLoggedin:s},t.props))}))}}]),n}(r.a.Component)},k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.username,n=t.password;g.signup({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var a=t.response;return e.setState({message:a.data.statusMessage})}))},e.login=function(t){var a=t.username,n=t.password;g.login({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.logout=function(){g.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,o=this.login,c=this.logout,l=this.signup;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(b,{value:{isLoggedin:a,user:n,login:o,logout:c,signup:l}},this.props.children)}}]),a}(r.a.Component),y=a(1),w=a.n(y),j=a(7),O=new function e(){var t=this;Object(s.a)(this,e),this.getBooks=Object(j.a)(w.a.mark((function e(){var a,n,r=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:0,e.prev=1,e.next=4,t.service.get("/books/mybooks?page="+a);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),this.getBooksFromApi=function(){var e=Object(j.a)(w.a.mark((function e(t,a){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=10*t,e.next=4,d.a.get("https://www.etnassoft.com/api/v1/get/?category=".concat(a,"&results_range=").concat(n,",10"));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),this.getCategoriesFromApi=Object(j.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://www.etnassoft.com/api/v1/get/?get_categories=all");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.getCarrousel=Object(j.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://www.etnassoft.com/api/v1/get/?subcategory=programacion_javascript_ajax&num_items=6");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.saveNewBook=function(){var e=Object(j.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("The new book is: ",a),e.prev=1,e.next=4,t.service.post("/books/create",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.getDetailsBook=function(){var e=Object(j.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.get("/books/details/"+a);case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.handleUpload=function(){var e=Object(j.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("file in service: ",a),e.prev=1,e.next=4,t.service.post("/books/upload",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.updateBook=function(){var e=Object(j.a)(w.a.mark((function e(a,n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("The book updated is: ",n),e.prev=1,e.next=4,t.service.post("/books/upload/"+a,{updatedBook:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),this.deleteBook=function(){var e=Object(j.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.post("/books/delete/".concat(a));case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.searchBook=function(){var e=Object(j.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://www.etnassoft.com/api/v1/get/?keyword=".concat(t,"&?any_tags=[").concat(t,"]&num_items=20"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.service=d.a.create({baseURL:"http://localhost:4000"})},S=a(19),x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{onClick:e.paginaAnterior,className:"primary",variant:"primary",size:"sm"},"Anterior"),r.a.createElement(S.a,{onClick:e.paginaSiguiente,className:"primary",variant:"primary",size:"sm"},"Siguiente"))},C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={books:[],pagina:0,category:[],count:""},e.scroll=function(){document.querySelector(".create-div").scrollIntoView("ease-in","start")},e.getAllBooks=Object(j.a)(w.a.mark((function t(){var a,n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.name,n=e.state.pagina,t.next=4,O.getBooksFromApi(n,a);case 4:r=t.sent,e.setState({books:r});case 6:case"end":return t.stop()}}),t)}))),e.paginaAnterior=function(){var t=e.state.pagina;if(0===t)return null;t--,e.setState({pagina:t}),e.scroll()},e.paginaSiguiente=function(){var t=e.state.pagina;e.state.books.length?(t++,e.setState({pagina:t})):e.setState({pagina:0}),e.scroll()},e.componentDidUpdate=function(){e.getAllBooks()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getAllBooks()}},{key:"render",value:function(){var e=this,t=this.state.books.length;return r.a.createElement("div",{className:"container2"},r.a.createElement("div",{className:"create-div"},r.a.createElement("button",null,r.a.createElement("a",{href:"/books/create",className:"material-icons"},"Create book"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pagination"},r.a.createElement(x,{paginaAnterior:this.paginaAnterior,paginaSiguiente:this.paginaSiguiente})),this.state.books.map((function(e,t){return r.a.createElement("div",{key:t,className:"card"},r.a.createElement("img",{src:e.cover,alt:e.title}),r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("h5",null,e.author),r.a.createElement("div",{className:"align-delete"},r.a.createElement(S.a,{href:"/details/".concat(e.ID),className:"primary",variant:"primary",size:"sm"},"Details"))))})),r.a.createElement("div",{className:"pagination"},r.a.createElement(x,{paginaAnterior:this.paginaAnterior,paginaSiguiente:this.paginaSiguiente}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"no-results"},r.a.createElement("div",{className:"no-results-content"},r.a.createElement("h1",null,"No hay m\xe1s libros!!"),r.a.createElement(S.a,{onClick:function(){return e.paginaSiguiente()},className:"primary",variant:"primary",size:"sm",active:!0},"Vuelve!")))))}}]),a}(n.Component),N=E(function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.logout,a=e.isLoggedin;return r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:"/",className:"logo"},r.a.createElement("img",{className:"logo-nav",src:"https://res.cloudinary.com/ytyt/image/upload/v1606383492/movie-gallery/colaymar_yjsgf2.png",width:"40",height:"40",alt:"Logo"})),r.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),r.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},r.a.createElement("span",{className:"navicon"})),r.a.createElement("ul",{className:"menu"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("a",{href:"/popular"},"Most Popular")),r.a.createElement("li",null,r.a.createElement("a",{href:"/books"},"All books")),r.a.createElement("li",null,r.a.createElement("a",{href:"/books/mybooks"},"MY personal books")),r.a.createElement("li",null,r.a.createElement("a",{href:"/private"},"My profile")),r.a.createElement("li",null,r.a.createElement("button",{className:"link-button",type:"button",onClick:t},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"LogIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"/signup"},"Sign Up")))))}}]),a}(n.Component)),B=a(18),_=E(function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.signup({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(B.a)({},n,r))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?"),r.a.createElement(l.b,{to:"/login"}," Login"))}}]),a}(n.Component)),A=E(function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.login({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(B.a)({},n,r))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),a}(n.Component)),D=E(function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile-section1"},r.a.createElement("div",{className:"profile-content"},r.a.createElement("h1",null,"Welcome ",this.props.user.username),r.a.createElement("img",{src:"https://res.cloudinary.com/ytyt/image/upload/v1607428195/books/undraw_profile_details_f8b7_wlebzl.svg",alt:"profile"}))),r.a.createElement("div",null))}}]),a}(n.Component)),F=a(23);var L=E((function(e){var t=e.component,a=e.isLoggedin,n=Object(F.a)(e,["component","isLoggedin"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(m.a,{to:"/private"}):r.a.createElement(t,e)}}))}));var I=E((function(e){var t=e.component,a=e.isLoggedin,n=Object(F.a)(e,["component","isLoggedin"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/login"})}}))})),U=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={book_title:"",description:"",book_year:"",writer:"",poster:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(B.a)({},n,r))},e.handleFileUpload=function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("the file to be uploaded is: "),(n=new FormData).append("poster",a.target.files[0]),t.prev=3,t.next=6,O.handleUpload(n);case 6:r=t.sent,e.setState({poster:r.secure_url}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("Error while uploading the file: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(j.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,O.saveNewBook(e.state);case 4:n=t.sent,console.log("added",n),e.setState({book_title:"",description:"",book_year:"",writer:"",poster:""}),console.log("estado HANDLE SUBMIT",n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("Error while adding the movie: ",t.t0);case 13:e.props.history.push("/books");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"edit-form"},r.a.createElement("h2",null,"Add a new book!"),r.a.createElement("label",{htmlFor:""},"Ttile Book"),r.a.createElement("input",{className:"input",type:"text",name:"book_title",value:this.state.book_title,placeholder:"Enter title book",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Book year"),r.a.createElement("input",{className:"input",type:"text",name:"book_year",value:this.state.book_year,placeholder:"Book year",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Escritor"),r.a.createElement("input",{className:"input",type:"text",name:"writer",value:this.state.writer,placeholder:"Escritor",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Description: "),r.a.createElement("textarea",{type:"text",rows:"10",cols:"50",name:"description",value:this.state.description,placeholder:"A\xf1ade tu descripci\xf3n",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Select poster:"),r.a.createElement("input",{className:"input",type:"file",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"Save new movie")))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={book_title:"",book_year:"",description:"",writer:"",poster:""},e.getDetailsBook=Object(j.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getDetailsBook(e.props.match.params.id);case 2:a=t.sent,e.setState({book_title:a.book_title,book_year:a.book_year,description:a.description,poster:a.poster,writer:a.writer});case 4:case"end":return t.stop()}}),t)}))),e.handleFileUpload=function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("the file to be uploaded is: ",a.target.files[0]),(n=new FormData).append("poster",a.target.files[0]),t.prev=3,t.next=6,O.handleUpload(n);case 6:r=t.sent,e.setState({poster:r.secure_url}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("Error while uploading the file: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){e.getDetailsBook()},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(B.a)({},n,r))},e.handleSubmit=function(){var t=Object(j.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,O.updateBook(e.state,e.props.match.params.id);case 4:e.setState({book_title:"",boook_year:"",description:"",writer:"",poster:""}),e.props.history.goBack(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Error while adding the movie: ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container3",style:{backgroundImage:"url(".concat(this.state.poster,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"edit-form"},r.a.createElement("h2",null,"Update the book"),r.a.createElement("label",{htmlFor:""},"Ttile Book"),r.a.createElement("input",{className:"input",type:"text",name:"book_title",value:this.state.book_title,placeholder:"Enter title book",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Book year"),r.a.createElement("input",{className:"input",type:"text",name:"book_year",value:this.state.book_year,placeholder:"Book year",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Escritor"),r.a.createElement("input",{className:"input",type:"text",name:"writer",value:this.state.writer,placeholder:"Escritor",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Description: "),r.a.createElement("textarea",{type:"textarea",rows:"10",cols:"50",name:"description",value:this.state.description,placeholder:"A\xf1ade tu descripcion",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Select poster:"),r.a.createElement("input",{className:"input",type:"file",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"Update book")))}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={book:{},author:""},e.getDetailsBook=function(){var t=e.props.match.params.id;d.a.get("https://www.etnassoft.com/api/v1/get/?id=".concat(t)).then((function(t){var a=t.data[0];e.setState({book:a}),console.log(e.state.book.url_download)}))},e.deleteBook=Object(j.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.deleteBook(e.props.match.params.id);case 2:e.props.history.push("/books");case 3:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getDetailsBook()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.book;return r.a.createElement("div",{className:"card2"},r.a.createElement("div",{className:"img-div"},r.a.createElement("img",{src:t.cover,alt:t.title})),r.a.createElement("div",null,r.a.createElement("h2",null,"Escritor: ",t.author),r.a.createElement("h3",null,t.title),r.a.createElement("h4",null,t.author),r.a.createElement("p",null,"Descripci\xf3n : ",r.a.createElement("br",null)," ",t.content),r.a.createElement(S.a,null,r.a.createElement("a",{href:t.url_download,target:"_blank",rel:"noopener noreferrer"},"Download"))),r.a.createElement("div",{className:"align-delete"},r.a.createElement(S.a,{onClick:function(){return e.deleteBook(t.ID)}},"Delete"),r.a.createElement(S.a,null,r.a.createElement("a",{href:"/books/upload/".concat(t.ID)},"Edit"))))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=t.target.value;a?e.props.filterSearch(a):e.props.clearSearch()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-div"},r.a.createElement("input",{type:"text",name:"name",onChange:function(t){return e.handleChange(t)},placeholder:"Search over the OpenLibra API..."}))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.theBook;return r.a.createElement("div",{className:"align-random"},r.a.createElement("a",{href:"/details/".concat(e.ID)},r.a.createElement("div",{className:"cover-movie",style:{backgroundImage:"url(".concat(e.cover,")"),backgroundPosition:"cover",backgroundSize:"100%"}})))}}]),a}(n.Component),V=a(75),q=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(V.a,null,r.a.createElement(V.a.Item,null,r.a.createElement("img",{style:{height:"300px",backgroundPosition:"cover"},className:"d-block w-100",src:"https://midu.dev/images/wallpapers/una-taza-de-javascript.png",alt:"First slide"}),r.a.createElement(V.a.Caption,null,r.a.createElement("h3",null,"JavaScript"),r.a.createElement(S.a,null,r.a.createElement("a",{href:"/books/api/v1/javascript"},"Aprende JavScript con nuestros recursos, hazte un pro y pasa al siguiente nivel!")))),r.a.createElement(V.a.Item,null,r.a.createElement("img",{style:{height:"300px",backgroundPosition:"cover"},className:"d-block w-100",src:"",alt:"Second slide"}),r.a.createElement(V.a.Caption,null,r.a.createElement("h3",null,"titulo2"),r.a.createElement("p",null,r.a.createElement("a",{href:"/details/javascirpt"},"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),r.a.createElement(V.a.Item,null,r.a.createElement("img",{style:{height:"300px",backgroundPosition:"cover"},className:"d-block w-100",src:"",alt:"Third slide"}),r.a.createElement(V.a.Caption,null,r.a.createElement("h3",null,"titulo3"),r.a.createElement("p",null,r.a.createElement("a",{href:"/details/javascirpt"},"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),r.a.createElement(V.a.Item,null,r.a.createElement("img",{style:{height:"300px",backgroundPosition:"cover"},className:"d-block w-100",src:"",alt:"Third slide"}),r.a.createElement(V.a.Caption,null,r.a.createElement("h3",null,"titulo3"),r.a.createElement("p",null,r.a.createElement("a",{href:"/details/javascirpt"},"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),r.a.createElement(V.a.Item,null,r.a.createElement("img",{style:{height:"300px",backgroundPosition:"cover"},className:"d-block w-100",src:"",alt:"Third slide"}),r.a.createElement(V.a.Caption,null,r.a.createElement("h3",null,"titulo3"),r.a.createElement("p",null,r.a.createElement("a",{href:"/details/javascirpt"},"Nulla vitae elit libero, a pharetra augue mollis interdum.")))),r.a.createElement(V.a.Item,null,r.a.createElement("img",{style:{height:"300px",backgroundPosition:"cover"},className:"d-block w-100",src:"",alt:"Third slide"}),r.a.createElement(V.a.Caption,null,r.a.createElement("h3",null,"titulo3"),r.a.createElement("p",null,r.a.createElement("a",{href:"/details/javascirpt"},"Nulla vitae elit libero, a pharetra augue mollis interdum.")))))}}]),a}(n.Component),J=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filteredBooks:[],categories:[],books:[],pagina:""},e.getCategories=Object(j.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getCategoriesFromApi();case 2:a=t.sent,e.setState({categories:a});case 4:case"end":return t.stop()}}),t)}))),e.getCarrousel=Object(j.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getCarrousel();case 2:a=t.sent,e.setState({books:a});case 4:case"end":return t.stop()}}),t)}))),e.filterSearch=function(){var t=Object(j.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.toLowerCase(),t.next=3,O.searchBook(n);case 3:r=t.sent,a&&e.setState({filteredBooks:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.clearSearch=function(){e.setState({filtredBooks:[]})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCategories(),this.getCarrousel()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"home-section"},r.a.createElement("h1",null,"OPENBOOKS V2"),r.a.createElement(M,{filterSearch:this.filterSearch,clearSearch:this.clearSearch,count:this.state.filteredBooks.length})),r.a.createElement("div",{className:"search-section"},this.state.filteredBooks.map((function(e,t){return r.a.createElement(T,{key:t,theBook:e})}))),r.a.createElement(q,null),r.a.createElement("div",{className:"home-section"},r.a.createElement("h1",null,"Categories!"),r.a.createElement("h2",null,"Discover all the categories on our Web!")),r.a.createElement("div",{className:"container-categories"},this.state.categories.map((function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.categories.ID;return r.a.createElement("div",{key:a,className:"card-categories",style:{backgroundImage:"url(".concat(e.state.books.cover,")")}},r.a.createElement("img",{src:e.state.books.cover,alt:e.state.books.title}),r.a.createElement("h3",null,t.name),r.a.createElement("a",{href:"/books/api/v1/".concat(t.nicename)},"Go!"))}))))}}]),a}(n.Component),R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={books:[],pagina:0},e.scroll=function(){document.querySelector(".create-div").scrollIntoView("ease-in","start")},e.getAllBooks=Object(j.a)(w.a.mark((function t(){var a,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.pagina,t.next=3,O.getBooks(a);case 3:n=t.sent,e.setState({books:n.data});case 5:case"end":return t.stop()}}),t)}))),e.deleteBook=function(){var t=Object(j.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.deleteBook(a);case 2:e.getAllBooks();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.paginaAnterior=function(){var t=e.state.pagina;if(0===t)return null;t--,e.setState({pagina:t}),e.scroll()},e.paginaSiguiente=function(){var t=e.state.pagina;e.state.books.length?(t++,e.setState({pagina:t})):e.setState({pagina:0}),e.scroll()},e.componentDidUpdate=function(){e.getAllBooks()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getAllBooks()}},{key:"render",value:function(){var e=this,t=this.state.books.length;return r.a.createElement("div",{className:"container2"},r.a.createElement("h1",null,"MY BOOKS"),r.a.createElement("div",{className:"create-div"},r.a.createElement("h1",null,"Our books")),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pagination"},r.a.createElement(x,{paginaAnterior:this.paginaAnterior,paginaSiguiente:this.paginaSiguiente})),this.state.books.map((function(t){return r.a.createElement("div",{key:t._id,className:"card"},r.a.createElement("img",{src:t.poster,alt:t.book_title}),r.a.createElement("div",null,r.a.createElement("h3",null,t.book_title),r.a.createElement("h5",null,t.book_year),r.a.createElement("div",{className:"align-delete"},r.a.createElement("a",{href:"/details/".concat(t._id)},"Details"),r.a.createElement(S.a,{onClick:function(){return e.deleteBook(t._id)},className:"primary",variant:"primary",size:"sm",active:!0},"Delete"),r.a.createElement("a",{href:"/books/upload/".concat(t._id),className:"material-icons"},"Edit Book"))))})),",",r.a.createElement("div",{className:"pagination"},r.a.createElement(x,{paginaAnterior:this.paginaAnterior,paginaSiguiente:this.paginaSiguiente}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"no-results"},r.a.createElement("div",{className:"no-results-content"},r.a.createElement("h1",null,"No hay m\xe1s libros!!"),r.a.createElement("img",{src:"https://res.cloudinary.com/ytyt/image/upload/v1607374224/books/undraw_result_5583_nsotqq.svg",alt:"No reuslts"}),r.a.createElement("div",{className:"buttons-results"},r.a.createElement(S.a,{onClick:function(){return e.paginaSiguiente()},className:"primary",variant:"primary",size:"sm",active:!0},"Vuelve!"),r.a.createElement(S.a,{href:"/books/create",className:"primary",variant:"primary",size:"sm",active:!0},"A\xf1ade libro"))))))}}]),a}(n.Component),K=(a(72),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:J}),r.a.createElement(L,{path:"/signup",component:_}),r.a.createElement(L,{path:"/login",component:A}),r.a.createElement(m.b,{exact:!0,path:"/books/api/v1/:name",component:C}),r.a.createElement(m.b,{exact:!0,path:"/books/mybooks",component:R}),r.a.createElement(m.b,{exact:!0,path:"/books/upload/:id",component:P}),r.a.createElement(m.b,{exact:!0,path:"/books/create",component:U}),r.a.createElement(I,{exact:!0,path:"/details/:id",component:z}),r.a.createElement(I,{exact:!0,path:"/private",component:D}))))}}]),a}(n.Component));c.a.render(r.a.createElement(l.a,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.880fdfb3.chunk.js.map