const users = {};
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');

signupBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email && password) {
    if (users[email]) {
      Swal.fire('Error', 'User already exists!', 'error');
    } else {
      users[email] = password;
      Swal.fire('Success', 'Signup successful!', 'success');
      
      
      emailInput.value = '';
      passwordInput.value = '';
      signupBtn.style.display = 'none';
      loginBtn.style.display = 'block';
    }
  } else {
    Swal.fire('Error', 'Please fill all fields.', 'error');
  }
});

loginBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email && password) {
    if (users[email] && users[email] === password) {
      Swal.fire('Success', 'Login successful!', 'success');
    } else {
      Swal.fire('Error', 'Invalid email or password!', 'error');
    }
  } else {
    Swal.fire('Error', 'Please fill all fields.', 'error');
  }
});



