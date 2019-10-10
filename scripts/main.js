let myImage = document.querySelector('img')
myImage.onclick = function() {

    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/fcc.jpg') { myImage.setAttribute ('src','images/fcc2.jpg');}

    else {
        myImage.setAttribute ('src','images/fcc.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
let myName = prompt('please enter your name');
localStorage.setItem('name', myName);
myHeading.textContent = 'Welcome,' + myName;

}
if(!localStorage.getItem('name')) {setUserName();}

else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome,' + storedName;
}

myButton.onclick = function() {

    setUserName();
}

function setUserName(){
    let myName = prompt('please enter your name');
    if(!myName || myName === null) {setUserName();
    
    }

    else { localStorage.setItem('name', myName);
myHeading.innerHTML = 'Welcome,' + myName;}
}

