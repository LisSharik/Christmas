const snowContainer = document.querySelector(".snow");
const audioNavidad = document.querySelector("#musica_navidad")

audioNavidad.play()


snowContainer.innerHTML = "";




function generarNieve() {
  Array.from({ length: 51 }).forEach((_, i) => {
    const num = generarNumero(20, 70);
    snowContainer.innerHTML += `<span style="--i:${num}"></span>`;
  });
}

function generarNumero(inicio, final) {
  return Math.floor(Math.random() * (final - inicio + 1) + inicio);
}
generarNieve();

function timerNvidad(){
  //1. Obtener fecha actual
  const fechaActual = new Date();

  //1.Definir el objetivo(25 de diciembre del mismo año)
  // El mes 11 representa diciembre
  const fechaObjetivo = new Date(fechaActual.getFullYear(),11, 25)

  //3.Verificar si la fecha objetivo ya paso
  if(fechaActual.getMonth() === 11 && fechaActual.getDate()> 25){
    fechaObjetivo.getFullYear(fechaObjetivo.getFullYear() + 1)
  }

  //4. Calcular la diferencia entre fechas (en milisegundos)
  let diferenciaEnMs = fechaObjetivo - fechaActual;

  let diasRestantes = Math.floor(diferenciaEnMs / (1000 * 60 * 60 * 24))
  let horasRestantes = Math.floor(diferenciaEnMs % (1000 * 60 *60 *24) / (1000 * 60 * 60))
  let minutosRestantes = Math.floor((diferenciaEnMs % (1000 * 60 * 60) / (1000 * 60)))
  let segundosRestantes = Math.floor((diferenciaEnMs % (1000 * 60)) / 1000 )

  console.log(diasRestantes, horasRestantes, minutosRestantes ,segundosRestantes);

  const diasHtml = document.getElementById("dias_restantes");
  const horasHtml = document.getElementById("horas_restantes");
  const minutosHtml = document.getElementById("minutos_restantes");
  const segundosHtml = document.getElementById("segundos_restantes");
 
  diasHtml.innerHTML = diasRestantes.toString().padStart(2, "0");  // 01
  horasHtml.innerHTML = horasRestantes.toString().padStart(2, "0");
  minutosHtml.innerHTML = minutosRestantes.toString().padStart(2, "0");
  segundosHtml.innerHTML = segundosRestantes.toString().padStart(2, "0");
  











}

setInterval(timerNvidad,1000)







