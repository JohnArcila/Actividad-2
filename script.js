var dia;

dia = prompt(" Introduce un día de la semana que deseas descansar");

let diasNolaborales = ["sabado", "domingo"];
let diasLaborales = ["lunes", "martes", "miercoles", "jueves", "viernes"]
 

if (diasNolaborales.includes(`${dia}`)){
    document.write(`<p class = 'texto-nolaboral'> El ${dia} No es un día Laboral, puedes descansar</p>`);

}else if(diasLaborales.includes(`${dia}`)){
    document.write(`<p class = 'texto-laboral'> El ${dia} es un día Laboral, No puedes descansar</p>`);

}else if ((!diasLaborales.includes(`${dia}`)) && !diasLaborales.includes(`${dia}`)){
    alert(`${dia} No es un día de la semana, por favor intente de nuevo`)
}
