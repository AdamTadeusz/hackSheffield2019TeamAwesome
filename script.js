
//alert("Hello from Hacksheffield Team!")


// CODE HERE

function cutCookie(){
    $("[id*='cookie']").hide()
    $("[class*='cookie']").hide()
    $("[title*='cookie']").hide()

    $("[id*='privacy']").hide()
    $("[class*='privacy']").hide()
    $("[title*='privacy']").hide()

    jokerHtml= "<audio hidden id='audio' controls> <source src='https://cdn.discordapp.com/attachments/639852238789017642/640208884090273831/JOKER_LAUGH_2019_-_SHORT_VERSION.mp3' type='audio/mpeg'></audio>"
    $("body").append(jokerHtml)
    $('#audio')[0].play()
}

window.onload = cutCookie();
