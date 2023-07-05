import UserComponent from 'components/user/User';
import AccountComponent from 'components/account/Account';
import PreviewComponent from 'components/preview/Preview';

import scss from './App.module.css';

const App = () => {
  return (
    <div className={scss.boxApp}>
      <h1>My first app by Redux</h1>
      <ul>
        <li>
          <UserComponent />
        </li>
        <li>
          <AccountComponent />
        </li>
        <li>
          <PreviewComponent />
        </li>
      </ul>
    </div>
  );
};

export default App;
