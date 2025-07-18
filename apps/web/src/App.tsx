import { createBrowserRouter, RouterProvider } from "react-router";
import { generateRoutes } from "@repo/libs/router";
import { modules } from "@repo/libs/config";
import { Suspense } from "react";

const router = createBrowserRouter(generateRoutes(modules));

console.log("ROUTER\n\n", router);

function App() {
  return (
    // Default font is Roboto Mono
    <div className="font-['Roboto_Mono']">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
