(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{796:function(t,e,n){"use strict";n.r(e);n(2),n(22);var o=n(586),r=(n(591),{data:function(){return{}},mounted:function(){},methods:{pdfgenerator:function(){var t=document.getElementById("generate"),e=[{name:"Gautam Sharma",age:32,country:"India"},{name:"John Williamson Latham",age:31,country:"New Zealand"},{name:"Adam Nicholls",age:31,country:"South Africa"}],n=[];e.forEach((function(element,t,e){n.push([element.name,element.age,element.country])})),t.onclick=function(){var t=new o.default;console.log(e),t.autoTable({head:[["Name","Age","Country"]],body:n}),t.save("table.pdf")}}}}),v=n(12),component=Object(v.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"content"},[e("button",{attrs:{id:"generate"},on:{click:function(e){return t.pdfgenerator()}}},[t._v("Generate PDF")]),t._v(" "),e("h4",[t._v("PDF GENERATOR")]),t._v(" "),e("button",{on:{click:function(e){return t.pdfgenerator()}}},[t._v("Download")]),t._v(" "),e("br"),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"canvas_div_pdf"}},[e("p",[t._v("hello this is a paragraph")]),t._v(" "),e("table",{staticClass:"table table-dark"},[e("thead",[e("tr",[e("th",[t._v("Firstname")]),t._v(" "),e("th",[t._v("Lastname")]),t._v(" "),e("th",[t._v("Email")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("John")]),t._v(" "),e("td",[t._v("Doe")]),t._v(" "),e("td",[t._v("john@example.com")])]),t._v(" "),e("tr",[e("td",[t._v("Mary")]),t._v(" "),e("td",[t._v("Moe")]),t._v(" "),e("td",[t._v("mary@example.com")])]),t._v(" "),e("tr",[e("td",[t._v("July")]),t._v(" "),e("td",[t._v("Dooley")]),t._v(" "),e("td",[t._v("july@example.com")])])])])])}],!1,null,null,null);e.default=component.exports}}]);