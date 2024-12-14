// @ts-nocheck
'use client'

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Tabs, Tab } from "@nextui-org/react";
import { Input, Textarea, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Select, SelectItem } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { ChevronDown, Download, Search } from 'lucide-react';

const EODDashboard = () => {
    const [selectedTab, setSelectedTab] = React.useState("report");
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedProject, setSelectedProject] = React.useState("CBV");
    const [signoffEmail, setSignoffEmail] = React.useState("");
    const [kpis, setKpis] = React.useState([{ metric: '', value: '' }]);
    const [events, setEvents] = React.useState([{ description: '', impact: '' }]);
    const [actionItems, setActionItems] = React.useState([{ task: '', assignee: '', dueDate: '' }]);
    const [searchQuery, setSearchQuery] = React.useState("");

    // Mock projects data
    const projects = [
        { label: "Criteria Based Verifier", value: "CBV" },
        { label: "Data Analytics Platform", value: "DAP" },
        { label: "Cloud Migration Initiative", value: "CMI" },
        { label: "Mobile App Development", value: "MAD" },
    ];

    // Mock data for yesterday's report
    const yesterdayReport = {
        date: new Date(Date.now() - 86400000).toLocaleDateString(),
        project: "CBV",
        kpis: [
        { metric: 'Bug Resolution Rate', value: '94%' },
        { metric: 'Sprint Progress', value: '87%' }
        ],
        events: [
        { description: 'Completed user authentication module', impact: 'Improved security' }
        ],
        actionItems: [
        { task: 'Review PR #123', assignee: 'John', dueDate: '2024-12-14' }
        ],
        signedBy: 'john.doe@example.com'
    };


  // Component handlers (previous handlers remain the same)
  const handleKpiChange = (index, field, value) => {
    const newKpis = [...kpis];
    newKpis[index][field] = value;
    setKpis(newKpis);
  };

  const addKpi = () => {
    setKpis([...kpis, { metric: '', value: '' }]);
  };

  const handleEventChange = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index][field] = value;
    setEvents(newEvents);
  };

  const addEvent = () => {
    setEvents([...events, { description: '', impact: '' }]);
  };

  const handleActionItemChange = (index, field, value) => {
    const newActionItems = [...actionItems];
    newActionItems[index][field] = value;
    setActionItems(newActionItems);
  };

  const addActionItem = () => {
    setActionItems([...actionItems, { task: '', assignee: '', dueDate: '' }]);
  };

  // Render the reporting form
  const ReportingForm = () => (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        {/* Project Selection and Date */}
        <Card className="p-4">
          <CardHeader>
            <h2 className="text-xl">Project & Date Selection</h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <Select 
              label="Select Project"
              placeholder="Select a project"
              selectedKeys={[selectedProject]}
              className="max-w-md"
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              {projects.map((project) => (
                <SelectItem key={project.value} value={project.value}>
                  {project.label}
                </SelectItem>
              ))}
            </Select>
            
            <div className="w-full max-w-md">
              <Calendar 
                aria-label="Date Selection"
                value={selectedDate}
                onChange={setSelectedDate}
                className="rounded-lg border p-4"
              />
            </div>
          </CardBody>
        </Card>

        {/* KPIs Section */}
        <Card className="p-4">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl">Key Performance Indicators</h2>
            <Button color="primary" onPress={addKpi}>Add KPI</Button>
          </CardHeader>
          <CardBody>
            <Table aria-label="KPIs table">
              <TableHeader>
                <TableColumn>Metric</TableColumn>
                <TableColumn>Value</TableColumn>
              </TableHeader>
              <TableBody>
                {kpis.map((kpi, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        placeholder="Enter metric"
                        value={kpi.metric}
                        onChange={(e) => handleKpiChange(index, 'metric', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Enter value"
                        value={kpi.value}
                        onChange={(e) => handleKpiChange(index, 'value', e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>

        {/* Events Section */}
        <Card className="p-4">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl">Events & Updates</h2>
            <Button color="primary" onPress={addEvent}>Add Event</Button>
          </CardHeader>
          <CardBody>
            <Table aria-label="Events table">
              <TableHeader>
                <TableColumn>Description</TableColumn>
                <TableColumn>Impact</TableColumn>
              </TableHeader>
              <TableBody>
                {events.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Textarea
                        placeholder="Describe the event"
                        value={event.description}
                        onChange={(e) => handleEventChange(index, 'description', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Textarea
                        placeholder="Describe the impact"
                        value={event.impact}
                        onChange={(e) => handleEventChange(index, 'impact', e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>

        {/* Action Items Section */}
        <Card className="p-4">
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl">Action Items</h2>
            <Button color="primary" onPress={addActionItem}>Add Action Item</Button>
          </CardHeader>
          <CardBody>
            <Table aria-label="Action items table">
              <TableHeader>
                <TableColumn>Task</TableColumn>
                <TableColumn>Assignee</TableColumn>
                <TableColumn>Due Date</TableColumn>
              </TableHeader>
              <TableBody>
                {actionItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        placeholder="Enter task"
                        value={item.task}
                        onChange={(e) => handleActionItemChange(index, 'task', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Enter assignee"
                        value={item.assignee}
                        onChange={(e) => handleActionItemChange(index, 'assignee', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="date"
                        value={item.dueDate}
                        onChange={(e) => handleActionItemChange(index, 'dueDate', e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>

         {/* Signoff Section */}
         <Card className="p-4">
          <CardHeader>
            <h2 className="text-xl">Report Signoff</h2>
          </CardHeader>
          <CardBody>
            <Input
              type="email"
              label="Signoff Email"
              placeholder="Enter your email"
              value={signoffEmail}
              onChange={(e) => setSignoffEmail(e.target.value)}
              className="max-w-md"
            />
          </CardBody>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end items-center gap-4">
          <span className="text-sm text-gray-500">
            Report will be signed off by: {signoffEmail || 'Not specified'}
          </span>
          <Button 
            color="success" 
            size="lg"
            className="px-8"
            isDisabled={!signoffEmail}
          >
            Submit EOD Report
          </Button>
        </div>
      </div>

      {/* Yesterday's Report Summary */}
      <div className="col-span-1">
        <Card className="p-4 sticky top-4">
          <CardHeader>
            <h2 className="text-xl">Yesterday's Report ({yesterdayReport.date})</h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">KPIs</h3>
              {yesterdayReport.kpis.map((kpi, index) => (
                <div key={index} className="text-sm">
                  {kpi.metric}: {kpi.value}
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Key Events</h3>
              {yesterdayReport.events.map((event, index) => (
                <div key={index} className="text-sm">
                  <div>{event.description}</div>
                  <div className="text-gray-500">Impact: {event.impact}</div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Action Items</h3>
              {yesterdayReport.actionItems.map((item, index) => (
                <div key={index} className="text-sm">
                  <div>{item.task}</div>
                  <div className="text-gray-500">Assignee: {item.assignee}</div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );

  // Render the reports viewer
  const ReportsViewer = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input
          className="w-64"
          placeholder="Search reports..."
          startContent={<Search className="w-4 h-4" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              endContent={<ChevronDown className="w-4 h-4" />}
            >
              Export Reports
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Export options">
            <DropdownItem key="week">This Week</DropdownItem>
            <DropdownItem key="2weeks">Last 2 Weeks</DropdownItem>
            <DropdownItem key="month">This Month</DropdownItem>
            <DropdownItem key="custom">Custom Range</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <Table aria-label="Reports table">
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Summary</TableColumn>
          <TableColumn>KPIs</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableHeader>
        <TableBody>
          {allReports.map((report, index) => (
            <TableRow key={index} className="cursor-pointer hover:bg-gray-50">
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.summary}</TableCell>
              <TableCell>{report.kpis}</TableCell>
              <TableCell>
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  {report.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">EOD Report Dashboard</h1>
      
      <Tabs 
        selectedKey={selectedTab} 
        onSelectionChange={setSelectedTab}
        className="mb-6"
      >
        <Tab key="report" title="Create Report">
          {selectedTab === "report" && <ReportingForm />}
        </Tab>
        <Tab key="view" title="View Reports">
          {selectedTab === "view" && <ReportsViewer />}
        </Tab>
      </Tabs>
    </div>
  );
};

export default EODDashboard;