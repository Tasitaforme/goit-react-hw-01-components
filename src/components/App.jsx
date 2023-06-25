import profileData from './Profile/user.json';
import statisticsData from './Statistics/data.json';
import friendsData from './FriendList/friends.json';
import transactionsData from './TransactionHistory/transactions.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section title="Social network profile">
        <Profile
          username={profileData.username}
          tag={profileData.tag}
          location={profileData.location}
          avatar={profileData.avatar}
          stats={profileData.stats}
        />
      </Section>

      <Section title="Statistics">
        <Statistics title="Upload stats" stats={statisticsData} />
      </Section>

      <Section title="Friends list">
        <FriendList friends={friendsData} />
      </Section>
      <Section title="Transaction history">
        <TransactionHistory transactions={transactionsData} />
      </Section>
    </>
  );
};
