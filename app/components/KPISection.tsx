// components/KPISection.tsx
'use client'

import React from 'react';
import { Card, CardHeader, CardBody, Button, Textarea } from "@nextui-org/react";
import { Copy } from 'lucide-react';

const KPISection: React.FC = () => {
  const defaultTemplate = `| Task Flow | Task Submitted | Lead Time |
|-----------|----------------|------------------|
| L0 → L1 | 335 (+34) | 88 min (-6 min) |
| L1 → Done | 38 (+12) | 27 min (-13 min) |
| L1 → L2 | 37 (+25) | 49 min (-11 min) |
| L0.5 → L1 | 67 (+23) | 41 min (-2 min) |
| L1 → L0.5 | 90 (+45) | 52 min (+ 7 min) |
| L2 → Done | 13 (+1) | 37 min (-16 min) |

| Onboarding Tracker | Total | % Change |
|-------------------|--------|----------|
| Total HC | 0 | - |
| Certified | 0 | - |
| Greenlighting | 0 | - |
| Rectifying | 0 | - |

| Tasks in Queue | L0 | L1 | L2 |
|----------------|-----|-----|-----|
| P1 | 1 | 1111 | 273 |
| P2 | 0 | 7 | 2 |
| P3 | 2 | 3 | 0 |
| P4 | 0 | 2 | 2 |
| P5 | 184 | 1264 | 215 |
| Fallback | 1549 | 445 | 0 |`;

  const [kpiData, setKpiData] = React.useState(defaultTemplate);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(kpiData);
      // You might want to add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between items-center px-6">
        <div>
          <h2 className="text-xl font-semibold">KPI Metrics</h2>
          <p className="text-sm text-gray-500">Update project metrics and statistics</p>
        </div>
        <Button 
          color="primary" 
          size="sm"
          startContent={<Copy size={16} />}
          onPress={copyToClipboard}
        >
          Copy Template
        </Button>
      </CardHeader>
      <CardBody>
        <Textarea
          value={kpiData}
          onChange={(e) => setKpiData(e.target.value)}
          placeholder="Enter KPI data in markdown format..."
          minRows={25}
          classNames={{
            input: "min-h-[500px] font-mono text-sm",
            inputWrapper: "min-h-[500px]"
          }}
          variant="bordered"
        />
      </CardBody>
    </Card>
  );
};

export default KPISection;