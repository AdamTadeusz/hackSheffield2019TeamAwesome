//alert("Hello from Hacksheffield Team!")


// CODE HERE

function cutCookie(){
	var a = $(':contains("cookie"):not(:has(*))');
	for( i = 1; i < a.length; i++) {
		del_popup(a[i]);
	}
	function del_popup(b) {
		console.log(b);
		if (b.parent().is('body')) {
			b.remove();
		} else {
			c = b.parent;
			del_popup(c);
		}
	}
	
	function findElementByText(text) {
    var jSpot = $("b:contains(" + text + ")")
                .filter(function() { return $(this).children().length === 0;})
                .parent();  // because you asked the parent of that element

    return jSpot;
}

    jokerHtml= "<audio hidden id='audio' controls> <source src='https://cdn.discordapp.com/attachments/639852238789017642/640208884090273831/JOKER_LAUGH_2019_-_SHORT_VERSION.mp3' type='audio/mpeg'></audio>"
    $("body").append(jokerHtml)
    $('#audio')[0].play()
    recursivePageSearch(document.getElementsByTagName("HTML")[0])
}

function recursivePageSearch(x){
    numOfChild = x.childElementCount;
    for (i = 0; i<numOfChild; i++){
        //checkForCookie doesnt do anything, should be the part that verifies if text is part of cookie disclaimer
        if (checkForCookie(x.childNodes[i]) == true){
            //removeElement doesnt do anything, should remove the parent element or the parent's parent element
            removeElement(x.childNodes[i]);
        }
        recursivePageSearch(x.childNodes[i]);
    }
    children = x.childElementCount = document.getElementsByTagName("HTML")[0];
    x.setAttribute("class","YEEET");
}

window.onload = cutCookie();
