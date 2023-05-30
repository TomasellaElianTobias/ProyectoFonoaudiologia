<script>
    import { onMount } from "svelte";
    import Header from "../../components/Header.svelte";
    let APIURL = "http://localhost:3000/paciente";
    let listapacientes = [
        { nombre: "", edad: 0, Dni: "", Diagnostico: "", _id: "" },
    ];

    onMount(async () => {
        const res = await fetch(APIURL);
        const pacientes = await res.json();
        listapacientes = pacientes;
        console.log(listapacientes);
    });
</script>

<head>
    <title>Pacientes</title>
</head>

<div class="encabezado">
    <Header></Header>
  </div>

<div class="usuario">
    <h1>Fonoaudiólogos</h1>
    <main>
        <h2>SELECCIONE A SU PACIENTE</h2>
        <div class="contenedorPacientes">
            {#each listapacientes as paciente}
                <div class="paciente">
                    {#if paciente.edad != 0}
                        <a href={"/" + paciente._id}>
                            <button class="btn btn-secondary">
                                <p>Nombre y Apellido: {paciente.nombre}</p>
                                <p>Nro de Documento: {paciente.Dni}</p>
                                <p>Edad: {paciente.edad}</p>
                                <p>Diagnóstico: {paciente.Diagnostico}</p>
                            </button>
                        </a>
                    {/if}
                </div>
            {:else}
                <p>Sin respuesta...</p>
            {/each}
        </div>
        <div>
            <a href="/CrearPaciente">
                <button class="CrearPaciente">AGREGAR PACIENTE</button>
            </a>
        </div>
    </main>
</div>

<style>
    div.encabezado {
        background-color: purple;
    }

    button {
        font-weight: 700;
        width: 400px;
        height: 170px;
        background-color: purple;
    }

    div.contenedorPacientes {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        margin-bottom: 20px;
    }

    div.paciente {
        width: calc(50% - 10px);
        height: 150px;
        margin-top: 20px;
        margin-right: 10px;
        margin-bottom: 0;
    }

    h1 {
        text-align: center;
        padding-top: 30px;
        color: purple;
        background-color: #c8a2c8;
    }

    h2 {
        margin-top: 10px;
        padding-bottom: 50px;
        font-weight: 700;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 100px;
        margin-right: 100px;
        padding: 5%;
        background-color: white;
        border-top-left-radius: 15% 25%;
        border-bottom-left-radius: 15% 25%;
        border-top-right-radius: 15% 25%;
        border-bottom-right-radius: 15% 25%;
    }

    div.usuario {
        background-color: #c8a2c8;
        margin-bottom: auto;
        padding-bottom: 0;
    }

    button.CrearPaciente {
        font-size: larger;
        font-weight: 700;
        margin-top: 5%;
        color: black;
        background-color: #c8a2c8;
        height: 100px;
        border-top-left-radius: 15% 15%;
        border-bottom-left-radius: 15% 15%;
        border-top-right-radius: 15% 15%;
        border-bottom-right-radius: 15% 15%;
        border: #c8a2c8;
    }
</style>
