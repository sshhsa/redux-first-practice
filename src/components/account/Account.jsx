import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from 'redux/accountSlice';

const AccountComponent = () => {
  const dispatch = useDispatch();
  const accountBalance = useSelector(state => state.account.balance);
  return (
    <>
      <p>Account`s balance: {accountBalance}$</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit for account</button>
      <button onClick={() => dispatch(withdraw(10))}>
        Withdraw for account
      </button>
    </>
  );
};

export default AccountComponent;
