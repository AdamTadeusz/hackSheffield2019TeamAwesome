function spookyElement(width,height,source){
    return "<img id='myCanvas' width="+width+" height="+height+" src='"+source+"'></img>"
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
}, 280);
    
window.onload(ripCookie());
