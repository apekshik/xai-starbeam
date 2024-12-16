"use client"

import React from 'react';
import { Card, CardBody, Select, SelectItem, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { Calendar as CalendarIcon } from 'lucide-react';

interface Project {
  label: string;
  value: string;
}

interface ProjectDateSelectorProps {
  onProjectChange: (value: string) => void;
  onDateChange: (value: Date) => void;
}

const ProjectDateSelector: React.FC<ProjectDateSelectorProps> = ({ 
  onProjectChange, 
  onDateChange 
}) => {
  const [selectedProject, setSelectedProject] = React.useState<string>("CBV");
  const [date, setDate] = React.useState<CalendarDate>(today(getLocalTimeZone()));

  const projects: Project[] = [
    { label: "Criteria Based Verifier", value: "CBV" },
    { label: "CBV RAG", value: "AE" },
    { label: "Deep Search", value: "DS" },
    { label: "Grok Analyze", value: "GA" },
    { label: "Aurora Image Gen", value: "AIG" },
  ];

  const handleProjectChange = (value: string) => {
    setSelectedProject(value);
    onProjectChange?.(value);
  };

  const handleDateChange = (value: CalendarDate) => {
    setDate(value);
    const jsDate = new Date(value.year, value.month - 1, value.day);
    onDateChange?.(jsDate);
  };

  const formatDate = (date: CalendarDate): string => {
    return new Date(date.year, date.month - 1, date.day).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="h-full dark">
      <CardBody className="space-y-6">
        {/* Date Selection */}
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">{formatDate(date)}</div>
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button 
                isIconOnly
                variant="light"
                size="sm"
              >
                <CalendarIcon className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <div className="p-4 min-w-[320px]">
                <Calendar 
                  aria-label="Date Selection"
                  value={date}
                  onChange={handleDateChange}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Project Selection */}
        <Select 
          label="Select Project"
          placeholder="Select a project"
          selectedKeys={[selectedProject]}
          onChange={(e) => handleProjectChange(e.target.value)}
        >
          {projects.map((project) => (
            <SelectItem key={project.value} value={project.value}>
              {project.label}
            </SelectItem>
          ))}
        </Select>

        {/* Project Overview Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Project Overview</h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-500">Current Sprint</p>
              <p className="text-sm font-medium">Sprint 23</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Team Size</p>
              <p className="text-sm font-medium">8 members</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="text-sm font-medium">Active</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectDateSelector;