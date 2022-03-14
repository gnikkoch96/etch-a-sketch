//global vars
let currentColor = 'black';
let buttons = document.querySelectorAll('button');
let gridSize = 25;

// main
createGrid(gridSize);
addButtonEvents();

function addButtonEvents(){
    buttons.forEach(button => {
        if(button.id == 'eraser'){
            button.addEventListener('click', () => currentColor = 'white');
        }else if(button.id === 'rainbow'){

        }else if(button.id === 'choose-color'){
            
        }else if(button.id === 'clear'){ // clear
            button.addEventListener('click', () => {
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
                divBox.style.backgroundColor = currentColor;
            });

            sketchPanelDiv.appendChild(divBox);
        }
    }
}


