function calcularIMC() {
    var altura = document.getElementById('altura').value / 100; // convertendo cm para metros
    var peso = document.getElementById('peso').value;
    var imc = peso / (altura * altura);
    alert("Seu IMC é: " + imc.toFixed(2));
}