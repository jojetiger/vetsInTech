
let newDiv = document.createElement('h1');
newDiv. innerText = 'hello world';
document.body.appendChild(newDiv);


let newP = document.createElement('p');
newP.innerText = `Let's learn some Javascrip`;
document.body.appendChild(newP);

let imNotSure = document.createElement('h3');
imNotSure.innerHTML = `JP's Bio`;
document.body.appendChild(imNotSure);

let newTitle = 'Learning JS';
document.title = newTitle;

let newButton = document.createElement('button');
newButton.innerText = 'Click me!';
document.body.append(newButton);
newButton.addEventListener('click',printArray);

let printArray = () => {
let myArray = [1, 2, 3, 4, 5];
let anotherP = document.createElement('p');
for (var i = 0; i <myArray.length; i++)
    anotherP = myArray[i];
    document.body.append(anotherP)
}
