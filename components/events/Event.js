import CustomButton from "../ui/CustomButton";
import AddressIcon from "../ui/icons/AddressIcon";
import ArrowRightIcon from "../ui/icons/ArrowRightIcon";
import DateIcon from "../ui/icons/DateIcon";
import classes from "./Event.module.css";

export default function Event(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>{readableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <CustomButton link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </CustomButton>
        </div>
      </div>
    </li>
  );
}
