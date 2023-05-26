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

  <header>
    <Header></Header>
  </header>

<body>
  <h1>
    Fonoaudiólogos
  </h1>
  <main>
    <h2>INGRESE A SU CUENTA</h2>

    <form on:submit|preventDefault={register}>
      <label>
        Número de Documento:
        <input type="text" bind:value={username} />
      </label>
      <label>
        Contraseña:
        <input type="password" bind:value={password} />
      </label>
      <a href="/CrearEjercicio">
        <button type="submit">INGRESAR</button>
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
    
    header{
        background-color: purple;
    }
  </style>