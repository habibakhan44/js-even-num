function generateEven() {
    let inputvalue = document.getElementById('inputvalue').value;
    let i = 0;
    let value = '';
    let sum = 0;

    while (i <= inputvalue) {
        if (i % 2 == 0) {
            value += `${i} `;
            sum += i;
        }
        i++;
    }
    document.getElementById('result').innerHTML = `Even numbers: ${value}`;
    document.getElementById('sum').innerHTML = `Sum of even numbers: ${sum}`;
}
