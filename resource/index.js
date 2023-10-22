function reverseStr(){
    let reversedString = "";
    let x = document.getElementById('name').value;
    console.log(document.getElementById('name').value);
    for(var i = x.length - 1; i >= 0; i--){
        reversedString += x[i];
    }
    document.getElementById('result-text').innerText = reversedString;
}

function palindroneCheck(){
        let s = document.getElementById('palidrone').value;
        let l = s.length;

        for (var i = 0; i < l / 2; i++) {

            if (s.charAt(i) !== s.charAt(l - 1 - i)) {
                document.getElementById('result-text-palidrone').innerText = s + " is not a palidrone";
                return false;
            }

        }
        document.getElementById('result-text-palidrone').innerText = s + " is a palidrone";
        return true;
}


function tipCaculate(){
    let x = Number(document.getElementById('subtotal').value);
    let y = Number(document.getElementById('tip-percentage').value);
    let v = y / 100;
    let tip = x * v;
    const result = x + tip;
    document.getElementById('result-text-bill-calculator').innerText = `Subtotal: $${x.toFixed(2)}\n Tip:$${tip.toFixed(2)}\n$${result.toFixed(2)} is the bill total.`
}

function select_on(node) {
    if(node.checked) {
       displayAllOnCheckBox();
    } 
    else {
       displayFunctionOne();
    } 
}

function displayFunctionOne(){
    document.getElementById('function-1').style.display = 'block';
    document.getElementById('function-2').style.display = 'none';
    document.getElementById('function-3').style.display = 'none';
}

function displayFunctionTwo(){
    document.getElementById('function-1').style.display = 'none';
    document.getElementById('function-2').style.display = 'block';
    document.getElementById('function-3').style.display = 'none';
}

function displayFunctionThree(){
    document.getElementById('function-1').style.display = 'none';
    document.getElementById('function-2').style.display = 'none';
    document.getElementById('function-3').style.display = 'block';
}

function displayAllOnCheckBox(){
    document.getElementById('function-1').style.display = 'block';
    document.getElementById('function-2').style.display = 'block';
    document.getElementById('function-3').style.display = 'block';
}

function displayDefaultUncheck(){
    document.getElementById('function-1').style.display = 'block';
    document.getElementById('function-2').style.display = 'block';
    document.getElementById('function-3').style.display = 'block';
}
