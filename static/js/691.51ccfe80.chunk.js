"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[691],{383:function(n,e,t){t.d(e,{T:function(){return o}});var r=t(861),a=t(687),c=t.n(a),u=t(243),o={API_KEY:"de43d67db1c628887eb86e6b3184ef59",BASE_URL:"https://api.themoviedb.org/3/",getTrending:function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o.BASE_URL,"/trending/all/day?api_key=").concat(o.API_KEY));case 2:return e=n.sent,n.next=5,e.data.results;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),getMovieByName:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o.BASE_URL,"search/movie?api_key=").concat(o.API_KEY,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getMovieDetails:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o.BASE_URL,"movie/").concat(e,"?api_key=").concat(o.API_KEY));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getMovieCredits:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o.BASE_URL,"movie/").concat(e,"/credits?api_key=").concat(o.API_KEY));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getMovieReviews:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o.BASE_URL,"movie/").concat(e,"/reviews?api_key=").concat(o.API_KEY));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},691:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u=t(861),o=t(439),i=t(687),s=t.n(i),p=t(383),f=t(791),d=t(87),l=t(689),v=t(168),m=t(686),h=m.Z.input(r||(r=(0,v.Z)(["\n  border: 2px solid black;\n  border-radius: 15px;\n  padding: 15px;\n  margin: 0 15px 0px 0;\n"]))),x=m.Z.input(a||(a=(0,v.Z)(["\n  cursor: pointer;\n\n  border-radius: 15px;\n  padding: 15px;\n  border: 2px solid black;\n  &:hover,\n  &:focus {\n    background-color: transparent;\n  }\n"]))),g=m.Z.ul(c||(c=(0,v.Z)(["\n  margin: 0;\n  margin-top: 10px;\n  list-style: none;\n  padding: 0;\n\n  li:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  a {\n    color: #000000;\n    text-decoration: none;\n    &:hover,\n    :focus {\n      color: red;\n    }\n  }\n"]))),_=t(184),y=function(){var n,e=(0,f.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,d.lr)(""),i=(0,o.Z)(c,2),v=i[0],m=i[1],y=null!==(n=v.get("query"))&&void 0!==n?n:"",b=(0,f.useState)(y),Z=(0,o.Z)(b,2),w=Z[0],k=Z[1],E=(0,l.TH)();(0,f.useEffect)((function(){w&&(0,u.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=a,n.next=3,p.T.getMovieByName(w);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[w]);var A=function(){var n=(0,u.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),k(y.trim());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("form",{autoComplete:"off",onSubmit:A,children:[(0,_.jsx)(h,{type:"text",name:"query",value:y,onChange:function(n){var e=n.target;if(""!==e.value)return m({query:e.value});m({})},placeholder:"input film name to search",required:!0}),(0,_.jsx)(x,{type:"submit",value:"Find my film"})]}),0!==r.length&&(0,_.jsx)(g,{children:r.map((function(n){return(0,_.jsx)("li",{children:(0,_.jsx)(d.rU,{to:"".concat(n.id),state:{from:E},children:n.title||n.name})},n.id)}))})]})}}}]);
//# sourceMappingURL=691.51ccfe80.chunk.js.map