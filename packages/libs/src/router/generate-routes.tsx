import ModuleLayout from "@repo/ui/layout/ModuleLayout";
import ModulesLayout from "@repo/ui/layout/ModulesLayout";
import RootLayout from "@repo/ui/layout/RootLayout";
import SubmoduleLayout from "@repo/ui/layout/SubmoduleLayout";
import { Module, Submodule, Tab } from "../types/module";
import { lazy } from "react";
import { RouteObject } from "react-router";

const generateRoutes = (modules: Module[]): RouteObject[] => {
  const routes = modules.map(buildModuleRoute);
  console.log(routes);
  return routes;
};

const buildModuleRoute = (module: Module): RouteObject => {
  const route: RouteObject = {
    path: module.path,
    element: <ModuleLayout />,
    children: module.submodules.map(buildSubmoduleRoute),
  } satisfies RouteObject;

  return {
    path: "modules",
    element: <RootLayout />,
    children: [{ element: <ModulesLayout />, children: [route] }],
  } satisfies RouteObject;
};

const buildSubmoduleRoute = (submodule: Submodule): RouteObject => {
  return {
    path: submodule.path,
    element: <SubmoduleLayout />,
    children: submodule.tabs.map(buildTabRoute),
  } satisfies RouteObject;
};

const buildTabRoute = (tab: Tab): RouteObject => {
  return {
    path: tab.path,
    Component: lazy(() => tab.component),
  } satisfies RouteObject;
};

export { generateRoutes };
