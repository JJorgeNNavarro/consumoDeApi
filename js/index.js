const app = document.getElementById("app");

/*fetch("https://api.github.com/users")
  .then((response) => response.json())
  .then((data) => getData(data));*/

//en este nuevo modelo hago lo mismo de arriba pero escrito con la nueva sintaxis
const fetchData = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    getData(data);
  } catch (error) {
    console.log("pagina no encontrada", error);
  }
};

const getData = (data) => {
  data.map((users) => {
    return card(users);
  });
};

const card = (users) => {
  console.log(users);

  app.innerHTML += `<div class='card'>
                        <img src= ${users.avatar_url} alt="user ${users.login}" />
                        <p><span>Login</span> ${users.login}</p>
                        <p><span>Url</span> ${users.url}</p>
                        ${users.login}
                         </div>`;
};

fetchData();
