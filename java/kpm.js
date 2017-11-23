      
document.write("<h1>Kamen // Papir // Makaze</h1>");

// userChoice

var userChoice = prompt("Izaberi kamen, papir ili makaze?");
   
    document.write("<h2>User:" + " " + userChoice + "</h2>");
        
// computerChoice

var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "kamen";
        }
    else if(computerChoice <= 0.67) {
        computerChoice = "papir";
        } 
    else {
        computerChoice = "makaze";
        }

    document.write("<h2>Computer:" + " " + computerChoice + "</h2>");

// poredjenje user i computer izbora        
var compare = function(choice1,choice2) {
            
    if (choice1 === choice2) {
        return "Nerešeno!";
        }
            
    if (choice1 === "kamen") {

        // kamen pobedjuje makaze
        if (choice2 === "makaze") {
            return "Pobedio si! Bravo!";
            }
        else {
            return "Izgubio si. Pokušaj ponovo!";
            }
        }
            
    if (choice1 === "papir") {
         
        // papir pobedjuje kamen      
        if (choice2 === "kamen") {
            return "Pobedio si! Bravo!";
            }
        else {
            return "Izgubio si. Pokušaj ponovo!";
            }
        }
        
    if (choice1 === "makaze") {
        
        // makaze pobedjuju papir        
        if (choice2 === "papir") {
            return "Pobedio si! Bravo!";
            }
        else {
            return "Izgubio si. Pokušaj ponovo!";
            }
        }
    };

var results = compare(userChoice,computerChoice);
    
document.write("<h2>"+ results +"</h2>");