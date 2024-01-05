let typedTextElement = document.querySelector(".textanimation");
// Text to be displayed with typing animation
const text = "Rks Team";

// Get the element to display the typing animation
// const typedTextElement = document.getElementById('typed-text');

// Function to simulate typing animation
function typeWriter() {
  let count = 0;
  let i = 0;
  const typingEffect = setInterval(() => {
    typedTextElement.textContent += text[i];
    i++;
    if (i === text.length) {
      count + 1;
      clearInterval(typingEffect);
    }
  }, 200);

  console.log(count); // Adjust typing speed (in milliseconds)
}

// Start the typing animation
typeWriter();

const codeSyn = `const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is your Node.js server!');
});

const PORT = 3000; // You can change the port number if needed

// Start the server
server.listen(PORT, () => {
  console.log("Server Running On RksTeam");
});
`;

document.querySelector('.syntax').innerHTML = codeSyn 

function handleRegister() {
    window.location.href = "register.html"
}

// menubar dynamic 
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('active-menu')
  document.querySelector('.menus-side ul').classList.toggle('active-menu')
})