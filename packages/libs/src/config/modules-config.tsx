import { Module } from "../types/module";

export const modules: Module[] = [
  {
    label: "Module1",
    path: "module1",
    submodules: [
      {
        label: "Submodule1",
        path: "submodule1",
        tabs: [
          {
            label: "Tab1",
            path: "tab1",
            component: import("@repo/module-1/submodule1/SM1T1Page"),
          },
          {
            label: "Tab2",
            path: "tab2",
            component: import("@repo/module-1/submodule1/SM1T2Page"),
          },
        ],
      },
      {
        label: "Submodule2",
        path: "submodule2",
        tabs: [
          {
            label: "Tab1",
            path: "tab1",
            component: import("@repo/module-1/submodule2/SM2T1Page"),
          },
          {
            label: "Tab2",
            path: "tab2",
            component: import("@repo/module-1/submodule2/SM2T2Page"),
          },
        ],
      },
    ],
  } satisfies Module,
  {
    label: "Module2",
    path: "module2",
    submodules: [
      {
        label: "Submodule1",
        path: "submodule1",
        tabs: [
          {
            label: "Tab1",
            path: "tab1",
            component: import("@repo/module-2/submodule1/SM1T1Page"),
          },
          {
            label: "Tab2",
            path: "tab2",
            component: import("@repo/module-2/submodule1/SM1T2Page"),
          },
        ],
      },
    ],
  } satisfies Module,
];
