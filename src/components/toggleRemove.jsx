import { useState } from "react";

const useToggleRemove = (dummyData) => {
  const [removeActive, setRemoveActive] = useState(dummyData);

  const toggleRemove = (extensionName) => {
    setRemoveActive((prevRemoveActive) =>
      prevRemoveActive.filter((extension) => extension.name !== extensionName)
    );
  };

  return [removeActive, toggleRemove];
};

export default useToggleRemove;
