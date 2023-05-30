<script>
  import Header from "../../components/Header.svelte";

    let username = '';
    let password = '';
  
    function register() {
      // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
      // y realizar el proceso de registro
      console.log('Registro exitoso');
      console.log('Nombre de usuario:', username);
      console.log('Contraseña:', password);
    }
  </script>
  <head>
    <title>Fonoaudiólogo</title>
  </head>

  <div class="encabezado">
    <Header></Header>
  </div>

<div class="usuario">
  <h1>
    Fonoaudiólogos
  </h1>
  <main>
    <h2>INGRESE A SU CUENTA</h2>

    <form on:submit|preventDefault={register}>
      <div class="contenedorCreacion">
        <label>
          Número de Documento:
          <input type="text" bind:value={username} />
        </label>
        <label>
          Contraseña:
          <input type="password" bind:value={password} />
        </label>
        <a href="/VerPacientes">
          <button type="submit">INGRESAR</button>
        </a>
        
      </div>
    </form>
  </main>
</div>

  
  <style>
    .contenedorCreacion{
    border: 1px solid purple;
    background-color: #C8A2C8;
    padding: 1em;
    border-radius: 10px;
    display: grid;
  }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5%;
      margin-left: 100px;
      margin-right: 100px;
      background-color: white;
      border-top-left-radius:15% 25%;
      border-bottom-left-radius:15% 25%;
      border-top-right-radius:15% 25%;
      border-bottom-right-radius:15% 25%;
    }

    h1{
      text-align: center;
      padding-top: 30px;
      color: purple;
      background-color: #C8A2C8;
    }

    h2{
      margin-top: 10px;
      padding-bottom: 50px;
      font-weight: 700;
    }

    div.usuario{
      background-color: #C8A2C8;
      margin-bottom: auto;
      padding-bottom: 100%;
    }
    
    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
  
    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      font-weight: 400;
      font-family: 'Times New Roman', Times, serif;
    }
  
    input {
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
      cursor: pointer;
      font-weight: 700;
      width: 100%;
    }
    
    div.encabezado{
        background-color: purple;
    }
  </style>
