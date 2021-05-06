
namespace Aufgabe3 {

    //Variablen deklarieren
    let numPairs: number;
    let kartenInhalt: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let kartenArray: HTMLElement[] = [];
    let offenekarten: number = 0;
    let offenekartenArray: HTMLElement[] = [];
    let checkRest: HTMLElement[] = [];

    // Start game
    window.addEventListener("load", startGame);

    function startGame(): void {
        let startMemory: HTMLElement = <HTMLElement>document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
   
    // FormData - Objekt um in der Main Funktion die Werte des Formulars auszuwerten!
    let formData: FormData;
    let groeße: number;
    let hintergrund: FormDataEntryValue | null; 
    let hintergrundkarte: FormDataEntryValue | null;
    let schriftFarbe: FormDataEntryValue | null;
    let schriftStil: FormDataEntryValue | null;


    //Karte initialisieren     
    function karteherstellen(_kartenInhalt: string): void {
        let karte: HTMLElement = document.createElement("div");

        karte.innerHTML = "<p>" + _kartenInhalt + "</p>";
        karte.classList.add("karte");
        karte.classList.add("hidden");

        kartenArray.push(karte);
        checkRest.push(karte);
        karte.addEventListener("click", clickHan);

        // Slider response (Cardsize)
        karte.style.width = groeße + "px";
        karte.style.height = groeße + "px";

        // Color response (Background)
        if (hintergrund) { // Prüfe ob es einen Wert hat
            karte.style.backgroundColor = hintergrund.toString();
        }
        
        // Color response (Backside)
        if (hintergrundkarte) { 
            karte.style.background = hintergrundkarte.toString();
        }

        // Color response (Font)
        if (schriftFarbe) { 
            karte.style.color = schriftFarbe.toString();
        }

        // Font response (Style)
        if (schriftStil) { 
            karte.style.fontFamily = schriftStil.toString();
        }

    }

    function clickHan(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("karte")) {
            offenekarten++;
            if (!(offenekarten > 2) && target.classList.contains("hidden") && target != offenekartenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    offenekartenArray.push(target);
                }
            } else {
                offenekarten--;
            }
            if (offenekarten == 2) {
                setTimeout(vergleichekarten, 2000);
            }
        }
    }
    // Vergleich Karten
    function vergleichekarten(): void {
        if (offenekartenArray[0].innerHTML == offenekartenArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                offenekartenArray[i].classList.remove("open");
                offenekartenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        } else {
            for (let i: number = 0; i < offenekartenArray.length; i++) {
                offenekartenArray[i].classList.remove("open");
                offenekartenArray[i].classList.add("hidden");
            }
        }
        offenekartenArray = [];
        offenekarten = 0;
        gewinn();
    }

    // function timer(): void{
    //     let firstNumber: number;
    //     let secondNumber: number;
    //     let date: object = secondNumber - firstNumber;
    // }

    function gewinn(): void {
        if (checkRest.length == 0) {
            alert("Congratulations, you won! Time: ... Reload the page for a new game!");
        }
    }

    //Durstenfeld-Shuffle
    // tslint:disable-next-line: no-any
    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

    // Main Funktion zum Anzeigen des Memorys
    function main(_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".einstellung");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        //Popup für Kartenpaare
        formData = new FormData(document.forms[0]); // weist der Variablen formData alle fieldsets zu
        console.log(formData);
        

        groeße = Number(formData.get("Slider")); // Ich hole mir mit dem Namen "Slider" den value, wird noch zu einer Number
        hintergrund = formData.get("hFarbe"); // Entweder Wert oder null
        hintergrundkarte = formData.get("hkFarbe"); 
        schriftFarbe = formData.get("ssFarbe"); 
        schriftStil = formData.get("Radiogroup"); 

        // Stepper response
        let pairOfCards: FormDataEntryValue | null = formData.get("Stepper"); 
        if (pairOfCards) {
        numPairs = Number(pairOfCards);
        }
        else {
            numPairs = 5;
        }

        //Karten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            karteherstellen(kartenInhalt[i]);
            karteherstellen(kartenInhalt[i]);
        }

        //Aufruf der Shuffle Algorithmusses (für die erwünschte Anzahl)    
        shuffleArray(kartenArray);

        for (let i: number = 0; i < kartenArray.length; i++) {
            let playerbox: HTMLDivElement = <HTMLDivElement>document.getElementById("feld");
            playerbox.appendChild(kartenArray[i]);
        }
    }
}