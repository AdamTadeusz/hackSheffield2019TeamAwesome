function spookyElement(width,height,source){
    return "<img id='myCanvas' width="+width+" height="+height+" src='"+source+"'></img>"
}
function replaceElement(jQElement){
    var h = jQElement.height()
    console.log(h)
    jQElement.css('height',h)
    console.log(jQElement)
    jQElement.html(spookyElement(jQElement.width(),h,'https://media1.tenor.com/images/2802f58da8fe7ef8ef1126f2f9801d2f/tenor.gif?itemid=8654420'))
    console.log('end',jQElement)
}

setTimeout(function ripCookie(){
    var cookie_divsS = [$("div:contains('cookie')"), $("[id*='cookie']"),$("[class*='cookie']"),$("[title*='cookie']")]
    console.log("howm:",$("div:contains('cookie')").length)
    for (var j=0;j<cookie_divsS.length;j++){
        var cookie_divs=cookie_divsS[j]
    for (var i = 0, len = cookie_divs.length; i < len; ++i){
        if((cookie_divs[i].innerHTML.indexOf("agree") !== -1 || cookie_divs[i].innerHTML.indexOf("okay") !== -1 || cookie_divs[i].innerHTML.indexOf("ok") !== -1 || cookie_divs[i].innerHTML.indexOf("privacy") !== -1) && cookie_divs[i].clientHeight < 1000){
            if($(cookie_divs[i]).height()<$(window).height())  //if happen to be a full screen overlay then just delete it
                replaceElement($(cookie_divs[i]))
            else
                cookie_divs[i].style.display = "none";

        }
    }}
    console.log($(window).height())
}, 300);

setTimeout(function ripFullScreenOverlays(){
    var bodyCH = $('body').children();

    for (var i = 0, len = bodyCH.length; i < len; ++i){
        if(parseInt($(bodyCH[i]).css('height'))==$(window).height()&&parseInt($(bodyCH[i]).css('width'))==$(window).width()){
            bodyCH[i].style.display = "none";
        }
    }
}, 400);
    




