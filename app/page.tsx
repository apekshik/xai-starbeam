// @ts-nocheck
// app/page.tsx
'use client'

import React from 'react';
import Layout from "./components/Layout";
import ProjectDateSelector from "./components/ProjectDateSelector";
import KPISection from "./components/KPISection";
import EventsSection from "./components/EventsSection";
import ActionItemsSection from "./components/ActionItemsSelection";
import PreviousReport from "./components/ReportHistory";
import ReportingLayout from "./components/ReportingLayout";

export default function Home() {
  const [selectedProject, setSelectedProject] = React.useState<string>("CBV");
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
    <Layout>
      <div className="w-full px-6">
        <ReportingLayout
          projectSelector={
            <ProjectDateSelector 
              onProjectChange={setSelectedProject}
              onDateChange={setSelectedDate}
            />
          }
          kpiSection={
            <KPISection project={selectedProject} />
          }
          events={<EventsSection />}
          actions={<ActionItemsSection />}
          previousReport={<PreviousReport />}
        />
      </div>
    </Layout>
  );
}
