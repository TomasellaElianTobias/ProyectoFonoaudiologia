<script>
	let name = '';
	let message = '';
  
	function handleSubmit() {
	  if (name && message) {
		alert(`Hola ${name}! Tu mensaje es: ${message}`);
		name = '';
		message = '';
	  } else {
		alert('Por favor, completa todos los campos');
	  }
	}
  </script>
  
  <main>
	<h1>Aplicación de Mensajes</h1>
  
	<form on:submit|preventDefault={handleSubmit}>
	  <label>
		Nombre:
		<input type="text" bind:value={name} />
	  </label>
  
	  <label>
		Mensaje:
		<textarea bind:value={message}></textarea>
	  </label>
  
	  <button type="submit">Enviar</button>
	</form>
  </main>
  
  <style>
	main {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  padding: 2rem;
	}
  
	h1 {
	  margin-bottom: 1rem;
	}
  
	form {
	  display: flex;
	  flex-direction: column;
	  gap: 1rem;
	  max-width: 400px;
	}
  
	label {
	  display: flex;
	  flex-direction: column;
	}
  
	input,
	textarea {
	  padding: 0.5rem;
	  font-size: 1rem;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	}
  
	button {
	  padding: 0.5rem 1rem;
	  font-size: 1rem;
	  background-color: #007bff;
	  color: #fff;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
	}
  
	button:hover {
	  background-color: #0056b3;
	}
  </style>