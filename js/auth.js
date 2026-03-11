(async function () {
  const token = localStorage.getItem('unimap_token');

  if (!token) {
    window.location.href = 'index.html';
    return;
  }

  try {
    const res = await fetch('/api/check-auth', {
      headers: { 'Authorization': 'Bearer ' + token }
    });

    if (!res.ok) {
      localStorage.removeItem('unimap_token');
      localStorage.removeItem('unimap_user');
      window.location.href = 'index.html';
      return;
    }

    const data = await res.json();

    if (data.user) {
      localStorage.setItem('unimap_user', JSON.stringify(data.user));
    }

    document.documentElement.classList.add('auth-ready');

  } catch (err) {
    document.documentElement.classList.add('auth-ready');
  }
})();
