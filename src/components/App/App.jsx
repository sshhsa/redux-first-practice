import { Account } from 'components/Account';
import scss from './App.module.css';

const App = () => {
  return (
    <div className={scss.boxApp}>
      <Account />
    </div>
  );
};

export default App;
