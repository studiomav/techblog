async function loginHandler(event)
{
    event.preventDefault();

    const username = document.querySelector('#formUsername').value.trim();
    const password = document.querySelector('#formPassword').value.trim();

    if (username && password)
    {
        const response = await fetch('/api/users/login',
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
            document.location.replace('/dashboard');
        }
        else
        {
            return response.json().then(function(data)
            {
                alert(data.message);
            });
        }
    }
}

document.querySelector('#loginForm').addEventListener('submit', loginHandler);