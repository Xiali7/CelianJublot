// Rien à modifier ici pour ajouter du contenu : voir data/site.js et data/projects.js
(function(){
  var S=window.SITE, P=window.PROJECTS, $=function(s){return document.querySelector(s)};
  function grad(p){return p.cover?"url('"+p.cover+"')":"linear-gradient(135deg,"+p.tint[0]+","+p.tint[1]+")"}
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}

  document.querySelectorAll("[data-site]").forEach(function(n){n.textContent=S[n.dataset.site]});
  document.title=S.name+" – Portfolio";
  if(S.heroVideo)$("#heroVideo").src=S.heroVideo;
  $("#tools").innerHTML=S.tools.map(function(t){return "<li>"+t+"</li>"}).join("");
  var m=$("#mail");m.href="mailto:"+S.email;m.textContent=S.email;
  $("#links").innerHTML=S.links.map(function(l){return '<a href="'+l.url+'">'+l.label+"</a>"}).join("");

  P.filter(function(p){return p.type==="work"}).forEach(function(p){
    var b=el("button","card",'<div class="img" style="background-image:'+grad(p)+'"></div><div class="cap"><h3>'+p.title+"</h3><span>"+p.subtitle+"</span></div>");
    b.onclick=function(){open(p)};$("#gridWork").appendChild(b)});

  var lab=P.filter(function(p){return p.type==="lab"}),kinds=["Tout"];
  lab.forEach(function(p){if(kinds.indexOf(p.kind)<0)kinds.push(p.kind)});
  function renderLab(k){
    $("#rowsLab").innerHTML="";
    lab.filter(function(p){return k==="Tout"||p.kind===k}).forEach(function(p){
      var li=el("li"),b=el("button","row",'<div class="th" style="background-image:'+grad(p)+'"></div><div><strong>'+p.title+"</strong><small>"+p.kind+" · "+p.subtitle+'</small></div><span class="st">'+(p.status||"")+"</span>");
      b.onclick=function(){open(p)};li.appendChild(b);$("#rowsLab").appendChild(li)})}
  kinds.forEach(function(k,i){
    var b=el("button","",k);b.setAttribute("aria-pressed",i===0);
    b.onclick=function(){document.querySelectorAll("#labFilters button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});renderLab(k)};
    $("#labFilters").appendChild(b)});
  renderLab("Tout");

  var dlg=$("#modal");
  function open(p){
    var media=(p.media.length?p.media:[{type:"image",src:""}]).map(function(x){
      if(!x.src)return '<div class="ph">Emplacement '+x.type+" (à remplir)</div>";
      if(x.type==="video")return '<video controls playsinline src="'+x.src+'"></video>';
      if(x.type==="demo")return '<iframe src="'+x.src+'" loading="lazy" allowfullscreen></iframe>';
      return '<img alt="'+p.title+'" src="'+x.src+'">'}).join("");
    function f(t,v){return v?"<div><b>"+t+"</b>"+v+"</div>":""}
    $("#modalBody").innerHTML="<h3>"+p.title+"</h3><span>"+p.subtitle+" · "+p.year+'</span><div class="media">'+media+'</div><div class="info">'+f("Pourquoi",p.why)+f("Ce que j’ai fait",p.role)+f("Outils",(p.tools||[]).join(", "))+"</div>";
    dlg.showModal()}
  $("#close").onclick=function(){dlg.close()};
  dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});
})();
