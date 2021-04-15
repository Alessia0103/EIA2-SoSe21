"use strict";
var A03_EventInspector;
(function (A03_EventInspector) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        var span = document.querySelector("span");
        let position = span;
        position.style.left = x + "px";
        position.style.top = y + "px";
        position.textContent = "X: " + x + "px | " + "Y: " + y + "px ";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.type);
    }
})(A03_EventInspector || (A03_EventInspector = {}));
//# sourceMappingURL=03_ts.js.map