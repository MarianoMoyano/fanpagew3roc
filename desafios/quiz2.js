/* Preguntas y respuestas del quiz,
pense en meter mas pregunta pero pense que con 30 estaba bien jajaj
comentario por cada pregunta
voy a escribir de que personaje trata cierta cantidad de Preguntas */

// Pregunta 1: Thrall


const quiz= [{
    numero:1, 
    pregunta: "¿Cuál es el objetivo de Thrall en Warcraft 3?", 
    respuestas: [
        "Encontrar un lugar tranquilo para crear un hogar para todos",
        "Para invadir y dominar Kalimdor",
        "Para buscar el oraculo",
        "Para matar a los refugiados de Jaina",
    ], 
    correcta: "Encontrar un lugar tranquilo para crear un hogar para todos"
},

// Pregunta 2
{   numero:2, 
    pregunta: "¿Qué es lo más cercano que tuvo Thrall como familia?", 
    respuestas: [
        "Grom Hellscreams",
        "Cairne Bloodhoof",
        "Rexxar",
        "Durotan, su padre",
    ], 
    correcta: "Grom Hellscreams"
},

// Pregunta 3
{   numero:3, 
    pregunta: "¿Quién crio a Go'el?", 
    respuestas: [
        "Un esclavista humano",
        "Cairne Bloodhoof",
        "Los magos",
        "Durotan, su padre",
    ], 
    correcta: "Un esclavista humano"
},


// Pregunta 4
{   numero:4, 
    pregunta: "¿Que profesion sigue Thrall o Go'el?", 
    respuestas: [
        "Vidente",
        "Guerrero",
        "Asesino",
        "Lider",
    ], 
    correcta: "Vidente"
},


// Pregunta 5: Illidan
{   numero:5, 
    pregunta: "¿Por qué Ilidan destruyo la calavera de Gul'dan?", 
    respuestas: [
        "Liberar a los bosques y matar a Tichondrius",
        "Para conseguir poder y derrotar a Tichondrius",
        "Para que deje de hablarle que le molestaba mucho",
        "Para romper la poderosa maldicion",
    ], 
    correcta: "Liberar a los bosques y matar a Tichondrius"
},


// Pregunta 6
{   numero:6, 
    pregunta: "¿Por qué apresaron a Ilidan?", 
    respuestas: [
        "Porque busco poder por encima de su raza",
        "Porque mato a su hermano",
        "Porque se allio con los enemigos",
        "Porque queria descansar en una carcel un tiempo",
    ], 
    correcta: "Porque busco poder por encima de su raza"
},

// Pregunta 7
{   numero:7, 
    pregunta: "¿Ilidan ama a alguien?", 
    respuestas: [
        "A Tyrande",
        "A si mismo",
        "A Arthas",
        "A Elune",
    ], 
    correcta: "A Tyrande"
},

// Pregunta 8
{   numero:8, 
    pregunta: "¿Cual fue el motivo de la pelea entre Malfurion e Ilidan?", 
    respuestas: [
        "Por la ambicion de Illidan",
        "Por Tyrande",
        "Porque Illidan le robo el desayuno",
        "Porque Illidan es un traidor",
    ], 
    correcta: "Por la ambicion de Illidan"
},

// Pregunta 9
{   numero:9, 
    pregunta: "¿Quien es Illidan?", 
    respuestas: [
        "Un elfo autoproclamado cazador de demonios",
        "Alguien muy poderoso",
        "Alguien que odia a Arthas",
        "El mayor enemigo de Arthas",
    ], 
    correcta: "Un elfo autoproclamado cazador de demonios"
},

// Pregunta 10: Malfurion
{   numero:10, 
    pregunta: "¿Quién es Malfurion?", 
    respuestas: [
        "Un elfo conocido como el 1er archidruida",
        "El medio hermano de Illidan",
        "Un manco",
        "Un mago extremadamente poderoso que gano el titulo de archidruida",
    ], 
    correcta: "Un elfo conocido como el 1er archidruida"
},

// Pregunta 11
{   numero:11, 
    pregunta: "¿Cuántos hermanos tiene Malfurion?", 
    respuestas: [
        "1",
        "2",
        "3",
        "4",
    ], 
    correcta: "1"
},

// Pregunta 12: Tyrande
{   numero:12, 
    pregunta: "¿Quien es Tyrande?", 
    respuestas: [
        "La sacerdotisa de la luna",
        "Una arquera de excelencia",
        "Una acolita",
        "Una elfa normal",
    ], 
    correcta: "La sacerdotisa de la luna"
},

// Pregunta 13
{   numero:13, 
    pregunta: "¿A quien adora Tyrande y su pueblo?", 
    respuestas: [
        "A Elune",
        "A un planeta",
        "A si mismos",
        "A sus armas",
    ],  
    correcta: "A Elune"
},

// Pregunta 14: Kael
{   numero:14, 
    pregunta: "¿Quien es Kael? Antes de la masacre de Arthas", 
    respuestas: [
        "Un elfo de sangre",
        "Un mago de sangre",
        "Un elfo mago de Dalaran",
        "un muerto viviente que sirve a Arthas",
    ],  
    correcta: "Un elfo mago de Dalaran"
},

// Pregunta 15
{   numero:15, 
    pregunta: "¿Quien le destruye el reino a Kael?", 
    respuestas:[
    "Arthas", 
    "El mismo", 
    "Su padre",
    "Los muertos vivientes",
],  
correcta: "Arthas"
},

// Pregunta 16
{   numero:16, 
    pregunta: "¿Cual es el mayor problema de Kael?", 
    respuestas:[
    "Su sed de magia", 
    "La sed que hace 1 semana que no toma agua", 
    "Arthas",
    "Jaina",
],
correcta: "Su sed de magia"
},

// Pregunta 17
{   numero:17, 
    pregunta: "¿A quien amaba Kael?", 
    respuesta:[
    "A Jaina", 
    "A Malfurion", 
    "A Arthas",
    "A Tyrande"
],
correcta:"A Jaina"
},

// Pregunta 18: Arthas cuando servia a la luz
{   numero:18, 
    pregunta: "¿De que orden era miembro y aprendiz Arthas?", 
    respuestas:[
    "De la orden de los paladines", 
    "De la nobleza", 
    "De la corona",
    "De la orden de los magos, donde conocio a Jaina",
],
correcta: "De la orden de los paladines"
},

// Pregunta 19
{   numero:19, 
    pregunta: "¿Quien era el maestro de Arthas?", 
    respuestas:[
    "Uther", 
    "Arius", 
    "Granis",
    "Manadar",
],
correcta: "Uther"
},

// Pregunta 20
{   numero:20, 
    pregunta: "¿Que fue lo que mas le costo a Arthas? Cuando servia a la luz", 
    respuestas:[
    "La matanza de Stratholme", 
    "Ver a Jaina en Dalaran", 
    "Matar a Uther",
    "Desobedeser a Uther y a su padre y rey Therenas",
],
correcta: "La matanza de Stratholme"
},

// Pregunta 21
{   numero:21, 
    pregunta: "¿Quien era el maximo adversario de Arthas cuando servia a la luz?", 
    respuestas:[
    "Malganis", 
    "Kael", 
    "Kel'thuzad",
    "Illidan",
],
correcta: "Malganis"
},

// Pregunta 22
{   numero:22, 
    pregunta: "¿Porque Arthas va a Northrend?", 
    respuestas:[
    "Para acabar con Malganis", 
    "Queria unas vacaciones", 
    "Para salvar a Muradin",
    "Por la espada Frostmoure"
],
correcta: "Para acabar con Malganis"
},

// Pregunta 23
{   numero:23, 
    pregunta: "¿Que le advierte murarin sobre la Frostmoure a Arthas?", 
    respuestas:[
    "Que la espada estaba maldita", 
    "Que la espada la queria para el", 
    "Que no la rompa",
    "Que la espada era muy fea y tenia mala pinta"
],
correcta: "Que la espada estaba maldita"
},

// Pregunta 24
{   numero:24, 
    pregunta: "¿Con quien se encontro Arthas en Northrend?", 
    respuestas:[
    "Con Muradin y sus soldados", 
    "Con Malganis esperandolo", 
    "Con Uther con un humor de perros",
    "Con mercenarios"
],
correcta: "Con Muradin y sus soldados"
},

// Pregunta 25: Arthas cuando abandono la luz
{   numero:25, 
    pregunta: "¿Porque Arthas abandono la luz?", 
    respuestas:[
    "Porque enloquecio gracias a la Frostmoure", 
    "Por poder", 
    "Por la corona de Therenas",
    "Por que la luz le ilumino tanto la cara que se harto y queria oscuridad"
],
correcta: "Porque enloquecio gracias a la Frostmoure"
},

// Pregunta 26
{   numero:26, 
    pregunta: "¿En que se convirtio Arthas?", 
    respuestas:[
    "En Caballero de la muerte", 
    "En el Rey Arthas", 
    "En la mano derecha de la legion",
    "En mago"
],
correcta: "En Caballero de la muerte"
},

// Pregunta 27
{   numero:27, 
    pregunta: "¿Quien casi derrota al Arthas caballero de la muerte?", 
    respuestas:[
    "Uther", 
    "Tichondrius", 
    "Illidan",
    "El rey lich"
],
correcta: "Uther"
},

// Pregunta 28
{   numero:28, 
    pregunta: "¿Cuando Arthas fue a Dalaran a quien no queria ver?", 
    respuestas:[
    "A Jaina", 
    "A Antonidas, maestro de Jaina", 
    "Al espejo",
    "A Kael"
],
correcta: "A Jaina"
},

// Pregunta 29
{   numero:29, 
    pregunta: "Quien es Uther", 
    respuestas:[
    "El paladin maestro de Arthas", 
    "El paladin sirviente de Arthas", 
    "El sirviente de Arthas",
    "El capitan de los barcos"
],
correcta: "El paladin maestro de Arthas"
},

// Pregunta 30
{   numero:30, 
    pregunta: "Que queria Arthas", 
    respuestas:[
    "Convertirse en el nuevo Rey lich", 
    "Convertirse en un rey absoluto", 
    "Ser dios",
    "Volver a ser paladin",
],
correcta: "Convertirse en el nuevo Rey lich"
}
]

let aciertos=0

//aca es donde esta el Quiz y su logica
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

var numeroPregunta=0
mostrarPregunta(numeroPregunta)
function mostrarPregunta(numeroPregunta){ 
    let pregunta=document.getElementById("pregunta");
    pregunta.innerHTML="<p>"+quiz[numeroPregunta].pregunta+"</p>"

    let respuestasRestantes= quiz[numeroPregunta].respuestas
    for(let i=1;i<=4;i++){
        let indiceRespuesta=randomIntFromInterval (0,4-i)
        let respuesta=document.getElementById("respuesta"+i);
        respuesta.innerHTML="<p>"+respuestasRestantes[indiceRespuesta]+"</p>"
        respuestasRestantes.splice (indiceRespuesta, 1)
    }
}

let respondio= function respondio(respuestaUsada) {

    let mensaje
    if (respuestaUsada===quiz[numeroPregunta].correcta) {
        icono="success"
        mensaje="acertaste la pregunta" 
        aciertos=aciertos+1
    }
    else{
        icono="error"
        mensaje="Has fallado! Mas suerte la proxima pregunta! Elegiste mal: "+respuestaUsada+" La respuesta correcta era: "+quiz[numeroPregunta].correcta
    }

    Swal.fire({
        
    title: '',
    icon: icono,
    html: mensaje,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:'OK!',
    confirmButtonAriaLabel: 'cerrar, Ok!',
    cancelButtonText:'',
    cancelButtonAriaLabel:''
    })

    if(numeroPregunta===29) {
        Swal.fire(  {
            title: 'Terminaste el quizz! Felicitaciones!',
            icon: "success",
            html: "Espero que hayas disfrutado el quizz, tu puntaje es "+ aciertos,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:'OK!',
            confirmButtonAriaLabel: 'cerrar, Ok!',
            cancelButtonText:'',
            cancelButtonAriaLabel:''
        })
        let grid=document.getElementById ("quiz-final")
        grid.classList.add('grid-ganador');
        let gridMensajeFinal=document.getElementById ("gridMensajeFinal")
        gridMensajeFinal.classList.remove('gridMensajeFinal');
    } else{
        numeroPregunta = numeroPregunta + 1
        mostrarPregunta(numeroPregunta)
    }
}

for(let i=1;i<=4;i++){
    let boton=document.getElementById ("respuesta"+ i)
    boton.addEventListener("click", ()=> respondio(boton.textContent));
}

//final del quizz
