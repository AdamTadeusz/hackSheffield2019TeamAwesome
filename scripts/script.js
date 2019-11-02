//alert("Hello from Hacksheffield Team!")


// CODE HERE

function cutCookie(){
    //$("[id*='cookie']").hide()
    //$("[class*='cookie']").hide()
    //$("[title*='cookie']").hide()

    //$("[id*='privacy']").hide()
    //$("[class*='privacy']").hide()
    //$("[title*='privacy']").hide()

    //jokerHtml= "<audio hidden id='audio' controls> <source src='https://cdn.discordapp.com/attachments/639852238789017642/640208884090273831/JOKER_LAUGH_2019_-_SHORT_VERSION.mp3' type='audio/mpeg'></audio>"
    //$("body").append(jokerHtml)
    //$('#audio')[0].play()
    var txt = "#body";
    txt = recursivePageSearch(document.body,txt);
    var toAppend = document.createElement("P");
    var textToAppend = document.createTextNode(txt);
    toAppend.appendChild(textToAppend);
    document.getElementsByTagName("BODY")[0].appendChild(toAppend);
    alert(txt);
}

function recursivePageSearch(x,textToAlert){
    var numOfChild = x.children.length;
    var children = x.children;
    //alert("Count "+numOfChild);
    if (numOfChild > 0){
        //alert("Yup");
        for (var i = 0; i < numOfChild; i++){
            //alert("node "+children[i]);
            textToAlert = textToAlert + children[i].nodeName;
            //checkForCookie doesnt do anything, should be the part that verifies if text is part of cookie disclaimer
            //if (checkForCookie(x.childNodes[i]) == true){
            //    //removeElement doesnt do anything, should remove the parent element or the parent's parent element
            //    removeElement(x.childNodes[i]);
            textToAlert = recursivePageSearch(children[i], textToAlert);
        }
    }
    return(textToAlert);
}

cutCookie();
