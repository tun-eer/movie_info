(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=a(7),i=a(1),m=a(15),l=a.n(m),u=a(29),p=a(10),v=a(11),d=a(13),E=a(12),y=a(30),f=a.n(y);a(55);var h=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,c=e.poster,i=e.genres;return r.a.createElement(s.b,{style:{textDecoration:"none"},to:{pathname:"movie/".concat(t),state:{year:a,title:n,summary:o,poster:c,genres:i}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,180),"..."))))},g=(a(61),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var _=function(e){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'\u201c To do a great right do a little wrong. "'),r.a.createElement("span",null,"\u2212 Tuneer Upadhyay, 2020"))},b=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("sapn",null,e.state.title):null}}]),a}(r.a.Component);a(63);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))};a(64);var j=function(){return r.a.createElement(s.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",component:_}),r.a.createElement(i.a,{path:"/movie/:id",component:b}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.231ae3a9.chunk.js.map