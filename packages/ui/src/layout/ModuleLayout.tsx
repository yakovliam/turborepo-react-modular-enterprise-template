import { Outlet } from "react-router";
import { Button } from "../button";
import { useNavigationContext } from "@repo/libs/hooks";
import { useMemo } from "react";
import { Submodule, Module } from "@repo/libs/types";
import { useNavigateTo, NavigateTo } from "@repo/libs/hooks";

const ModuleLayout = () => {
  const navigationContext = useNavigationContext();
  const navigateTo = useNavigateTo();

  const module = useMemo(() => navigationContext.module, [navigationContext]);

  return (
    <div className="grow flex flex-row">
      {/* Submodules Nav */}
      <div className="w-[150px] flex flex-col items-center justify-start border-r border-gray-200 bg-white px-4 py-2 sm:px-6 gap-4">
        <span>Submodules Nav [{module?.label}]</span>
        {module?.submodules.map((submodule: Submodule) => (
          <SubmoduleNavigationItem
            key={submodule.label}
            module={module}
            submodule={submodule}
            navigateTo={navigateTo}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

type SubmoduleNavigationItemProps = {
  module: Module;
  submodule: Submodule;
  navigateTo: NavigateTo;
};

const SubmoduleNavigationItem = ({
  module,
  submodule,
  navigateTo,
}: SubmoduleNavigationItemProps) => {
  return (
    <div>
      <Button onClick={() => navigateTo(module, submodule)}>
        {module.label}:{submodule.label}
      </Button>
    </div>
  );
};

export default ModuleLayout;
