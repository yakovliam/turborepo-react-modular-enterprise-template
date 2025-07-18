import { Outlet } from "react-router";
import { Button } from "../button";
import { modules } from "@repo/libs/config";
import { useMemo } from "react";
import { Module } from "@repo/libs/types";
import { useNavigateTo, NavigateTo } from "@repo/libs/hooks";

const ModulesLayout = () => {
  const _modules = useMemo(() => modules, []);
  const navigateTo = useNavigateTo();

  return (
    <div className="grow flex flex-col">
      {/* Modules Nav */}
      <div className="flex items-center justify-start border-b border-gray-200 bg-white px-4 py-2 sm:px-6 gap-4">
        <span>Modules Nav </span>
        {_modules.map((module) => (
          <ModuleNavigationItem
            key={module.label}
            module={module}
            navigateTo={navigateTo}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

type ModuleNavigationItemProps = {
  module: Module;
  navigateTo: NavigateTo;
};

const ModuleNavigationItem = ({
  module,
  navigateTo,
}: ModuleNavigationItemProps) => {
  return (
    <div>
      <Button onClick={() => navigateTo(module)}>{module.label}</Button>
    </div>
  );
};

export default ModulesLayout;
