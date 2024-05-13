import Rock from "./Rock";
import Paper from "./Paper";
import Scissor from "./Scissor";
import { Button } from "./ui/button";

interface ResultProps {
  userChoice: string;
  computerChoice: string;
  result: string;
  handlePlayAgain: () => void;
}

const Result = ({
  userChoice,
  computerChoice,
  result,
  handlePlayAgain,
}: ResultProps) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2">
        <div className="flex flex-col items-center">
          <p className="hidden lg:block text-center mb-6 text-white uppercase text-2xl font-semibold">
            You picked
          </p>
          {userChoice === "rock" ? (
            <Rock />
          ) : userChoice === "paper" ? (
            <Paper />
          ) : userChoice === "scissor" ? (
            <Scissor />
          ) : null}
          <p className="lg:hidden text-center mt-4 text-white uppercase font-semibold">
            You picked
          </p>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center gap-4">
          <p className="text-5xl font-bold text-white uppercase tracking-wider">
            {result === "win"
              ? "You Win"
              : result === "lose"
              ? "You Lose"
              : "Draw"}
          </p>
          <Button
            className="bg-card text-red-700 uppercase w-full"
            variant={"outline"}
            onClick={handlePlayAgain}
          >
            Play Again
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <p className="hidden lg:block text-center mb-6 text-white uppercase text-2xl font-semibold">
            The mouse picked
          </p>
          {computerChoice === "rock" ? (
            <Rock />
          ) : computerChoice === "paper" ? (
            <Paper />
          ) : computerChoice === "scissor" ? (
            <Scissor />
          ) : null}
          <p className="lg:hidden text-center mt-4 text-white uppercase font-semibold">
            The mouse picked
          </p>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center gap-4 mt-6">
        <p className="text-3xl font-bold text-white uppercase tracking-wider">
          {result === "win"
            ? "You Win"
            : result === "lose"
            ? "You Lose"
            : "Draw"}
        </p>
        <Button
          className="bg-card text-red-700 uppercase w-3/4"
          variant={"outline"}
          onClick={handlePlayAgain}
        >
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default Result;
