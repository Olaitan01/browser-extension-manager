import "./App.css";
import dummyData from "./data";
import logo from "./assets/images/logo.svg";
import icon from "./assets/images/icon-sun.svg";
import Card from "./components/card";
import { useExtensions } from "./components/extension";

function App() {
  const {
    extensions,
    toggleActive,
    removeExtension,
    renderActive,
    renderInActive,
    setFilteredExtensions,
    filteredExtensions,
  } = useExtensions(dummyData);

  return (
    <div className="bg-[#050b21]  text-[#f9fcff] py-8 min-h-screen">
      <div className="w-[80%] h-full m-auto">
        <div className=" border-blue-50 bg-[#ffffff] rounded-full  flex justify-between p-4 my-8  ">
          <div>
            <img src={logo} alt="Extension svgs" />
          </div>
          <img src={icon} alt="sun icon" />
        </div>
        <div className="gap-8 flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl ">Extension List</h1>
            <div className="flex items-center gap-4 text-sm font-medium ">
              <button
                onClick={() => setFilteredExtensions(extensions)}
                className="cursor-pointer hover:text-[#E42D2D] transition-all duration-300"
              >
                All
              </button>
              <button
                className="cursor-pointer hover:text-[#E42D2D] transition-all duration-300"
                onClick={() => renderActive()}
              >
                Active
              </button>
              <button
                className="cursor-pointer hover:text-[#E42D2D] transition-all duration-300"
                onClick={() => renderInActive()}
              >
                Inactive
              </button>
            </div>
          </div>
          <div>
            {filteredExtensions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredExtensions.map((dataInfo) => (
                  <div key={dataInfo.name}>
                    <Card
                      logo={dataInfo.logo}
                      name={dataInfo.name}
                      description={dataInfo.description}
                      isActive={dataInfo.isActive}
                      toggleBtn={() => toggleActive(dataInfo.name)}
                      toggleRemoveBtn={() => removeExtension(dataInfo.name)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-[#E42D2D] text-8xl font-bold ">
                Empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
