// components/EventsSection.tsx
'use client'
import React from 'react';
import { Card, CardHeader, CardBody, Button, Textarea } from "@nextui-org/react";
import { Plus, Trash2 } from 'lucide-react';

interface Event {
  id: string;
  description: string;
  impact: string;
}

const EventsSection: React.FC = () => {
  const [events, setEvents] = React.useState<Event[]>([
    { id: '1', description: '', impact: '' }
  ]);

  const addEvent = () => {
    setEvents([...events, { id: Date.now().toString(), description: '', impact: '' }]);
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center px-6">
        <div>
          <h2 className="text-xl font-semibold">Events & Updates</h2>
          <p className="text-sm text-gray-500">Record key events and their impact</p>
        </div>
        <Button 
          color="primary" 
          size="sm"
          onPress={addEvent}
          startContent={<Plus size={16} />}
        >
          Add Event
        </Button>
      </CardHeader>
      <CardBody className="p-6 overflow-y-auto">
        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium">Event Details</h3>
                  <Button
                    isIconOnly
                    size="sm"
                    color="danger"
                    variant="light"
                    onPress={() => removeEvent(event.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
                <Textarea
                  label="Description"
                  placeholder="Describe the event"
                  value={event.description}
                  variant="bordered"
                  className="mb-2"
                />
                <Textarea
                  label="Impact"
                  placeholder="Describe the impact"
                  value={event.impact}
                  variant="bordered"
                />
              </div>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default EventsSection;
