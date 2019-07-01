function links()
{
  for(let btn of document.querySelectorAll(".btn"))
  {
    btn.onclick=function(){this.getAttribute("href") ? window.location.href=this.getAttribute("href") : {}};
  }
}
