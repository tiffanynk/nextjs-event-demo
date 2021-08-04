import Event from './Event';
import classes from './EventList.module.css';

export default function EventList(props) {
  const {events} = props;

  return (
    <ul className={classes.list}>
      {events.map(event => {
        return (
          <Event 
            key={event.id} 
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            address={event.address}
            image={event.image}
          />
        )  
      })}
    </ul>
  )
}
