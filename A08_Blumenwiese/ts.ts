//in Zusammenarbeit mit Neele Rauber 
// mit hilfe von Mona Stingl
namespace Canvas {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    // Start
    function handleLoad(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;


        drawSky(0, 0, "#88d1CF");
        drawMountainBig(500, 310, "#a9a9a9"); // Hinten
        
        drawMeadow(0, 0);
        drawSun(560, 120, "#F2CAA7"); // dritter Wert Sonnenstrahlen

        drawTree(750, 300); // rechter Rand
        drawBushBig(860, 380, "#BF7C63");
        drawBushSmall(90, 380, "#D98F8F");
        drawBushSmall(190, 380, "#F2D7D0");
        drawBushBig(470, 380, "#BF7C63");
        drawBushSmall(560, 410, "#D98F8F");
        drawBushBig(- 20, 440, "#BF7C63");
        drawCloud(160, 120, "#F2EDE4");
        drawCloud(760, 150, "#F2EDE4");
        drawCloud(560, 200, "#F2EDE4");
        drawCloud(360, 40, "#D3EDE5");

        drawPoppy(550, 565);
        drawSunflower(960, 565);
        drawTulip(900, 600);


        // For-Loop zufällige Verteilung der Blumen - von hinten nach vorne
        for (var height: number = 450; height < 630; height += 2) {

            var randomFlower: number = Math.floor((Math.random() * 3));
            var width: number = Math.floor((Math.random() * 1100) - 10);

            switch (randomFlower) {

                case 0:
                    drawSunflower(width, height);
                    break;
                case 1:
                    drawPoppy(width, height);
                    break;
                case 2:
                    drawTulip(width, height);
                    break;
            }
        }

    }

    // Funktion Wiese
    function drawMeadow(_x: number, _y: number): void {

        var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#383D59");
        gradient.addColorStop(0.6, "#99AABF");
        
        crc2.beginPath();
        crc2.fillStyle = gradient;

        crc2.moveTo(_x, _y + 400); // Start von 0, 300 aus
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x + 1280, _y + 720);
        crc2.lineTo(_x - 1280, _y + 720);

        crc2.closePath();
        crc2.fill();
    }

    // Funktion Himmel
    function drawSky(_x: number, _y: number, _strokeColor: string): void {

        var gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#99AABF");
        gradient.addColorStop(1, "#383D59");

        crc2.beginPath();
        crc2.fillStyle = gradient;

        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x - 1280, _y + 400);

        crc2.closePath();
        crc2.fill();
    }

    // Funktion großer Berg
    function drawMountainBig(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        //Farbverlauf Berg
        var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 460);
        gradient.addColorStop(0.5, "#5D7CA6");
        gradient.addColorStop(0.8, "#023059");
        
        //Berg
        crc2.fillStyle = gradient;
 
        //berg 
        crc2.beginPath();
        crc2.moveTo(500, 500);
        crc2.quadraticCurveTo(100, 10, -200, 400);
        crc2.moveTo(500, 55);
        crc2.quadraticCurveTo(50, 0, -20, -10);
        crc2.fill();
        
    // Funktion Berg vorne
        crc2.beginPath();
        crc2.moveTo(1000, 500);
        crc2.quadraticCurveTo(850, 50, -200, 600);
        crc2.fill();

    // Funktion berg rechts

        crc2.beginPath();
        crc2.moveTo(1280, 400);
        crc2.quadraticCurveTo(1000, 10, 550, 650);
        crc2.fill();
    }
    
   // Funktion Sonne
    function drawSun(_x: number, _y: number, _fillColor: string): void {

        // Sonne
        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        //Sonnenstrahlen
        crc2.arc(150, _y, 100, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    // Funktion Baum
    function drawTree(_x: number, _y: number): void {

        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "#8C6046";

        crc2.fillRect(1000, 335, 25, 110);
        crc2.fillRect(1080, 355, 50, 6);
        crc2.fillRect(1070, 380, 20, 6);

        //Baumkrone
        crc2.beginPath();
        crc2.fillStyle = "#BF214B";
        crc2.arc(980, 255, 60, 0, 2 * Math.PI);
        crc2.arc(1050, 285, 55, 0, 2 * Math.PI);
        crc2.arc(980, 315, 35, 0, 2 * Math.PI);
        crc2.arc(990, 305, 55, 0, 2 * Math.PI);
        crc2.arc(1065, 265, 75, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
        //Baumstamm2
        crc2.beginPath();
        crc2.fillStyle = "#8C6046";
        crc2.fillRect(200, 325, 25, 110);
        
        //Baumkrone
        crc2.beginPath();
        crc2.fillStyle = "#F29F8D";
        crc2.arc(220, 255, 40, 0, 2 * Math.PI);
        crc2.arc(250, 310, 35, 0, 2 * Math.PI);
        crc2.arc(190, 315, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //baumstamm 3
        crc2.beginPath();
        crc2.fillStyle = "#8C6046";

        crc2.fillRect(1080, 335, 25, 110);
        
        //Baumkrone
        crc2.beginPath();
        crc2.fillStyle = "#F29F8D";
        crc2.arc(1100, 255, 60, 0, 2 * Math.PI);
        crc2.arc(1140, 285, 55, 0, 2 * Math.PI);
        crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        crc2.arc(1065, 305, 55, 0, 2 * Math.PI);
        crc2.arc(1065, 265, 75, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
       
    }

    // Funktion großer Busch
    function drawBushBig(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(_x + 55, _y + 30, 45, 0, 2 * Math.PI);
        crc2.arc(_x + 75, _y + 10, 30, 0, 2 * Math.PI);
        crc2.arc(_x + 120, _y + 40, 34, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 30, 45, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
    }

    // Funktion kleiner Busch
    function drawBushSmall(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(_x + 20, _y + 30, 28, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 10, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 80, _y + 15, 20, 0, 2 * Math.PI);
        crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
    }

    // Funktion Wolke
    function drawCloud(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
        crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
    }

    // Funktion Mohnblume
    function drawPoppy(_x: number, _y: number): void {

        //Stiel
        crc2.beginPath();
    
        crc2.fillStyle = "#556B2F";

        crc2.fillRect(_x - 2, _y + 10, 4, 50); // Dritter Wert = Breite Stiel, vierter Wert = Länge

        //Blätter 
        crc2.moveTo(_x, _y + 50);
        crc2.lineTo(_x + 10, _y + 15);
        crc2.moveTo(_x, _y + 50);
        crc2.lineTo(_x - 10, _y + 20);
        crc2.moveTo(_x, _y + 55);
        crc2.lineTo(_x + 12, _y + 35);

        crc2.stroke();
        crc2.fill();

        //Blüten
        crc2.beginPath();
        crc2.fillStyle = "#F2AF5C";

        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.fill();
    }

    // Sonnenblume
    function drawSunflower(_x: number, _y: number): void {
 //Stiel
 crc2.beginPath();
    
 crc2.fillStyle = "#556B2F";

 crc2.fillRect(_x - 2, _y + 10, 4, 50); // Dritter Wert = Breite Stiel, vierter Wert = Länge

 //Blüten
 crc2.beginPath();
 crc2.fillStyle = "#F2EDE4";

 crc2.moveTo(_x, _y);
 crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
 crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
 crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
 crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
 crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
 crc2.fill();
         
       
    }

    // Funktion Tulpe
    function drawTulip(_x: number, _y: number): void {

        //Stiel
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";

        crc2.fillRect(_x + 9, _y + 28, 3, 40);

        //Blatt
        crc2.arc(_x + 8, _y + 30, 20, 0, 1.5);

        crc2.fill();

        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#FF1493";

        crc2.arc(_x + 10, _y + 20, 10, 0, 1 * Math.PI);
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y + 7);
        crc2.lineTo(_x + 6, _y + 14);
        crc2.lineTo(_x + 10.5, _y + 4);
        crc2.lineTo(_x + 15, _y + 14);
        crc2.lineTo(_x + 20, _y + 7);
        crc2.lineTo(_x + 20, _y + 21);

        crc2.closePath();
        crc2.fill();
    }

}