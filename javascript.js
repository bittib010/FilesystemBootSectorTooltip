
// https://stackoverflow.com/questions/12786810/hover-on-element-and-highlight-all-elements-with-the-same-class

var classes = ["one", "two", "three"]; //list of your classes
var elms = {};
var n = {}, nclasses = classes.length;
function changeColor(classname, color) {
    var curN = n[classname];
    for(var i = 0; i < curN; i ++) {
        elms[classname][i].style.backgroundColor = color;
    }
}
for(var k = 0; k < nclasses; k ++) {
    var curClass = classes[k];
    elms[curClass] = document.getElementsByClassName(curClass);
    n[curClass] = elms[curClass].length;
    var curN = n[curClass];
    for(var i = 0; i < curN; i ++) {
        elms[curClass][i].onmouseover = function() {
            changeColor(this.className, "yellow");
        };
        elms[curClass][i].onmouseout = function() {
            changeColor(this.className, "white");
        };
    }
};
