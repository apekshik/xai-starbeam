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
    <div className="flex gap-6">
      {/* Main Content - Takes 80% of the width */}
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

          {/* Events and Actions - Equal width */}
          <div className="grid grid-cols-2 gap-6">
            <div className="h-full">{events}</div>
            <div className="h-full">{actions}</div>
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

      {/* Sidebar - Takes 20% of the width */}
      <div className="w-[20%] min-w-[250px]">
        {previousReport}
      </div>
    </div>
  );
};

export default ReportingLayout;