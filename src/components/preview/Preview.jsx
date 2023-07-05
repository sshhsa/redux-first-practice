import { useSelector, useDispatch } from 'react-redux';
import { previewDeposit, previewWithdraw } from 'redux/previewSlice';

const PreviewComponent = () => {
  const dispatch = useDispatch();
  const previewBalance = useSelector(state => state.preview.previewBalance);

  return (
    <>
      <p>Preview`s balance: {previewBalance}$</p>
      <button onClick={() => dispatch(previewDeposit(100))}>
        Deposit for preview
      </button>
      <button onClick={() => dispatch(previewWithdraw(100))}>
        Withdraw for preview
      </button>
    </>
  );
};

export default PreviewComponent;
