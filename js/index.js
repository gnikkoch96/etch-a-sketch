// change this value to change number of grid squares
let gridSize = 16; 

// arr to hold references to the divs created dynamically
let divArr = [];

let sketchPanelDiv = document.querySelector('.sketch-panel');

let sketchPanelHeight = sketchPanelDiv.clientHeight;
let sketchPanelWidth = sketchPanelDiv.clientWidth;

// dynamically create the divs
for(let i = 0; i < gridSize; i++){ //row 
    for(let j = 0; j < gridSize; j++){ //column 
        let divBox = document.createElement('div');
        divBox.style.width = sketchPanelWidth/gridSize.toString() + 'px';
        divBox.style.height = sketchPanelHeight/gridSize.toString() + 'px';    

        sketchPanelDiv.appendChild(divBox);

   }
}


