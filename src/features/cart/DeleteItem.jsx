import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';
export default function DeleteItem({ children, pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteItem(id));
  }
  return (
    <Button
      type="small"
      onClick={() => {
        handleDelete(pizzaId);
      }}
    >
      {children}
    </Button>
  );
}
