const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {      // 16 rows
    for (let j = 0; j < 16; j++) {      // 16 columns
        const squareDiv = document.createElement("div");
        squareDiv.style.backgroundColor = "lavenderblush";
        squareDiv.style.border = "0.05px solid palevioletred";
        container.appendChild(squareDiv);

        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "palevioletred";
        });

    };
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let numberOfGridSquares = parseInt(prompt("How many squares per side would you like?"));

});
