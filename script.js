document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
  
    
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
 
      if (name === '' || email === '' || message === '') {
        responseDiv.innerHTML = '<p style="color:red;">Please fill out all fields.</p>';
        return;
      }
  
      responseDiv.innerHTML = `
        <h3>Thank you for contacting me, ${name}!</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

  form.reset();
  });
});
        