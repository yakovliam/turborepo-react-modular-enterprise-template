import { Card } from "@repo/ui/card";

const SM1T1Page = () => {
  return (
    <div className="bg-red-500 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      Module1 Submodule1 Tab1 Page
      <Card title="Card Title" href="https://turbo.build/repo">
        Hello, world!
      </Card>
    </div>
  );
};

export default SM1T1Page;
