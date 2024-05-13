import scissorIcon from "..//assets/icon-scissors.svg";

const Scissor = () => {
  return (
    <div
      className="lg:w-48 w-32 lg:h-48 h-32 lg:border-[18px] border-[12px] rounded-full bg-accent flex justify-center items-center border-scissor"
      title="Scissor"
    >
      <img src={scissorIcon} alt="scissor" className="lg:w-24 w-16" />
    </div>
  );
};

export default Scissor;
