(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{11:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2K5GD",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1jmaW"}},12:function(e,a,t){e.exports={Overlay:"Modal_Overlay__IO326",Modal:"Modal_Modal__7mS0z"}},26:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__1tgtH"}},27:function(e,a,t){e.exports={Button:"Button_Button__2k2wZ"}},28:function(e,a,t){},32:function(e,a,t){e.exports=t(78)},37:function(e,a,t){},7:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__2miQO",SearchForm:"Searchbar_SearchForm__2TFRQ",SearchFormButton:"Searchbar_SearchFormButton__1HiJs",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2cktd",SearchFormInput:"Searchbar_SearchFormInput__63gCq"}},78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(24),l=t.n(o),c=(t(37),t(10)),s=t.n(c),i=t(14),m=t(25),u=t(31),d=t(3),p=t(4),h=t(6),g=t(5),y=t(30),f=t(11),b=t.n(f);function v(e){var a=e.id,t=e.src,o=e.alt,l=(e.handleBackdropClick,e.onOpenModal);return r.a.createElement(n.Fragment,null,r.a.createElement("li",{key:a,onClick:l,className:b.a.ImageGalleryItem},r.a.createElement("img",{id:a,src:t,alt:o,className:b.a.ImageGalleryItemImage})))}var k=t(12),I=t.n(k);function S(e){e.image,e.onOpenModal;var a=e.onCloseModal,t=e.modalImages,o=e.handleKeyPress;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{onClick:function(e){"IMG"!==e.target.nodeName&&a()},className:I.a.Overlay},r.a.createElement("div",{className:I.a.Modal,onClick:o},r.a.createElement("img",{src:t.largeImageURL,alt:""}))))}var E=t(26),O=t.n(E),_=function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={isModalOpen:!1,modalId:null,modalImages:[]},e.handleKeyPress=function(a){console.log("handleKeyPress"),console.log(a.code),console.log(a.keyCode),"Escape"===a.code&&e.onCloseModal()},e.handleBackdropClick=function(a){console.dir("handleBackdropClick currentTarget",a.currentTarget),console.dir("handleBackdropClick target",a.target),Number(a.target.id)===Number(e.state.modalImages.id)&&e.onCloseModal()},e.onOpenModal=function(a){var t=e.props.images.filter((function(e){return e.id===Number(a.target.id)})),n=Object(y.a)(t,1)[0];console.log("onOpenModal"),e.setState({isModalOpen:!0,modalImages:n,modalId:a.target.id})},e.onCloseModal=function(){console.log("closeModal"),e.setState({isModalOpen:!1})},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keypress",this.handleKeyPress),console.log("addEventListener")}},{key:"componentWillUpdate",value:function(){this.state.isModalOpen?window.removeEventListener("keypress",this.handleKeyPress):window.addEventListener("keypress",this.handleKeyPress),console.log("removeEventListener")}},{key:"render",value:function(){var e=this,a=this.props.images,t=this.state,o=t.isModalOpen,l=t.modalId,c=t.modalImages;return r.a.createElement(n.Fragment,null,o&&r.a.createElement(S,{image:l,modalImages:c,onOpenModal:this.onOpenModal,onCloseModal:this.onCloseModal,handleKeyPress:this.handleKeyPress}),r.a.createElement("ul",{className:O.a.ImageGallery},a.map((function(a){return r.a.createElement(v,{handleBackdropClick:e.handleBackdropClick,alt:a.tags,src:a.webformatURL,id:a.id,key:a.key,onOpenModal:e.onOpenModal})}))))}}]),t}(n.Component),C=t(7),M=t.n(C),N=t(27),w=t.n(N);function B(e){var a=e.handleClickButton;return r.a.createElement(n.Fragment,null,r.a.createElement("button",{onClick:a,className:w.a.Button},"Load more"))}var F=function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={searchQuery:""},e.handleChange=function(a){e.setState({searchQuery:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.searchQuery)},e.handleClickButton=function(){e.props.onSubmit(e.state.searchQuery,e.props.pageNumber)},e}return Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,a){console.log("componentDidUpdate BAR"),e.pageNumber>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state.searchQuery,a=this.props,t=a.images,o=a.updateQuery;return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:M.a.Searchbar},r.a.createElement("form",{onSubmit:this.handleSubmit,className:M.a.SearchForm},r.a.createElement("button",{type:"submit",className:M.a.SearchFormButton},r.a.createElement("span",{className:M.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:M.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange,onClick:function(){o(e)}}))),t.length>0&&r.a.createElement(_,{images:t}),t.length>=11&&r.a.createElement(B,{handleClickButton:this.handleClickButton}))}}]),t}(n.Component),j=t(28),L=t.n(j);function G(e){var a=e.text;return r.a.createElement("h2",null,"Woooooops! Somethink went wrong: ",a,"!")}t(39);var x=t(29),Q=t.n(x);function K(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{type:"ThreeDots",color:"#3f51b5",height:800,width:800,timeout:5e3}))}var q=t(13),P=t.n(q);P.a.defaults.baseURL="https://pixabay.com/api";var D=function(e,a){return P.a.get("/?q=".concat(e,"&page=").concat(a,"&key=").concat("14481621-0499f0de565ab92718c39474e","&image_type=photo&orientation=horizontal&per_page=12"))},U={images:[],isLoading:!1,error:null,pageNumber:1,query:""},A=function(e){Object(h.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state=Object(u.a)({},U),e.updateQuery=function(a){e.setState({query:a})},e.getImg=function(){var a=Object(m.a)(s.a.mark((function a(t){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({isLoading:!0}),a.prev=1,a.next=4,D(t,e.state.pageNumber);case 4:n=a.sent,e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(n.data.hits)),pageNumber:e.pageNumber+1}})),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0),e.setState({error:a.t0});case 12:return a.prev=12,e.setState({isLoading:!1}),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[1,8,12,15]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.pageNumber===this.state.pageNumber&&a.query===this.state.query||(a.query!==this.state.query&&this.setState({images:[],pageNumber:1}),this.setState({isLoading:!0}))}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.error,o=e.pageNumber;return r.a.createElement("div",{className:L.a.App},r.a.createElement(F,{initialState:U,onSubmit:this.getImg,images:a,pageNumber:o,updateQuery:this.updateQuery}),n&&r.a.createElement(G,{text:n.message}),t&&r.a.createElement(K,null))}}]),t}(n.Component);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3e56a297.chunk.js.map