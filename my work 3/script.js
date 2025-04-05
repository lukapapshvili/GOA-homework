let value = 0;
let clickPower = 100;
let upgrades = [];
let achievements = [];
let prestigeCount = 0;

const upgradeData = [
  { name: "New Engine", cost: 500, increment: 50 },
  { name: "Turbo Boost", cost: 2000, increment: 150 },
  { name: "Nitro Fuel", cost: 5000, increment: 500 },
  { name: "Sports Tires", cost: 10000, increment: 1000 },
  { name: "Racing Wheels", cost: 20000, increment: 2000 },
  { name: "Supercharged Engine", cost: 50000, increment: 4000 },
  { name: "Gold Plating", cost: 100000, increment: 8000 },
  { name: "Luxury Paint", cost: 200000, increment: 16000 },
  { name: "Alloy Wheels", cost: 400000, increment: 32000 },
  { name: "Premium Fuel", cost: 800000, increment: 64000 },
  { name: "V8 Engine", cost: 1600000, increment: 128000 },
  { name: "Carbon Fiber Body", cost: 3200000, increment: 256000 },
  { name: "F1 Tires", cost: 6400000, increment: 512000 },
  { name: "Supercar Wings", cost: 12800000, increment: 1024000 },
  { name: "Electric Turbo", cost: 25600000, increment: 2048000 },
  { name: "Hypercar Chassis", cost: 51200000, increment: 4096000 },
  { name: "Space Engine", cost: 102400000, increment: 8192000 },
  { name: "Alien Technology", cost: 204800000, increment: 16384000 },
  { name: "Time Warp", cost: 409600000, increment: 32768000 },
  { name: "Quantum Drive", cost: 819200000, increment: 65536000 }
];

const achievementData = [
  { name: "First 100 Cars Clicked", condition: () => value >= 100, bonus: 200 },
  { name: "First Million Dollars", condition: () => value >= 1000000, bonus: 5000 },
  { name: "Super Car Collector", condition: () => upgrades.length >= 10, bonus: 10000 },
];

function createUpgrades() {
  const upgradesList = document.getElementById("upgrades-list");
  upgradeData.forEach((upgrade, index) => {
    const upgradeBtn = document.createElement("button");
    upgradeBtn.classList.add("upgrade");
    upgradeBtn.innerHTML = `${upgrade.name} - $${upgrade.cost}`;
    upgradeBtn.addEventListener("click", () => purchaseUpgrade(index));
    upgrades.push(upgradeBtn);
    upgradesList.appendChild(upgradeBtn);

    upgradeBtn.disabled = value < upgrade.cost;
  });
}

function purchaseUpgrade(index) {
  const upgrade = upgradeData[index];
  if (value >= upgrade.cost) {
    value -= upgrade.cost;
    clickPower += upgrade.increment;
    upgradeData[index].cost = Math.floor(upgrade.cost * 1.5); // Increase cost for the next upgrade
    updateCarEmoji(index);
    document.getElementById("value-display").textContent = `Car Value: $${value}`;
    document.getElementById("click-power").textContent = `Per Click: $${clickPower}`;
    upgrades[index].disabled = value < upgrade.cost;
    upgrades[index].innerHTML = `${upgrade.name} - $${upgrade.cost}`;
    checkAchievements();
  }
}

function checkAchievements() {
  achievementData.forEach((achievement, index) => {
    if (!achievements.includes(index) && achievement.condition()) {
      achievements.push(index);
      alert(`Achievement Unlocked: ${achievement.name}`);
      value += achievement.bonus;
      document.getElementById("value-display").textContent = `Car Value: $${value}`;
      updateAchievements();
    }
  });
}

function updateAchievements() {
  const achievementsList = document.getElementById("achievements-list");
  achievementsList.innerHTML = '';
  achievementData.forEach((achievement, index) => {
    if (achievements.includes(index)) {
      const achievementElem = document.createElement("div");
      achievementElem.classList.add("achievement");
      achievementElem.textContent = achievement.name;
      achievementsList.appendChild(achievementElem);
    }
  });
}

function updateCarEmoji(level) {
  const carEmoji = document.getElementById("car");
  let newEmoji = "🚗";  // default car emoji

  if (level >= 1) newEmoji = "🚙";
  if (level >= 3) newEmoji = "🏎️";
  if (level >= 5) newEmoji = "🚀";
  if (level >= 7) newEmoji = "👽";
  if (level >= 9) newEmoji = "🚘";
  if (level >= 11) newEmoji = "🏍️";
  if (level >= 13) newEmoji = "🛸";
  if (level >= 15) newEmoji = "🚁";
  if (level >= 17) newEmoji = "✨";
  if (level >= 19) newEmoji = "🚀🚀";
  if (level >= 20) newEmoji = "🌟🚗✨";

  carEmoji.textContent = newEmoji;
}

document.getElementById("click-button").addEventListener("click", () => {
  value += clickPower;
  document.getElementById("value-display").textContent = `Car Value: $${value}`;
  upgrades.forEach((upgradeBtn, index) => {
    upgradeBtn.disabled = value < upgradeData[index].cost;
    upgradeBtn.innerHTML = `${upgradeData[index].name} - $${upgradeData[index].cost}`;
  });
  checkAchievements();
});

function prestigeGame() {
  if (value >= 10000000) {
    prestigeCount++;
    value = 0;
    clickPower = 100;
    alert(`Prestige activated! You are now at Prestige Level ${prestigeCount}`);
    createUpgrades();
  }
}

createUpgrades();
updateAchievements();
