<script>
    import {onMount} from 'svelte';
    import Header from '../components/Header.svelte';
    let APIURL = "http://localhost:3000/paciente";
    let listapacientes = [{nombre:'', edad:0, _id:''}]

    onMount(async() => {
        const res = await fetch(APIURL);
        const pacientes = await res.json();
        listapacientes = pacientes
        console.log(listapacientes)
    });

</script>

<head>
    <title>Casita</title>
</head>

<header>
    <Header></Header>
</header>

<body>
    <h3>
        Bienvenido a Fonemáticos
        <img src="https://www.infantica.com/wp-content/uploads/2014/10/speech_therapy.png" alt="fono" height="100">
    </h3>

    <div class="contenedor">
        <div class="bienvenido1">
            <a href="/UsuarioF">
                <button class="boton1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>                                
                    Soy Fonoaudiólogo
                </button>
                
            </a>
        </div>
        <div class="bienvenido2">
            <a href="/UsuarioP">
                <button class="boton2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill= "currentColor" viewBox="0 0 24 24">
                        <path d="M8 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0-6c1.178 0 2 .822 2 2s-.822 2-2 2-2-.822-2-2 .822-2 2-2zm1 7H7c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"></path><path d="M15.535 5.464 14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"></path>
                   </svg> 
                    Soy Paciente
                </button>
            </a>
        </div>  
    </div>
</body>

<style>
    h3 {
        margin-left: 1em;
    }
    body {
        text-align: center;
        background: #ffffff;
        width: 100%;
        font-family: fantasy;
        background-color: white;
    }
    
    button {
        margin: 0.5em;
    }
    .boton1{
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
    .boton1:hover{
        background-color: orange;   
    }
    .boton2:hover{
        background-color: orange;   
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
    header{
        background-color: purple;
    }
</style>