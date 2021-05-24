const backgroundCanvas = document.querySelector('.background-canvas');
const changeBackgroundBtn = document.querySelector('.change-background-btn');
const resetBackgroundBtn = document.querySelector('.reset-background-btn');

function getRandomNumber(){
    return Math.floor(Math.random() * 256);
}

function randomColorGenerator(){
    // rgb(0 - 255, 0 - 255, 0 - 255);
    const randomRedValue = getRandomNumber();
    const randomBlueValue = getRandomNumber();
    const randomGreenValue = getRandomNumber();
    return [randomRedValue, randomBlueValue, randomGreenValue];
}

function changeBackgroundColor(){
    const colorArray = randomColorGenerator();
    backgroundCanvas.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
}

function resetBackgroundColor(){
    backgroundCanvas.style.backgroundColor = 'springgreen';
}

changeBackgroundBtn.addEventListener('click', changeBackgroundColor);
resetBackgroundBtn.addEventListener('click', resetBackgroundColor);