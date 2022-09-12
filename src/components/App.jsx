import { User } from './User/User'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import user from 'components/data/user'
import data from 'components/data/data'
import friends from 'components/data/friends'
import transactions from 'components/data/transactions'


export const App = () => {
  return (
    <div>
      <User user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
};
