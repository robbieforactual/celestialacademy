// open source code for 'toast popup' by Acash -> https://codepen.io/acash/pen/vZKPbY


function toast(msg){

    this.backgroundColor = '#29569a';
    this.textColor = '#DDD';
    this.toastTime = 0;

    if(_("toast_div") && _("toast_div").style.display != "none"){
        clearTimeout(toastTime);
    }
    if(!(_("toast_div"))){
        var div = document.createElement("div");
        div.setAttribute("id", "toast_div");
        div.style.minWidth = "5em";
        div.style.backgroundColor = this.backgroundColor;
        div.style.borderRadius = "3px";
        div.style.position = "fixed";
        div.style.bottom = "50%";
        div.style.right = "20%";
        div.style.padding = "3em";
        div.style.zIndex= "99";
        div.style.webkitAnimation= "popup 0.9s ease-in-out";
        div.style.animation= "popup 0.9s ease-in-out";
        var p = document.createElement("p");
        p.setAttribute("id", "toast_p");
        p.style.color = this.textColor;
        p.style.width = "100%";
        p.style.margin = "0%";
        p.style.display = "inline";
      p.style.fontFamily = "Arial";
        div.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
        var text = document.createTextNode(msg);
        p.appendChild(text);
        div.appendChild(p);
        document.body.appendChild(div);
        div.style.transition = "all 0.2s ease-in";
    }else{
        if(_("toast_div").style.display != "none"){
            _("toast_div").style.display = "none";
        }
        _("toast_p").innerHTML = msg;
    }
    _("toast_div").style.display = "block";
    this.toastTime = setTimeout(function(){
        _("toast_div").style.display = "none";
    }, 5000);


    function _(key){
      return document.getElementById(key);
    }
}
