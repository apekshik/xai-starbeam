// components/ReportingLayout.tsx
'use client'
import React from 'react';
import { Button } from "@nextui-org/react";
import { Send } from 'lucide-react';

interface ReportingLayoutProps {
  projectSelector: React.ReactNode;
  kpiSection: React.ReactNode;
  events: React.ReactNode;
  actions: React.ReactNode;
  previousReport: React.ReactNode;
}

const ReportingLayout: React.FC<ReportingLayoutProps> = ({
  projectSelector,
  kpiSection,
  events,
  actions,
  previousReport
}) => {
  return (
    <div className="flex gap-6 w-full min-h-screen p-6">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="space-y-6">
          {/* Project Details and KPI Section */}
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-1">
              {projectSelector}
            </div>
            <div className="col-span-4">
              {kpiSection}
            </div>
          </div>
          {/* Events and Actions */}
          <div className="grid grid-cols-2 gap-6">
            <div>{events}</div>
            <div>{actions}</div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <Button 
              color="primary"
              endContent={<Send className="w-4 h-4" />}
              size="lg"
            >
              Submit EOD Report
            </Button>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-[300px] flex-shrink-0">
        {previousReport}
      </div>
    </div>
  );
};

export default ReportingLayout;