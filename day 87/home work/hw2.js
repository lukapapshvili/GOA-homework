import { useState } from "react";
import { Button } from "@/components/ui/button";

const logos = {
  React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  Javascript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  Html: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  Css: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
};

export default function LogoSwitcher() {
  const [currentLogo, setCurrentLogo] = useState(logos.React);

  const handleInput = () => {
    const userInput = prompt("Enter text:");
    const repeatCount = parseInt(prompt("Enter number of times to repeat:"), 10);
    if (userInput && !isNaN(repeatCount)) {
      console.log(userInput.repeat(repeatCount));
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <img src={currentLogo} alt="Logo" className="w-40 h-40" />
      <div className="flex gap-2">
        {Object.keys(logos).map((tech) => (
          <Button key={tech} onClick={() => setCurrentLogo(logos[tech])}>
            {tech}
          </Button>
        ))}
      </div>
      <Button onClick={handleInput}>Repeat Text</Button>
    </div>
  );
}