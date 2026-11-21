(()=>{
const features=["Низький рівень розвитку продуктивних сил, майже повна залежність від природи","Рівність усіх членів суспільства","Колективний характер праці","Спільна власність на знаряддя та результати праці","Зрівняльний поділ продуктів","Язичницькі вірування"];
const css="\n.slide.diagram-page{padding:30px 44px 28px;background:linear-gradient(122deg,rgba(244,240,226,.55),transparent 37%),#fbfaf6;}\n.slide.diagram-page::before{content:\"\";position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,#7b3e48 0 12%,#c5a361 12% 24%,#4d6043 24% 100%);}\n.diagram-page .heading{border-bottom:1px solid #c8cdbf;padding:0 0 10px;margin:0 0 16px;display:flex;align-items:baseline;gap:.7em;font-size:44.8px;line-height:1.12;}\n.diagram-page .heading small{font-size:.68em;font-weight:700;color:#7b3e48;padding-left:13px;border-left:4px solid #bf9a60;}\n.diagram-page .sub{font:700 43px/1.1 Philosopher,Georgia,serif;color:#4d6043;margin:0 0 12px;}\n.diagram-page .diagram-label{font:700 48px/1.12 Philosopher,Georgia,serif;color:#7b3e48;letter-spacing:.025em;text-align:center;margin:0 0 18px;position:relative;}\n.diagram-page .diagram-label::after{content:\"\";display:block;height:2px;width:92px;background:#b79a6b;margin:10px auto 0;}\n.diagram-network{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;flex:1;min-height:0;align-items:stretch;}\n.diagram-col{display:grid;grid-template-rows:repeat(3,minmax(0,1fr));gap:16px;}\n.diagram-node{background:linear-gradient(96deg,#f0efe6,#faf9f5);border-top:2px solid #b1bfa9;border-bottom:1px solid #d0d6ca;display:flex;align-items:center;justify-content:center;text-align:center;padding:18px 25px;min-width:0;}\n.diagram-node:nth-child(2){border-top-color:#c4a16b;}\n.diagram-node:nth-child(3){border-top-color:#9ea98f;}\n.diagram-node p{font:400 36px/1.27 Literata,Georgia,serif;color:#29312b;margin:0;}\n";
function esc(s){return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");}
function initialize(){
const frame=document.getElementById("book-frame");
const doc=frame?.contentDocument;
const win=frame?.contentWindow;
if(!doc||!win||win.__fiveSlidesReady)return;
const slides=[...doc.querySelectorAll(".slide")];
if(slides.length<5)return;
const slide5=slides[4];
slide5.className="slide cleanpage lesson-sources diagram-page";
slide5.setAttribute("aria-label","Сторінка 5: Первіснообщинний лад");
const card=text=>'<div class="diagram-node"><p>'+esc(text)+'</p></div>';
slide5.innerHTML='<h1 class="heading"><small>Тема 1.</small> Стародавня історія України</h1><h2 class="sub">Первіснообщинний лад</h2><h3 class="diagram-label">ОЗНАКИ ПЕРВІСНООБЩИННОГО ЛАДУ</h3><div class="diagram-network"><div class="diagram-col">'+features.slice(0,3).map(card).join("")+'</div><div class="diagram-col">'+features.slice(3).map(card).join("")+'</div></div>';
slides.slice(5).forEach(slide=>slide.remove());
const style=doc.createElement("style");
style.textContent=css;
doc.head.append(style);
const oldShow=win.show;
if(typeof oldShow==="function"){
win.show=function(i){
 const pos=((i%5)+5)%5;
 oldShow(pos);
 const counter=doc.getElementById("counter");
 if(counter)counter.textContent=(pos+1)+" / 5";
};
win.show(0);
}
win.__fiveSlidesReady=true;
}
const frame=document.getElementById("book-frame");
if(frame){
frame.addEventListener("load",initialize);
if(frame.contentDocument?.readyState==="complete")initialize();
}
})();