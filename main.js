let formulario = document.getElementById("consultaForm");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let formularioHTML = e.target.children;
    //este es el fieldset formularioHTML[1]
    let inputs = formularioHTML[1].elements;
    crearConsulta(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value,
        inputs[4].value, inputs[5].value, inputs[6].value, inputs[7].value,);
});

const mostrarConsultaEnviada = (consulta) => {
    console.log(consulta);
    let containerForm = document.getElementById("containerForm");
    let divConsulta = document.createElement("div");
    divConsulta.innerHTML = `
    <h1>Se han enviado los siguientes datos:</h1>
    <h2>Id: ${consulta.id}</h2>
    <h2>Nombre: ${consulta.nombre}</h2>
    <h2>Apellido: ${consulta.apellido}</h2>
    <h2>Telefono: ${consulta.tel}</h2>
    <h2>Email: ${consulta.email}</h2>
    <h2>Localidad: ${consulta.localidad}</h2>
    <h2>Horario: ${consulta.horario}</h2>
    <h2>EstadoCivil: ${consulta.estadoCivil}</h2>
    <h2>Comentario: ${consulta.comentario}</h2>
    `;
    
    divConsulta.className = "col-md-4";
    containerForm.append(divConsulta);
}

const crearConsulta = (nombre, apellido, tel, email, localidad, horario, estadoCivil, comentario) => {

    let consultasStorage = localStorage.getItem("consultas");

    if (!consultasStorage) {
        localStorage.setItem("consultas", '[]');
        consultasStorage = localStorage.getItem("consultas");
    }

    let consultas = JSON.parse(consultasStorage);
    console.log(consultas)
    let consulta = {
        id: consultas.length + 1,
        nombre: nombre,
        apellido: apellido,
        tel: tel,
        email: email,
        localidad: localidad,
        horario: horario,
        estadoCivil: estadoCivil,
        comentario: comentario
    };

    consultas.push(consulta);
    localStorage.setItem("consultas", JSON.stringify(consultas));
    mostrarConsultaEnviada(consulta);
};

