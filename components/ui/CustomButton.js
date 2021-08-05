import Link from "next/link";
import classes from "./button.module.css";

export default function CustomButton(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
        {/* in order to customize this button-like link, 
        you have to add the <a> tag and add the class */}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
