
const careerFortunes = [
    "Your hard work will pay off soon.",
    "A new opportunity awaits you in your career.",
    "Adventure can be real happiness.    ",
    "Don’t worry; prosperity will knock on your door soon.",

    // ... more fortunes
  ];
  
  const generalFortunes = [
    "Good luck is on your side today.",
    "Be open to new experiences and possibilities.",
    "A faithful friend is a strong defense",
    "A friend asks only for your time not your money.    ",
    // ... more fortunes
  ];

  const loveFortunes = [
    "The love of your life will appear in front of you unexpectedly!   ",
    "You have a secret admirer. ",
    "An old love will come back to you.",
    " Nobody has ever measured, not even poets, how much the heart can hold.",
  ];
  
  const fortuneDisplay = document.getElementById("fortune");
  
  document.getElementById("careerButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * careerFortunes.length);
    fortuneDisplay.textContent = careerFortunes[randomIndex];
  });
  
  document.getElementById("generalButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * generalFortunes.length);
    fortuneDisplay.textContent = generalFortunes[randomIndex];
  });

  document.getElementById("loveButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * generalFortunes.length);
    fortuneDisplay.textContent = loveFortunes[randomIndex];
  });
  
  