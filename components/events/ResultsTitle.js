import CustomButton from "../ui/CustomButton";
import classes from "./ResultsTitle.module.css";

export default function ResultsTitle(props) {
  const { date } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {readableDate}</h1>
      <CustomButton link="/events">Show all events</CustomButton>
    </section>
  );
}
