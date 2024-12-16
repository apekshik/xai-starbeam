// app/page.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import TabLayout from './components/TabLayout';
import ProjectDateSelector from './components/ProjectDateSelector';
import KPISection from './components/KPISection';
import EventsSection from './components/EventsSection';
import ActionItemsSection from './components/ActionItemsSelection';
import ReportHistory from './components/ReportHistory';

export default function Home(): React.JSX.Element {
  const [selectedProject, setSelectedProject] = React.useState<string>("CBV");
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  const yesterdayReport = (
    <div className="space-y-4">
      <div className="text-sm">
        <p><strong>KPI Highlights:</strong></p>
        <p>- Task completion rate increased by 12%</p>
        <p>- Average lead time decreased by 8 minutes</p>
      </div>
      <div className="text-sm">
        <p><strong>Key Events:</strong></p>
        <p>- Sprint planning session completed</p>
        <p>- New team member onboarding initiated</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black dark">
        <div className="flex items-center gap-3 px-8 py-4">
        <Image
          src="/xai-logo-white.png"
          alt="StarBeam Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <h1 className="text-white text-2xl font-bold">StarBeam</h1>
      </div>
      <TabLayout
        projectSelector={
          <ProjectDateSelector 
            onProjectChange={setSelectedProject}
            onDateChange={setSelectedDate}
          />
        }
        kpiSection={<KPISection />}
        events={<EventsSection />}
        actions={<ActionItemsSection />}
        yesterdayReport={yesterdayReport}
        reportHistory={<ReportHistory />}
      />
    </main>
  );
}