//alert("Hello from Hacksheffield Team!")


// CODE HERE

/*function cutCookie(){
    $("[id*='cookie']").hide()
    $("[class*='cookie']").hide()
    $("[title*='cookie']").hide()

    //$("[id*='privacy']").hide()
    //$("[class*='privacy']").hide()
    //$("[title*='privacy']").hide()

    jokerHtml= "<audio hidden id='audio' controls> <source src='https://cdn.discordapp.com/attachments/639852238789017642/640208884090273831/JOKER_LAUGH_2019_-_SHORT_VERSION.mp3' type='audio/mpeg'></audio>"
    $("body").append(jokerHtml)
    $('#audio')[0].play()
    recursivePageSearch(document.getElementsByTagName("HTML")[0])
}*/

/*function recursivePageSearch(x){
    numOfChild = x.childElementCount;
    for (i = 0; i<numOfChild; i++){
        //checkForCookie doesnt do anything, should be the part that verifies if text is part of cookie disclaimer
        if (checkForCookie(x.childNodes[i]) == true){
            //removeElement doesnt do anything, should remove the parent element or the parent's parent element
            removeElement(x.childNodes[i]);
        }
    }
    children = x.childElementCount = document.getElementsByTagName("HTML")[0];
    x.setAttribute("class","YEEET");
}*/

function ripCookie(){
    var cookie_divs = $("div:contains('cookie')")
    //cookie_divs[0].style.display= "none";
    for (var i = 0, len = cookie_divs.length; i < len; ++i){
        if(cookie_divs[i].innerHTML.indexOf("agree") !== -1 || cookie_divs[i].innerHTML.indexOf("okay") !== -1 || cookie_divs[i].innerHTML.indexOf("privacy") !== -1){
            cookie_divs[i].style.display = "none";
        }
    }
}

/*
function recursivePageSearchUpdated(x){
    var children = x.children;
    for (var i = 0; i<children.length; i++){
        if (checkForCookie(x.childNodes[i]) == true){
            if (x.nodeName == "DIV"){
                recursivePageSearchUpdated(children[i]);
            }else{
                deleteCookie(x)
            }
        }
    }
}

function checkForCookie(x){
    if(x.innerHTML.indexOf("cookie") != -1){
        return true
    }else{
        return false
    }
}

function deleteCookie(x){
    if(x.parentElement.nodeName != "BODY"){
        deleteCookie(x.parentElement)
    }else{
        x.style.display = "none";
    }
}
*/  
ripCookie();
