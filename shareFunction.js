function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}

function getTextFieldValueById(Id){
    const textValue = document.getElementById(Id).innerText;
    const textnumber = parseFloat(textValue);
    return textnumber;
}

function showSectionById(Id){
    document.getElementById('donate-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');
    
    document.getElementById(Id).classList.remove('hidden');
    
}
