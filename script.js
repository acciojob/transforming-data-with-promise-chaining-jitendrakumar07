//your JS code here. If required.

document.getElementById('btn').onclick = function() {
    const inputNumber = parseFloat(document.getElementById('ip').value);
    const outputDiv = document.getElementById('output');

    // Initial Promise
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${inputNumber}`;
            resolve(inputNumber);
        }, 2000);
    })
    .then((result) => {
        // Second Promise: Multiply by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multiplied = result * 2;
                outputDiv.innerHTML = `Result: ${multiplied}`;
                resolve(multiplied);
            }, 2000);
        });
    })
    .then((result) => {
        // Third Promise: Subtract 3
        return new Promise((resolve) => {
            setTimeout(() => {
                const subtracted = result - 3;
                outputDiv.innerHTML = `Result: ${subtracted}`;
                resolve(subtracted);
            }, 1000);
        });
    })
    .then((result) => {
        // Fourth Promise: Divide by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const divided = result / 2;
                outputDiv.innerHTML = `Result: ${divided}`;
                resolve(divided);
            }, 1000);
        });
    })
    .then((result) => {
        // Fifth Promise: Add 10
        return new Promise((resolve) => {
            setTimeout(() => {
                const finalResult = result + 10;
                outputDiv.innerHTML = `Final Result: ${finalResult}`;
                resolve(finalResult);
            }, 1000);
        });
    });
};
