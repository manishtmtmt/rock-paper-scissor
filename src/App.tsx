import { useEffect, useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Result from "./components/Result";
import { Button } from "./components/ui/button";
import { Dialog, DialogContent } from "./components/ui/dialog";
import rule from "./assets/image-rules.svg";

function App() {
  const [score, setScore] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const computeResult = () => {
    const choices = ["rock", "paper", "scissor"];
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(compChoice);

    if (userChoice === compChoice) {
      setResult("draw");
    } else if (
      (userChoice == "rock" && compChoice == "scissor") ||
      (userChoice == "scissor" && compChoice == "paper") ||
      (userChoice == "paper" && compChoice == "rock")
    ) {
      setResult("win");
      setScore(score + 1);
    } else {
      setResult("lose");
      if (score > 0) {
        setScore(score - 1);
      }
    }
  };

  const handlePlayAgain = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };

  useEffect(() => {
    if (userChoice) {
      computeResult();
    }
  }, [userChoice]);

  return (
    <>
      <div className="font-display relative h-screen py-8">
        <div className="lg:w-1/2 w-11/12 m-auto flex flex-col lg:gap-16 gap-8">
          <Header score={score} />
          {!userChoice && !computerChoice ? (
            <Game setUserChoice={setUserChoice} />
          ) : (
            <Result
              userChoice={userChoice}
              computerChoice={computerChoice}
              result={result}
              handlePlayAgain={handlePlayAgain}
            />
          )}
        </div>
        <div className="lg:w-32 w-11/12 m-auto absolute bottom-5 right-4">
          <Button
            className="w-full uppercase tracking-wider text-white"
            variant={"outline"}
            onClick={() => setOpenModal(true)}
          >
            Rules
          </Button>
        </div>
        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogContent className="bg-white w-11/12 lg:w-full m-auto">
            <h1 className="uppercase tracking-wide font-bold text-2xl">
              Rules
            </h1>
            <img src={rule} alt="rule" className="w-full" />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default App;
