import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { incrementByCount } from "./store/counter/counterSlice";
import { useEffect } from "react";
import { COUNTER } from "./store/counter/counterThunk";

const App = () => {
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

export default App;

// Provider => компонент, который оборачивает все наше react-приложение
//  и предоставляет доступ к Redux-хранилищу

// store => это наше храниоище (глобальные состояния)

// useSelector() => хук react-redux , который позволяет брать нам нужную часть
// состоянния из хранилища Redux-store

// useDispatch() => это хук react-redux, с помощью которого мы отправляем
// экшены (action),  сигнал в хранилище и обновляес состояние

// configureStore() => это функция
