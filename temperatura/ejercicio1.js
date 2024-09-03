function calcular1(){
    const resultado = document.getElementById('resultado');

    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let temperaturas = [];

    document.addEventListener("DOMContentLoaded", () => {
        for(let i=0;i<12;i++){
            temperaturas[i] = prompt('Ingrese la temperatura del mes de ${meses[i]} :');
        }

        for(let i=0;i<12;i++){
            resultado.innerHTML += '${meses[i]}:';
            for(let j=0; j<temperaturas[i];j++){
                resultado.innerHTML += '*';
            }
            resultado.innerHTML += '${temperaturas[i]} °C <br>';
        }
    })
}