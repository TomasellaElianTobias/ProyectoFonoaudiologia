<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	import Header from '../../components/Header.svelte';
    let APIURL ="http://localhost:3000/paciente";
	let listaPacientes = [{nombre:'', edad:0, _id:''}];
	let nombre = '';
	let edad = 0;
	
	onMount(() => {
	    getPacientes()  
	});

	async function getPacientes(){
		const res = await fetch(APIURL);
		const pacientes = await res.json();
		listaPacientes = pacientes;
	}

	async function addPaciente() {
		let obj = { nombre, edad };
		const res = await fetch(APIURL, {
			 method: 'POST',
			 body: JSON.stringify(obj),
			 headers:{
                'Content-Type': 'application/json'
               }
			});
		   console.log(await res.json());
		   getPacientes()
		   clearInput() 
	}

	function clearInput(){
	   nombre = '';
	   edad = 0;
	}

	async function deletePaciente(id){
		const res = await fetch(APIURL+`/${id}`, { method: 'DELETE'});
	    console.log(await res.json());  
	    getPacientes()         
	}

</script>

<head>
	<title>Administracion</title>
</head>

<header>
	<Header></Header>
</header>

<header>
    <Header></Header>
</header>

<body>
    <div class="contenedorCreacion">
        <label for="nombre">Paciente</label>
        <input bind:value={nombre}>
        <label for="edad">Edad</label>
        <input bind:value={edad}>
        <label for="direccion">Direccion</label>

        <div class="centrado">
            <button class="btn btn-success" on:click={addPaciente}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
                Crear paciente
            </button>
        </div>
    </div>
    <div class="contenedorPacientes">
        {#each listaPacientes as paciente}
        <div>
            <button class="btn btn-primary" on:click={deletePaciente(paciente._id)}>
            Eliminar {paciente.nombre}</button>
        </div>
        {:else}
            <p>Sin respuesta</p>
        {/each}
    </div>

</body>


<style>
    body{
	    background: #e8f2fc;
        margin: 2em;
        display: grid;
        justify-content: center;
        align-items: center;
  	}
    .contenedorCreacion{
        border: 1px solid #ccc;
        background-color: #f2f2f2;
        width: fit-content;
        padding: 1em;
        border-radius: 10px;
        display: grid;
    }
    .contenedorPacientes{
            width: auto;
            text-align: center;
            padding-top: 2em;
            padding-bottom: 2em;
        }
    .centrado{
        text-align: center;
    }
    input{
        width: 300px;
    }
    button{
        margin-top: 1em;
        display: inline-block;
    }
</style>