import { useRouter } from "next/dist/client/router";
import { getEventById } from "../../dummy-data";
import CustomButton from "../../components/ui/CustomButton";
import ErrorAlert from "../../components/ui/ErrorAlert";
import EventSummary from "../../components/EventDetails/EventSummary";
import EventLogistics from "../../components/EventDetails/EventLogistics";
import EventContent from "../../components/EventDetails/EventContent";

export const DetailedEvent = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>Invaild Filter. Please Adjust search.</p>
        </ErrorAlert>
        <div className="center">
          <CustomButton link="/events">Show all events</CustomButton>
        </div>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
};

export default DetailedEvent;
