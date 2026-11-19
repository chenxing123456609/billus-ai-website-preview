// Match the sticky header to the broad page surface immediately beneath it.
export function createHeaderContrast(){
 let header=null,frame=0;
 const wideSurface=el=>{
  const r=el.getBoundingClientRect();
  return r.width>=document.documentElement.clientWidth*.7;
 };
 function surfaceAt(x,y){
  const hit=document.elementsFromPoint(x,y).find(el=>!el.closest('.site-header,dialog'));
  for(let el=hit;el;el=el.parentElement){
   if(!wideSurface(el))continue;
   const color=getComputedStyle(el).backgroundColor;
   const parts=color.match(/[\d.]+/g)?.map(Number);
   if(!parts||parts.length<3||(parts[3]??1)<.8)continue;
   const luminance=.2126*parts[0]+.7152*parts[1]+.0722*parts[2];
   return luminance>145;
  }
  return true;
 }
 function update(){
  frame=0;
  if(!header?.isConnected)header=document.querySelector('.site-header');
  if(!header)return;
  if(window.scrollY<8){header.classList.remove('is-light-surface');return;}
  const y=Math.min(innerHeight-1,header.getBoundingClientRect().bottom+2);
  const width=document.documentElement.clientWidth;
  const samples=[.2,.5,.8].map(r=>surfaceAt(width*r,y));
  header.classList.toggle('is-light-surface',samples.filter(Boolean).length>=2);
 }
 function refresh(){if(!frame)frame=requestAnimationFrame(update);}
 window.addEventListener('scroll',refresh,{passive:true});
 window.addEventListener('resize',refresh,{passive:true});
 function dispose(){
  window.removeEventListener('scroll',refresh);
  window.removeEventListener('resize',refresh);
  if(frame)cancelAnimationFrame(frame);
 }
 return{refresh,dispose};
}
