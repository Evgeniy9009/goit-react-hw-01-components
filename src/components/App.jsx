import {User} from "./User/User"
import user from "../user.json"
import css from 'components/User/User.module.css'


export const App = () => {
  return (
    <div>
      <User user={user}/>
      React homework template
    </div>
  );
};
