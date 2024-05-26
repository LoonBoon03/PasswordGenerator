const value = document.querySelector("#value");
const input = document.querySelector("#slider");
value.textContent = input.value;

input.addEventListener("input", (event) => {
value.textContent = event.target.value;
});
function GerarSenha() {
    Tamanho = Number(value.value);
    var Resultado = '';
    var CheckBoxNum = document.getElementById("numeros");
    var CheckBoxMai = document.getElementById("maiusculas");
    var CheckBoxMin = document.getElementById("minusculas");
    var CheckBoxSim = document.getElementById("simbolos");
    var Letras = '';

    if(CheckBoxMai.checked == true){
        Letras = Letras + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(CheckBoxMin.checked == true){
        Letras = Letras + 'abcdefghijklmnopqrstuvwxyz';
    }
    if(CheckBoxNum.checked == true){
        Letras = Letras + '0123456789';
    }
    if(CheckBoxSim.checked == true){
        Letras = Letras + '@#$&*!?^~';
    }
    const LetrasTamanho = Letras.length;

    var i = 0;
    while (i < Tamanho) {
      Resultado += Letras.charAt(Math.floor(Math.random() * LetrasTamanho));
      i += 1;
    }
    var nova_senha_id = window.document.getElementById('senha');
    nova_senha_id.innerHTML = Resultado;
}
