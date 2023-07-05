import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from 'redux/store';

export const Account = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.account.balance);
  return (
    <>
      <p>Balance: {balance}$</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10$</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw 10$</button>
    </>
  );
};
