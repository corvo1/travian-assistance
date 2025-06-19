import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

import { ReactNode } from "react";

const LayoutTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default LayoutTemplate;
