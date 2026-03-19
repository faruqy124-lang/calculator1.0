const display= document.querySelector('.input-box')

function appendToDisplay(input){
    display.value+= input
}
function clearDisplay(){
    display.value = ""
}
function clear__Display(){
     display.value = display.value.slice(0, -1)
}
function calculate(){
    try{
        display.value= eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}
document.addEventListener('keydown', function(event){
    if(event.key==="Enter"){
        calculate()
    }
    else if(event.key === "Backspace"){
        clear__Display()
    }
    else if(event.key === "Escape"){
        clearDisplay()
    }
    else if((event.key >= "0" && event.key <= "9") || ["+", "-", "*", "/"].includes(event.key)){
        appendToDisplay(event.key)
    }
})