"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{383:function(n,t,e){e.d(t,{T:function(){return i}});var r=e(861),a=e(687),c=e.n(a),o=e(243),i={API_KEY:"de43d67db1c628887eb86e6b3184ef59",BASE_URL:"https://api.themoviedb.org/3/",getTrending:function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i.BASE_URL,"/trending/all/day?api_key=").concat(i.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return t=n.sent,n.next=5,t.data.results;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),getMovieByName:function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i.BASE_URL,"search/movie?api_key=").concat(i.API_KEY,"&query=").concat(t)).catch((function(n){throw new Error(n.message)}));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),getMovieDetails:function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i.BASE_URL,"movie/").concat(t,"?api_key=").concat(i.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),getMovieCredits:function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i.BASE_URL,"movie/").concat(t,"/credits?api_key=").concat(i.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),getMovieReviews:function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i.BASE_URL,"movie/").concat(t,"/reviews?api_key=").concat(i.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c,o=e(861),i=e(439),s=e(687),u=e.n(s),p=e(383),f=e(791),d=e(689),h=e(87),v=e(168),g=e(686),l=g.Z.h1(r||(r=(0,v.Z)(["\n  margin: 0 0 20px;\n  padding: 0;\n"]))),m=g.Z.ul(a||(a=(0,v.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),w=g.Z.li(c||(c=(0,v.Z)(["\n  margin-bottom: 10px;\n  padding: 0;\n\n  list-style: none;\n  a {\n    text-decoration: none;\n    color: #000000;\n    &:visited {\n      color: #999999;\n    }\n\n    &:hover,\n    &:focus {\n      color: red;\n    }\n  }\n"]))),_=e(184),x=function(){var n=(0,f.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,d.TH)();return(0,f.useEffect)((function(){(0,o.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,p.T.getTrending();case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{children:"Trending today"}),(0,_.jsx)(m,{children:e.map((function(n){return(0,_.jsx)(w,{children:(0,_.jsx)(h.rU,{to:"movies/".concat(n.id),state:{from:a},children:n.title||n.name})},n.id)}))})]})}}}]);
//# sourceMappingURL=485.c7a797c6.chunk.js.map