"use strict";
var randomPoem;
(function (randomPoem) {
    //Arrays mit den Informationen
    let name = ["Harry", "Ron", "Hermine", "Voldemort", "Darco", "Dumbledore"];
    let whattodo = ["liest", "verzaubert", "liebt", "hasst", "trinkt", "spielt"];
    let thing = ["Tom Riddles Tagebuch", "seinen/ ihren Patronus", "den Elderstab", "die Muggels", "ein Glas Butterbeer", "Quidditch"];
    let satz = "";
    //console.log(name[1], whattodo, thing);
    //For schleife welche die Laufvariable Rückwärts zählt; Ausgehend von der länge des Arrays
    for (let i = 6; i <= thing.length; i--) {
        if (i == 0) {
            break;
        }
        //console.log(i);
        getVerse(name, whattodo, thing, satz);
    }
    //unterstrich als präfix entsprechend den Styleguide
    function getVerse(_name, _whattodo, _thing, _satz) {
        //console.log("alohomara");
        // Math.random zufallszahl wird erzeugt, wird mir der länge des übergebenen name-Array
        // math.floor nachkommastelle wird abgeschnitten
        // splice schneidet ein Wort aus dem Array aus, wird zu dem vers addiert.
        let zufallname = Math.floor(Math.random() * _name.length);
        _satz += _name.splice(zufallname, 1) + " ";
        let zufalltodo = Math.floor(Math.random() * _name.length);
        _satz += _whattodo.splice(zufalltodo, 1) + " ";
        let zufallthing = Math.floor(Math.random() * _name.length);
        _satz += _thing.splice(zufallthing, 1) + " ";
        console.log(_satz);
        return _satz;
    }
    for (let i = 6; i <= thing.length; i--) {
        if (i == 0) {
            break;
        }
        //console.log(i);
        getVerse(name, whattodo, thing, satz);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=randomPoem.js.map