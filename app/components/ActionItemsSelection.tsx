// components/ActionItemsSection.tsx
'use client'
import React from 'react';
import { Card, CardHeader, CardBody, Button, Input } from "@nextui-org/react";
import { Plus } from 'lucide-react';

interface ActionItem {
  id: string;
  task: string;
  assignee: string;
  dueDate: string;
}

const ActionItemsSection: React.FC = () => {
  const [actionItems, setActionItems] = React.useState<ActionItem[]>([
    { id: '1', task: '', assignee: '', dueDate: '' }
  ]);

  const addActionItem = () => {
    setActionItems([...actionItems, { 
      id: Date.now().toString(), 
      task: '', 
      assignee: '', 
      dueDate: '' 
    }]);
  };

  const updateActionItem = (id: string, field: keyof ActionItem, value: string) => {
    setActionItems(actionItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center px-6">
        <div>
          <h2 className="text-xl font-semibold">Action Items</h2>
          <p className="text-sm text-gray-500">Track tasks and assignments</p>
        </div>
        <Button 
          color="primary" 
          size="sm"
          onPress={addActionItem}
          startContent={<Plus size={16} />}
        >
          Add Action Item
        </Button>
      </CardHeader>
      <CardBody className="p-6 overflow-y-auto">
        <div className="space-y-4">
          {actionItems.map((item) => (
            <div key={item.id} className="grid gap-2">
              <Input
                label="Task"
                placeholder="Enter task description"
                value={item.task}
                onChange={(e) => updateActionItem(item.id, 'task', e.target.value)}
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  label="Assignee"
                  placeholder="Enter assignee"
                  value={item.assignee}
                  onChange={(e) => updateActionItem(item.id, 'assignee', e.target.value)}
                />
                <Input
                  type="date"
                  label="Due Date"
                  value={item.dueDate}
                  onChange={(e) => updateActionItem(item.id, 'dueDate', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default ActionItemsSection;