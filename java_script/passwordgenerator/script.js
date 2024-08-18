const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let gentext = document.getElementById("gen-text")
let gentext2 = document.getElementById("gen2-text")
let Btn = document.getElementById("btn")
function gener(){
    for (let i=0; i<characters.length; i++){       
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndextwo = Math.floor(Math.random() * characters.length)
        if (i === 12){
            break
        }else{
            gentext.textContent += characters[randomIndexOne]
            gentext2.textContent += characters[randomIndextwo]

        }
    }
    
}