import React, { createContext } from "react";
import { useRender } from "../hooks/render";
import Form from "./Form";
import TodoList from "./TodoList";

export const DispatchContext = createContext();

const App = () => {
  const [todos, dispatch] = useRender(
    "https://jsondata.okiba.me/v1/json/Gx2cO200412130253"
  );

  return (
    <div className="todo-wrap">
      <DispatchContext.Provider value={dispatch}>
        <TodoList todos={todos} />
        <Form />
      </DispatchContext.Provider>
    </div>
  );
};

export default App;
