import { useDispatch, useSelector } from "react-redux";
import { incrementByCount } from "../../store/counter/counterSlice";
import { useEffect } from "react";
import { COUNTER } from "../../store/counter/counterThunk";

const Button = () => {
  const { value, users } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementByCount(5));

  useEffect(() => {
    dispatch(COUNTER.getAllUsers());
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Counter: {value}</h1>

      <button onClick={handleIncrement}>increment</button>
      <button>decrement</button>
    </div>
  );
};

export default Button;
