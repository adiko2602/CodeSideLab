import React from "react";

function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 flex justify-center">
      <div className="max-w-5xl w-full">{children}</div>
    </div>
  );
}

export default PageContent;
