//global vars
let currentColor = 'black';
let buttons = document.querySelectorAll('button');
let gridSize = 25;
let rainbowMode = false; 
let rainbowModeCounter = 0;

// main
createGrid(gridSize);
addButtonEvents();

function addButtonEvents(){
    let colorPicker = document.querySelector('#color-display');
    colorPicker.addEventListener('change', () => {
        currentColor = colorPicker.value
        colorPicker.style.backgroundColor = currentColor;
    });

    buttons.forEach(button => {
        if(button.id == 'eraser'){
            
            button.addEventListener('click', () => {
                currentColor = 'white'
                rainbowMode = false;
            });
        }else if(button.id === 'rainbow'){
            button.addEventListener('click', () => {
                rainbowMode = true;
            });
        }else if(button.id === 'choose-color'){ 
            // sketches with current color
            button.addEventListener('click', () => {
                currentColor = colorPicker.value
                rainbowMode = false;
            });
        }else if(button.id === 'clear'){ // clear
            button.addEventListener('click', () => {
                    rainbowMode = false;
                    
                    // clears sketch
                    let sketchPanelDivs = document.querySelectorAll('.sketch-panel div');
                
                    sketchPanelDivs.forEach(div => {
                        div.remove();
                    })

                    // creates new grid
                    let newGridSize = 0

                    do{
                        newGridSize = prompt('Enter new grid size (must be below 100): ');
                    }while(newGridSize > 100)

                    createGrid(newGridSize);

                    currentColor = colorPicker.value;
                });
            }
    });
}

// dynamically create the divs
function createGrid(gridSize){
    let sketchPanelDiv = document.querySelector('.sketch-panel');

    let sketchPanelHeight = sketchPanelDiv.clientHeight;
    let sketchPanelWidth = sketchPanelDiv.clientWidth;

    for(let i = 0; i < gridSize; i++){ //row 
        for(let j = 0; j < gridSize; j++){ //column 
            let divBox = document.createElement('div');
            divBox.style.width = sketchPanelWidth/gridSize.toString() + 'px';
            divBox.style.height = sketchPanelHeight/gridSize.toString() + 'px';    

            // changes the color of the div
            divBox.addEventListener('mouseenter', () => {
                if(rainbowMode){
                    if(rainbowModeCounter >= 10){
                        rainbowModeCounter = 0;
                        currentColor = 'black';
                    }else{
                        currentColor = getRandomColor();
                        rainbowModeCounter++;
                    }
                }else{
                    rainbowModeCounter = 0; // reset rainbow counter
                }

                divBox.style.backgroundColor = currentColor;
                
            });

            sketchPanelDiv.appendChild(divBox);
        }
    }
}

// generates random color hexadecimal (taken online)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  