import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { linkToMain } from '../constants/routes';

export default function AuthPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    dispatch(logIn({data}));
    navigate(linkToMain);
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("Username", {required: true, maxLength: 10})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true, max: 10, min: 5})} />

      <input type="submit" />
    </form>
  );
}