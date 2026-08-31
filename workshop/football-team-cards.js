const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false }
  ]
};


const { team, year, headCoach, players } = footballTeam;


document.getElementById("team").textContent = team;
document.getElementById("year").textContent = year;
document.getElementById("head-coach").textContent = headCoach;

const playerCardsContainer = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");


const setPlayerCards = (arr = players) => {
  playerCardsContainer.innerHTML = arr
    .map(
      ({ name, position, isCaptain }) => `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `
    )
    .join("");
};


playersDropdown.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;
    default:
      setPlayerCards(players);
      break;
  }
});


setPlayerCards();