"use client"
// components/ReportHistory.tsx
import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button } from "@nextui-org/react";
import { Search, Download } from 'lucide-react';

const ReportHistory = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const mockReports = [
    {
      date: '2024-12-12',
      project: 'CBV',
      summary: 'Sprint planning completed',
      status: 'Completed'
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input
          className="w-64"
          placeholder="Search reports..."
          startContent={<Search className="w-4 h-4" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button 
          color="primary"
          endContent={<Download className="w-4 h-4" />}
        >
          Export Reports
        </Button>
      </div>

      <Table aria-label="Reports table">
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Project</TableColumn>
          <TableColumn>Summary</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableHeader>
        <TableBody>
          {mockReports.map((report, index) => (
            <TableRow key={index}>
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.project}</TableCell>
              <TableCell>{report.summary}</TableCell>
              <TableCell>{report.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReportHistory;