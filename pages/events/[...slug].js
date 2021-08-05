import { useRouter } from "next/dist/client/router";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/ErrorAlert";
import EventList from "../../components/events/EventList";
import CustomButton from "../../components/ui/CustomButton";
import ResultsTitle from "../../components/events/ResultsTitle";

export const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];
  const filteredDate = new Date(filteredYear, filteredMonth - 1);
  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
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

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for this time!</p>
        </ErrorAlert>
        <div className="center">
          <CustomButton link="/events">Show all events</CustomButton>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={filteredDate} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEvents;
