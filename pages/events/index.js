import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

export const AllEvents = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default AllEvents;
