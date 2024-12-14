// components/Layout.tsx
import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import ReportHistory from './ReportHistory';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = React.useState("create");

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">EOD Report Dashboard</h1>
      
      <Tabs 
        selectedKey={selectedTab} 
        onSelectionChange={(key) => setSelectedTab(key as string)}
        className="mb-6"
      >
        <Tab key="create" title="Create Report">
          <div className="mt-4">
            {children}
          </div>
        </Tab>
        <Tab key="history" title="View Reports">
          <ReportHistory />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Layout;