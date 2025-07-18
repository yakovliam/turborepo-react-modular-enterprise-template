import { Module, Submodule } from "../types/module";

export type NavigationContext = {
  module?: Module;
  submodule?: Submodule;
  tab?: string;
};
