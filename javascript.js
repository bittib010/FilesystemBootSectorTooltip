/*************************
 * For Jump instructions *
 *************************/

/* var highlight2 = document.getElementsByClassName("jump");

for (var i = 0; i < highlight.length; i++) {
    highlight[i].addEventListener("mouseover", highlightOEM);
    highlight[i].addEventListener("mouseout", DonthighlightOEM);
}

function highlightOEM() {
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].classList.add("bytehighlight");
    }
}
function DonthighlightOEM() {
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].classList.remove("bytehighlight");
    }
} */

/***************************
 * For OEM bytes           *
 ***************************/
var highlight = document.getElementsByClassName("oem");

for (var i = 0; i < highlight.length; i++) {
    highlight[i].addEventListener("mouseover", highlightOEM);
    highlight[i].addEventListener("mouseout", DonthighlightOEM);
}

function highlightOEM() {
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].classList.add("bytehighlight");
    }
}
function DonthighlightOEM() {
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].classList.remove("bytehighlight");
    }
}

