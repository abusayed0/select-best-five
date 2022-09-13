// function for get selected players number 
function playerSelected(){
    const selected =document.querySelectorAll("#selected-parent li");
    const player = selected.length;
    return player;
} 
    

// common function for get input field value str and number format
function getInputFieldValueById(inputId,str){
  const inputField =  document.getElementById(inputId)
  const inputStr = inputField.value;
  const inputNum = parseInt(inputStr)
  if(str == true){
    return inputStr;
  }
  else if(str == false){
    return inputNum;
  }
}

// common function for set element inner text
function setElementInnerTextById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// common function for get element value str and number format
function getElementValueById(elementId,str){
    const element = document.getElementById(elementId);
    const elementValueStr = element.innerText;
    const elementValueNum = parseInt(elementValueStr)
    if(str == true){
        return elementValueStr;
    }
    else if(str == false){
        return elementValueNum;
    }
}