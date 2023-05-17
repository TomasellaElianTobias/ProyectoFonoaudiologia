<script>
    let username = '';
    let password = '';
  
    function handleSubmit() {
      alert(`Nombre de usuario: ${username}\nContraseña: ${password}`);
    }
  </script>
  
  <main>
    <h1>Iniciar sesión</h1>
  
    <form on:submit|preventDefault={handleSubmit}>
      <label>
        Nombre de usuario:
        <input type="text" bind:value={username} />
      </label>
  
      <label>
        Contraseña:
        <input type="password" bind:value={password} />
      </label>
  
      <button type="submit">Iniciar sesión</button>
    </form>
  </main>
  
  <style>
    main {
      max-width: 400px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  
    h1 {
      margin-bottom: 1rem;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  
    input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  
    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 4px;
      background-color: #007bff;
      color: #fff;
      border: none;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
 
  
  