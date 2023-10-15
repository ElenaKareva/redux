import { useDispatch } from 'react-redux';
import { removeService, resetForm, setForm } from '../actions/actionCreators';

export default function ListItem({element}) {
  const dispatch = useDispatch()
  const { id, name, price } = element;

  const handleRemove = () => {
    dispatch(removeService(id));
    dispatch(resetForm())
  }

  const handleEdit = () => {
    dispatch(setForm(name, price, id));
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={handleEdit} id={id} >✎</button>
        <button onClick={handleRemove} id={id}>✕</button>
      </td>
    </tr>
  )
}