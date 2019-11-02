function spookyElement(width,height,source){
    return "<img id='myCanvas' width="+width+" height="+height+" src='"+source+"'></img>"
}
function replaceElement(jQElement){
    var h = jQElement.height()

    jQElement.css('height',h)

    jQElement.html(spookyElement(jQElement.width(),h,'https://media1.tenor.com/images/2802f58da8fe7ef8ef1126f2f9801d2f/tenor.gif?itemid=8654420'))
    spookyFadeAway(jQElement)
}

function spookyJumpScare(x){
    var node = document.createElement("IMG");
    node.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHz6zlhA0dMc5-TO9YoTvoQlecGOiJ4BCZDAFECCkDacqT_Dw&s");
    x.appendChild(node);
    //setTimeout(thingToSpook.removeChild(thingToSpook.children[-1]), 1000)
}
function spookyFadeAway(jQElement){
    var side = 'right';
    var child = jQElement.children();
    child.css('position','absolute');
    
    child.rotate(5)
    rotateInterval = setInterval(function () { 
        if(side=='right'){
            child.rotate(-10)
            side='left'
        }
        else{
            child.rotate(10)
            side='right'
        }
        child.animate({left: "+=50px",top:"+=50"});

    },350)
    setTimeout(function removeElement(){
        jQElement.remove()
    },5000)
}

setTimeout(function ripCookie(){
    var cookie_divsS = [$("div:contains('cookie')"), $("[id*='cookie']"),$("[class*='cookie']"),$("[title*='cookie']")]
    console.log("howm:",$("div:contains('cookie')").length)
    for (var j=0;j<cookie_divsS.length;j++){
        var cookie_divs=cookie_divsS[j]
    for (var i = 0, len = cookie_divs.length; i < len; ++i){
        if((cookie_divs[i].innerHTML.indexOf("agree") !== -1 || cookie_divs[i].innerHTML.indexOf("okay") !== -1 || cookie_divs[i].innerHTML.indexOf("ok") !== -1 || cookie_divs[i].innerHTML.indexOf("privacy") !== -1) && cookie_divs[i].clientHeight < 700){
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
    for (var j=0; j<10;j++){
        //recursivePageSearchUpdated(document.body);
    }
}, 400);

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

jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};


