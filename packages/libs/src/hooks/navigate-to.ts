import { Submodule, Tab, Module } from "../types/module";
import { useNavigate } from "react-router";

export type NavigateTo = (
  module: Module,
  submodule?: Submodule,
  tab?: Tab
) => void;

const useNavigateTo = (): NavigateTo => {
  const navigate = useNavigate();

  const navigateTo = (module: Module, submodule?: Submodule, tab?: Tab) => {
    // if no submodule, find first submodule
    if (!submodule) {
      submodule = module.submodules[0];
    }

    // if no tab, find first tab
    if (!tab) {
      tab = submodule.tabs[0];
    }

    navigate(`/modules/${module.path}/${submodule.path}/${tab.path}`);
  };

  return navigateTo;
};

export { useNavigateTo };
