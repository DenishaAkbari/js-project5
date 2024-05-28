function findMinMax() {
    let Arr = [50, 60, 20, 10, 40];
    let pr3 = document.querySelector('.pr3');

    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
    
    pr3.innerHTML = "Minimum element is:" + minValue + " <br> <br> " + "Maximum Element is:" + maxValue;
    // console.log("Minimum element is:" + minValue);
    // console.log("Maximum Element is:" + maxValue);
}

findMinMax()