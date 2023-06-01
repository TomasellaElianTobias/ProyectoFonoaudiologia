<script>
  import Header from "../../components/Header.svelte";
  import { page } from "$app/stores";
  let APIURL = "http://localhost:3000/ejercicio";

  let nombreEjercicio = "";
  let repeticiones = "";
  let descripcion = "";
  let video = "";
  let paciente = "";

  async function addEjercicio() {
    paciente = $page.url.searchParams.get("paciente") || "";
    let obj = { nombreEjercicio, repeticiones, descripcion, video, paciente };
    const res = await fetch(APIURL, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(await res.json());
    // getPacientes();
    clearInput();
  }
</script>

<head>
  <title>Administracion</title>
</head>

<div class="encabezado">
  <Header />
</div>

<div class="usuario">
  <h1>Fonoaudiólogos</h1>
  <main>
    <h2>CREAR NUEVO EJERCICIO</h2>

    <form>
      <div class="contenedorCreacion">
        <label>
          Nombre del ejercicio:
          <input type="text" bind:value={nombreEjercicio} />
        </label>
        <label>
          Repeticiones:
          <input type="number" bind:value={repeticiones} />
        </label>
        <label>
          Descripción/Consigna:
          <textarea bind:value={descripcion} />
        </label><div class="form-floating">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example"bind:value={video}>
            <option value="https://drive.google.com/file/d/13SvpBzXZYz4cbdSD3W-mAGbjUROXz3Vv/preview">Labios</option>
            <option value="https://drive.google.com/file/d/1oD69xeCq3ZHnjDg9kfMjLerg_47g0aD5/preview">Sonidos</option>
            <option value="https://drive.google.com/file/d/16Qw7NzLJJRCfZy2YmDoA9_q13dmk3bKY/preview">MOV</option>
          </select>
          <label for="floatingSelect">Videos</label>
        </div>
        <button on:click|once={addEjercicio}>GUARDAR</button>
      </div>
    </form>
  </main>
</div>

<style>
  option{
    color: purple;
    font-weight: 700;
  }
  .contenedorCreacion {
    border: 1px solid purple;
    background-color: #c8a2c8;
    padding: 1em;
    border-radius: 10px;
    display: grid;
  }

  select.form-select{
    border: solid purple;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    padding: 5%;
    background-color: white;
    border-top-left-radius: 15% 25%;
    border-bottom-left-radius: 15% 25%;
    border-top-right-radius: 15% 25%;
    border-bottom-right-radius: 15% 25%;
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

  div.usuario {
    background-color: #c8a2c8;
    padding-bottom: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 900px;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-weight: 700;
    font-family: "Times New Roman", Times, serif;
    width: 100%;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: solid;
    color: purple;
    width: 100%;
  }

  textarea {
    padding: 0.5rem;
    font-size: 1rem;
    border: solid;
    color: purple;
    width: 100%;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: purple;
    color: white;
    border: none;
    font-weight: 700;
    display: block;
    justify-content: center;
    width: 200px;
    margin: auto;
    margin-top: 5%;
  }

  div.encabezado {
    background-color: purple;
  }
</style>
