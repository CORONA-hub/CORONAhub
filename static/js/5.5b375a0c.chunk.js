(this["webpackJsonpcorona-cub"]=this["webpackJsonpcorona-cub"]||[]).push([[5],{100:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(6),i=a(7),c=a(10),l=a(8),o=a(9),s=a(3),u=a.n(s),d=a(14),m=a(0),f=a.n(m),h=a(90),p=a(206),v=a(88),g=a(15),b=(a(100),function(e){return e}),y=function(e,t){var a=t.map((function(t){return Math.abs(t-e)}));return t[a.indexOf(Math.min.apply(Math,Object(n.a)(a)))]},E=function(e){return 100*e-5*(e-.5)},x=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).onMouseDown=function(){a.setState({isDragging:!0})},a.onMouseUp=function(){var e=Object(g.a)(a),t=e.props,n=e.state,r=e.availableValues,i=n.value;i=y(i,r),t.onChange(i),a.setState({value:i,isDragging:!1,isSnapped:!0})},a.onChange=function(e){var t=e.target,n=Object(g.a)(a),r=n.props,i=n.availableValues,c=n.snapRange,l=t.value,o=!1,s=!0,u=!1,d=void 0;try{for(var m,f=i[Symbol.iterator]();!(s=(m=f.next()).done);s=!0){var h=m.value;if(Math.abs(l-h)<c){l=h,o=!0,l=Number(l),r.onChange(l);break}}}catch(p){u=!0,d=p}finally{try{s||null==f.return||f.return()}finally{if(u)throw d}}a.setState({value:l,isSnapped:o})};var i,o,s=e.max,u=void 0===s?0:s,d=e.min,m=void 0===d?100:d,f=e.availableValues,h=void 0===f?[]:f,p=e.formatValue,v=void 0===p?b:p;return a.formatValue=v,a.availableValues=function(e,t,a){return e.filter((function(e){return e<a})).filter((function(e){return e>t}))}((i=h,i.filter((function(e,t,a){return a.indexOf(e)===t}))),m,u).sort(),a.availableValues.unshift(m),a.availableValues.push(u),a.snapRange=Math.min((u-m)/25,(o=a.availableValues,Math.min.apply(Math,Object(n.a)(o.map((function(e,t){return 0===t?o[o.length-1]:Math.abs(e-o[t-1])}))))/2)),a.state={value:0,isDragging:!1,isSnapped:!1},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){2===this.availableValues.length&&console.log("Warning: Select has no available values apart from the edges");var e=this.props,t=e.min,a=e.startValue,n=y(a,this.availableValues)||t;e.onChange(n),this.setState({value:n,isSnapped:!0})}},{key:"render",value:function(){var e=this.props,t=this.state,a=this.availableValues,n=this.formatValue,r=this.onChange,i=this.onMouseDown,c=this.onMouseUp,l=e.min,o=e.max,s=t.value,u=t.isDragging,d=t.isSnapped,m={type:"range",min:l,max:o,value:s||l,onChange:r,onMouseDown:i,onMouseUp:c,onTouchStart:i,onTouchEnd:c},h=Math.abs(o-l),p="".concat(E((s-l)/h),"%"),v=u?"dragging":"",g=d?"snapped":"",b="discrete-slider ".concat(v),y={className:"discrete-slider__thumb",style:{left:p}},x={className:"discrete-slider__thumb-animation ".concat(v),style:{left:p}},j={className:"discrete-slider__display-value ".concat(g),style:{display:s<=l+this.snapRange||s>=o-this.snapRange?"none":"block",left:p}};return f.a.createElement("div",{className:b},f.a.createElement("input",m),f.a.createElement("div",y),f.a.createElement("div",x),f.a.createElement("div",j,n(s)),f.a.createElement("div",{className:"discrete-slider__markers"},a.map((function(e,t){return f.a.createElement("div",{key:t,className:"discrete-slider__markers__marker",style:{left:"".concat(E((e-l)/h),"%")}})}))))}}]),t}(m.Component),j=a(12),O=a(205),k={id:"clusters",type:"circle",source:"covid-19",paint:{"circle-color":["step",["get","confirmed"],"#03befc",20,"#f1f075",800,"#f28cb1",5e3,"#ba1818"],"circle-radius":["step",["zoom"],4,2,6,4,["interpolate",["cubic-bezier",0,.5,1,.5],["get","confirmed"],20,8,5e3,25]]}},S={id:"cluster-count",type:"symbol",source:"covid-19",layout:{"text-field":["get","confirmed"],"text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":["step",["zoom"],0,4,11]}},C=(a(105),function(e){var t=e.data,a=e.mapStyle,n=e.onClick,r=Object(m.useState)({width:"100vw",height:"100vh",latitude:45,longitude:10,zoom:4}),i=Object(j.a)(r,2),c=i[0],l=i[1],o="mapbox://styles/mapbox/".concat(a);return f.a.createElement(O.d,Object.assign({},c,{onViewportChange:l,mapboxApiAccessToken:"pk.eyJ1IjoiZ2lhbm5vdHIiLCJhIjoiY2s3aHFkcDkwMGMzYjNlbzNvMWl4bGFxbyJ9.2p2O5m7aiA6Bn9vjPe7HrQ",mapStyle:o,onClick:n}),f.a.createElement(O.c,{id:"covid-19",type:"geojson",data:t},f.a.createElement(O.a,k),f.a.createElement(O.a,S)),f.a.createElement("div",{style:{position:"absolute",bottom:"45px",right:"20px"}},f.a.createElement(O.b,null)))}),N=a(106),w=a(107),M={base:"16px",spacing:"1rem",typography:{font:{sans:"Jura",serif:"Forum"},text:"1rem",title:"2rem"},breakpoint:{xs:"0em",sm:"30em",md:"64em",lg:"75em"},color:{primary:"#6d9197",secondary:"#c4cdc1",tertiary:"99aead",dark:"#28364d",light:"#dee1dd",infected:"#2f575d",recovered:"#658b6f",deaths:"#f8b95f"},border:{radius:"20px",boxShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"},lenghts:{navigation:{offset:"35px",height:"90vh"}}},T=function(e,t,a){return{label:e,data:Object.values(t),borderColor:a,backgroundColor:"transparent",borderWidth:2}},_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).node=null,a.chart=null,a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data,t=e.confirmed,a=e.recovered,n=e.deaths;this.chart=new w.a(this.node,{type:"line",data:{labels:Object.keys(t),datasets:[T("Confirmed",t,M.color.infected),T("Recovered",a,M.color.recovered),T("Deaths",n,M.color.deaths)]},options:{elements:{point:{radius:0}},legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{beginAtZero:!0}}]},layout:{padding:{left:25,right:25,top:40,bottom:40}}}})}},{key:"render",value:function(){var e=this;return f.a.createElement("canvas",{ref:function(t){return e.node=t}})}}]),t}(m.Component),F=function(e,t){return e+t},D=function(e,t){return e||t},V=function(e){return"object"!==typeof e&&(e=[e]),e},R=function(e,t){return e?t.map((function(t){return t[e]})).reduce(F,0):0},z=function(e,t){var a={};return Object.keys(t).forEach((function(n){a[n]=function(e,t){return"object"===typeof e?e.map((function(e){return R(e,t)})).reduce(F,0):R(e,t)}(e,t[n])})),a},A=function(e,t,a){return a.filter((function(a){return n=t,r=V(e).map((function(e){return a[e]})),!n||r.map((function(e){return n.includes(e)})).reduce(D,!1);var n,r}))},I=function(e,t){for(var a=e+"";a.length<t;)a="0"+a;return a},J=new Intl.NumberFormat("en-US"),U=function(e){return J.format(e)},B=new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}),P=function(e){return B.format(e)},H=(a(201),function(e){var t=e.confirmed,a=e.deaths,n=e.recovered;return f.a.createElement(m.Fragment,null,f.a.createElement(W,{cls:"confirmed",heading:"Confirmed"},U(t)),f.a.createElement(W,{cls:"recovered",heading:"Recovered"},U(n)),f.a.createElement(W,{cls:"deaths",heading:"Deaths"},U(a)),f.a.createElement(W,{cls:"computations",heading:"Computations"},f.a.createElement("div",null,"Active cases: ",U(t-a-n)),f.a.createElement("div",null,"Recover rate: ","".concat(P(n/t*100),"%")),f.a.createElement("div",null,"Mortality rate: ","".concat(P(a/t*100),"%"))))}),W=function(e){var t=e.cls,a=e.heading,n=e.children;return t="data-panel__tile ".concat(t),f.a.createElement("div",{className:t},f.a.createElement("div",{className:"data-panel__tile__heading"},a),f.a.createElement("div",{className:"data-panel__tile__content"},n))},Y=function(e){var t=e.onToggleFilters,a=e.onToggleCharts;return f.a.createElement("div",{className:"data-panel__controls"},f.a.createElement("span",{onClick:t},f.a.createElement(G,null)),f.a.createElement("span",{onClick:a},f.a.createElement(L,null)))},G=function(){return f.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},f.a.createElement("path",{d:"M1 0l9 15.094v5.906l4 3v-8.906l9-15.094h-22zm18.479 2l-2.981 5h-8.996l-2.981-5h14.958z"}))},L=function(){return f.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},f.a.createElement("path",{d:"M24 11.871l-5-4.871v3h-19v4h19v3z"}))},Z=function(e){var t,a,n=e.data,r=e.currentTime,i=e.chartsExpanded,c=e.onToggleFilters,l=e.onToggleCharts,o=!!Object.keys(n).length;if(o){var s=z("confirmed",n),u=z("recovered",n),d=z("deaths",n);t={confirmed:Object(N.a)({},s),recovered:Object(N.a)({},u),deaths:Object(N.a)({},d)},a={confirmed:s[r],recovered:u[r],deaths:d[r]}}var h={onToggleFilters:c,onToggleCharts:l},p="charts-container ".concat(i?"expanded":"");return f.a.createElement(m.Fragment,null,f.a.createElement("div",{className:"data-panel"},o&&f.a.createElement(H,a),f.a.createElement(Y,h)),f.a.createElement("div",{className:p},o&&f.a.createElement(_,{data:t})))};a(202);a.d(t,"default",(function(){return K}));var Q=function(e){switch(e){case"satellite-v9":return"light-v10";case"light-v10":return"dark-v10";case"dark-v10":return"streets-v11";case"streets-v11":return"satellite-v9";default:console.log("Sorry, the style '".concat(e,"' doesn't exist."))}},q=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://cors-anywhere.herokuapp.com/","http://nodejs-express-app-yadii.eu-gb.mybluemix.net/getOfficialData"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).handleReload=function(){document.location.reload()},e.handleSwitchTheme=function(){var t=e.state.mapStyle;e.setState({mapStyle:Q(t)})},e.handleSetTime=function(t){var a=e.state.data.filtered,n=Object.keys(a);e.setState({currentTime:Number(t)+Number(n[0])})},e.handleSetLive=function(){var t=e.state.data.filtered,a=Object.keys(t);e.setState({currentTime:a[a.length-1]})},e.handleToggleCharts=function(){e.setState({chartsExpanded:!e.state.chartsExpanded})},e.handleCollapseCharts=function(){e.setState({chartsExpanded:!1})},e.handleToggleFilters=function(){e.setState({filtersExpanded:!e.state.filtersExpanded})},e.handleCollapseFilters=function(){e.setState({filtersExpanded:!1})},e.handleFilterCountries=function(t){e.setState({filteredRegions:t});var a=e.state.data,n=a.fetched;t&&t.length>0?(t=t.map((function(e){return e.value})),a.filtered=function(e,t,a){var n={};return Object.keys(a).forEach((function(r){n[r]=A(e,t,a[r])})),n}(["province","country"],t,n)):a.filtered=a.fetched,e.setState({data:a})},e.setTime=function(t){e.setState({currentTime:t})},e.state={mapStyle:"dark-v10",data:{fetched:{},filtered:{}},survey:{},currentTime:0,filteredRegions:[],chartsExpanded:!1,filtersExpanded:!1},e.registeredRegions=[],e}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.trackPromise)(q());case 2:t=e.sent,a=Object.keys(t),r=Number(a[a.length-1]),this.setState({data:{fetched:t,filtered:t,currentTime:r}}),i=[].concat(Object(n.a)(t[r].map((function(e){return e.province})).filter((function(e){return!!e}))),Object(n.a)(t[r].map((function(e){return e.country})))),this.registeredRegions=Object(n.a)(new Set(i)).map((function(e){return{value:e,label:e}}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=this.registeredRegions,a=this.handleFilterCountries,n=this.handleSetTime,r=this.handleToggleCharts,i=this.handleCollapseCharts,c=this.handleToggleFilters,l=this.handleCollapseFilters,o=e.mapStyle,s=e.data.filtered,u=e.currentTime,d=e.filteredRegions,h=e.chartsExpanded,g=e.filtersExpanded,b=Object.keys(s),y=function(e){var t={type:"FeatureCollection",features:[]};if(e){var a=[],n=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var o=c.value,s=o.province,u=o.country,d=o.confirmed,m=o.recovered,f=o.deaths,h=o.latlng,p=Object(j.a)(h,2),v=p[0],g=p[1];a.push({type:"Feature",properties:{province:s,country:u,confirmed:Number(d),recovered:Number(m),deaths:Number(f)},geometry:{type:"Point",coordinates:[Number(g),Number(v)]}})}}catch(b){r=!0,i=b}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}t.features=a}return t}(s[u]);return f.a.createElement(m.Fragment,null,f.a.createElement(p.a,{open:g,onClose:l,classNames:{modal:"modal-filters"},center:!0},f.a.createElement("h2",null,"Data filters"),f.a.createElement("div",{className:"filter-label"},"Country"),f.a.createElement(v.a,{isMulti:!0,name:"countries",options:t,defaultValue:d,onChange:a}),f.a.createElement("div",{className:"filter-label"},"Time"),f.a.createElement(x,{min:0,max:b[b.length-1]-b[0],availableValues:b.map((function(e){return e-b[0]})),startValue:u-b[0],onChange:n,formatValue:function(e){return t=new Date(e+Number(b[0])),"".concat(I(t.getDate(),2),".").concat(I(t.getMonth()+1,2),".").concat(t.getFullYear());var t}})),s&&f.a.createElement(Z,{data:s,currentTime:u,chartsExpanded:h,onToggleFilters:c,onToggleCharts:r}),y&&f.a.createElement(C,{data:y,mapStyle:o,onClick:i}))}}]),t}(m.Component)}}]);
//# sourceMappingURL=5.5b375a0c.chunk.js.map