import { Outlet, NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink to="/events" end className={({isActive}) => isActive? classes.active: null}>All Events</NavLink>
            </li>
            <li>
              <NavLink to="/events/new" className={({isActive}) => isActive? classes.active: null}>New Event</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default EventsNavigation;
