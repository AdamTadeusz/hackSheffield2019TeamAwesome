//alert("Hello from Hacksheffield Team!")


// CODE HERE

function cutCookie(){
    $("[id*='cookie']").hide()
    $("[class*='cookie']").hide()
    $("[title*='cookie']").hide()

    $("[id*='privacy']").hide()
    $("[class*='privacy']").hide()
    $("[title*='privacy']").hide()
    recursivePageSearch(document.getElementsByTagName("HTML")[0])
}

function recursivePageSearch(x){
    numOfChild = x.childElementCount;
    for (i = 0; i<numOfChild; i++){
        if (checkForCookie(x.childNodes[i]) == true){
            removeElement(x.childNodes[i]);
        }
        recursivePageSearch(x.childNodes[i]);
    }
    children = x.childElementCount = document.getElementsByTagName("HTML")[0];
    x.setAttribute("class","YEEET");
}

window.onload = cutCookie();
