import { useSelector, useDispatch } from 'react-redux';
import { userDeposit, userWithdraw } from 'redux/userSlice';

const UserComponent = () => {
  const dispatch = useDispatch();
  const userBalance = useSelector(state => state.user.userBalance);
  return (
    <>
      <p>User`s balance: {userBalance}$</p>
      <button onClick={() => dispatch(userDeposit(50))}>
        Deposit for user
      </button>
      <button onClick={() => dispatch(userWithdraw(50))}>
        Withdraw for user
      </button>
    </>
  );
};

export default UserComponent;
