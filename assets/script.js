var peso
var altura
var imc
var imcround
var error = "error";

function IMC() {
  try {
    var peso = document.peso.input.value;
    var altura = document.altura.input.value;
  

  // ANTIGA FORMULA
  // var imc = peso / (altura/100 * altura/100);
  // var imcround = (Math.round(imc*10)/10).toFixed(2);


  /* FAZ O CALCULO DO IMC */
  imcround = 0;
	peso = parseFloat(peso);
  altura = parseFloat(altura);
	if(altura > 100){
		altura = altura / 100;
	}
	imc = peso / (altura * altura);
  imcround= imc.toFixed(2); // ajusta as casas decimais


  
  if (peso <=0 || altura <=0) {
    document.getElementById("IMC").innerHTML = error;
    throw "Por favor, escolha valores não positivos e positivos.";
  }

  // PRINTA NA TELA O RESULTADO
  document.getElementById("MeuIMC").innerHTML = imcround;

//   if (peso==0 || altura==0) {
//     alert("Error!");
//     alert("Por favor, escolha valores inteiros");
// }


// TABELA DO IMC
  if (imcround < 17) {
    document.getElementById("alert").innerHTML = "Voc&ecirc; est&aacute; muito abaixo do seu peso ideal!";
  }
  else if (imcround >= 17 && imcround < 18.5) {
    document.getElementById("alert").innerHTML = "Voc&ecirc; est&aacute; abaixo do seu peso ideal!";
  }
  else if (imcround >= 18.5 && imcround <25) {
    document.getElementById("alert").innerHTML = "Parab&eacute;ns, voc&ecirc; est&aacute; em seu peso ideal!";
  }
  else if (imcround >= 25 && imcround <30){
    document.getElementById("alert").innerHTML = "Sobrepeso - Voc&ecirc; est&aacute; acima do seu peso ideal.";
  }
  else if (imcround >= 30 && imcround <35){
  document.getElementById("alert").innerHTML = "Obesidade - grau I";
  } 
  else if (imcround >= 35 && imcround <40){
  document.getElementById("alert").innerHTML = "Obesidade - grau II (severa)";
  } 
  else if (imcround >= 40){
  document.getElementById("alert").innerHTML = "Obesidade - grau III (m&oacute;rbida)";
  }
}
catch (e) {
  alert(e);
}
}

