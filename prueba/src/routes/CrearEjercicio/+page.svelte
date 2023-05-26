<script>
  import Header from "../../components/Header.svelte";

    let username = '';
    let password = '';
    let description = '';
    let video = '';
  
    function register() {
      // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
      // y realizar el proceso de registro
      console.log('Registro exitoso');
      console.log('Nombre de usuario:', username);
      console.log('Contraseña:', password);
      console.log('Descripción/Consigna:', description);
      console.log('Video guía:', video);

    }
  </script>
  <head>
    <title>Casita</title>
  </head>

  <header>
    <Header></Header>
  </header>

<body>
  <h1>
    Fonoaudiólogos
  </h1>
  <main>
    <h2>CREAR NUEVO EJERCICIO</h2>

    <form on:submit|preventDefault={register}>
      <label>
        Nombre del ejercicio:
        <input type="text" bind:value={username} />
      </label>
      <label>
        Repeticiones:
        <input type="password" bind:value={password} />
      </label>
        <label>
          Descripción/Consigna:
          <textarea bind:value={description}></textarea>
        </label>
      <label>
        Video guía:
        <input type="video" bind:value={video} />
      </label>
      <a href="/CrearPaciente">
      <button type="submit">GUARDAR</button>
      </a>
    </form>
  </main>
</body>

  
  <style>
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem;
      padding: 5%;
      background-color: white;
      border-top-left-radius:15% 25%;
      border-bottom-left-radius:15% 25%;
      border-top-right-radius:15% 25%;
      border-bottom-right-radius:15% 25%;
    }

    h1{
      text-align: center;
      margin-top: 5%;
      color: purple;
    }

    h2{
      margin-top: 10px;
      padding-bottom: 50px;
      font-weight: 700;
    }

    body{
      background-color: #C8A2C8;
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
      font-weight: 400;
      font-family: 'Times New Roman', Times, serif;
      width: 100%;
    }
  
    input {
      padding: 0.5rem;
      font-size: 1rem;
      border: solid;
      color: purple;
      width: 100%;
    }

    textarea{
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
      display: block;
      justify-content: center;
      width: 200px;
      margin: auto;
    }
    
    header{
        background-color: purple;
    }
  </style>