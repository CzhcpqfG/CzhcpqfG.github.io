import{j as e,r as o}from"./vendor-react-De-jGD7v.js";import{u as p}from"./vendor-i18n-iOOY_NYu.js";function d({title:r,desc:a,className:l="mb-6"}){return e.jsxs("div",{className:`flex items-start gap-[12px] lg:gap-[16px] ${l}`,children:[e.jsx("span",{className:"inline-block w-[4px] h-[24px] lg:h-[28px] bg-brand-green shrink-0 mt-[2px]"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"text-[18px] sm:text-[20px] lg:text-[22px] text-ink-700 font-bold leading-[26px] lg:leading-[28px] text-left",children:r}),a&&e.jsx("p",{className:"text-[13px] lg:text-[14px] text-ink-500 leading-[20px] lg:leading-[22px] mt-[6px] text-left",children:a})]})]})}function m({question:r,answer:a,defaultOpen:l=!1,index:n}){const{t:s}=p("faq"),[t,i]=o.useState(l);return e.jsxs("div",{className:`
        group relative border-l-[3px] transition-all duration-300
        ${t?"border-brand-green bg-[#f6fcf7]":"border-ink-200 hover:border-brand-green hover:bg-[#fafafa] hover:-translate-y-[2px]"}
      `,children:[e.jsxs("button",{type:"button",onClick:()=>i(x=>!x),"aria-expanded":t,"aria-controls":`faq-answer-${n??""}`,className:"w-full flex items-center gap-3 sm:gap-4 text-left px-5 sm:px-6 lg:px-8 py-5 lg:py-6",children:[typeof n=="number"&&e.jsx("span",{className:`
              shrink-0 inline-flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8
              text-[12px] lg:text-[13px] font-bold leading-none
              transition-colors duration-300
              ${t?"bg-brand-green text-white":"bg-ink-100 text-ink-500 group-hover:bg-brand-green group-hover:text-white"}
            `,children:String(n+1).padStart(2,"0")}),e.jsx("span",{className:`
            flex-1 text-[15px] sm:text-[16px] lg:text-[17px] font-bold leading-[24px] lg:leading-[26px]
            transition-colors duration-300
            ${t?"text-brand-green":"text-ink-700 group-hover:text-brand-green"}
          `,children:r}),e.jsxs("span",{className:`
            shrink-0 relative w-6 h-6 lg:w-7 lg:h-7 inline-flex items-center justify-center
            transition-transform duration-300
            ${t?"rotate-45":"rotate-0"}
          `,"aria-label":s(t?"ui.closeAria":"ui.openAria"),children:[e.jsx("span",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-3.5 h-[2px] bg-current transition-colors duration-300",style:{color:t?"#05a045":"#666"}}),e.jsx("span",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-3 lg:h-3.5 bg-current transition-colors duration-300",style:{color:t?"#05a045":"#666"}})]})]}),e.jsx("div",{id:`faq-answer-${n??""}`,className:`
          overflow-hidden transition-all duration-300 ease-in-out
          ${t?"max-h-[1200px] opacity-100":"max-h-0 opacity-0"}
        `,children:e.jsx("div",{className:"px-5 sm:px-6 lg:px-8 pb-5 lg:pb-6 pl-[60px] sm:pl-[72px] lg:pl-[88px]",children:e.jsx("p",{className:"text-[14px] lg:text-[15px] text-ink-600 leading-[24px] lg:leading-[26px] whitespace-pre-line",children:a})})})]})}export{m as F,d as S};
