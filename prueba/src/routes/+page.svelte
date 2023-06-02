<script>
    import { onMount } from "svelte";
    import Header from "../components/Header.svelte";
    let APIURL = "http://localhost:3000/paciente";
    let listapacientes = [{ nombre: "", edad: 0, _id: "" }];

    onMount(async () => {
        const res = await fetch(APIURL);
        const pacientes = await res.json();
        listapacientes = pacientes;
        console.log(listapacientes);
    });
</script>

<head>
    <title>Inicio</title>
</head>

<div class="encabezado">
    <Header />
</div>

<div class="Inicio">
    <h3>
        Bienvenido a Fonemáticos
        <img
            src="https://www.infantica.com/wp-content/uploads/2014/10/speech_therapy.png"
            alt="fono"
            height="100"
        />
    </h3>

    <div class="contenedor">
        <div class="bienvenido1">
            <a href="/UsuarioF">
                <button class="boton1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 448 512"
                    >
                        <path
                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                        />
                    </svg>
                    Soy Fonoaudiólogo
                </button>
            </a>
        </div>
        <div class="bienvenido2">
            <a href="/UsuarioP">
                <button class="boton2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 640 512"
                    >
                        <path
                            d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
                        />
                    </svg>
                    Soy Paciente
                </button>
            </a>
        </div>
    </div>
</div>

<style>
    h3 {
        margin-left: 1em;
    }
    div.Inicio {
        text-align: center;
        background: #ffffff;
        width: 100%;
        font-family: fantasy;
        background-color: white;
        padding-bottom: 0;
    }

    button {
        margin: 0.5em;
    }
    .boton1 {
        background-color: rgb(127, 38, 150);
        color: #ffffff;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: block;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        border: solid black;
        display: inline-block;
        font-size: 24px;
    }
    .boton1:hover {
        background-color: orange;
        color: black;
    }
    .boton2:hover {
        background-color: orange;
        color: black;
    }
    .boton2 {
        background-color: rgb(13, 155, 13);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #ffffff;
        display: block;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        border: solid black;
        display: inline-block;
        font-size: 24px;
    }
    .bienvenido1 {
        width: 400px;
        height: 400px;
        padding: 10px 5px;
        background-color: rgb(255, 255, 255);
        margin-right: 100px;
    }
    .bienvenido2 {
        width: 400px;
        height: 400px;
        padding: 10px 5px;
        background-color: rgb(255, 255, 255);
    }
    .contenedor {
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.encabezado {
        background-color: purple;
    }
</style>
