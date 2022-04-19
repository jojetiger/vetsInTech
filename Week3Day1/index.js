
let newDiv = document.createElement('h1');
newDiv.innerText = 'hello world';
document.body.appendChild(newDiv);


let newP = document.createElement('p');
newP.innerText = `Let's learn some Javascrip`;
document.body.appendChild(newP);

let imNotSure = document.createElement('h3');
imNotSure.innerHTML = `JP's Bio`;
document.body.appendChild(imNotSure);

let newTitle = 'Learning JS';
document.title = newTitle;

let printArray = () => {
    let myArray = [1, 2, 3, 4, 5];
    let anotherP = document.createElement('p');
    for (var i = 0; i < myArray.length; i++) {
        anotherP = myArray[i];
        document.body.append(anotherP)
    }
}

let counterNumber = 0
const counter = () => {
    if (counterNumber === 0) {
        let counterDiv = document.createElement('p');
        counterDiv.innerHTML = counterNumber
        counterDiv.id = 'boom'
        document.body.append(counterDiv)
        counterNumber++
    } else {
        const oldNumber = document.getElementById('boom')
        oldNumber.innerHTML = counterNumber
        counterNumber++
    }
}

const resetCounter = () => {
    const oldNumber = document.getElementById('boom')
    oldNumber.innerHTML = 0
}


let newButton = document.createElement('button');
newButton.innerText = 'Click me!';
newButton.addEventListener('click',counter);
// newButton.addEventListener('click',printArray);
document.body.append(newButton);

let resetButton = document.createElement('button')
resetButton.innerText = 'reset me!';
resetButton.addEventListener('click',resetCounter);
document.body.append(resetButton);


const getColor = () => {
    const colorArray = ['red', 'blue', 'pink', 'yellow', 'green', 'purple', 'limegreen']
    const randomNumber = Math.floor(Math.random() * (colorArray.length - 0) + 0)
    const randomColor = colorArray[randomNumber]
    console.log('color',randomColor )
    document.body.style.backgroundColor = randomColor
}

const backgroundColorButton = document.createElement('button')
backgroundColorButton.innerText = 'lets party!';
backgroundColorButton.addEventListener('click', getColor);
document.body.append(backgroundColorButton);
