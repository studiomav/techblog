async function registerHandler(event)
{
  event.preventDefault();

  const username = document.querySelector('#formUsername').value.trim();
  const password = document.querySelector('#formPassword').value.trim();

  if (username && password) 
  {
    const response = await fetch('/api/users',
      {
        method: 'post',
        body: JSON.stringify(
          {
            username,
            password
          }),
        headers: { 'Content-Type': 'application/json' }
      });

    if (response.ok)
    {
      console.log('success');
      document.location.replace('/dashboard');
    }
    else
    {
      alert(response.statusText);
    }
  }
}

document.querySelector('#registerForm').addEventListener('submit', registerHandler);