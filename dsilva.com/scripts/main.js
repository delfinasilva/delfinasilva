const myImage = document.querySelector("img");

// Alterna o src da imagem ao clicar
myImage.onclick = () => {
    // Obtém o src atual
  const mySrc = myImage.getAttribute("src");
   // Verifica e alterna o src
  if (mySrc === "images/97134237.jpg") {
    myImage.setAttribute("src", "images/dsilva2.jpg");
  } else {
    myImage.setAttribute("src", "images/97134237.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bem-Vindo ao meu lifestyle, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bem-Vindo ao meu lifestyle, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
  
  function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Bem-Vindo ao meu lifestyle, ${myName}`;
    }
  }
  