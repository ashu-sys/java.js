let namstebtn= document.querySelector('button');
namstebtn.addEventListener('click',inoutmsg);
function inoutmsg(){
    let name = prompt('enter the nmae of student ');
    namstebtn.textContent = 'roll no 1:' +name;
}