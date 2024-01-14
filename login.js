document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen form dan halaman
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');
    const nextPageLink = document.getElementById('nextPageLink');
  
    // Akun untuk login (contoh)
    const validUsername = 'admin';
    const validPassword = 'admin';
  
    // Tambahkan event listener untuk form login
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Ambil nilai input
      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;
  
      // Periksa apakah input sesuai dengan akun
      if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Jika benar, arahkan ke halaman berikutnya
        window.location.href = 'awal.html'; // Ganti dengan halaman home
      } else {
        alert('Username atau password salah. Silakan coba lagi.');
      }
    });

    nextPageLink.addEventListener('click', function () {
      window.location.href = 'awal.html'; // Ganti dengan halaman home
    });

  });
  