<script>
  import Header from "../../components/Header.svelte";
  let APIURL = "http://localhost:3000/paciente";
  let baseUrl = "http://localhost:5173/";
  let listapacientes = [
    { nombre: "", edad: 0, Dni: "", Diagnostico: "", _id: "" },
  ];

  let nombreP = "";
  let DniP = "";
  let ingreso_e = false;
  let pacienteE;
  let mensajeE = false;

  async function UsuarioLogin() {
    const res = await fetch(APIURL);
    const pacientes = await res.json();
    console.log(pacientes)
    listapacientes = pacientes;
    listapacientes.forEach((paciente) => {
      if (
        paciente.nombre.toUpperCase() == nombreP.toUpperCase() &&
        paciente.Dni == DniP
      ) {
        pacienteE = paciente;
        ingreso_e = true;
      }
    });
    if (!ingreso_e) {
      mensajeE = true;
    }
    else{
      window.location.href = baseUrl + "PacienteV/" + pacienteE._id;
    }
    console.log(listapacientes);
    console.log(mensajeE,ingreso_e);
  };
</script>

<head>
  <title>Paciente</title>
</head>

<div class="encabezado">
  <Header></Header>
</div>


<div class="usuario">
    <h1>Pacientes</h1> 
  <main>
    <h2>INGRESE A SU CUENTA</h2>
    <form>
      <div class="contenedorCreacion">
        <label>
          Nombre y apellido:
          <input type="text" bind:value={nombreP} />
        </label>
        <label>
          Número de Documento:
          <input type="text" bind:value={DniP} />
        </label>
        <div class="centrado">
          <div>
            <button class="btn btn-success" type="submit" on:click={UsuarioLogin}>INGRESAR</button>
            {#if mensajeE}
            <p style="color: red; margin-top: 10%">Error en los datos ingresados</p>
            {/if}
          </div>
        </div>
      </div>
    </form>
  </main>
</div>

<style>
  .contenedorCreacion {
    border: 1px solid darkgreen;
    background-color: rgba(197, 223, 210, 255);
    padding: 1em;
    border-radius: 10px;
    display: grid;
  }

  .centrado {
    text-align: center;
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
  }

  h1 {
    text-align: center;
    padding-top: 20px;
    color: rgba(48, 101, 75, 255);
    background-color: rgba(197, 223, 210, 255);
  }

  h2 {
    margin-top: 10px;
    padding-bottom: 50px;
    font-weight: 700;
  }

  div.usuario {
    background-color: rgba(197, 223, 210, 255);
    padding-bottom: 25%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    display: inline-block;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-weight: 400;
    font-family: "Times New Roman", Times, serif;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: solid;
    color: green;
    width: 100%;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: green;
    color: white;
    border: solid green;
    font-weight: 700;
    margin-top: 1em;
    display: inline-block;
  }

  div.encabezado {
    background-color: darkgreen;
  }
</style>
