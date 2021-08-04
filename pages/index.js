import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export const MeetupHome = () => {
  const featuedEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuedEvents}/>
    </div>
  );
}

export default MeetupHome;
