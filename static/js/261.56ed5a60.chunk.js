"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[261],{261:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(885),s=a(791),i=a(559),n=a(731),c=a(689),o="MovieDetails_list__y5Rs9",l=a(184);function v(){var e=(0,c.UO)().movieId;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("ul",{className:o,children:["Cast","Reviews"].map((function(t,a){return(0,l.jsx)("li",{children:(0,l.jsx)(n.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e,"/").concat(t.toLowerCase()),children:t})},a)}))}),(0,l.jsx)(c.j3,{})]})}var h="MovieDetailsPage_link__rhdjc",_="MovieDetailsPage_img__+Nbrw",d="MovieDetailsPage_info__wQ8PP",u="MovieDetailsPage_text__vp0Sm";function m(){var e=(0,s.useState)(null),t=(0,r.Z)(e,2),a=t[0],o=t[1],m=(0,c.UO)().movieId,j=(0,s.useRef)((0,c.TH)().state);if((0,s.useEffect)((function(){try{i.Z.fetchMoviesById(m).then((function(e){var t=e.data,a=t.title,r=t.overview,s=t.poster_path,i=t.vote_average,n=t.genres,c=t.release_date;o({title:a,overview:r,poster_path:s,vote_average:i,genres:n,release_date:c})}))}catch(e){}}),[m]),a){var x=a.title,g=a.overview,f=a.poster_path,p=a.vote_average,w=a.genres,k=a.release_date;return(0,l.jsxs)(l.Fragment,{children:[j.current&&(0,l.jsx)(n.rU,{className:h,to:j.current.location,state:j.current.search,children:"\u2190 Go back"}),(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(f),className:_,alt:x}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("h2",{children:"".concat(x," (").concat(k.slice(0,4),")")}),(0,l.jsx)("p",{children:"User score: ".concat((10*p).toFixed(2),"%")}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:g}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:w.map((function(e){var t=e.name;return"".concat(t," ")}))})]})]}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsx)(v,{})]})}}}}]);
//# sourceMappingURL=261.56ed5a60.chunk.js.map