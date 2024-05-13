import rockIcon from "../assets/icon-rock.svg";

const Rock = () => {
  return (
    <div
      className="lg:w-48 w-32 lg:h-48 h-32 lg:border-[18px] border-[12px] rounded-full bg-accent flex justify-center items-center border-rock"
      title="Rock"
    >
      <img src={rockIcon} alt="rock" className="lg:w-24 w-16" />
    </div>
  );
};

export default Rock;
