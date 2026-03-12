(async function () {
  try {
    const { data: { session } } = await _supabase.auth.getSession();

    if (!session) {
      localStorage.removeItem('unimap_user');
      window.location.href = 'index.html';
      return;
    }

    localStorage.setItem('unimap_user', JSON.stringify({
      id: session.user.id,
      email: session.user.email,
      name: session.user.user_metadata.name || session.user.email
    }));

    document.documentElement.classList.add('auth-ready');

  } catch (err) {
    document.documentElement.classList.add('auth-ready');
  }
})();
