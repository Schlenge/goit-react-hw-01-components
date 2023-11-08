import Profile from './components/Profile/Profile';
//import Statistics from './components/Statistics/Statistics';
//import Friend from './components/Friend/FriendList';
//import Transactions from './components/Transactions/Transactions';

import user from './components/Data/user.json';
//import data from './components/Data/data.json';
// import friends from './components/Data/friends.json';
// import transactions from './components/Data/transactions.json';

import styles from './App.module.css'; // Importați stilurile aici

export function App() {
  document.title = 'HW React 1';
  return (
    <div className={styles.app}>
      {' '}
      {/* Aplicați stilurile la containerul principal */}
      <h1 className={styles.title}>React Homework 1 - Components</h1>
      <Profile user={user} />
    </div>
  );
}

export default App;
