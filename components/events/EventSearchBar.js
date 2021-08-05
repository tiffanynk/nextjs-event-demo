import CustomButton from "../ui/CustomButton";
import classes from "./EventSearchBar.module.css";
import { useRef } from "react";
export default function EventSearchBar(props) {
  const monthRef = useRef();
  const yearRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedMonth = monthRef.current.value;
    const selectedYear = yearRef.current.value;

    props.handleSearch(selectedMonth, selectedYear);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" name="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" name="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <CustomButton>Find Events</CustomButton>
    </form>
  );
}
