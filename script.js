document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const name = document.getElementById("name").value;
  alert(`Thank you for contacting us, ${name}!`);
});