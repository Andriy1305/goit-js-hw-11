import{i,S as c}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const f=r=>{const t=new URLSearchParams({key:"48862284-111645087e0508ab98b21d672",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},u=r=>`<li class="gallery-item">
  <a href="${r.largeImageURL}" class="gallery-link"><img src="${r.webformatURL}" alt="${r.tags}" width="360" class="gallery-img" loading="lazy"/></a>
  <ul class="gallery-info-list">
    <li>
      <h3>Likes</h3>
      <p>${r.likes}</p>
    </li>
    <li>
      <h3>Views</h3>
      <p>${r.views}</p>
    </li>
    <li>
      <h3>Comments</h3>
      <p>${r.comments}</p>
    </li>
    <li>
      <h3>Downloads</h3>
      <p>${r.downloads}</p>
    </li>
  </ul>
</li>`,m=document.querySelector(".search-form"),n=document.querySelector(".gallery"),d=r=>{const t=document.querySelector(".loader-container");t.style.display="block",n.innerHTML="",r.preventDefault();const a=r.currentTarget.elements.query.value.trim();if(a===""){t.style.display="none",i.error({title:"",message:"Please complete the form",messageColor:"#fafafb",icon:"fas fa-keyboard",iconColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"});return}f(a).then(l=>{l.total===0&&i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",icon:"far fa-file-image",iconColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"});const e=l.hits.map(s=>u(s)).join("");n.innerHTML=e,new c(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}).catch(l=>i.error({message:"Something wrong",messageColor:"#fafafb",icon:"fas fa-exclamation-triangle",iconColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"})).finally(()=>{t.style.display="none"}),r.target.reset()};m.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
