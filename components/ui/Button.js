import Link from 'next/link';
import classes from './button.module.css';

export default function Button(props) {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
      {/* in order to customize this button-like link, 
      you have to add the <a> tag and add the class */}
    </Link>
  );
}
