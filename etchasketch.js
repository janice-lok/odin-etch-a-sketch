const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

container.setAttribute("style", "width: 600px;");

function createSketchpad(squaresPerSide) {
    for (let i = 0; i < squaresPerSide; i++) {      // per row of grid
        for (let j = 0; j < squaresPerSide; j++) {      // per column of grid
            const squareDiv = document.createElement("div"); 

            // set dimensions and stylistic choices for the square div: 
            let squareDivDimension = parseInt(600/(squaresPerSide + 1));
            squareDiv.setAttribute("style", `width: ${squareDivDimension}px; height: ${squareDivDimension}px;`);

            squareDiv.style.backgroundColor = "lavenderblush";
            squareDiv.style.border = "0.05px solid palevioletred";
            
            // add element to the DOM: 
            container.appendChild(squareDiv);
    
            // change color of the square div when mouse hovers:
            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = "palevioletred";
            });
    
        };
    };
};

const clearSketchpad = () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

createSketchpad(16);

btn.addEventListener("click", () => {
    let gridSquaresPerSide = parseInt(prompt("How many squares per side would you like?"));
    if (gridSquaresPerSide > 100) {
        gridSquaresPerSide = parseInt(prompt("Please enter a number less than 100"));
    } else {        // remove existing grid and generate new grid in the same total space as before:
        clearSketchpad ();
        createSketchpad(gridSquaresPerSide);
    }
});
