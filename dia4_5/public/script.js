console.log("Holis desde el Front!");

(async () => {
  const response = await fetch('/users');
  const users = await response.json();
  console.log(users);
})();


async function guardar () {
  alert("Click botón");
  const nombre = document.querySelector('#txtNombre').value;
  const apellido = document.querySelector('#txtApellido').value;
  const user = { nombre, apellido};
  
  console.log(user);

  await fetch('users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}