"use strict";
var canvas;
(function (canvas_1) {
    window.addEventListener("load", start);
    let crc2;
    let crc3;
    let crc4;
    function start(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc3 = canvas.getContext("2d");
        crc4 = canvas.getContext("2d");
        circle();
        triangle();
        box();
    }
    function circle() {
        for (let i = 0; i < 20; i++) {
            let red = Math.floor(Math.random() * 300);
            let green = Math.floor(Math.random() * 300);
            let blue = Math.floor(Math.random() * 300);
            crc2.beginPath();
            //actual drawing and amount of circles, randomized
            crc2.arc(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (90) + 1), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            //color of the circles, randomized
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
    }
    function triangle() {
        for (let i = 0; i < 10; i++) {
            let red = Math.floor(Math.random() * 300);
            let green = Math.floor(Math.random() * 300);
            let blue = Math.floor(Math.random() * 300);
            crc3.beginPath();
            crc3.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.stroke();
            crc3.closePath();
            crc3.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc3.fill();
        }
    }
    //funktion für die vierecke
    function box() {
        // For schleife für die höchstanzahl der jeweiligen elemente
        for (let i = 0; i < 5; i++) {
            //Zufällige farbe aus dem RGB, die *100 gibt an wie hell oder dunkel die farbe ist 
            let red = Math.floor(Math.random() * 100);
            let green = Math.floor(Math.random() * 100);
            let blue = Math.floor(Math.random() * 100);
            crc4.beginPath();
            //Zufällige Positionen der Linien wird ausgewählt
            crc4.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc4.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc4.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc4.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc4.stroke();
            crc4.closePath();
            crc4.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc4.fill();
        }
        //crc2.beginPath();
        //crc2.moveTo(0, 0);
        //crc2.lineTo(0, 300);
        //crc2.lineTo(300, 300);
        //crc2.lineTo(300, 0);
        //crc2.closePath();
        //crc2.strokeStyle = "#ff0000";
        //crc2.fillStyle = "#ff0000";
        //crc2.fillRect(50, 50, 50, 50);
        //crc2.stroke();
    }
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map