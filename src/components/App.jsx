import { User } from "./User/User"
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import user from "../user.json"
import data from '../data.json'
import friends from '../friends'
import transactions from '../transactions.json'


export const App = () => {
  return (
    <div>
      <User user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
};
