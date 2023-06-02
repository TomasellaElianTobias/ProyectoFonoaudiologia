<script>
    import Header from "../../components/Header.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let APIURL = "http://localhost:3000";
    let listapacientes = {
        nombre: "",
        edad: 0,
        Dni: "",
        Diagnostico: "",
        _id: "",
    };
    let listaejercicios = [];

    onMount(async () => {
        getPaciente();
        getEjercicios();
    });

    async function getPaciente() {
        let id = $page.params.slug;
        let res = await fetch(`${APIURL}/paciente/${id}`, {
            method: "GET",
        });
        let pacientes = await res.json();
        listapacientes = pacientes;
        console.log(pacientes);
    }

    async function getEjercicios() {
        let id = $page.params.slug;
        let res = await fetch(`${APIURL}/ejercicio`);
        let ejercicios = await res.json();
        listaejercicios = ejercicios.filter(
            (ejercicio) => ejercicio.paciente[0] === id
        );
        console.log(listaejercicios);
    }
</script>

<div class="encabezado">
    <Header />
</div>

<div class="usuario">
    <h1>Fonoaudiólogos</h1>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>PACIENTE: {listapacientes.nombre}</h2>
                </div>
                {#each listaejercicios as ejercicio}
                    <div class="col-4 ejercicio">
                        <div class="contenedorCreacion">
                            <h5>EJERCICIO: {ejercicio.nombreEjercicio}</h5>
                            <div class="row">
                                <div class="col-12">
                                    {ejercicio.descripcion}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    REPETICIONES: {ejercicio.repeticiones}
                                    {ejercicio.repeticiones > 1
                                        ? "veces"
                                        : "vez"} todos los dias
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <!-- svelte-ignore a11y-missing-attribute -->
                                    <iframe
                                        src={ejercicio.video}
                                        width="630"
                                        height="470"
                                        allow="autoplay"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
                <div class="col-4">
                    <div class="contenedorCreacion">
                        NUEVO EJERCICIO
                        <a href="/CrearEjercicio?paciente={listapacientes._id}">
                            <button type="submit">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <style>
                                        svg {
                                            fill: #fcfcfc;
                                        }
                                    </style><path
                                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                    />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<style>
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

    div.encabezado {
        background-color: purple;
    }

    iframe {
        border: dotted;
        width: 100%;
        height: auto;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5%;
        margin-left: 50px;
        margin-right: 50px;
        background-color: white;
        border-top-left-radius: 10% 5%;
        border-bottom-left-radius: 10% 5%;
        border-top-right-radius: 10% 5%;
        border-bottom-right-radius: 10% 5%;
    }

    .contenedorCreacion {
        border: 10px solid purple;
        background-color: purple;
        padding: 1em;
        border-radius: 10px;
        display: grid;
        font-size: 20px;
        color: white;
        font-weight: 700;
        min-height: 600px;
        max-height: 600px;
        margin-top: 10%;
    }

    div.usuario {
        background-color: #c8a2c8;
        padding-bottom: 25%;
    }

    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: purple;
        color: white;
        border: none;
        font-weight: 700;
        width: 100%;
    }
</style>
