function plus() {
    let a = document.getElementsByName('a')[0].value;
    let b = document.getElementsByName('b')[0].value;

    let c = Number(a) + Number(b);

    let calcResult = document.getElementById('result');
    calcResult.innerHTML = c;
}

function minus() {
    let a = document.getElementsByName('a')[0].value;
    let b = document.getElementsByName('b')[0].value;

    let c = Number(a) - Number(b);

    let calcResult = document.getElementById('result');
    calcResult.innerHTML = c;
}

function umnojit() {
    let a = document.getElementsByName('a')[0].value;
    let b = document.getElementsByName('b')[0].value;

    let c = Number(a) * Number(b);

    let calcResult = document.getElementById('result');
    calcResult.innerHTML = c;
}

function razdelit() {
    let a = document.getElementsByName('a')[0].value;
    let b = document.getElementsByName('b')[0].value;

    let c = Number(a) / Number(b);

    let calcResult = document.getElementById('result');
    calcResult.innerHTML = c;
};