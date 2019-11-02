setTimeout(function ripCookie(){
    var cookie_divs = $("div:contains('cookie')")
    for (var i = 0, len = cookie_divs.length; i < len; ++i){
        if((cookie_divs[i].innerHTML.indexOf("agree") !== -1 || cookie_divs[i].innerHTML.indexOf("okay") !== -1 || cookie_divs[i].innerHTML.indexOf("privacy") !== -1) && cookie_divs[i].clientHeight < 1000){
            cookie_divs[i].style.display = "none";
        }
    }
}, 280);
    
window.onload(ripCookie());