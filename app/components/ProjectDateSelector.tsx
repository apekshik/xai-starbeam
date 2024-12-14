"use client"

// components/ProjectDateSelector.tsx
import React from 'react';
import { Card, CardHeader, CardBody, Select, SelectItem, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
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

const ProjectDateSelector: React.FC<ProjectDateSelectorProps> = ({ onProjectChange, onDateChange }) => {
  const [selectedProject, setSelectedProject] = React.useState<string>("CBV");
  const [date, setDate] = React.useState<CalendarDate>(today(getLocalTimeZone()));

  const projects: Project[] = [
    { label: "Criteria Based Verifier", value: "CBV" },
    { label: "Data Analytics Platform", value: "DAP" },
  ];

  const handleProjectChange = (value: string) => {
    setSelectedProject(value);
    onProjectChange?.(value);
  };

  const handleDateChange = (value: CalendarDate) => {
    setDate(value);
    // Convert CalendarDate to JavaScript Date
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
    <Card className="w-full p-4">
      <CardHeader>
        <h2 className="text-xl">Project Details</h2>
      </CardHeader>
      <CardBody className="space-y-4">
      <div className="flex items-center gap-2">
          <div className="text-sm">{formatDate(date)}</div>
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

        <Select 
          label="Select Project"
          placeholder="Select a project"
          selectedKeys={[selectedProject]}
          onChange={(e) => handleProjectChange(e.target.value)}
          className="max-w-md"
        >
          {projects.map((project) => (
            <SelectItem key={project.value} value={project.value}>
              {project.label}
            </SelectItem>
          ))}
        </Select>
      </CardBody>
    </Card>
  );
};

export default ProjectDateSelector;