// const hoverBox = document.getElementById('hover-box');

// hoverBox.addEventListener('mouseover', () => {
//     hoverBox.style.backgroundColor = 'blue';
// });

// hoverBox.addEventListener('mouseout', () => {
//     hoverBox.style.backgroundColor = 'red';
// });

// keyboard Event keydown
// document.addEventListener('keydown', function(event){
//     alert("Key Pressed: "+event.key);
// })

// keyboard Event keup
// document.addEventListener('keyup', function(event){
//     alert("Key Pressed: "+event.key);
// })

// Coding Q
// const keyInput = document.getElementById('key-input');
// keyInput.addEventListener('keydown', event => {
//     console.log(`key pressed: ${event.key}`);
// });

// form
// const form= document.getElementById('my form');
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     alert("Form submitted");
// });

// Capturing
// document.getElementById("outer").addEventListener("click", ()=> {
//     alert("Outer Div (Capturing)");
//     }, true);

// document.getElementById("inner").addEventListener("click", ()=> {
//     alert("Inner Div (Capturing)");
// }, true);

// document.getElementById("btn").addEventListener("click", ()=> {
//     alert("Button (Capturing)");
// }, true);

// Bubbling
document.getElementById("outer").addEventListener("click", ()=> {
    alert("Outer Div (Bubbling)");
    });

document.getElementById("inner").addEventListener("click", ()=> {
    alert("Inner Div (Bubbling)");
});

document.getElementById("btn").addEventListener("click", ()=> {
    alert("Button (Bubbling)");
});
