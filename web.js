function calculator() {
    const weight =Number(document.getElementById('weight').value);
    const height =Number(document.getElementById('height').value);
    const result = document.getElementById('result');
    const answer = Number(weight / (height * height));
    
    if(answer < 18.5) {
        result.textContent = "Siz juda ozg'insiz!"
    }else
    if(answer >= 18.5 && answer < 25) {
        result.textContent = "Siz sog'lomsiz"
    }
    else{
        result.textContent = "Sizning vazningiz o'rtachadan ancha yuqori!"
    }    
}