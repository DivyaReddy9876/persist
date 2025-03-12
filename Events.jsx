import { useState } from 'react';

const initialEvents = [
  { id: 1, title: 'Charity Drive', date: '2025-03-20', location: 'City Hall', category: 'Charity' },
  { id: 2, title: 'Interfaith Meetup', date: '2025-04-15', location: 'Community Center', category: 'Religious' },
];

export default function Events() {
  const [events, setEvents] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', category: '' });
  const [filter, setFilter] = useState('All');

  const addEvent = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ title: '', date: '', category: '' });
  };

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <section>
      <h2>Event Listing</h2>

      <label>Filter by Category:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date} - {event.location}</p>
            <p>Category: {event.category}</p>
          </li>
        ))}
      </ul>

      <h3>Add New Event</h3>
      <input
        placeholder="Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />
      <input
        placeholder="Date"
        type="date"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
      />
      <select onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button onClick={addEvent}>Add Event</button>
    </section>
  );
}