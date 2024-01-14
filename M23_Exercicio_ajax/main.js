document.addEventListener("DOMContentLoaded", function () {
  //Dados perfil
  const profileAvatar = document.querySelector(".profile-avatar");
  const profileName = document.querySelector(".profile-name");
  const profileUsername = document.querySelector(".profile-username");

  //Dados seguidores e repositorios
  const repository = document.querySelector(".numbers-item-repository");
  const followers = document.querySelector(".numbers-item-followers");
  const following = document.querySelector(".numbers-item-following");

  //Link perfil
  const profileLink = document.querySelector(".profile-link");

  fetch("https://api.github.com/users/MatheuscRodrigues")
    .then(function (reply) {
      return reply.json();
    })
    .then(function (reply) {
      //Dados peril
      profileAvatar.src = reply.avatar_url;
      profileName.innerHTML = `${reply.name}`;
      profileUsername.innerHTML = `${reply.login}`;

      //Dados seguidores e repositorios
      repository.innerHTML = `${reply.public_repos}`;
      followers.innerHTML = `${reply.followers}`;
      following.innerHTML = `${reply.following}`;

      //Link perfil
      profileLink.target = "_blank";
      profileLink.href = reply.html_url;
    })
    //Catch para verificar qualquer tipo de erro que possa vir ocorrer
    .catch(function (error) {
      console.error("Erro: ", error.mensage);
    });
});
