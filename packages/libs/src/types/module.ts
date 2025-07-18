import { ComponentType, JSX, ReactNode } from "react";

type Module = {
  label: string;
  path: string;
  submodules: Submodule[];
};

type Submodule = {
  label: string;
  path: string;
  tabs: Tab[];
};

type Tab = {
  label: string;
  path: string;
  component: Promise<{ default: ComponentType<any> }>;
};

export type { Module, Submodule, Tab };
