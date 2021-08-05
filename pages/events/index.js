import { useRouter } from "next/dist/client/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearchBar from "../../components/events/EventSearchBar";

export const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEvents = (month, year) => {
    const searchPath = `/events/${year}/${month}`;

    router.push(searchPath);
  };

  return (
    <>
      <EventSearchBar handleSearch={findEvents} />
      <EventList events={events} />
    </>
  );
};

export default AllEvents;
