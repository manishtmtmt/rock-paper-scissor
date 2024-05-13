import React, { SetStateAction } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissor from "./Scissor";

interface GameProps {
  setUserChoice: React.Dispatch<SetStateAction<string>>;
}

const Game = ({ setUserChoice }: GameProps) => {
  return (
    <div className="w-full lg:h-[500px] h-[350px] m-auto grid grid-cols-1 grid-rows-2 bg-triangle bg-no-repeat bg-center">
      <div className="flex relative">
        <div className="lg:w-[70%] absolute lg:relative w-full m-auto flex justify-between items-center lg:px-20">
          <div className="cursor-pointer" onClick={() => setUserChoice("rock")}>
            <Rock />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setUserChoice("paper")}
          >
            <Paper />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative">
        <div
          className="cursor-pointer lg:relative absolute bottom-3"
          onClick={() => setUserChoice("scissor")}
        >
          <Scissor />
        </div>
      </div>
    </div>
  );
};

export default Game;
