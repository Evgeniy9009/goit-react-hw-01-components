import { User } from './User/User'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import user from '../data/user'
import data from '../data/data'
import friends from '../data/friends'
import transactions from '../data/transactions'


export const App = () => {
  return (
    <div>
      <User user = {user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
};
