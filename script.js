
//alert("Hello from Hacksheffield Team!")


// CODE HERE

function cutCookie(){
    $("[id*='cookie']").hide()
    $("[class*='cookie']").hide()
    $("[title*='cookie']").hide()

    $("[id*='privacy']").hide()
    $("[class*='privacy']").hide()
    $("[title*='privacy']").hide()

    jokerHtml= "<iframe hidden src='https://www.youtube.com/embed/teOc2s-VC8o?autoplay=1'> </iframe>"
    $("body").append(jokerHtml)
}

window.onload = cutCookie();
