import{j as e,H as l,R as c,g as m,N as x}from"./index-C3JP5WYM.js";function o({data:t,row:s,setModal:a=!1}){function r(){a&&a(!1)}return e.jsxs("div",{className:`mb-20 flex flex-col items-center ${!s&&"md:mb-15 md:flex-row"}`,children:[!s&&e.jsx("figure",{className:"max-w-full rounded sm:max-w-[500px] md:mr-10",children:e.jsx(l,{onClick:r,className:"w-full",to:`/attraction/${t._id}#`,children:e.jsx("img",{src:t.image.path,className:"rounded-t md:rounded-b",alt:""})})}),e.jsxs("div",{className:`w-full px-6 pb-8 pt-4 shadow-md ${!s&&"sm:max-w-[500px] md:max-w-none md:p-0 md:shadow-none"}`,children:[e.jsx("h3",{className:"mb-1 text-2xl font-bold",children:t.name}),e.jsx(c,{rating:t.rating}),e.jsx("p",{className:"mb-4 mt-6 max-w-[450px] text-base font-light",children:t.desc.length>200?`${t.desc.substring(0,200)}...`:t.desc}),e.jsx(l,{onClick:r,className:"rounded-[100px] bg-primary px-4 py-2 text-xl text-white duration-300 hover:bg-secondary",to:`/attraction/${t._id}#`,children:"Read more"})]})]})}function d({attractions:t}){return e.jsx("div",{className:"flex flex-col items-center",children:t.map(s=>e.jsx(o,{data:s,row:!1},s._id))})}function p({data:t,country:s}){const{pathname:a}=m();return e.jsxs("section",{className:"mb-15",id:"attractions",children:[e.jsxs("div",{className:"mb-6 flex items-center",children:[e.jsx("h2",{className:"mr-2 text-2xl font-bold",children:"Attractions"}),e.jsx("span",{className:"mt-1 h-[2px] w-full bg-primary"})]}),s&&s.states.length>1&&s.attractions.length>0&&e.jsxs("div",{className:"flex w-full flex-wrap items-center justify-center gap-2 py-2 pb-10",children:[e.jsx(l,{className:`border-2 border-black rounded-[100px] py-1 px-3 mr-3 ${a===`/country/${s.id}`?"text-white bg-black":"hover:bg-gray-400 hover:text-white"}`,to:`/country/${s.id}`,children:"All"}),s.states.map(({name:r,id:n})=>{const i=`/country/${s.id}/${n}`;return e.jsx(l,{className:`border-2 border-black rounded-[100px] py-1 px-3 mr-3 ${a.includes(i)?"text-white bg-black":"hover:bg-gray-400 hover:text-white"}`,to:i,children:r},n)})]}),t.length?e.jsx(d,{attractions:t}):e.jsx(x,{})]})}export{p as A};
