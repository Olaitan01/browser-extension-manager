import { useState } from "react";
export const useExtensions = (initialData) => {
  const [extensions, setExtensions] = useState(initialData);
  const [filteredExtensions, setFilteredExtensions] = useState(extensions);

  const toggleActive = (name) => {
    setFilteredExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const renderActive = () =>
    setFilteredExtensions(extensions.filter((ex) => !ex.isActive));

  const renderInActive = () =>
    setFilteredExtensions(extensions.filter((ex) => ex.isActive));

  const removeExtension = (name) => {
    setFilteredExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  return {
    extensions,
    toggleActive,
    removeExtension,
    setExtensions,
    renderActive,
    renderInActive,
    filteredExtensions,
    setFilteredExtensions,
  };
};
