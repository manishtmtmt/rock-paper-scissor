import logo from "../assets/logo.svg";

const Header = ({ score }: { score: number }) => {
  return (
    <div className="border-2 border-header-outline rounded-lg p-4 flex justify-between">
      <img src={logo} alt="logo" className="w-32 lg:w-52" />
      {/* score */}
      <div className="bg-card p-6 rounded-lg lg:w-36 w-28 text-center">
        <p className="uppercase text-score tracking-widest">score</p>
        <p className="text-dark-text lg:text-6xl text-4xl font-bold">{score}</p>
      </div>
    </div>
  );
};

export default Header;
