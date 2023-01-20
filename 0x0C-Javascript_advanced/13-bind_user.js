const user = (function () {
  const hobby = "Calligraphy";
  const favoriteSport = "Hockey";
  const astrologicalSign = "Aries";
  const firstName = "Buillaume";
  const lastName = "Ialva";
  const location = "Telaviv";
  const occupation = "Engineer";

  function logWelcomeUser(welcomeString) {
    console.log(
      `${welcomeString}, ${firstName} your occupation is: ${occupation}`
    );
  }

  return {
    logWelcomeUser,
  };
})();

const bindLogWelcomeUser = user.logWelcomeUser("Welcome");
