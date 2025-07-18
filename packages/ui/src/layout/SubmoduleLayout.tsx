import { Outlet } from "react-router";
import { Button } from "../button";
import { useNavigationContext } from "@repo/libs/hooks";
import { useMemo } from "react";
import { Submodule, Tab, Module } from "@repo/libs/types";
import { useNavigateTo, NavigateTo } from "@repo/libs/hooks";

const SubmoduleLayout = () => {
  const navigationContext = useNavigationContext();
  const module = useMemo(() => navigationContext.module, [navigationContext]);
  const submodule = useMemo(
    () => navigationContext.submodule,
    [navigationContext]
  );
  const navigateTo = useNavigateTo();

  return (
    <div className="grow flex flex-col">
      {/* Tab Nav */}
      <div className="flex items-center justify-start border-b border-gray-200 bg-white px-4 py-2 sm:px-6 gap-4">
        <span>
          Tab Nav [{module?.label}:{submodule?.label}]{" "}
        </span>
        {module &&
          submodule?.tabs.map((tab: Tab) => (
            <TabNavigationItem
              key={tab.label}
              module={module}
              submodule={submodule}
              tab={tab}
              navigateTo={navigateTo}
            />
          ))}
      </div>
      <Outlet />
    </div>
  );
};

type TabNavigationItemProps = {
  module: Module;
  submodule: Submodule;
  tab: Tab;
  navigateTo: NavigateTo;
};

const TabNavigationItem = ({
  module,
  submodule,
  tab,
  navigateTo,
}: TabNavigationItemProps) => {
  return (
    <div>
      <Button onClick={() => navigateTo(module, submodule, tab)}>
        {module.label}:{submodule.label}:{tab.label}
      </Button>
    </div>
  );
};

export default SubmoduleLayout;
