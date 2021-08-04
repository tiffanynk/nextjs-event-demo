import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export const MeetupHome = () => {
  const featuedEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events</h1>
      <EventList events={featuedEvents}/>
    </div>
  );
}

export default MeetupHome;
