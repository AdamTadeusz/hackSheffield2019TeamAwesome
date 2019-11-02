
//alert("Hello from Hacksheffield Team!")


// CODE HERE

function cutCookie(){
    $("[id*='cookie']").hide()
    $("[class*='cookie']").hide()
    $("[title*='cookie']").hide()

    $("[id*='privacy']").hide()
    $("[class*='privacy']").hide()
    $("[title*='privacy']").hide()
}

window.onload = cutCookie();
