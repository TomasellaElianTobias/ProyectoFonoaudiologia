<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import Header from "../../components/Header.svelte";
    let APIURL = "http://localhost:3000/paciente";
    let listapacientes = [
        { nombre: "", edad: 0, Dni: "", Diagnostico: "", _id: "" },
    ];
    let nombre = "";
    let edad = 0;
    let Dni = "";
    let Diagnostico = "";

    onMount(() => {
        getPacientes();
    });

    async function getPacientes() {
        const res = await fetch(APIURL);
        const pacientes = await res.json();
        listapacientes = pacientes;
    }

    async function addPaciente() {
        let obj = { nombre, edad, Dni, Diagnostico };
        const res = await fetch(APIURL, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(await res.json());
        getPacientes();
        clearInput();
    }

    function clearInput() {
        nombre = "";
        edad = 0;
        Dni = "";
        Diagnostico = "";
    }

    async function deletePaciente(id) {
        const res = await fetch(APIURL + `/${id}`, { method: "DELETE" });
        console.log(await res.json());
        getPacientes();
    }
</script>

<head>
    <title>Administracion</title>
</head>

<div class="encabezado">
    <Header></Header>
  </div>

<div class="usuario">
    <h1>Fonoaudiólogos</h1>
    <main>
        <h2>CREAR NUEVO PACIENTE</h2>
        <div class="contenedorCreacion">
            <label for="nombre">Paciente</label>
            <input bind:value={nombre} />
            <label for="edad">Edad</label>
            <input bind:value={edad} />
            <label for="Dni">Dni</label>
            <input bind:value={Dni} />
            <label for="Diagnostico">Diagnostico</label>
            <textarea bind:value={Diagnostico} />

            <div class="centrado">
                <button on:click={addPaciente}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-circle-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                        />
                    </svg>
                    GUARDAR
                </button>
            </div>
        </div>
        <div class="contenedorPacientes">
            {#each listapacientes as paciente}
                <div>
                    <button
                        class="btn btn-primary"
                        on:click={deletePaciente(paciente._id)}
                    >
                        Eliminar {paciente.nombre}</button
                    >
                </div>
            {:else}
                <p>Sin respuesta</p>
            {/each}
        </div>
    </main>
</div>

<style>
div.encabezado{
        background-color: purple;
    }

    textarea {
        padding: 0.5rem;
        font-size: 1rem;
        border: solid;
        color: purple;
        width: 100%;
    }

    h1 {
        text-align: center;
        padding-top: 30px;
        color: purple;
        background-color: #c8a2c8;
    }

    h2{
      margin-top: 10px;
      padding-bottom: 50px;
      font-weight: 700;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5%;
        margin-left: 100px;
        margin-right: 100px;
        background-color: white;
        border-top-left-radius: 15% 25%;
        border-bottom-left-radius: 15% 25%;
        border-top-right-radius: 15% 25%;
        border-bottom-right-radius: 15% 25%;
        justify-content: center;
        align-items: center;
    }

    div.usuario {
        background: #c8a2c8;
        padding-bottom: 100%;
    }
    .contenedorCreacion {
        border: 1px solid purple;
        background-color: #c8a2c8;
        width: fit-content;
        padding: 1em;
        border-radius: 10px;
        display: grid;
    }
    .contenedorPacientes {
        width: auto;
        text-align: center;
        padding-top: 2em;
        padding-bottom: 2em;
    }
    .centrado {
        text-align: center;
    }
    input {
        padding: 0.5rem;
        font-size: 1rem;
        border: solid;
        color: purple;
        width: 500px;
    }
    label {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-family: "Times New Roman", Times, serif;
    }
    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: purple;
        color: white;
        border: solid purple;
        font-weight: 700;
        margin-top: 1em;
        display: inline-block;
    }
    button:hover {
        background-color: orange;
    }
</style>
