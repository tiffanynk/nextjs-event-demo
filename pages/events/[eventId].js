import { useRouter } from "next/dist/client/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/EventDetails/EventSummary";
import EventLogistics from "../../components/EventDetails/EventLogistics";
import EventContent from "../../components/EventDetails/EventContent";

export const DetailedEvent = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId)

  if(!event) {
    return <p>No event found!</p>
  }

  return (
    <>
      <EventSummary title={event.title}/>
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        {event.description}
      </EventContent>
    </>
  );
}

export default DetailedEvent;
