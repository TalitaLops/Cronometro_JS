function myfunction() {
    document.getElementById('demo').innerHTML = "Paragrafo novo"
}

let [millisegundos, segundos, minutos, horas] = [0, 0, 0, 0]
let timer = document.querySelector('.timer');
let int;

document.getElementById('iniciar').addEventListener('click', () => {
    int = setInterval(displayTimer, 10);
});

document.getElementById('pausar').addEventListener('click', () => {
    clearInterval(int);
});
document.getElementById('resetar').addEventListener('click', () => {
    clearInterval(int);
    [millisegundos, segundos, minutos, horas] = [0, 0, 0, 0];
    timer.innerHTML = '00 : 00 : 00 : 000';
});

function displayTimer() {
    millisegundos += 10;
    if (millisegundos == 1000) {
        millisegundos = 0;
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
            if (minutos == 60) {
                minutos = 0;
                horas++;
            }
        }
    }
    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;
    let ms = millisegundos < 10 ? "00" + millisegundos :
        millisegundos < 100 ? "0" + millisegundos : millisegundos;

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}