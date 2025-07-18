import { modules } from "../config/modules-config";
import { Module, Submodule, Tab } from "../types/module";
import { NavigationContext } from "../types/navigation-context";
import { useLocation } from "react-router";

const useNavigationContext = (): NavigationContext => {
  const location = useLocation();

  return provideContextFromLocation(location.pathname);
};

const provideContextFromLocation = (location: string): NavigationContext => {
  // /modules/[module-name]/[submodule-name]/[tab-name]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, _2, modulePath, submodulePath, tabPath] = location.split("/");

  // get the module object that matches the module name
  const module: Module | undefined = modules.find(
    (m: Module) => m.path === modulePath
  );

  if (!module) {
    return {};
  }

  // get the submodule object that matches the submodule name
  const submodule = module.submodules.find(
    (s: Submodule) => s.path === submodulePath
  );

  if (!submodule) {
    return {
      module: module,
    };
  }

  // get the tab object that matches the tab name
  const tab: Tab | undefined = submodule.tabs.find(
    (t: Tab) => t.path === tabPath
  );

  if (!tab) {
    return {
      module: module,
      submodule: submodule,
    };
  }

  return {
    module,
    submodule,
    tab: tab.path,
  };
};

export { useNavigationContext };
