console.log('This is the login app.js "/login/app.js"'); // was checking if everything was ok

if (document.cookie.includes("logged")) window.location.href = "/"; // logs the user if he has already logged in once

const contacts = [
  {name: "Heitor", description: "H", photo: null},
  {name: "Duda kpop", description: "", photo: null, admin: true},
  {name: "Maria Salgado", description: "TM", photo: null, admin: true},
  {name: "Nina", description: ":pink_heart:", photo: null, admin: true},
  {name: "Bekleysson", description: ":shark:", photo: null},
  {name: "Borges", description: "Technoblade never dies", photo: null},
  {name: "Caio", description: "H", photo: null},
  {name: "Catharina", description: "catharinaa", photo: null},
  {name: "Cecukua", description: "cecii", photo: null},
  {name: "Diogo", description: "\"Os labios da sabedoria estao fe...\" VASCOOO", photo: null},
  {name: "Frenanda", description: "<3", photo: null},
  {name: "Gabriel Stibich", description: ":warning:", photo: null},
  {name: "Gustavo Amorim das Sacanagens", description: ":handshake:", photo: null},
  {name: "Lara", description: ":cd:", photo: null},
  {name: "Maria Clara (alguma coisa)", description: ":heart_post_card:", photo: null},
  {name: "Natan", description: "Sei la", photo: null},
  {name: "Pedro Letroll", description: ":volley_ball:", photo: null},
  {name: "Rafael  Burger King", description: "Jrud", photo: null},
  {name: "Renana", description: ".", photo: null},
  {name: "Theo", description: ".", photo: null},  
];

makeLogginPage();

// fds heitor do futuro eu n vou explicar nada
function makeLogginPage() {
  document.body.classList.add("log")
  // {/} root start -
  const root = document.createElement("div");
  root.className = "root";

  // {/root/} loginHeader start --
  const loginHeader = document.createElement("h1");
  loginHeader.className = "imp-header log"; // imp is an abbreviation for important 😬🧐🤓
  loginHeader.textContent = "Login";

  // {/root/} content start --
  const contentDiv = document.createElement("div");
  contentDiv.className = "content";

  const form = document.createElement("form");
  form.action = "/";
  form.method = "get";
  form.className = "form-im-bad-with-names";

  // send form function
  const sendForm = () => {
    document.cookie = "logged";
    form.submit();
  }

  // {/root/content/} myContactsInput start ---
  const myContactsDiv = document.createElement("input");
  myContactsDiv.className = "inp élégant"; // inp stands for input
  myContactsDiv.name = "friend";
  myContactsDiv.placeholder = "Please enter YOUR name";
  myContactsDiv.autocomplete = "off";
  myContactsDiv.addEventListener("keydown", ({key}) => key == 'Enter' && sendForm());

  // {/root/content/} submitBtn start ---
  const submitBtn = document.createElement("div");
  submitBtn.className = "btn fudidu";
  submitBtn.textContent = "Submit";

  submitBtn.addEventListener("click", sendForm);
  
  form.appendChild(myContactsDiv);
  form.appendChild(submitBtn);

  // {/root/content/} content appenditions --
  contentDiv.appendChild(form);

  // {/root} root appenditions (is this word?) -
  root.appendChild(loginHeader);
  root.appendChild(contentDiv);

  // {/} root end -
  document.body.appendChild(root);
}

// forget about it
// function addContactsToList(div, contactsArray) {}
