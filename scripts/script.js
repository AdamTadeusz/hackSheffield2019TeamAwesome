function spookyElement(width,height,source){
    return "<img id='myCanvas' width="+width+" height="+height+" src='"+source+"'></img>"
}

function spookyJumpScare(x){
    var node = document.createElement("IMG");
    node.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHz6zlhA0dMc5-TO9YoTvoQlecGOiJ4BCZDAFECCkDacqT_Dw&s");
    x.appendChild(node);
    //setTimeout(thingToSpook.removeChild(thingToSpook.children[-1]), 1000)
}

setTimeout(function ripCookie(){
    var cookie_divs = $("div:contains('cookie')")
    for (var i = 0, len = cookie_divs.length; i < len; ++i){
        if((cookie_divs[i].innerHTML.indexOf("agree") !== -1 || cookie_divs[i].innerHTML.indexOf("okay") !== -1 || cookie_divs[i].innerHTML.indexOf("privacy") !== -1) && cookie_divs[i].clientHeight < 1000){
            var h = $(cookie_divs[i]).height()

            $(cookie_divs[i]).css('height',h)
            $(cookie_divs[i]).html(spookyElement($(cookie_divs[i]).width(),h,'https://media1.tenor.com/images/2802f58da8fe7ef8ef1126f2f9801d2f/tenor.gif?itemid=8654420'))
            //cookie_divs[i].style.display = "none";
        }
    }
    for (var j=0; j<10;j++){
        recursivePageSearchUpdated(document.body);
    }
}, 280);

function recursivePageSearchUpdated(x){
    var children = x.children;
    if (x.hasChildNodes()){
        for (var i = 0; i<children.length; i++){
            recursivePageSearchUpdated(x.children[i]);
        }
    }else{
        spookyJumpScare(x);
    }
}
    
window.onload(ripCookie());
