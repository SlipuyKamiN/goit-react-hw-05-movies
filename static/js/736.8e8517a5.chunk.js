"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{383:function(t,e,n){n.d(e,{T:function(){return i}});var r=n(861),a=n(687),c=n.n(a),u=n(243),i={API_KEY:"de43d67db1c628887eb86e6b3184ef59",BASE_URL:"https://api.themoviedb.org/3/",getTrending:function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i.BASE_URL,"/trending/all/day?api_key=").concat(i.API_KEY));case 2:return e=t.sent,t.next=5,e.data.results;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getMovieByName:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i.BASE_URL,"search/movie?api_key=").concat(i.API_KEY,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getMovieDetails:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i.BASE_URL,"movie/").concat(e,"?api_key=").concat(i.API_KEY));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getMovieCredits:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i.BASE_URL,"movie/").concat(e,"/credits?api_key=").concat(i.API_KEY));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getMovieReviews:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i.BASE_URL,"movie/").concat(e,"/reviews?api_key=").concat(i.API_KEY));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},736:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,a=n(861),c=n(439),u=n(687),i=n.n(u),s=n(383),o=n(791),p=n(689),f=n(168),d=n(686).Z.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  li {\n    border-bottom: 1px solid #000000;\n  }\n"]))),v=n(184),h=function(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],u=(0,p.UO)().movieId;return(0,o.useEffect)((function(){(0,a.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,s.T.getMovieCredits(u);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))()}),[u]),(0,v.jsx)(d,{children:0!==n.length&&n.cast.map((function(t){return(0,v.jsxs)("li",{children:[(0,v.jsx)("h4",{children:t.name}),(0,v.jsxs)("p",{children:["Character: ",t.original_name,"/",t.character]})]},t.id)}))})}}}]);
//# sourceMappingURL=736.8e8517a5.chunk.js.map