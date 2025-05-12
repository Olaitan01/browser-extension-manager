function Card({
  logo,
  name,
  description,
  isActive,
  toggleBtn,
  toggleRemoveBtn,
}) {
  return (
    <div className="flex flex-col justify-center border-[#343a4c] border-2 rounded-xl p-4 h-[250px] gap-y-4">
      <div className="flex justify-between items-start gap-4">
        <img src={logo} alt={name} />
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">{name}</span>
          <span className="text-sm text-[#c7c7c7]">{description} </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="border-2 border-[#343a4c] rounded-full text-sm font-light px-2 py-1 cursor-pointer"
          onClick={toggleRemoveBtn}
        >
          Remove
        </button>
        <button
          className={`flex relative justify-center items-center border-2 rounded-full lg:w-[10%] sm:w-[15%] w-[10%] h-[50%] cursor-pointer ${
            !isActive
              ? "border-[#c41e1e] bg-[#C41E1E]"
              : "border-[#343a4c] bg-[#343a4c]"
          }`}
          onClick={toggleBtn}
        >
          <span
            className={` border-[0.5] bg-[#F9FCFF] rounded-full absolute w-3 h-3 ${
              isActive ? "right-0 top-0" : "left-0 top-0"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}

export default Card;
