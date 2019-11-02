(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(15),r=t.n(o),c=t(128),s=t(130),i=t(132),u=t(59),m=t(21),d=t(22),h=t(25),E=t(23),k=t(26),v=t(64),b=t(131),p=t(117),f=t(118),g=t(119),B=t(125),y=t(120),S=t(121);var w=function(e){var a=l.a.useState(!1),t=Object(v.a)(a,2),n=t[0],o=t[1],r=function(){return o(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{className:"m-3"},l.a.createElement(b.a.Body,null,l.a.createElement(p.a,null,l.a.createElement(f.a,{xs:4,md:4},l.a.createElement(b.a.Title,null,e.books.title)),l.a.createElement(f.a,{xs:4,md:4}),l.a.createElement(f.a,{xs:4,md:4},l.a.createElement(g.a,{variant:"warning",className:"float-right ",value:e.books,onClick:function(){return o(!0)}},"View"),e.saved?l.a.createElement(g.a,{variant:"success",className:"float-right ml-5",onClick:function(){return e.handleBtnDelete(e.books._id)}},"Delete"):l.a.createElement(g.a,{variant:"success",className:"float-right ml-5",value:e.books,onClick:function(){return e.handleBtnSave(e.books)}},"Save"))),l.a.createElement(p.a,null,l.a.createElement(f.a,{xs:12},l.a.createElement(b.a.Text,null,e.books.description)))),l.a.createElement("br",null)),l.a.createElement(B.a,{show:n,onHide:r,animation:!1},l.a.createElement(B.a.Header,{closeButton:!0},l.a.createElement(B.a.Title,null,e.books.title)),l.a.createElement(B.a.Body,null,l.a.createElement(y.a,null,l.a.createElement(p.a,null,l.a.createElement(f.a,{xs:6,md:4},l.a.createElement("p",null,l.a.createElement("b",null,"Author: ")," ",e.books.authors)),l.a.createElement(f.a,{xs:6,md:4},e.saved?l.a.createElement(S.a,{src:e.books.image,className:"pull-right",thumbnail:!0}):l.a.createElement(S.a,{src:e.books.imageLinks.smallThumbnail,className:"pull-right",thumbnail:!0}))),l.a.createElement(p.a,null,l.a.createElement("p",null,e.books.description),l.a.createElement("a",{href:e.books.previewLink},"Display on Google Books")))),l.a.createElement(B.a.Footer,null,l.a.createElement(g.a,{variant:"secondary",onClick:r},"Close"),e.saved?l.a.createElement(g.a,{variant:"primary",onClick:function(){return a=e.books._id,e.handleBtnDelete(a),void r();var a}},"Delete"):l.a.createElement(g.a,{variant:"primary",value:e.books,onClick:function(){return a=e.books,e.handleBtnSave(a),void r();var a}},"Save"))))},j=t(29),O=t.n(j);t(109).config();var C={getBooks:function(){return O.a.get("/api/books")},getBook:function(e){return O.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&printType=books&key=AIzaSyBbBHoJWSyQGhqVHyEdh8_icLo7v0liYbU")},deleteBook:function(e){return O.a.delete("/api/books/"+e)},saveBook:function(e){return O.a.post("/api/books",e)}},N=t(122),x=t(123),D=t(129),F=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={books:[],title:"",authors:"",description:"",image:"",link:"",saved:!1},t.handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(u.a)({},n,l)),console.log(t.state.title)},t.handleFormSubmit=function(e){e.preventDefault(),t.state.title&&(console.log("SEARCHING BOOKS: "+t.state.title),C.getBook(t.state.title).then(function(e){t.setState({books:e.data.items,title:"",authors:"",description:"",image:"",link:""})}).catch(function(e){return console.log(e)}))},t.handleBtnSave=function(e){C.saveBook({title:e.title,authors:e.authors,description:e.description,image:e.imageLinks.smallThumbnail,link:e.previewLink}).catch(function(e){return console.log(e)})},t}return Object(k.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement(x.a,null,l.a.createElement(D.a,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Search book here","aria-label":"Search book here","aria-describedby":"basic-addon2"}),l.a.createElement(x.a.Append,null,l.a.createElement(g.a,{onClick:this.handleFormSubmit,disabled:!this.state.title,variant:"outline-secondary"},"Search")))),l.a.createElement(y.a,{className:"rounded",style:{backgroundColor:"#e9e9e9",padding:"2px"}},this.state.books.length?l.a.createElement(l.a.Fragment,null,this.state.books.map(function(a,t){return l.a.createElement(w,{key:t,books:a.volumeInfo,showModal:e.showModal,handleBtnSave:e.handleBtnSave,saved:e.state.saved})})):l.a.createElement("h3",null,"No Results to Display")))}}]),a}(n.Component),L=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={books:[],saved:!0},t.loadBooks=function(){C.getBooks().then(function(e){return t.setState({books:e.data})}).catch(function(e){return console.log(e)})},t.deleteBook=function(e){C.deleteBook(e).then(function(e){return t.loadBooks()}).catch(function(e){return console.log(e)})},t}return Object(k.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return console.log(this.state.books),l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement("h1",{className:"text-center"},"Google Book Search!")),l.a.createElement(y.a,{className:"rounded",style:{backgroundColor:"#e9e9e9",padding:"2px"}},this.state.books.length?l.a.createElement(l.a.Fragment,null,this.state.books.map(function(a,t){return l.a.createElement(w,{key:t,books:a,showModal:e.showModal,handleBtnSave:e.handleBtnSave,handleBtnDelete:e.deleteBook,saved:e.state.saved})})):l.a.createElement("h3",null,"No Results to Display")))}}]),a}(n.Component);function A(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function I(e){var a=e.fluid,t=e.children;return l.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function T(e){var a=e.size,t=e.children;return l.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)}var G=function(){return l.a.createElement(A,{fluid:!0},l.a.createElement(I,null,l.a.createElement(T,{size:"md-12"},l.a.createElement(N.a,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},H=t(127),M=t(126),R=t(62),z=t(124),J=function(e){function a(){return Object(m.a)(this,a),Object(h.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(k.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(H.a,{bg:"dark",variant:"dark"},l.a.createElement(H.a.Brand,{as:z.a,to:"/"},"Google Book Search"),l.a.createElement(H.a.Collapse,null,l.a.createElement(M.a,{className:"mr-auto"},l.a.createElement(R.a,{eventkey:1,href:"/"},l.a.createElement(M.a.Link,{as:z.a,to:"/"},"Search")),l.a.createElement(R.a,{eventkey:1,href:"/saved"},l.a.createElement(M.a.Link,{as:z.a,to:"/saved"},"Saved"))))))}}]),a}(n.Component);var _=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(J,{sticky:"top"}),l.a.createElement(s.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:F}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:L}),l.a.createElement(i.a,{exact:!0,path:"/books/:id",component:F}),l.a.createElement(i.a,{component:G}))))};r.a.render(l.a.createElement(_,null),document.getElementById("root"))},66:function(e,a,t){e.exports=t(114)}},[[66,1,2]]]);
//# sourceMappingURL=main.41996cf3.chunk.js.map