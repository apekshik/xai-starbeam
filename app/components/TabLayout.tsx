'use client'

import React, { ReactNode } from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import { History } from 'lucide-react';

interface EODReportTabProps {
  projectSelector: ReactNode;
  kpiSection: ReactNode;
  events: ReactNode;
  actions: ReactNode;
  yesterdayReport: ReactNode;
}

interface AllReportsTabProps {
  reportHistory: ReactNode;
}

interface TabLayoutProps extends EODReportTabProps, AllReportsTabProps {}

const EODReportTab: React.FC<EODReportTabProps> = ({
  projectSelector,
  kpiSection,
  events,
  actions,
  yesterdayReport
}) => {
  return (
    <div className="flex-grow space-y-6">
      {/* Project Details and KPI Section */}
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-1 h-full">
          {projectSelector}
        </div>
        <div className="col-span-4">
          {kpiSection}
        </div>
      </div>

      {/* Three Column Layout: Events, Actions, and Yesterday's Report */}
      <div className="grid grid-cols-3 gap-6">
        <div className="h-[600px] overflow-auto">{events}</div>
        <div className="h-[600px] overflow-auto">{actions}</div>
        <div className="h-[600px] overflow-auto">
          <div className="bg-default-100 rounded-large h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Yesterday's Report</h3>
              <button 
                className="flex items-center text-primary hover:text-primary-400 transition-colors gap-2"
                type="button"
              >
                <History className="w-4 h-4" />
                <span>View All Reports</span>
              </button>
            </div>
            {yesterdayReport}
          </div>
        </div>
      </div>
    </div>
  );
};

const AllReportsTab: React.FC<AllReportsTabProps> = ({ reportHistory }) => {
  return (
    <div className="w-full p-4">
      {reportHistory}
    </div>
  );
};

const TabLayout: React.FC<TabLayoutProps> = ({
  projectSelector,
  kpiSection,
  events,
  actions,
  yesterdayReport,
  reportHistory
}) => {
  const [selectedTab, setSelectedTab] = React.useState<string>("eod");

  return (
    <div className="w-full min-h-screen p-6">
      <Tabs 
        aria-label="Report Tabs" 
        size="lg" 
        className="mb-6"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as string)}
      >
        <Tab 
          key="eod" 
          title="EOD Reporting"
          className="p-4"
        >
          <div className="mt-4">
            <EODReportTab
              projectSelector={projectSelector}
              kpiSection={kpiSection}
              events={events}
              actions={actions}
              yesterdayReport={yesterdayReport}
            />
          </div>
        </Tab>
        <Tab 
          key="history" 
          title="View All Reports"
          className="p-4"
        >
          <div className="mt-4">
            <AllReportsTab reportHistory={reportHistory} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabLayout;